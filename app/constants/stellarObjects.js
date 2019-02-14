const EARTH = 'EARTH';
const JUPITER = 'JUPITER';
const URANUS = 'URANUS';
const DWARF_PLANET = 'DWARF_PLANET';
const GAS_DWARF = 'GAS_DWARF';

const ROCKY = 'ROCKY';
const GAS = 'GAS';
const ICE_GIANT = 'YMIR';
const OCEANIC = 'OCEANIC';
const SUBSURFACE_OCEAN = 'SUBSURFACE_OCEAN';
const BARREN = 'BARREN';
const ICE = 'ICE';
const HOT = 'HOT';

const RIGHT = 'RIGHT';
const LEFT = 'LEFT';
const UP = 'UP';
const DOWN = 'DOWN';
const PLYSTOCENE = 'PLYSTOCENE';

const WHITE_DWARF = 'WHITE_DWARF';
const SUN = 'SUN';
const GIANT = 'GIANT';
const SUPERGIANT = 'SUPERGIANT';

export const FACINGS = {
  LEFT,
  RIGHT,
  UP,
  DOWN,
};

export const PLANETARY_TYPES = {
    EARTH,
    JUPITER,
    URANUS,
    DWARF_PLANET,
    GAS_DWARF,
};

export const PLANETARY_COMPOSITION = {
    ROCKY,
    BARREN,
    GAS,
    ICE,
    ICE_GIANT,
    OCEANIC,
    SUBSURFACE_OCEAN,
    HOT,
    PLYSTOCENE,
};

export const AVAILABLE_COMPOSITIONS = {
  EARTH: {
    HABITABLE: [
      ROCKY,
      OCEANIC,
      BARREN,
      HOT,
      ICE,
      PLYSTOCENE,
    ],
    HOT: [
      BARREN,
      HOT,
    ],
    COLD: [
      BARREN,
      ICE,
    ]
  },
  DWARF_PLANET: {
    HOT: [
      ROCKY,
      BARREN,
      HOT,
    ],
    HABITABLE: [
      ROCKY,
      BARREN,
    ],
    COLD: [
      BARREN,
      ICE,
    ]
  },
  GAS_DWARF: {
    HABITABLE: [GAS],
    HOT: [GAS],
    COLD: [GAS],
  },
  JUPITER: {
    HABITABLE: [GAS],
    HOT: [GAS],
    COLD: [GAS, ICE_GIANT],
  },
  URANUS: {
    COLD: [ICE_GIANT],
  },
};

export const STELLAR_TYPES = {
  WHITE_DWARF,
  SUN,
  GIANT,
  SUPERGIANT,
}

export const SOLAR_SYSTEM_SYMBOLS = {
    STAR: ['~', '&', '@', '$', '∾'],
    ROCKY: ['*', 'O', '^', 'o'],
    SUBSURFACE_OCEAN: ['*', 'O', '^', 'o'],
    GAS: ['~', '-', '@','≈', '℘'],
    GAS_DWARF: ['~', '-', '@','≈', '℘'],
    ICE_GIANT: ['~', '-', '@','≈', '℘'],
    OCEANIC: ['`','~',',','≈'],
};

export const SOLAR_SYSTEM_COLORS = {
  STAR: {
    O: ['#77a0ec', '#5e71f2'],
    B: ['#aabfff', '#a2c0ff'],
    A: ['#cad7ff', '#d5e0ff'],
    F: ['#f8f7ff', '#f9f5ff'],
    G: ['#fff4ea', '#ffede3'],
    K: ['#ffd2a1', '#ffdab5'],
    M: ['#ffcc6f', '#ffb56c'],
  },
  ROCKY: {
    LUSH: ['#549e6f', '#51c120', '#469333', '#62cf2e', '#71dc29'],
    EARTHLIKE: ['#4d99e6', '#6783f1', '#289338', '#cac235', '#e1e1e1'],
    PURPLE: ['#eb9ce4', '#cb32b0'],
    RED: ['#f14545', '#d05011'],
  },
  BARREN: {
    DESERT: [],
    ROCK: [],
    RED: [],
    PURPLE: [],
  },
  ICE: {
    ICE: [],
    SNOW: [],
    PLYSTOCENE: [],
    RED: [],
    PURPLE: [],
  },
  HOT: {
    MAGMA: [],
    TOXIC: [],
  },
  GAS: {
    SATURNIAN: [],
    JUPITERIAN: [],
    TOXIC: [],
  },
  GAS_DWARF: SOLAR_SYSTEM_COLORS.GAS,
  DWARF_PLANET: {
    BARREN: SOLAR_SYSTEM_COLORS.ROCKY.BARREN,
    ICE: SOLAR_SYSTEM_COLORS.ROCKY.ICE,
  },
  ICE_GIANT: {
    NEPTUNIAN: [],
    URANIAN: [],
  },
  OCEANIC: {
    OCEANIC: [],
    ARCHIPELAGIC: [],
  },
  SUBSURFACE_OCEAN: {
    ICE: SOLAR_SYSTEM_COLORS.ROCKY.ICE,
  },
};

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
  do all these calculations in either megameters or AUs to save on bits as necessary (fucking 32bit javascript)
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
