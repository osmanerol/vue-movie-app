<script>
import Poster from '@/components/Poster.vue';

export default {
    name: 'Movie',
    props: {
        movie: { type: Object, required: true}
    },
    components: {
        Poster
    },
    computed: {
        movieDetailPath() {
            return `/movie/${this.movie.id}`;
        }
    }
}
</script>

<template>
    <div class="card">
        <router-link :to='movieDetailPath'>
            <!-- <img class="card-img-top" :src="posterPath" :alt="movie.original_title"> -->
            <poster class="card-img-top" :posterName="movie.poster_path" />
        </router-link>
        <div class="card-body">
            <h5 class="card-title">{{ movie.original_title }}</h5>
            <p class="card-text">{{ movie.overview.substring(0, 250) }}</p>
        </div>
        <div class="card-footer">
            <p class="card-text"><small class="text-muted">Avarage Rating : {{ movie.vote_average.toFixed(1) }}</small></p>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.card{
    .card-body{
        .card-title{
            font-weight: bold;
        }
    }
}
</style>