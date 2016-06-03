/**
 *
 * Widget.react.js
 *
 * A base widget type. Allows children inside and has actions.
 */

import React, { PropTypes } from 'react';
import { grey700 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import styles from './styles.css';

function Widget(props) {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <div
        className={`${styles.content}`}
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
      <div className={`${styles.actions}`}>
        <IconButton tooltip="Delete" onClick={props.onDelete}>
          <ActionDelete color={grey700} />
        </IconButton>
      </div>
    </div>
  );
}

Widget.propTypes = {
  className: PropTypes.string,
  onDelete: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Widget;
