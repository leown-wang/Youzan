import "css/common.css"
import "./index.css"

import axios from 'axios'
import Vue from 'vue'
import url from 'js/api.js'


import { InfiniteScroll } from 'mint-ui';
import Foot from "components/Foot.vue";
Vue.use(InfiniteScroll);

new Vue({
  el:'#app',
  data: {
    lists: null,
    pageNum:1,
    loading:false,
    allLoaded:true,
    pageSize:6,
  },
  created() {
    this.getLists()
  },
  methods:{
    getLists(){
      if(!this.allLoaded) return
      this.loading = true
      axios.get(url.hotLists,{
        pageNum:this.pageNum,
        pageSize:this.pageSize,
      }).then(res=>{
        let curLists = res.data.lists
        if (curLists.length < this.pageSize){
          this.allLoaded = false
        }
        if(this.lists){
          this.lists = this.lists.concat(curLists)
        }else{
          this.lists = res.data.lists
        }
      })

      this.pageNum++
      this.loading = false
    }


  },
  components:{
    Foot:Foot
  }
})
