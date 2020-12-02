import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var state={
    wz:[
      {id:1,name:"www.baidu.com"},
      {id:2,name:"www.taobao.com"}
      // 'www.baidu.com','www.taobao.com'
    ],
}
var getters={
    getwww:(state)=>(vale)=>{
      console.log(vale)
      var newwz=[
      ]
      if(vale!=""){
          state.wz.forEach((items) =>{
            if(items.name.indexOf(vale)==0)
            {
              newwz.push(items.name)
            }
             // else{
             //   newwz="wu"
             // }报错
          })
       return newwz
      }else{
        return newwz
      }
    }
}
 const store = new Vuex.Store({
   state,
   getters
 })

 export default store
