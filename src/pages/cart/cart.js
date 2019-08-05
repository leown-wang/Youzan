import "./cart.css"
import "./cart_base.css"
import "./cart_trade.css"

import axios from 'axios'
import Vue from 'vue'
import url from 'js/api.js'
// import mixin from 'js/mixin.js'

new Vue({
  el:'.container',
  data:{
    lists:null,

  },
  created() {
    this.getLists()
   },
  methods:{
    getLists(){
      axios.get(url.cartLists).then(res=>{
        this.lists = res.data.cartList
      })
    }
  },
  components:{

  }
})
