import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var app= createApp(App).use(store).use(router)

app.config.globalProperties.$filters = {
    currencyUSD(value) {
      return '$' + value
    },
 
    addTofavorite(){
      this.$store.state.products.push(
      {'name':this.$store.state.name ,
      'price':this.$store.state.price,
      'discrption':this.$store.state.discrption,
      'date':this.$store.state.date,
      'imgSrc':this.$store.state.imgSrc,
      'options':this.$store.state.options},
      );
    }
  }
  app.mount('#app')
