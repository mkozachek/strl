import { RNG } from 'rot-js';
import { PLANETARY_TYPES, PLANETARY_COMPOSITION, STELLAR_TYPES } from '../constants/stellarObjects';

function volumeToRadius (volume) {
  return Math.cbrt(3 / (4 * Math.PI) * volume);
}

function getDensity (minDensity: number, maxDensity: number) {
  return (RNG.getUniform() * (maxDensity - minDensity + 1)) + minDensity
}

function getStellarMass() {
  const maxMass = 66600000;
  const minMass = 20000;
  return (RNG.getUniform() * (maxMass - minMass + 1)) + minMass;
}

export function generatePlanet(mass: number, seed?: number) {
  if (seed) {
    RNG.setSeed(seed);
  }
  let planetaryType;
  let radius;
  let density;
  let minDensity;
  let maxDensity;
  let volume;
  if (mass < 0.05) {
    planetaryType = PLANETARY_TYPES.DWARF_PLANET;
    diameter = mass;
  } else if (mass < 2) {
    minDensity = .25;
    maxDensity = 2;
    density = getDensity(minDensity, maxDensity);
    volume = mass / density;
    radius = volumeToRadius(volume);
    if (density < .6) {
      planetaryType = PLANETARY_TYPES.GAS_DWARF;
    } else {
      planetaryType = PLANETARY_TYPES.EARTH;
    }
  } else if (mass < 10) {
    minDensity = .6;
    maxDensity = 2;
    density = getDensity(minDensity, maxDensity);
    volume = mass / density;
    radius = volumeToRadius(volume);
    planetaryType = PLANETARY_TYPES.EARTH;
  } else if (mass < 16651) {
    minDensity = 0.01;
    maxDensity = 0.1;
    density = getDensity(minDensity, maxDensity);
    volume = mass / density;
    radius = volumeToRadius(volume);
    planetaryType = PLANETARY_TYPES.JUPITER;
  }

  return { planetaryType, radius };
}

export function generateStar() {
  const mass = getStellarMass();
  let minDensity;
  let maxDensity;
  let stellarType;
  // Our sun to white dwarfs
  if (mass <= 330000) {
    minDensity = .2556;
    maxDensity = 18148;
  } else if (1000000 > mass > 330000) {
    minDensity = 10e-9;
    maxDensity = .001;
    stellarType = STELLAR_TYPES.GIANT;
  } else {
    maxDensity = 10e-7;
    minDensity = 10e-9;
    stellarType = STELLAR_TYPES.SUPERGIANT;
  }
  const density = getDensity (minDensity, maxDensity);
  if (density > 100) {
    stellarType = STELLAR_TYPES.WHITE_DWARF;
  } else {
    if (.2556 <= density <= 100) {
      stellarType = STELLAR_TYPES.SUN;
  }
  const volume = mass / density;
  const radius = volumeToRadius(volume);
  return {
    mass,
    radius,
    stellarType,
  };
}

/*
  DWARF PLANET:
    planetary mass between 0.01E and 0.05E, may have equal neighbors (i.e. pluto and charon)
    density: 1 earth density
  EARTHLIKE:
    .05E -> 10E,
    density: .6E -> 2E
  GAS DWARF:
    0.5E -> 2E
    density: .59E ->.25E
  GAS GIANT:
    16650E > M > 10E
    density: .1E -> .01E

  generate mass of star
  Stellar mass from 20000E to 200 SM
  figure out radius measurement of star and distribute planets accordingly
    .02% of stellar mass available for planets
    maximum mass is 16650E
    planets can have mass ranges from .05E to 16650E but cannot exceed .02% of stellar mass
    FOR number of desired planets GENERATE planets w/ Mass from available mass pool
  FOR each planet generated, use mass to determine possible densities.
  Mass / density combination determines planetary type
  planetary types can be different compositions
  planets distributed throughout system w/ doubling distances from star per planet (except dwarf planets, create random chance to share orbit or be binary pair)

  Planet radial position randomly generated (for now)
  impulse map distance unit is scaling
  near a planet: each tile is ~ 3Mm
  near is within 180Mm
  open space is 80Mm / tile
  so distance to a body scales between 2 megameters and 80megameters
  each turn is 1 second


  tactical map each tile is 1 megameter
  speed is limited to 1/10th full impulse
  time step is .1 seconds
  max phaser range 150Mm
  max torpedo range 200Mm

   oo
  o  o
  o  o
   oo
*/
