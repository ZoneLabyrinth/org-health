import F2 from '@antv/f2';
import '@antv/f2/lib/geom/interval';

export default function interval(id, datas, type) {
    const { Global } = F2;

    const data = datas || [{}];
    console.log(data)

    const key = [Object.keys(data[0])[0], Object.keys(data[0])[1]];
    console.log(key)
    const chart = new F2.Chart({
        id,
        pixelRatio: window.devicePixelRatio,
    });

    chart.source(data);
    chart.coord({
        transposed: true,
    });
    chart.axis(key[0], {
        line: Global._defaultAxis.line,
        grid: null,
    });
    chart.axis(key[1], {
        line: null,
        grid: Global._defaultAxis.grid,
        label: function label(text, index, total) {
            const textCfg = {};
            if (index === 0) {
                textCfg.textAlign = 'left';
            } else if (index === total - 1) {
                textCfg.textAlign = 'right';
            }
            return textCfg;
        },
    });
    if (type === 'percent') {
        chart.scale(key[1], {
            formatter(v) {
                return `${v * 100}%`;
            },
        });
    }

    chart.interval().position(`${key[0]}*${key[1]}`).shape('smooth').color('l(0) 0:#FC9489 1:#FF4950');
    chart.render();
}
