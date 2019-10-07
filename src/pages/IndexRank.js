import React from 'react';
import TabBar from '@/TabBar';
import SelectorTab from '../components/SelectorTab';
import SwitchContent from '../components/SwitchContent';
import './IndexRank.less';

function IndexRank() {
    return (
        <div className="indexRank-container">
            <TabBar />
            <div className="indexRank-background">
                <SelectorTab />
                <div className="indexRank-border"></div>
                <div className="indexRank-switch-container">
                    <div></div>
                    <div></div>
                    <div>
                        <SwitchContent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexRank;
