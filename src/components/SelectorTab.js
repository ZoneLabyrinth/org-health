import React from 'react';
import './SelectorTab.less';
import { Icon } from 'antd-mobile';

function SelectorTab(props) {
    return (
        <div className="select-tab-container">
            <div className="select-tab-wrapper">
                <div>
                    <div className="select-tab-item">
                        净贡献完成率
                        {' '}
                        <Icon type="down" />
                    </div>
                </div>
                <div>
                    <div className="select-tab-item">
                        净贡献完成率
                        {' '}
                        <Icon type="down" />
                    </div>
                </div>
                <div>
                    经贡献完成率
                </div>
            </div>
            {/* <div className="select-tab-mengban"></div>
            <ul className="select-tab-selector">
                <li>
                    <span>考核收入率</span><span><Icon color="red" type="check" /></span>
                </li>
                <li>
                    考核收入率
                </li>
                <li>
                    （经营费用+外包成本）完成率
                </li>
            </ul> */}
        </div>
    );
}

export default SelectorTab;
