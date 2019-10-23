import Home from 'pages/Home';
import IndexRank from 'pages/ranking/IndexRank';
import ScoreRank from 'pages/ranking/ScoreRank';
import Region from 'pages/comparison/Region';

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
    {
        path: '/scoreRank',
        component: ScoreRank,
    },
    {
        path: '/region',
        component: Region,
    },
];

export default routers;
