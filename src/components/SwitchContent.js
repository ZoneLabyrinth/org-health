import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SwitchContent.less';

function SwitchContent({ onChange }) {
    const menu = [
        { label: '表', value: 'table' },
        { label: '图', value: 'chart' },
    ];

    const [curIndex, setCurIndex] = useState(0);

    function switchItem(index, item) {
        setCurIndex(index);
        onChange(item);
    }


    return (
        <div className="org-switch-container">
            {/* 背景移动 */}
            <div className={`org-switch-item ${curIndex ? 'org-switch-actived' : ''}`} />
            {
                menu.map((item, index) => (
                    <div key={index} onClick={switchItem.bind(this, index, item)} style={{ fontWeight: `${index === curIndex ? 600 : 400}` }} className="org-switch-item">
                        {item.label}
                    </div>
                ))
            }
        </div>
    );
}

SwitchContent.propTypes = {
    onChange: PropTypes.func,
};
SwitchContent.defaultProps = {
    onChange: null,
};

export default SwitchContent;
