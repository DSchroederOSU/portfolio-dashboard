<script>

import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    },
    {
      legend: {
        display: false
      },
      tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                    return tooltipItem.yLabel;
             }
          }
      },
      responsive: true,
      maintainAspectRatio: false
    })
  }
};
</script>
