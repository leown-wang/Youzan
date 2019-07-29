import "./goods.css"
import "./goods_base.css"
import "./goods_common.css"
import "./goods_custom.css"
import "./goods_mars.css"
import "./goods_sku.css"
import "./goods_theme.css"

import axios from 'axios'
import Vue from 'vue'
import url from 'js/api.js'

import qs from 'qs'
import velocity from "velocity-animate";

let {id} = qs.parse(location.search.substr(1))

let detailTab = ['商品详情','本店成交']

new Vue({
  el:'#app',
  data:{
    details: null,
    detailTab:detailTab,
    tableIndex:0,
    dealList:null
  },
  created() {
    this.getDetails()

  },
  methods:{
    getDetails(){
      axios.get(url.details,{id}).then(res=>{
        this.details = res.data.data
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
    }
  },

})
