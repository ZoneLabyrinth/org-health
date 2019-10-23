import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import interval from 'src/f2/interval';
import radar from 'src/f2/radar';

function Charts(props) {
    const { classNames, data } = props;
    const canvasEl = useCallback((node) => {
        if (node !== null) {
            radar(node, data);
        }
    }, [data]);

    return (
        <>
            <canvas className={classNames} ref={canvasEl} />
        </>
    );
}

Charts.propTypes = {
    classNames: PropTypes.string,
    data: PropTypes.array,
};
Charts.defaultProps = {
    classNames: null,
    data: [],
};

export default Charts;
