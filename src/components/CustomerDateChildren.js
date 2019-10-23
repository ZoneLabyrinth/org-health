import React from 'react';
import PropTypes from 'prop-types';

const CustomerDateChildren = ({ extra, onClick, children }) => (
    <div
        onClick={onClick}
        style={{ textAlign: 'center' }}
    >
        <span style={{ color: '#888' }}>{extra}</span>
        {' '}
        &nbsp;
        {children}
    </div>
);

CustomerDateChildren.propTypes = {
    extra: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
};

CustomerDateChildren.defaultProps = {
    extra: '',
    children: null,
    onClick: null,
};

export default CustomerDateChildren;
