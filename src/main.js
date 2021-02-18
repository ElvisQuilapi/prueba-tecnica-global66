import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faStar, faList, faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faStar, faList, faSearch, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
});
