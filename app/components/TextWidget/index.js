/**
 *
 * TextWidget.react.js
 *
 * A widget, with text.
 */

import React, { PropTypes } from 'react';
import Widget from 'components/Widget';

function TextWidget(props) {
  return (
    <Widget className={props.className} onDelete={props.onDelete}>
      {props.html}
    </Widget>
  );
}

TextWidget.propTypes = {
  className: PropTypes.string,
  onDelete: PropTypes.func,
  text: PropTypes.string,
  html: PropTypes.string,
};

export default TextWidget;
