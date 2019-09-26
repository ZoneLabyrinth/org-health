import React from 'react';
import './CardContainer.less';
import PropTypes from 'prop-types';

function CardContainer(props) {
    const { children } = props;

    return (
        <div className="org-card-container">
            { children }
        </div>
    );
}
CardContainer.propTypes = {
    children: PropTypes.element,
};
CardContainer.defaultProps = {
    children: '',
};

export default CardContainer;
