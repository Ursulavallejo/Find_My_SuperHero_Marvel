<script>
export default {
  data() {
    return {
      footer: '',
    }
  },
  methods: {
    receiveInfoFooter(info) {
      this.footer = info.copyright
    },
    toggleCommentsSection() {
      // make visible reviews part
      this.$root.eventBus.emit('toggleCommentsSection')
    },
  },
  mounted() {
    // Listen for the event using the local event bus
    this.$root.eventBus.on('infoFooter', this.receiveInfoFooter)
  },
}
</script>

<template>
  <!-- Footer BOOSTRAP-->
  <footer
    class="text-center text-white fixed-bottom"
    style="background-color: #242525d0"
  >
    <!-- Grid container -->
    <div class="container pb-0">
      <!-- Section: CTA -->
      <section id="to-comments" v-if="$route.name === 'Marvel'">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3"
            >Please leave a Comment of what is your favorite Character..</span
          >
          <button
            data-mdb-ripple-init
            type="button"
            class="btn btn-outline-light btn-rounded"
            @click="toggleCommentsSection"
          >
            Add Comment!
          </button>
        </p>
      </section>
      <!-- Section: CTA -->
    </div>
    <!-- Grid container -->

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.906)">
      <span v-html="footer"></span>
      <a
        class="text-white"
        href="https://github.com/Ursulavallejo"
        target="_blank"
      >
        &copy; Site created by Ursula Vallejo Janne</a
      >
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 15em;
}
#to-comments {
  padding-top: 0.4em;
}
</style>
