import React, { useState } from 'react';
import './TabBar.less';

const nav = [
    { title: '经营成果' },
    { title: '经营客户' },
    { title: '业务信息' },
    { title: '人员管理' },
];


export default function TarBar() {
    const [data, setData] = useState(nav[0]);

    function selectItem(item) {
        // console.log(item);
        setData(item);
    }


    return (
        <div className="org-tab-container">
            {
                nav.map((item, key) => (
                    <div onClick={selectItem.bind(this, item)} key={key} className={`org-tab-item ${data.title === item.title ? 'org-tab-actived' : ''}`}>
                        {item.title}
                    </div>
                ))
            }
        </div>
    );
}
