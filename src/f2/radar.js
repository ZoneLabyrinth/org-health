import F2 from '@antv/f2';
import '@antv/f2/lib/geom/line';
import '@antv/f2/lib/geom/area';
import '@antv/f2/lib/geom/point';

export default function radar(id, datas, type) {
    var data = [{
        item: 'Design',
        user: '用户 A',
        score: 70
    }, {
        item: 'Design',
        user: '用户 B',
        score: 30
    }, {
        item: 'Development',
        user: '用户 A',
        score: 60
    }, {
        item: 'Development',
        user: '用户 B',
        score: 70
    }, {
        item: 'Marketing',
        user: '用户 A',
        score: 50
    }, {
        item: 'Marketing',
        user: '用户 B',
        score: 60
    }, {
        item: 'Users',
        user: '用户 A',
        score: 40
    }, {
        item: 'Users',
        user: '用户 B',
        score: 50
    }];
    var chart = new F2.Chart({
        id: id,
        pixelRatio: window.devicePixelRatio
    });

    chart.coord('polar');
    chart.source(data, {
        score: {
            min: 0,
            max: 120,
            nice: false,
            tickCount: 4
        }
    });
    chart.tooltip({
        custom: true, // 自定义 tooltip 内容框
        onChange: function onChange(obj) {
            var legend = chart.get('legendController').legends.top[0];
            var tooltipItems = obj.items;
            var legendItems = legend.items;
            var map = {};
            legendItems.map(function (item) {
                map[item.name] = _.clone(item);
            });
            tooltipItems.map(function (item) {
                var name = item.name;
                var value = item.value;
                if (map[name]) {
                    map[name].value = value;
                }
            });
            legend.setItems(_.values(map));
        },
        onHide: function onHide() {
            var legend = chart.get('legendController').legends.top[0];
            legend.setItems(chart.getLegendItems().country);
        }
    });
    chart.axis('score', {
        label: function label(text, index, total) {
            if (index === total - 1) {
                return null;
            }
            return {
                top: true
            };
        },
        grid: function grid(text) {
            if (text === '120') {
                return {
                    lineDash: null
                };
            }
        },
        line: {
            top: false
        }
    });
    chart.area().position('item*score').color('user').animate({
        appear: {
            animation: 'groupWaveIn'
        }
    });
    chart.line().position('item*score').color('user').animate({
        appear: {
            animation: 'groupWaveIn'
        }
    });
    chart.point().position('item*score').color('user').style({
        stroke: '#fff',
        lineWidth: 1
    }).animate({
        appear: {
            delay: 300
        }
    });

    chart.render();
}
