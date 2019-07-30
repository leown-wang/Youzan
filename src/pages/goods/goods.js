import "./goods.css"
import "./goods_base.css"
import "./goods_common.css"
import "./goods_custom.css"
import "./goods_mars.css"
import "./goods_sku.css"
import "./goods_theme.css"
import "./goods_transition.css"


import axios from 'axios'
import Vue from 'vue'
import url from 'js/api.js'

import Swipe from 'components/Swipe.vue'
import qs from 'qs'
import velocity from "velocity-animate";

let {id} = qs.parse(location.search.substr(1))

let detailTab = ['商品详情','本店成交']

new Vue({
  el:'#app',
  data:{
    id,
    details: null,
    detailTab:detailTab,
    tableIndex:0,
    dealList:null,
    bannerLists:null,
    skuType: null,
    showSku:false,
    skuNumber:1,
    isAddcart:false,
    showAdded:false,
  },
  created() {
    this.getDetails()

  },
  methods:{
    getDetails(){
      axios.get(url.details,{id}).then(res=>{
        this.details = res.data.data
        this.bannerLists = []
        this.details.imgs.forEach(item=>{
          this.bannerLists.push({
            clickUrl:'',
            img:item,
          })
        })
      })
    },
    getDeal(){
      axios.get(url.deal,{id}).then(res=>{
        this.dealList = res.data.data.lists
      })
    },
    changeTab(index){
      this.tableIndex = index
      if (index == 1){
        this.getDeal()
      }
    },
    chooseSku(x){
      this.skuType = x
      this.showSku = true
    },
    changeSkuNum(x){
      if (x<0 &&this.skuNumber===1) return;
      this.skuNumber+=x
    },
    addCart() {
      axios.post(url.addCart, {id, number: this.skuNum}).then(res => {
        if(res.data.status === 200 ){
          this.isAddcart = true
          this.showSku = false
          this.showAdded = true
          setTimeout(() => {
            this.showAdded = false
          },1000)
        }
      })
    }
  },
  components:{
    Swipe
  },
  watch:{
    showSku(val,oldVal){
      document.body.style.overflow = val ? 'hidden':'auto'
      document.querySelector('html').style.overflow = val ? 'hidden':'auto'
      document.body.style.height =  val ? 'hidden':'auto'
      document.querySelector('html').style.height = val ? 'hidden':'auto'
    }
  }

})
