<script>
import NavBarMenu from './components/NavBarMenu.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    NavBarMenu,
    Footer,
  },
  methods: {
    loadMarvelCharacter(characterId) {
      // Set the selected character ID in a data property or a reactive variable
      this.$router.push({ name: 'MarvelCharacter', params: { characterId } })
    },
  },
  data() {
    return {
      selectedCharacterId: null,
      userName: null,
    }
  },
}
</script>

<template>
  <NavBarMenu :user-prop="userName" />

  <router-view
    wellcome-message="Lets have fun and learn more about Marvel Heroes !!"
    @selectCharacter="loadMarvelCharacter"
    @user-info="userName = $event.userName"
    :user-prop="userName"
  />

  <Footer />
</template>
