import { ShadowDOMChart } from './ShadowDOMChart';

export default class ShadowDOMChartPlugin {
    constructor() {
        this.controlPanel = {};
        this.renderChart = this.renderChart.bind(this);
    }

    renderChart(props) {
        const { data } = props;
        const container = document.createElement('div');
        container.innerHTML = '<shadow-dom-chart></shadow-dom-chart>';
        return container;
    }
}