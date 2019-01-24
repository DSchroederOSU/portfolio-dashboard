<template>
  <Line/>
</template>


<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  async mounted () {
    let commits = await this.axios.get('https://api.github.com/repos/DSchroederOSU/Brewery_API/commits')
    console.log(commits.data.map((x)=>x.commit.author.date))
    
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
    this.renderChart(this.data, this.options)
  }
}
</script>
