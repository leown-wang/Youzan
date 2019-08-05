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
    allChecked: true,
    total:0
  },
  computed: {
    selectLists() {
      if(this.lists&&this.lists.length){
        let arr = []
        let total = 0
        this.lists.forEach(shop => {
          shop.goodsList.forEach(good => {
            if(good.checked) {
              arr.push(good)
              total += good.price * good.number
            }
          })
        })
        this.total = total
        return arr
      }
      return []
    },
  },
  created() {
    this.getLists()
   },
  methods:{
    getLists(){
      axios.get(url.cartLists).then(res=>{
        let lists = res.data.cartList
        lists.forEach(shop =>{
          shop.checked = true
          shop.goodsList.forEach(good=>{
            good.checked = true
          })
        })
        this.lists = lists
      })
    },
    selectGood(good,shop){
      good.checked = !good.checked
      if(good.checked ==false) this.allChecked == false
      shop.checked = shop.goodsList.every(good =>{
        return good.checked
      })
      this.allChecked = this.lists.every(shop=>{
        return shop.goodsList.every(good =>{
          return good.checked
        })
      })
    },
    selectShop(shop){
      shop.checked = !shop.checked
      if (shop.checked == false) this.allChecked == false
      shop.goodsList.forEach(good => {
        good.checked = shop.checked
      })
      this.allChecked = this.lists.every(shop=>{
        return shop.checked
      })
    },
    selectAll(){
      this.allChecked = !this.allChecked
      this.lists.forEach(shop=>{
        shop.checked = this.allChecked
        shop.goodsList.forEach( good=>{
          good.checked = this.allChecked
        })
      })
    }
  },
  components:{

  }
})
