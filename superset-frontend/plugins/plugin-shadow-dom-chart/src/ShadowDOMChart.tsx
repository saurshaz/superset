export class ShadowDOMChart extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create containers for the two charts
        const chart1 = document.createElement('div');
        chart1.id = 'chart1';
        const chart2 = document.createElement('div');
        chart2.id = 'chart2';

        shadow.appendChild(chart1);
        shadow.appendChild(chart2);

        // Add styles (optional)
        const style = document.createElement('style');
        style.textContent = `
            #chart1, #chart2 {
                width: 100%;
                height: 200px;
                margin-bottom: 20px;
            }
        `;
        shadow.appendChild(style);
    }

    connectedCallback() {
        // Render charts when the element is added to the DOM
        this.renderCharts();
    }

    renderCharts() {
        const chart1 = this.shadowRoot.getElementById('chart1');
        const chart2 = this.shadowRoot.getElementById('chart2');

        // Example: Use a charting library like Chart.js or D3.js
        this.renderChart(chart1, [10, 20, 30, 40, 50]);
        this.renderChart(chart2, [50, 40, 30, 20, 10]);
    }

    renderChart(container, data) {
        // Example: Render a simple bar chart using Chart.js
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);

        new Chart(canvas, {
            type: 'bar',
            data: {
                labels: ['A', 'B', 'C', 'D', 'E'],
                datasets: [{
                    label: 'Data',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }
}

customElements.define('shadow-dom-chart', ShadowDOMChart);