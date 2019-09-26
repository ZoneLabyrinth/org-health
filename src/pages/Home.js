import React from 'react';
import CardContainer from '@/CardContainer';
import './Home.less';

function Home() {
    return (
        <>
            <div className="org-card-background" />
            <CardContainer classNames="org-card-margin">
                你好
            </CardContainer>
        </>
    );
}


export default Home;
