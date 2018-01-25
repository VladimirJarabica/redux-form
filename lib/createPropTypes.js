'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var createPropTypes = function createPropTypes() {
  return {
    // State:
    active: _propTypes.string, // currently active field
    asyncValidating: _propTypes.bool.isRequired, // true if async validation is running
    autofilled: _propTypes.bool, // true if set programmatically by autofill
    dirty: _propTypes.bool.isRequired, // true if any values are different from initialValues
    error: _propTypes.any, // form-wide error from '_error' key in validation result
    errors: _propTypes.object, // a map of errors corresponding to structure of form data (result of validation)
    fields: _propTypes.object.isRequired, // the map of fields
    formKey: _propTypes.any, // the form key if one was provided (used when doing multirecord forms)
    invalid: _propTypes.bool.isRequired, // true if there are any validation errors
    pristine: _propTypes.bool.isRequired, // true if the values are the same as initialValues
    submitting: _propTypes.bool.isRequired, // true if the form is in the process of being submitted
    submitFailed: _propTypes.bool.isRequired, // true if the form was submitted and failed for any reason
    valid: _propTypes.bool.isRequired, // true if there are no validation errors
    values: _propTypes.object.isRequired, // the values of the form as they will be submitted

    // Actions:
    asyncValidate: _propTypes.func.isRequired, // function to trigger async validation
    destroyForm: _propTypes.func.isRequired, // action to destroy the form's data in Redux
    handleSubmit: _propTypes.func.isRequired, // function to submit the form
    initializeForm: _propTypes.func.isRequired, // action to initialize form data
    resetForm: _propTypes.func.isRequired, // action to reset the form data to previously initialized values
    touch: _propTypes.func.isRequired, // action to mark fields as touched
    touchAll: _propTypes.func.isRequired, // action to mark ALL fields as touched
    untouch: _propTypes.func.isRequired, // action to mark fields as untouched
    untouchAll: _propTypes.func.isRequired // action to mark ALL fields as untouched
  };
};

exports.default = createPropTypes;