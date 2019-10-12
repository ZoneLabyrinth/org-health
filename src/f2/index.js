import interval from './interval';


export default function charts(id,chart,data){
    const { Global } = F2;
    
    const chart = new F2.Chart({
        id: 'mountNode',
        pixelRatio: window.devicePixelRatio,
    });

    chart.source(data);
    chart.coord({
        transposed: true,
    });
    chart.axis(Object.keys(data[0])[0], {
        line: Global._defaultAxis.line,
        grid: null,
    });
    chart.axis(Object.keys(data[0])[1], {
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
    chart.interval().position('country*population');
    chart.render();
}
