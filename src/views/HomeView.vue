<script>
export default {
  data() {
    return {
      userName: '',
    }
  },
  emits: ['userInfo'],
  methods: {
    emitUserInfo() {
      this.$emit('userInfo', { userName: this.userName })
      console.log(this.userName)

      //To go to Marvel page
      this.$router.push({ name: 'Marvel' })
    },
  },
}
</script>

<template>
  <div class="container main-content flex">
    <div class="image">
      <img src="../assets/marvel-heroes.png" />
    </div>
    <div class="info">
      <h1>Find My SUPER HERO !</h1>
      <p>Wellcome {{ userName || 'Anomyn User..' }}!!</p>
      <div>
        <p>Provide you name for customize your experience!</p>

        <input
          type="text"
          v-model="userName"
          value="userName"
          placeholder="write a user name"
        />
      </div>
      <input
        type="button"
        value="START"
        class="btn btn-primary"
        @click="emitUserInfo"
      />
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-transform: uppercase;
  font-family: Tahoma;
  font-weight: 400;
}
.flex {
  display: flex;
}
img {
  height: 520px;
  width: auto;
}
.image {
  margin: 3em 0 0 -7em;
}
.container {
  max-width: 900px;
}
input[type='button'] {
  margin: 2em auto;
  margin-left: 2em;
  padding: 0.6em 4em;
}

input[type='text'] {
  margin: auto;
}
.btn {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.3em;
}
.info {
  margin-top: 10vh;
  min-width: 450px;
  margin-left: 3.5em;
}
.info p {
  margin-top: 5em;
}
</style>
