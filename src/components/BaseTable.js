import React, { useEffect } from 'react';
import './BaseTable.less';
import PropTypes from 'prop-types';
import { Icon } from "antd-mobile";


function BaseTable(props) {
    const { titleList, data } = props;

    const sortData = (item) => {
        console.log(item)
        item.sort = 'asc';
        data.sort((a,b)=>a[item.code]-b[item.code])
    }


    return (
        <div className="org-table-container">
            <ul className="org-table-wrapper">
                <li className="org-table-title">
                    {titleList.map((item, index) => (
                        <span onClick={item.sort ? sortData.bind(this, item) : null} key={index}>
                            {item.name}
                            {item.sort === 'desc' ?
                                <Icon className="org-table-icon" type="down" size="xxs" />
                                : item.sort === 'asc' ? <Icon className="org-table-icon" type="up" size="xxs" />
                                    : null
                            }
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
    children: PropTypes.element,
    data: PropTypes.array
};

BaseTable.defaultProps = {
    children: null,
    data: []
};

export default BaseTable;
