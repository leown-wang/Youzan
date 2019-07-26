import "css/common.css"
import "./search.css"

import axios from 'axios'
import Vue from 'vue'
import url from 'js/api.js'

import qs from 'qs'
import velocity from 'velocity-animate'


let {keyword,id} = qs.parse(location.search.substr(1))

new Vue({
  el:'#app',
  data:{
    searchList : null,
    keyword,
    isShow:false,

  },
  created() {
    this.getSearchList()

  },
  methods:{
    getSearchList(){
      axios.get(url.searchList,{keyword,id}).then(res =>{
        this.searchList = res.data.lists
      })
    },
    move() {
      if(document.documentElement.scrollTop > 100) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    toTop() {
      velocity(document.body, "scroll", {duration: 1000})
    }
  },

})
