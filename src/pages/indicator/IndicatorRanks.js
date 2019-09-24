import React, { useState } from 'react';
// import {
// 	BrowserRouter as Router, Link, Route, Switch,
// } from 'react-router-dom';
// import routers from 'src/router/index';
import TabBar from '@/TabBar';

const navList = [
    { title: '经营成果', code: '' },
    { title: '经营客户', code: '' },
    { title: '业务信息', code: '' },
    { title: '人员管理', code: '' },
];
function App() {
    const [list, setList] = useState(navList);
    return (
        <>
            <button type="button" onClick={() => setList()}>
                Click me
            </button>
            <TabBar navList={navList} />
        </>
    );
}

export default App;
