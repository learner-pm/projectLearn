<template>
  <div id="login">
    <div class="one">
      <div style="margin-left: 50px;"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <!-- <div class="go_one"></div>
      <div class="go_two"></div>
      <div class="go_thr"></div> -->
    </div>
    <div class="two">
      <h1>Welecome to login this</h1>
      <div class="login">
        <input type="text" placeholder="账号/手机号"
        style="margin-top: 10%;"
        />
        <input type="password" placeholder="密码"/>
        <input type="button" value="登陆" class="login_go"/>
      </div>
    </div>

    <div>

    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
   },
   mounted() {

   }
 }
</script>

<style scoped lang="scss">
  .go_thr{
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: pink;
    animation: godivthr 4s infinite linear;
  }
  @keyframes godivthr{
    0%{top: 10%;left:10%;}
    25%{top: 10%;left:80%;}
    50%{top: 80%;left:80%;}
    70%{top: 80%;left:10%;}
    100%{top: 10%;left:10%;}
  }
  .go_two{
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: blue;
    animation: godivtwo 4s infinite linear;
  }
  @keyframes godivtwo{
    0%{top: 30%;left:30%;}
    25%{top: 30%;left:60%;}
    50%{top: 60%;left:60%;}
    70%{top: 60%;left:30%;}
    100%{top: 30%;left:30%;}
  }
  .go_one{
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    animation: godivone 5s infinite linear;
  }
  @keyframes godivone{
    0%{top: 0%;left:0%;}
    25%{top: 0%;left:90%;}
    50%{top: 90%;left:90%;}
    70%{top: 90%;left:0%;}
    100%{top: 0%;left:0%;}
  }
  .one{
    float: left;
    width: 64%;
    height: 100%;
    // background-color: red;
    opacity: 0.8;
    div{
      height: 10px;
      width: 10px;
      margin-right: 25px;
      background-color: red;
      float: left;
      border-radius: 50%;
      position: relative;
      top:0%;
      animation:  onediv 4s infinite linear;
    }
  }
  @keyframes onediv{\
    0%{ top:0%;}
    25%{top:50% }
    50%{top:90%}
    70%{top:50%}
    100%{top: 0%;}
  }
  .login_go{
    background-color: #07b2ffd9;
    color: white;
  }
  .login_go:hover{
    background-color: #2196f3;
  }
  .two{
     width: 36%;
     height: 100%;
     float: right;
     h1{
       color: #bcb8b8;
       font-size: 30px;
       font-weight: 500;
       margin-top: 10%;
     }
  }
  .login{
    width: 60%;
    height: 200px;
    opacity: 0.7;
    input{
      width: 100%;
      height: 40px;
      border: 1px  #e6e4e4  solid;
      border-radius: 4px;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 15px;
    }
  }
  #login{
    width: 100%;
    height: 100%;
    background-image: linear-gradient(141deg,#9fb8ad 0%,#1fc8db 51%,#2cb5e8 75%);
  }
</style>
