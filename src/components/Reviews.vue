<script>
import Review from './Review.vue'
export default {
  components: {
    Review,
  },
  props: {
    userProp: String,
  },
  data() {
    return {
      reviews: [
        {
          author: 'Jon',
          message: 'Love to be able to find info related with my super heros!!',
        },
        {
          author: 'Ursula',
          message: 'Its Okey but would love have access to the latest films.',
        },
        {
          author: 'Vanja',
          message:
            'Is it possible to have some chat with other members? Will love to share my favorites interest on Marvel with them.',
        },
      ],

      newReview: '',
      counter: 3,
      showCommentsSection: false,
    }
  },
  methods: {
    addReview() {
      this.reviews.push({
        author: `${this.userProp || 'Anonym'}`,
        message: this.newReview,
      })

      this.counter = this.counter + 1

      this.newReview = ''
      console.log('review', this.userProp)
    },
    toggleCommentsSection() {
      this.showCommentsSection = !this.showCommentsSection
    },
  },
  computed: {
    nameToReview() {
      return `${this.userProp || 'Anonym'}`
    },
  },
  created() {
    // Listen event to open reviews
    this.$root.eventBus.on('toggleCommentsSection', this.toggleCommentsSection)
  },
}
</script>

<template>
  <div class="container">
    <p style="font-style: italic; color: rgb(11, 11, 172)">
      Number of Reviews: {{ counter }}
    </p>
    <hr />
    <div class="reviews">
      <Review
        v-for="review in reviews"
        :key="review.message"
        :message="review.message"
        :author="review.author"
      ></Review>
    </div>
    <!-- This should be hidde and showen when click in the footer the button -->
    <div v-if="showCommentsSection">
      <h3>Leave your review:</h3>
      <br />
      <label for="review">Write your opinion..</label>

      <div class="new-review">
        <input
          type="text"
          value="review"
          placeholder="New Review"
          v-model="newReview"
        />
        <br />
        <br />
        <button v-on:click="addReview" class="btn btn-primary">
          Add Comment!
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 300px;
  min-width: 200px;
}
/* .container p {
  font-style: italic;
  color: white;
}
input[type='button'] {
  color: beige;
} */
h3 {
  padding-top: 1em;
  color: rgb(48, 3, 55);
  font-weight: 300;
  font-style: italic;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 1px;
}
</style>
