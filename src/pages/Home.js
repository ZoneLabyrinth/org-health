import React from 'react';
import { Link } from 'react-router-dom';
import CardContainer from '@/CardContainer';
import 'src/assets/styles/reset.less';
import './Home.less';
import CardMenu from '@/CardMenu';

function Home() {
    return (
        <>
            <div className="org-card-background" />
            <CardContainer classNames="org-card-margin">
                <div>
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
                </div>

            </CardContainer>
            <div className="org-card-tabcontinaer">
                <CardContainer classNames="org-card-tab">
                    <Link to="/faq">
                        收入完成率
                    </Link>
                </CardContainer>
                <CardContainer classNames="org-card-tab">
                    成本费用完成率
                </CardContainer>
            </div>
            <div className="org-tabs-container">
                <div className="org-tabs-item org-tabs-actives" data-item="1">
                    收款收入
                </div>
                <div className="org-tabs-item" data-item="2">
                    权责收入
                </div>
                <div className="org-tabs-item" data-item="3">
                    业务管理
                </div>
                <p className="org-tabs-line" />
            </div>
            <CardMenu />

        </>
    );
}


export default Home;
