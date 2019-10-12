import Home from 'pages/Home';
import IndexRank from 'pages/ranking/IndexRank';

const routers = [
    {
        path: '/home',
        component: Home,
        exact: true,
    },
    {
        path: '/indexRank',
        component: IndexRank,
    },
];

export default routers;
