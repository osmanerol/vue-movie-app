<script>
import Spinner from '@/components/Spinner.vue';
import Poster from '@/components/Poster.vue';

export default {
    components: {
        Spinner,
        Poster
    },
    data() {
        return {
            isLoading: true,
            hasDetails: false
        }
    },
    created() {
        this.$store.dispatch('fetchMovieDetail', this.movieId).then(() => {
            this.isLoading = false;
            this.hasDetails = true;
        });
    },
    computed: {
        movieId() {
            return this.$route.params.id;
        },
        movie() {
            return this.$store.state.movieDetails[this.movieId];
        },
        runtime() {
            const { runtime } = this.movie;
            const hours = Math.floor(runtime / 60);
            const minute = runtime % 60;
            return `${hours}h ${minute}m`;
        }
    },
    methods: {
        castAvatar(path) {
            return `https://image.tmdb.org/t/p/w45${path}`;
        }
    }
}
</script>

<template>
    <section>
        <spinner v-if="isLoading" />
        <div v-if="hasDetails">
            <div class="container pt-5">
                <div class="row">
                    <div class="col-sm-4">
                        <poster :posterName="movie.poster_path" />
                    </div>
                    <div class="col-sm-8 details">
                        <h2>{{ movie.title }}</h2>
                        <p>{{ movie.overview }}</p>
                        <p>Runtime : {{ runtime }}</p>
                        <p>Avarage Rating : {{ movie.vote_average.toFixed(1) }}</p>
                        <p>Production Company : {{ movie.production_companies[0].name }}</p>
                        <p>Release Date : {{ movie.release_date }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>