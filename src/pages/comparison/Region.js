import React, { useState } from 'react';
import { DatePicker, List, Icon } from 'antd-mobile';
import './Region.less';
import TabBar from '@/TabBar';
import SelectorTab from '@/SelectorTab';
import Charts from '@/Charts';
import CustomerDateChildren from '@/CustomerDateChildren';
import SwitchContent from '@/SwitchContent';
import BaseTable from '@/BaseTable';

const navList = [
    { title: "大区对比" },
    { title: "机构对比" },
]


function Region() {

    const titleList = [
        { name: '排名', code: 'rank' },
        { name: '大区', code: 'area' },
        { name: '排名', code: 'ranks' },
        { name: '大区', code: 'aread' },
        { name: '排名', code: 'numberd' },
        { name: '大区', code: 'areasd' },
        { name: '净贡献完成率', code: 'number', sort: 'desc' },
        { name: '较比波动', code: 'areas', sort: 'desc' },
    ];

    const data = [
        {
            rank: '1',
            ranks: '2',
            area: '区',
            aread: '区',
            number: 0.1,
            areas: 1,
            numberd: 0.1,
            areasd: 1,
        },
        {
            rank: '1',
            ranks: '2',
            aread: '区',
            area: '东区',
            number: 0.7,
            areas: 2,
            numberd: 0.1,
            areasd: 1,
        },
        {
            rank: '1',
            ranks: '2',
            aread: '区',
            area: 'd区',
            number: 0.4,
            areas: 4,
            numberd: 0.1,
            areasd: 1,
        },
        {
            rank: '1',
            ranks: '2',
            aread: '区',
            area: '北',
            number: 0.5,
            areas: 3,
            numberd: 0.1,
            areasd: 1,
        },
    ];
    const handlerTitle = (value) => {
        console.log(value);
    };
    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);

    const [date, setDate] = useState(now);
    // 图表切换
    const [mode, setMode] = useState('table');

    function handlerChange(dates) {
        setDate(dates);
    }
    function format(dates) {
        /* eslint no-confusing-arrow: 0 */
        const pad = (n) => n < 10 ? `0${n}` : n;
        return `${dates.getFullYear()}-${pad(dates.getMonth() + 1)}`;
    }

    function selectValue(value) {
        console.log(value);
    }
    // 图标切换
    const switchChange = (item) => {
        // console.log(item)
        setMode(item.value);
    };

    return (
        <div className="region-container">
            <TabBar nav={navList} onChange={(value) => handlerTitle(value)} />
            <SelectorTab onChange={(value) => selectValue(value)}>
                <List className="date-picker-list" style={{ boder: 'none' }}>
                    <DatePicker
                        mode="month"
                        title="选择日期"
                        extra="Optional"
                        format={format}
                        value={date}
                        onChange={(dates) => handlerChange(dates)}
                    >
                        <CustomerDateChildren><Icon type="down" size="xxs" /></CustomerDateChildren>

                        {/* <List.Item arrow="down"></List.Item> */}
                    </DatePicker>
                </List>
            </SelectorTab>
            <div className="indexRank-switch-container">
                <div />
                <div />
                <div>
                    <SwitchContent onChange={(item) => switchChange(item)} />
                </div>
            </div>
            <div className="indexRank-content-container">
                {mode === 'table'
                    ? <BaseTable titleList={titleList} data={data} />
                    : <Charts classNames="indexRank-content-charts" data={data} />}
            </div>
        </div>
    );
}

export default Region;
