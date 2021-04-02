<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p v-if="isConnected">Socket is connected</p>
    <p v-else>Socket is disconnected</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      isConnected: false
    }
  },
  sockets:{
    connect(){
      this.isConnected = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
