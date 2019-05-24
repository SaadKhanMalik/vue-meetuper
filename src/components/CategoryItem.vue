<template>
    <section class="section">
        <div>
            <h1 class="title">Categories</h1>
            <div class="columns cover is-multiline is-mobile">
            <div 
                class="column is-one-quarter"
                :style="{'min-height': '160px'}"
                v-for="category in categories"
                :key="category._id"
                >
                <a href="#">
                    <span class="is-primary is-top is-medium tooltip">
                        <figure class="image is-4by3 imageFade">
                            <img 
                                class="is-rounded" 
                                :src="category.image" 
                                alt=""
                            />
                        </figure>
                        <div class="subtitle m-t-xs bold">
                            {{ category.name | capitalize }}
                        </div>
                    </span>
                </a>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CategoryItem',
    props: {
        categories: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
  .is-rounded {
    border-radius: 10px !important;
  }
</style>
