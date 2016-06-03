
import {
  ADD_WIDGET,
  DELETE_WIDGET,
} from './constants';

import showdown from 'showdown';
const converter = new showdown.Converter();

/**
 * Adds a text widget to the grid
 *
 * @param  {String} text The text widget
 *
 * @return {object}    An action object with a type of ADD_WIDGET
 */
export function addWidget(text) {
  const html = converter.makeHtml(text);
  return {
    type: ADD_WIDGET,
    widget: {
      text,
      html,
    },
  };
}

/**
 * Removes a text widget from the grid
 *
 * @param  {String} key Identifier for the widget
 *
 * @return {object}    An action object with a type of ADD_WIDGET
 */
export function deleteWidget(key) {
  return {
    type: DELETE_WIDGET,
    key,
  };
}
