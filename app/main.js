import Vue from 'nativescript-vue'
import App from './components/App'
import RadExample from './components/RadExample';
import VueDevtools from 'nativescript-vue-devtools'
import RadListView from "nativescript-ui-listview/vue";

Vue.use(RadListView);

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  render: h => h('frame', [h(RadExample)])
}).$start()
