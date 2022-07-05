<template>
  <div>{{ dataValue }}</div>
  <div class="star-wrapper">
    <Star
      v-for="(_, index) in maxRating"
      :key="index"
      :checked="index < getRating()"
      @mouseover="handleMouseHover(index)"
      @click="handleMouseClick"
      @mouseleave="handleMouseLeave"
    />
  </div>
</template>

<script>
import Star from "./Star.vue";
export default {
  name: "Rating",
  setup() {
    const setupValue = "Star Ranking";
    return { setupValue, maxRating: 5 };
  },
  data() {
    return {
      dataValue: this.setupValue,
      userRating: 4,
      avgRating: 3,
      hoverRating: undefined,
      rating: undefined,
    };
  },
  computed: {},
  methods: {
    getRating() {
      this.rating = this.hoverRating || this.userRating || this.avgRating;
      return this.rating;
    },
    handleMouseClick() {
      this.userRating = this.hoverRating;
    },
    handleMouseHover(index) {
      this.hoverRating = index + 1;
    },
    handleMouseLeave() {
      this.hoverRating = undefined;
    },
  },
  props: {},
  components: { Star },
};
</script>

<style scoped>
.star-wrapper {
  display: flex;
}
</style>
