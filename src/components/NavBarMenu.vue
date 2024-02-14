<script>
export default {
  props: {
    userProp: String,
  },
  data() {
    return {
      menu_text: 'Menu',
      ifMenuClicked: false,
    }
  },
  methods: {
    menuClick() {
      this.ifMenuClicked = !this.ifMenuClicked
      this.menu_text = this.ifMenuClicked ? 'X' : 'Menu'
    },
  },
  computed: {
    greeting() {
      return `Hej ${this.userProp || 'Anomyn User..'}`
    },
  },
}
</script>

<template>
  <div class="nav-bar">
    <div>
      <p v-if="ifMenuClicked === false" @click="menuClick">MENU</p>
      <img
        class="icon-menu"
        v-else
        src="../assets/circle-xmark-solid.svg"
        @click="menuClick"
      />

      <nav v-show="ifMenuClicked">
        <ul>
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/marvel">MARVEL</router-link></li>
          <li><router-link to="/about">ABOUT</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="greeting">
      <h2 v-if="$route.name !== 'Home'">{{ greeting }}</h2>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  color: white;
  /* border: 1px solid white; */
  max-width: 200px;
  max-width: 200px;
  /* background-color: rgba(0, 0, 138, 0.5); */
  margin-top: 5px;
  padding: 1em;
}

a,
h2,
p {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
.icon-menu {
  height: 25px;
  margin: 10px 20px;
  /* padding-top: 10px; */
}
.nav-bar {
  background-color: black;
  height: 50px;
  display: flex;
}

p {
  padding-top: 10px;
  margin: 0 20px;
}
.greeting {
  padding-top: 0.6em;
}
</style>
