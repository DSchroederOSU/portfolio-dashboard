<template>
  <div class="card" style="width: 20vw;">
    <div class="card-body">
      <h5 class="card-title">{{brewery_name}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{address}}</h6>
      <a v-bind:href="`${website}`" class="card-text" target="_blank">{{website}}</a>
    </div>
  </div>
</template>


<script>

export default {
  name: 'BreweryCard',
  props: ['brewery_name', 'address', 'website'],
  async mounted () {

  }
}
</script>
