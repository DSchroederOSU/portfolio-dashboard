<script>

import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: Array,
    labels: Array
  },
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: this.chartdata
        }
      ]
    }, {
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
}
</script>
