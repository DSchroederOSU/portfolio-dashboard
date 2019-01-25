<template>
  <div class="card" style="width: 50vw;">
    <div class="card-body">
      <h5 class="card-title">{{beer_name}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">By: {{brewery}}</h6>
      <h6 class="card-subtitle mb-2 text-muted">ABV: {{abv}}</h6>
      <h6 class="card-subtitle mb-2 text-muted">IBU: {{ibu}}</h6>
      <p class="card-text">{{description}}</p>

    </div>
  </div>
</template>


<script>

export default {
  name: 'BeerCard',
  props: ['beer_name', 'description', 'abv', 'ibu', 'brewery'],
  async mounted () {

  }
}
</script>
