const { add, nul } = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(nul(20, 30));

require('./css/nomal.css')
require('./css/special.less')

document.writeln('我是less样式')

import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
