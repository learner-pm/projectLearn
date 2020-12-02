<template>
  <div id="header">
    <div class="header_one">
      <div>
        <img src="../assets/logo.png"/>
      </div>
        <button>
          <a href="#java">
           LT-Y-l
           <i class="el-icon-caret-bottom"></i>
          </a>
        </button>
    </div>
    <div class="header_two">
         <!-- <span  style="width: 20%;">
           <a href="#">Home</a>
         </span> -->
         <span>
           <a>往日
           <i class="el-icon-caret-bottom"></i>
           </a>
           <ul style="">
             <li>111111111</li>
             <li>222222222</li>
             <li>111111111</li>
             <li>222222222</li>
           </ul>
         </span>
         <span>
           <a>精选
           <i class="el-icon-caret-bottom"></i>
           </a>
           <ul style="padding-right: 15%;">
             <li>111111111</li>
             <li>222222222</li>
             <li>111111111</li>
             <li>222222222</li>
           </ul>
         </span>
         <span>
           <a>计划
           <i class="el-icon-caret-bottom"></i>
           </a>
           <ul style="padding-right: 20%;">
             <li>111111111</li>
             <li>222222222</li>
             <li>111111111</li>
             <li>222222222</li>
           </ul>
         </span>
    </div>
    <div class="header_three" style="height: 70%;">
          <form >
            <input type="text" placeholder="搜索" v-model="inputvlave" @click="flag=!flag"/>
          </form>
          <i class="el-icon-search"></i>
    </div>
        <ul style="position: absolute;" class="input_ul">
          <li v-for="item in vlue " @click="getInput(item)" v-show="flag">{{item}}</li>
        </ul>
    <div class="header_four">
      <div>
        <router-link to="/login" tag="a">
          <i class="el-icon-user"></i>
          登陆
        </router-link>

      </div>
      <div>
        <router-link to="/register" tag="a">
          <i class="el-icon-s-custom"></i>
          注册
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
  import store from '../vuex/store.js'
  export default{
    data(){
      return{
        inputvlave:'',
        flag:true
      }
    },
    methods:{
      getInput(item){
        this.inputvlave=item
        this.flag=!this.flag
      }
    },
    store,
    computed:{
      vlue:function(){
        return this.$store.getters.getwww(this.inputvlave)
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .input_ul{
    z-index: 999;
    width: 250px;
    background-color: white;
    border: 0px solid #a2a2a2;
    left: 39%;
    top: 6%;
    li{
      margin: 7px ;
      // background-color: blue;
      font-size: 18px;
    }
    li:hover{
      background-color: #a2a2a2;
    }
  }
  .header_one{
    // background-color: red;
    width: 8%;
    margin-left: 11%;
    div{
      float: left;
      height: 100%;
      width: 40%;
      // background-color: red;
     img{
       padding-top: 15%;
       padding-left: 15%;
       line-height: 50px;
       width: 70%;
       height: 70%;
     }
    }
    button{
      height: 100%;
      width: 60%;
      border: 0px solid white;
      background-color: white;
      outline: none;
      font-size: 16px;
      i{
        padding-left:0.375rem;
      }
    }
  }
  .header_two{
    // background-color: blue;
    margin-left: 2%;
    width: 17%;
    display: flex;
    justify-content: space-between;
    span{
      height: 100%;
      width: 30%;
      line-height: 40px;
      color: #777;
      i{
        padding-left: 0.6875rem;
      }
      ul{
        display: none;
        background-color: white;
        position: absolute;
        top: 6%;
        z-index: 999;
        color: black;
        padding-right: 5%;
        border: 1px solid #a2a2a2;
        border-radius: 3px;
        li{
          padding-left: 5px;
        }
      }
    }
    span:hover{
      background-color: #f4f3f3;
    }
    span:hover ul{
      display: block;
    }
  }
  .header_three{
    border: 1px solid #cecaca;
    border-radius: 20px;
    position: relative;
    top: 0.3125rem;
    background-color: white;
    width: 15%;
    margin-left: 1%;
    input{
      height: 70%;
      width: 80%;
      position: relative;
      left: 0.9375rem;
      outline: none;
      margin-top: 0.3125rem;
      border: 0px solid white;
      font-size: 16px;
    }
    i{
      height: 100%;
      width: 10%;
      line-height: 1.875rem;
      padding-right: 2%;
    }
  }
  .header_four{
    // background-color: blue;
    width: 9%;
    margin-left:25% ;
    div{
      height: 80%;
      width: 40%;
      float: right;
      position: relative;
      top: 10px;
      i{
        font-size: 1rem;
        padding-right: 1px;
      }
    }
  }
  #header{
    width: 100%;
    height: 45.2px;
    border-bottom: 1px solid #cecaca;
    background-color: white;
    div{
      display: flex;
      justify-content: space-between;
      height: 100%;
      float: left;
    }
  }
</style>
