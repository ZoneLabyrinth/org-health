import React, { useState } from 'react';
import TabBar from '@/TabBar';
import SelectorTab from '../../components/SelectorTab';
// import SelectorTab from 'selector-tab';
import SwitchContent from '../../components/SwitchContent';
import './IndexRank.less';
import BaseTable from '@/BaseTable';
import { DatePicker, List, Icon } from 'antd-mobile'

function IndexRank() {
    const data = [
        {
            rank: '1',
            area: '区',
            number: 0.1,
            areas: 1
        },
        {
            rank: '1',
            area: '东区',
            number: 0.7,
            areas: 2
        },
        {
            rank: '1',
            area: '区',
            number: 0.4,
            areas: 4
        },
        {
            rank: '1',
            area: '北',
            number: 0.5,
            areas: 3
        },
    ];

    const titleList = [
        { name: '排名', code: 'rank' },
        { name: '大区', code: 'area' },
        { name: '净贡献完成率', code: 'number', sort: 'desc' },
        { name: '较比波动', code: 'areas', sort: 'desc' },
    ];
    function formatDate(date) {
        /* eslint no-confusing-arrow: 0 */
        const pad = n => n < 10 ? `0${n}` : n;
        const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
        const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
        return `${dateStr} ${timeStr}`;
    }

    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);

    const [date, setDate] = useState(now)

    const CustomChildren = ({ extra, onClick, children }) => (
        <div
            onClick={onClick}
            style={{textAlign:"center"}}
        >
            <span style={{ color: '#888' }}>{extra}</span> &nbsp;
            {children}
        </div>
    );

    function handlerChange(date) {
        setDate(date)
    }

    function format(date) {
        /* eslint no-confusing-arrow: 0 */
        const pad = n => n < 10 ? `0${n}` : n;;
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
    }

    return (
        <div className="indexRank-container">
            <TabBar />
            <div className="indexRank-background">
                <SelectorTab >
                    <List className="date-picker-list" style={{ boder: 'none' }}>
                        <DatePicker
                            mode="month"
                            title="选择日期"
                            extra="Optional"
                            format={format}
                            value={date}
                            onChange={(date) => handlerChange(date)}
                        >
                            <CustomChildren><Icon type="down" size="xxs" /></CustomChildren>

                            {/* <List.Item arrow="down"></List.Item> */}
                        </DatePicker>
                    </List>
                </SelectorTab>
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
