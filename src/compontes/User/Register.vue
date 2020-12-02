<template>
  <div id="register">
    <div id="register_left" ref="left_div" ></div>
    <div id="register_right">
      <div id="main_register_header">
        <a style="margin-right: 105px;">简体中文</a>
        <a>邮箱联系</a>
        <a >意见反馈</a>
      </div>
      <div id="main_register_from">
        <div id="main_register_from_header">
          <h1>欢迎注册</h1>
          <p>Welcome to register this</p>
        </div>
        <div id="main_register_from_con">
            <input type="text" placeholder="账号/手机号"/>
            <input type="password" placeholder="密码"/>
            <input type="text" placeholder="邮箱"
            style="margin-bottom: 25px;"
            />
            <input type="button" value="注册" class="regis"
            />
        </div>
      </div>
      <div id="main_register_footer">
        <input type="checkbox"/>
        <p>我已阅读相关事项</p>
      </div>
      <p style="margin-top: 50px;
      margin-left: 22%;font-size: 15px;font-weight: 500;
      "
      >---This is form 408 in one place---</p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        listPicture:[
          {url:require('../../assets/1.jpg')},
          {url:require('../../assets/2.jpg')},
          {url:require('../../assets/3.jpg')},
          {url:require('../../assets/4.jpg')}
        ]
      }
    },
    methods:{
      changePicture(index){
        // alert(this.$refs.left_div.style.backgroundColor)
        this.$refs.left_div.style.backgroundImage="url("+this.listPicture[index].url+")"
      }
    },
    mounted() {
      var index=0
      setInterval(()=>{
        // var index= index>4 ? index=0 : true
        if(index>=4){index=0}
        this.changePicture(index)
        index++;
      },3000)
    }
  }
</script>

<style lang="scss" scoped="scoped">
  #main_register_footer{
    width: 39%;
    height: 30px;
    // background-color: red;
    margin-left: 15%;
    input{
      height: 100%;
      width: 18px;
      font-size: 18px;
      font-weight: 500;
    }
    p{
      float: right;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .regis{
   background-color: #07b2ffd9;
   color: white;
  }
  .regis:hover {
    background-color: #2196f3;
  }
  #main_register_from_con{
    margin-top: 25px;
    margin-left: 15%;
    width: 39%;
    height: 50%;
    // background-color: red;
    input{
      outline: none;
      border: 1px #e6e4e4 solid;
      width: 100%;
      height: 42px;
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 500;
      border-radius: 3px;
    }
  }
  #main_register_from{
    // height: 45%;
    width: 100%;
  }
  #main_register_from_header{
    height: 20%;
    width: 70%;
    margin: 0 auto;
    h1,p{
      font-weight: 500;
    }
    p{
      font-size: 30px;
      color: #bcb8b8;
    }
  }
  #main_register_header{
    width: 100%;
    height: 10%;
    // background-color: red;
    a{
      text-decoration: none;
      display: block;
      float: right;
      font-size: 22px;
      margin: 25px 15px;
      color: #bcb8b8;
      opacity: 1;
    }
    a:hover{
      color: #a39d9d;
    }
  }
  #register_right{
    width: 70%;
    height: 100%;
    float: right;
/*    background-color: blue; */
  }
  #register_left{
    height: 100%;
    width: 30%;
    float: left;
    background-image: url(../../assets/1.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  #register{
    width: 100%;
    height: 100%;
   }
</style>
