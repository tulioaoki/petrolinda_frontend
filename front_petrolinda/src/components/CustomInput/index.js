import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

export class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      placeholder,
      value,
      label,
      type,
      id,
      headerInputLabel,
      onChange,
    } = this.props;

    return (
      <div style={{ margin: 10 }}>
        <InputLabel htmlFor={id}>
          <Typography style={{ fontWeight: 'bolder' }}>
            {headerInputLabel}
          </Typography>
        </InputLabel>
        <TextField
          autoFocus
          margin="dense"
          id={id}
          label={label}
          type={type}
          fullWidth
          placeholder={placeholder}
          className="formField"
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
}

CustomInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  headerInputLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

CustomInput.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
};

const mapStateToProps = (props) => ({
  props,
});

export default withRouter(connect(mapStateToProps)(CustomInput));
