import React from 'react';
import { connect } from 'react-redux';
import * as ROT from 'rot-js';
import { actions } from '../actions/game';

type Props = {
    display: ROT.Display,
    +width: number,
    +height: number
};

function mapStateToProps(state) {
    return {
        display: state.game.display,
        //systemMap: state.game.systemMap,
        localMap: state.game.localMap,
        width: state.options.width,
        height: state.options.height,
    };
}

function mapDispatchToProps(dispatch) {
  return {
    setLocalMap: (map) => dispatch(actions.setLocalMap(map)),
    setLocalPlayerCoords: (coords) => dispatch(actions.setLocalPlayerCoords(coords)),
  };
}

class Game extends React.Component<Props> {
    props: Props;

    componentDidUpdate() {
        const { display } = this.props;
        if (!display) { return; }
        this.initializeGame();
    }

    initializeGame() {
        const { display, width, height } = this.props;
        const map = new ROT.Map.Arena(width, height);
        map.create((x, y, value) => display.draw(x, y, value ? '#' : '.'));
    }

    render() {
        return <React.Fragment />;
    }
}

export default connect(mapStateToProps)(Game);
