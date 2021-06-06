<script>
import { mapGetters } from 'vuex';

import Header from '@/components/Header.vue';
import Spinner from '@/components/Spinner.vue';
import Movie from '@/components/Movie.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Spinner,
    Movie
  },
  data() {
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapGetters([
      'movies'
    ])
  },
  async created() {
    await this.$store.dispatch('fetchMovies');
    this.isLoading = false;
  }
}
</script>

<template>
  <section>
    <Header />
    <section class="container py-4">
      <Spinner v-if="isLoading" />
      <div class="card-container" v-else>
        <Movie 
          v-for="(movie, index) in $store.state.movies" 
          v-bind:key="index"
          :movie="movie"
        />
      </div>
    </section>
  </section>
</template>

<style scoped>
.card-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
}
</style>