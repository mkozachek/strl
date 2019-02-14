// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ROT from 'rot-js';
import style from './Display.css';
import { actions } from '../actions/game';

type Props = {
  height: number,
  width: number,
  setDisplay: Function
};

const mapStateToProps = (state) => ({
  width: state.options.width,
  height: state.options.height,
})

const mapDispatchToProps = (dispatch) => ({
  setDisplay: (display) => dispatch(actions.setDisplay(display))
});

class Display extends Component<Props> {
  props: Props;

  display: ROT.Display;

  displayRef: any;

  constructor(props) {
    super(props);
    const { width, height } = props;
    this.display = new ROT.Display({
      width,
      height,
      layout: 'rect',
      forceSquareRatio: true,
    });
    this.displayRef = React.createRef();
  }

  componentDidMount() {
    this.displayRef.current.append(this.display.getContainer());
    console.log('\n\n');
    console.log(this.props);
    console.log('\n\n');
    this.props.setDisplay(this.display);
  }

  componentWillUnmount() {
    this.props.setDisplay(null);
  }

  render() {
    return (
      <div className={style.display}>
        <div ref={this.displayRef} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
