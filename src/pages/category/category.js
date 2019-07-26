import "css/common.css"
import "./category.css"

import axios from 'axios'
import Vue from 'vue'
import url from 'js/api.js'

import Foot from "components/Foot.vue";
new Vue({
  el:'#app',
  data:{
    topLists:null,
    topIndex:0,
    subData:null,
    rankData:null,

  },
  created(){
    this.getTopList()
    this.getSubList(0,0)
  },
  methods:{
    getTopList(){
      axios.get(url.topList).then(res=>{
      this.topLists = res.data.lists
    })
  },
    getSubList(id,index){
      this.topIndex = index
      if (index ==0){
        axios.get(url.rank).then(res=>{
          this.rankData = res.data.data
        })
      }
      else (
        axios.get(url.subList).then(res=>{
          this.subData = res.data.data
        })
      )

    },
    toSearch(list){
      location.href = `search.html?keyword=${list.name}&id=${list.id}`
    }
  },
  components:{
    Foot:Foot,
  }
})
