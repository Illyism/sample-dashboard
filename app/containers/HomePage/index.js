/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import TextWidget from 'components/TextWidget';

import styles from './styles.css';


import {
  selectGrid,
} from './selectors';

import { addWidget, deleteWidget } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  addCard = () => {
    this.props.addWidget(this.state.value);
    this.setState({
      value: '',
    });
    this.refs.input.focus();
  }

  deleteCard = (key) => {
    this.props.deleteWidget(key);
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  renderGrid() {
    return this.props.grid.map((x, i) =>
      <div className={`${styles.gridCell}`}>
        <TextWidget
          key={i}
          text={x.text}
          html={x.html}
          onDelete={() => this.deleteCard(i)}
        />
      </div>
    ).toArray();
  }

  render() {
    return (
      <div className={`${styles.home}`}>
        <div className={`${styles.input}`}>
          <TextField
            ref="input"
            hintText="Write something..."
            fullWidth
            onChange={this.handleChange}
            value={this.state.value}
            multiLine
          />
          <FlatButton
            label="Add"
            primary
            onClick={this.addCard}
          />
        </div>
        <div className={`${styles.grid}`}>
          {this.renderGrid()}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  addWidget: React.PropTypes.func,
  deleteWidget: React.PropTypes.func,
  grid: React.PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    addWidget: (text) => dispatch(addWidget(text)),
    deleteWidget: (key) => dispatch(deleteWidget(key)),
    dispatch,
  };
}

export default connect(createSelector(
  selectGrid(),
  (grid) => ({ grid })
), mapDispatchToProps)(HomePage);
