import React, { useState } from 'react';
import { DatePicker, List, Icon } from 'antd-mobile';
import TabBar from '@/TabBar';
import SelectorTab from '../../components/SelectorTab';
// import SelectorTab from 'selector-tab';
import Charts from '@/Charts';
import SwitchContent from '../../components/SwitchContent';
import './IndexRank.less';
import BaseTable from '@/BaseTable';
import CustomerDateChildren from '@/CustomerDateChildren';

function IndexRank() {
    const data = [
        {
            area: '区',
            number: 0.1,
            areas: 1,
        },
        {
            area: '东区',
            number: 0.7,
            areas: 2,
        },
        {
            area: '区',
            number: 0.4,
            areas: 4,
        },
        {
            area: '北',
            number: 0.5,
            areas: 3,
        },
    ];
    const nav = [
        { title: '经营成果' },
        { title: '经营客户' },
        { title: '业务信息' },
        { title: '人员管理' },
    ];
    const titleList = [
        { name: '排名', code: 'rank' },
        { name: '大区', code: 'area' },
        { name: '净贡献完成率', code: 'number', sort: 'desc' },
        { name: '较比波动', code: 'areas', sort: 'desc' },
    ];
    const menu = [
        [
            { label: '净贡献完成率', value: '' },
            { label: '考核收入完成率', value: '' },
            { label: '（经营费用+外包成本）完成率', value: '' },
        ],
        [
            { label: '大区排名', value: '' },
            { label: '机构排名', value: '' },
        ],
    ];

    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);

    const [date, setDate] = useState(now);
    // 图表切换
    const [mode, setMode] = useState('table');

    function handlerChange(dates) {
        setDate(dates);
    }

    function selectValue(value) {
        console.log(value);
    }

    function format(dates) {
        /* eslint no-confusing-arrow: 0 */
        const pad = (n) => n < 10 ? `0${n}` : n;
        return `${dates.getFullYear()}-${pad(dates.getMonth() + 1)}`;
    }

    // 图标切换
    const switchChange = (item) => {
        // console.log(item)
        setMode(item.value);
    };

    return (
        <div className="indexRank-container">
            <TabBar nav={nav} />
            <div className="indexRank-background">
                <SelectorTab menu={menu} onChange={(value) => selectValue(value)}>
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
                <div className="indexRank-border" />
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
        </div>
    );
}

export default IndexRank;
