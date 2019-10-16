import React from 'react';
import TabBar from '@/TabBar';
import SelectorTab from '../../components/SelectorTab';
// import SelectorTab from 'selector-tab';
import SwitchContent from '../../components/SwitchContent';
import './IndexRank.less';
import BaseTable from '@/BaseTable';

function IndexRank() {
    const data = [
        {
            rank:'1',
            area: '区',
            number: 0.1,
            areas:2
        },
        {
            rank:'1',
            area: '东区',
            number: 0.7,
            areas:2
        },
        {
            rank:'1',
            area: '区',
            number: 0.4,
            areas:2
        },
        {
            rank:'1',
            area: '北',
            number: 0.5,
            areas:2
        },
    ];
    
    const titleList = [
        { name: '排名', code: 'rank' },
        { name: '大区', code: 'area' },
        { name: '净贡献完成率', code: 'number',sort:'desc' },
        { name: '较比波动', code: 'areas',sort:'desc'  },
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
                    <BaseTable titleList={titleList} data={data} />
                </div>
            </div>
        </div>
    );
}

export default IndexRank;
