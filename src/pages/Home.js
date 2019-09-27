import React from 'react';
import CardContainer from '@/CardContainer';
import 'src/assets/styles/reset.less';
import './Home.less';

function Home() {
    return (
        <>
            <div className="org-card-background" />
            <CardContainer classNames="org-card-margin">
                <div className="org-card-title">
                    <p>
                        <span data-title>净贡献完成率</span>
                        <br />
                        <span data-item>100%</span>
                    </p>
                </div>
                <ul className="org-card-badge">
                    <li>
                        <p>总部均值</p>
                        <p>150000</p>
                        <p />
                    </li>
                    <li>
                        <p>基准值</p>
                        <p>150000</p>
                        <p />
                    </li>
                    <li>
                        <p>周期值</p>
                        <p>150000</p>
                        <p />
                    </li>
                    <li>
                        <p>排名</p>
                        <p>150000</p>
                        <p />
                    </li>
                </ul>
                <div className="org-card-tabcontinaer">
                    <CardContainer classNames="org-card-tab">
                        收入完成率
                    </CardContainer>
                    <CardContainer classNames="org-card-tab">
                        成本费用完成率
                    </CardContainer>
                </div>
            </CardContainer>
            
        </>
    );
}


export default Home;
