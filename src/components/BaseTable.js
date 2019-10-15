import React from 'react';
import './BaseTable.less';
import PropTypes from 'prop-types';


function BaseTable(props) {
    const { children } = props;
    const titleList = [
        { name: '排名', code: 'rank' },
        { name: '大区', code: 'rank' },
        { name: '净贡献完成率', code: 'rank' },
        { name: '较比波动', code: 'rank' },
    ];
    // console.log(props.children);

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
                {children}
            </ul>
        </div>
    );
}
BaseTable.propTypes = {
    children: PropTypes.element,
};

BaseTable.defaultProps = {
    children: '',
};

export default BaseTable;
