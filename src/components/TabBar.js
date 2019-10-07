import React, { useState } from 'react';
import './TabBar.less';

const nav = [
    { title: '经营成果' },
    { title: '经营客户' },
    { title: '业务信息' },
    { title: '人员管理' },
];

export default function TarBar(props) {
    return (
        <div className="org-tab-container">
            {
                nav.map((item, key) => (
                    <div key={key} className="org-tab-item org-tab-actived">
                        {item.title}
                    </div>
                ))
            }
        </div>
    );
}
