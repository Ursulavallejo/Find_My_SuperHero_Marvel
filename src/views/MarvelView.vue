<script>
import axios from 'axios'
import Reviews from '../components/Reviews.vue'

export default {
  components: {
    Reviews,
  },
  props: {
    wellcomeMessage: String,
    userProp: String,
  },
  created() {
    axios(
      'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8104150c071ae724664587cc892ac68f&hash=da2e861faf5b55afaf8f3339a879117c'
    )
      .then((result) => {
        // Filter out characters with the generic thumbnail
        this.initialCharacters = result.data.data.results
          .filter((character) => this.hasValidThumbnail(character))
          .slice(0, 15)

        console.log(result.data.data)
        this.footer = result.data.attributionHTML

        // Emit the event when the data is fetched using the local event bus
        this.$root.eventBus.emit('infoFooter', { copyright: this.footer })
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  },
  emits: ['infoFooter', 'selectCharacter', 'userInfo'],

  methods: {
    FetchInfoCharacter() {
      this.loading = true

      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8104150c071ae724664587cc892ac68f&hash=da2e861faf5b55afaf8f3339a879117c&nameStartsWith=${this.nameCharacter}`
      )
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            this.characters = data.data.results
              .filter((character) => this.hasValidThumbnail(character))
              .slice(0, 10)
            console.log(this.characters)
            this.loading = false
            this.searchPerformed = true

            // Reset the input field
            this.nameCharacter = ''
          })
        }, 2500)
        .catch((error) => {
          console.error('Error fetching data:', error)

          this.loading = false
          this.searchPerformed = true
        })
    },
    hasValidThumbnail(character) {
      const genericThumbnailPath =
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
      return (
        character.thumbnail &&
        character.thumbnail.path !== genericThumbnailPath &&
        character.thumbnail.extension
      )
    },
    selectCharacter(character) {
      // Emit an event with the selected character ID
      this.$emit('selectCharacter', character)
    },
    enlargeImage(event) {
      // Enlarge the image when hovered
      event.currentTarget.style.transform = 'scale(1.2)'
      event.currentTarget.style.cursor = 'pointer'
    },

    resetImage(event) {
      // Reset the image when mouseout
      event.currentTarget.style.transform = 'scale(1)'
      event.currentTarget.style.cursor = 'default'
    },
  },
  data() {
    return {
      nameCharacter: '',
      characters: [],
      textPlaceHolder: 'Iron Man..',
      initialCharacters: null,
      footer: '',
      loading: false,
      searchPerformed: false,
    }
  },
  computed: {
    nameToTitle() {
      return `${this.userProp || ''}`
    },
  },
}
</script>

<template>
  <section class="hero-section"></section>

  <div class="container main-content flex">
    <!-- Reviews -->
    <div class="reviews">
      <Reviews :user-prop="userProp" />
    </div>
    <div>
      <div class="container py-4 px-3 mx-auto">
        <p>{{ wellcomeMessage }}</p>
        <h1 class="text-center">
          Find Your Favorite Hero {{ nameToTitle || '' }} !!
        </h1>
        <div>
          <form
            action=""
            id="form"
            @submit.prevent="FetchInfoCharacter"
            class="input-group mb-1"
            size="s"
          >
            <input
              class="input-field form-control"
              :placeholder="textPlaceHolder"
              type="text"
              v-model="nameCharacter"
            />
            <button class="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
      <!-- Loading spinner -->
      <div v-if="loading" id="loading" class="la-ball-atom la-dark">
        <div></div>

        <div></div>

        <div></div>

        <div></div>
      </div>
      <!-- Search Result -->

      <section v-if="characters !== null">
        <ul v-if="characters.length > 0">
          <p>Your results:</p>
          <li v-for="character in characters" class="container-card">
            <img
              v-if="character && character.thumbnail"
              :src="
                character.thumbnail.path + '.' + character.thumbnail.extension
              "
              alt=""
              class="character-image"
            />
            <h2>{{ character.name }}</h2>
            <p>{{ character.description }}</p>
            <a
              v-if="character && character.urls && character.urls[2]"
              :href="character.urls[2].url"
              target="_blank"
              >COMICS Info</a
            >
          </li>
        </ul>
        <div v-if="searchPerformed">
          <p>No matching characters found.</p>
        </div>
      </section>

      <!-- Inicial Characters -->
      <div id="marvel-container">
        <ul class="row">
          <div class="initial-info">
            <li
              v-for="character in initialCharacters"
              class="col-md-3"
              @click="selectCharacter(character.id)"
            >
              <div
                class="character-image-container"
                @mouseover="enlargeImage"
                @mouseout="resetImage"
              >
                <img
                  v-if="character && character.thumbnail"
                  :src="
                    character.thumbnail.path +
                    '.' +
                    character.thumbnail.extension
                  "
                  alt=""
                  class="character-image"
                />
              </div>
              <h2>{{ character.name }}</h2>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}

h2 {
  font-size: 16px;
  text-align: center;
}
.character-image {
  max-height: 200px;
  width: auto;
  max-width: 250px;
  border-radius: 10px;
}

.flex {
  display: flex;
}
.reviews {
  border: 1px solid black;
  border-radius: 20px;
  padding: 1em;
  margin: 2em 1.5em 0 0;
}
/* initial cards - container */
.marvel-container {
  padding-bottom: 12em;
}

.character-image-container {
  position: relative;
}

.character-image-container:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.initial-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}

.initial-info li {
  flex: 0 0 30%;
  margin-bottom: 16px;
}

/* Search Cards */
.container-card {
  background-color: red;
  border: 2px solid black;
  max-width: 600px;
  margin: auto;
  margin-bottom: 1.5em;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}

.container-card a {
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 0.5em;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}
.container-card a:hover {
  border: 2px solid black;
  background-color: transparent;
  color: black;
}
.container-card ul {
  gap: 1.5em;
  list-style: none;
  margin: 0 10em;
}
.container-card li {
  max-width: 300px;
  margin-bottom: 16px;
}

/* Hero section */

.hero-section {
  background-image: url('../assets/hero__img.jpg');
  height: 45vh;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 2em;
}
</style>
