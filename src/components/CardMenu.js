import React from 'react';
// import PropTypes from 'prop-types';
import './CardMenu.less';
import { Card } from 'antd-mobile';
import bg from '../assets/images/home/productLine@2x.png';

function CardMenu() {
    return (
        <div className="org-cardMenu-container">
            {/* <WingBlank size="lg">
                <WhiteSpace size="lg" /> */}
            <Card>
                <Card.Header
                    title={<span className="org-cardMenu-title">产品线收入</span>}
                    thumb={<img alt="图标" className="org-cardMenu-img" src={bg} />}
                    extra={<span>产品线</span>}
                />
                <Card.Body className="org-cardMenu-body">
                    <div className="org-cardMenu-item">合同完成率</div>
                    <div className="org-cardMenu-item">综合折扣率</div>
                    <div className="org-cardMenu-item">合同完成率</div>
                    <div className="org-cardMenu-item">合同完成率</div>
                </Card.Body>
            </Card>
            {/* <WhiteSpace size="lg" />
            </WingBlank> */}
        </div>

    );
}
// CardMenu.PropsType = {

// };


export default CardMenu;
