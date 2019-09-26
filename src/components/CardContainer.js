import React from 'react';
import './CardContainer.less';
import PropTypes from 'prop-types';

function CardContainer(props) {
    const { children, classNames } = props;

    return (
        <div className={`org-card-container ${classNames}`}>
            { children }
        </div>
    );
}
CardContainer.propTypes = {
    children: PropTypes.element,
    classNames: PropTypes.string,
};
CardContainer.defaultProps = {
    children: '',
    classNames: null,
};

export default CardContainer;
