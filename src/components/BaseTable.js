import React, { useState } from 'react';
import './BaseTable.less';
import PropTypes from 'prop-types';
import { Icon } from 'antd-mobile';

/**
 *
 * @param {array} titleList 表头数据，[{title,code,sort}] [{标题，字段，是否排序}]
 * @param {array} data body数据
 */

function BaseTable(props) {
    const { titleList, data } = props;

    // 更新数据
    const [update, setUpdate] = useState(false);

    const sortData = (item) => {
        item.sort = item.sort === 'asc' ? 'desc' : 'asc';

        if (item.sort === 'asc') {
            data.sort((a, b) => a[item.code] - b[item.code]);
        } else {
            data.sort((a, b) => b[item.code] - a[item.code]);
        }
        setUpdate(!update);
    };


    return (
        <div className="org-table-container">
            <ul className="org-table-wrapper">
                <li className="org-table-title">
                    {titleList.map((item, index) => (
                        <span onClick={item.sort ? sortData.bind(this, item) : null} key={index}>
                            {item.name}
                            {item.sort === 'desc'
                                ? <Icon className="org-table-icon" type="down" size="xxs" />
                                : item.sort === 'asc' ? <Icon className="org-table-icon" type="up" size="xxs" />
                                    : null}
                        </span>
                    ))}
                </li>
                {
                    data.map((item, key) => (
                        <li key={key}>
                            {titleList.map((title, index) => (
                                <span key={index}>
                                    {item[title.code]}
                                </span>
                            ))}
                        </li>
                    ))
                }


            </ul>
        </div>
    );
}
BaseTable.propTypes = {
    titleList: PropTypes.array.isRequired,
    data: PropTypes.array,
};

BaseTable.defaultProps = {
    titleList: [],
    data: [],
};

export default BaseTable;
