import React, { useCallback } from 'react';
import interval from 'src/f2/interval';

function Charts(props) {
    const { classNames } = props;
    const canvasEl = useCallback((node) => {
        if (node !== null) {
            interval(node, props.data, 'percent');
        }
    }, []);

    return (
        <>
            <canvas className={classNames} ref={canvasEl} />
        </>
    );
}

export default Charts;
