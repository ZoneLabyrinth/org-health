import React from 'react';
import TabBar from '@/TabBar';
import SelectorTab from '../../components/SelectorTab';
// import SelectorTab from 'selector-tab';
import SwitchContent from '../../components/SwitchContent';
import './IndexRank.less';
import BaseTable from '@/BaseTable';

function IndexRank() {
    const data1 = [
        {
            area: '区',
            number: 0.1,
        },
        {
            area: '东区',
            number: 0.3,
        },
        {
            area: '区',
            number: 0.4,
        },
        {
            area: '北',
            number: 0.5,
        },
    ];


    return (
        <div className="indexRank-container">
            <TabBar />
            <div className="indexRank-background">
                <SelectorTab />
                <div className="indexRank-border" />
                <div className="indexRank-switch-container">
                    <div />
                    <div />
                    <div>
                        <SwitchContent />
                    </div>
                </div>
                <div className="indexRank-content-container">
                    {/* <Charts classNames={'indexRank-content-charts'} data={data} /> */}
                    <BaseTable>
                        <li className="org-table-row">
                            {data1.map((item, index) => (
                                <div key={index}>
                                    {item.area}
                                </div>
                            ))}
                        </li>
                    </BaseTable>
                </div>
            </div>
        </div>
    );
}

export default IndexRank;
