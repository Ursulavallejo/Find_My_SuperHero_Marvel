<script>
import axios from 'axios'

export default {
  created() {
    this.fetchCharacterDetails()
    this.selectedCharacterId = this.$route.params.characterId
  },
  data() {
    return {
      characterID: null,
      selectedCharacterId: '',
      series: [],
      characterName: '',
      characterImage: '',
    }
  },
  watch: {
    selectedCharacterId: 'fetchCharacterDetails',
  },

  props: {
    wellcomeMessage: String,
  },

  methods: {
    fetchCharacterDetails() {
      // Fetch and display details based on selectedCharacterId
      if (this.selectedCharacterId) {
        axios
          .get(
            `https://gateway.marvel.com/v1/public/characters/${this.selectedCharacterId}?ts=1&apikey=8104150c071ae724664587cc892ac68f&hash=da2e861faf5b55afaf8f3339a879117c`
          )
          .then((result) => {
            // console.log(result.data.data.results[0])
            // console.log(result.data.data.results[0].thumbnail)
            // console.log('hej result')

            this.series = result.data.data.results[0].series.items

            this.characterName = result.data.data.results[0].name

            this.characterImage = result.data.data.results[0].thumbnail
          })
          .catch((error) => {
            console.error('Error fetching character details:', error)
          })
      }
    },
  },
}
</script>

<template>
  <div class="main-content">
    <div class="container">
      <p>{{ wellcomeMessage }}</p>
      <h1>Marvel Character Details</h1>
      <div class="card-content">
        <img
          :src="characterImage.path + '.' + characterImage.extension"
          alt=""
        />
        <p>Character ID: {{ $route.params.characterId }}</p>
        <p>Character Name: {{ characterName }}</p>

        <!-- Display character details based on ID -->

        <h2>Series:</h2>
        <ul>
          <li v-for="serie in series">
            {{ serie.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 250px;
  width: auto;
  border-radius: 50%;
}

.container {
  text-align: center;
}

li {
  list-style: none;
}

.card-content {
  border: 3px solid white;
  max-width: 400px;
  margin: auto;
  padding: 1.5em;
  color: white;
  background-color: black;
  border-radius: 20px;
  margin-top: 2em;
  font-size: 20px;
}
</style>
