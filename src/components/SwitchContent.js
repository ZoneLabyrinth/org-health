import React, { useState } from 'react';
import './SwitchContent.less';

function SwitchContent() {
    const menu = [
        { label: '表', value: '' },
        { label: '图', value: '' },
    ];

    const [curIndex, setCurIndex] = useState(0);

    function switchItem(index) {
        setCurIndex(index);
    }


    return (
        <div className="org-switch-container">
            {/* 背景移动 */}
            <div className={`org-switch-item ${curIndex ? 'org-switch-actived' : ''}`} />
            {
                menu.map((item, index) => (
                    <div key={index} onClick={switchItem.bind(this, index)} style={{ fontWeight: `${index === curIndex ? 600 : 400}` }} className="org-switch-item">
                        {item.label}
                    </div>
                ))
            }
        </div>
    );
}

export default SwitchContent;
