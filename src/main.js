import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
const socketConnection = SocketIO(process.env.VUE_APP_API_URL);

Vue.use(new VueSocketIO({
    debug: true,
    connection:socketConnection 
  })
);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
