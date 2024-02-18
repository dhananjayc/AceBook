import React from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import ErrorHandlerContext from './ErrorHandlerContext';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const ErrorHandlerProvider = ({
  children,
}) => {
  /**
   * Show notification with provided message and type
   * @param {String} msg : Message to display
   * @param {Boolean} isError : Show error if true otherwise it will be success notification
   * 
   * TODO: We can accept type instead of isError boolean value to display
   *  different type of notification e.g. info, error, etc
   */
  const showNotification = (msg='', isError=false) => {
    if (isError) {
      message.error(msg);
    } else {
      message.success(msg);
    }
  };

  const contextValues = {
    showNotification,
  };

  return (
    <ErrorHandlerContext.Provider value={contextValues}>
      {children}
    </ErrorHandlerContext.Provider>
  );
};

ErrorHandlerProvider.propTypes = propTypes;

export default ErrorHandlerProvider;
