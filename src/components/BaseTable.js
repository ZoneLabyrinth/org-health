import React from 'react';
import './BaseTable.less';


function BaseTable(props) {

    const titleList = [
        { name: '排名', code: 'rank' },
        { name: '大区', code: 'rank' },
        { name: '净贡献完成率', code: 'rank' },
        { name: '较比波动', code: 'rank' },
    ]
    console.log(props.children)

    return (
        <div className="org-table-container">
            <ul className="org-table-wrapper">
                <li className="org-table-title">
                    {titleList.map((item, index) => (
                        <div key={index}>
                            {item.name}
                        </div>
                    ))}
                </li>
                {props.children}
            </ul>
        </div>
    )

}

export default BaseTable;