<template>
  <div>
    <AppHero/>
    <div class="container">
      <section class="section">
        <div class="m-b-lg">
          <h1 class="title is-inline">Featured Meetups in "Location"</h1>
          <AppDropdown/>
          <button class="button is-primary is-pulled-right m-r-sm">Create Meetups</button>
          <router-link 
            class="button is-primary is-pulled-right m-r-sm" 
            :to="{name: 'PageMeetupFind'}"
            >
            All
          </router-link>
        </div>
        <MeetupItem :meetups="meetups"/>
      </section>
      <CategoryItem :categories="categories"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import MeetupItem from "@/components/MeetupItem";
import CategoryItem from "@/components/CategoryItem";

export default {
  name: "PageHome",
  components: {
    MeetupItem,
    CategoryItem
  },
  data() {
    return {
      meetups: [],
      categories: []
    };
  },
  created() {
    axios.get("/api/v1/meetups").then(response => {
      this.meetups = response.data;
    });

    axios.get("/api/v1/categories").then(response => {
      this.categories = response.data;
    });
  }
};
</script>

<style scoped>
.is-rounded {
  border-radius: 10px !important;
}
</style>
