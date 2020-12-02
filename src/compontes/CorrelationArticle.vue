<template>
  <div class="fb">
    <div style="height: 55px;">
      <span style="height: 50px;position: relative;top: 10px;left: 20px;">本文为协同翻译文章，如您发现瑕疵请点击「改进」按钮提交优化建议</span>
      <el-button
      icon="el-icon-s-promotion"
      style="position: relative;left: 26%;top: 15%;"
      >纠错改进</el-button>
    </div>
    <div style="height: 60px;">
       <!-- <i style="position: relative;top: 30%;left: 20px;display: block;" class="el-icon-magic-stick"></i> -->
       <span style="position: relative;top: 30%;left: 20px;display: block;float: left;width: 160px;height: 40px;">
         <i class="el-icon-magic-stick"></i>
         6人点赞</span>
       <img style="position: relative;top: 15%;left: 0%;width: 40px;height: 40px;
            border-radius: 50%;float: left;margin-right: 10px;"
            v-for="item in imgList" :key="item.id"
           :src="item.url"/>
    </div>
    <div style="height: 150px;" class="sell_picture">
        <div class="sell_picture_left" style="height: 80%;width: 50%; background-color: red;position: relative;top: 10%;left: 0px;">
         <!-- <a>
            <img style="height: 80%;width: 20%;position: relative;top: 5%;" src="../assets/1.png"/>
          </a>
          <h3>
            45
          </h3> -->
          <div style="width: 40%;position: relative;top: 0%;left: 0px;">
              <a>
                 <img style="height: 100%;width:60%;position: relative;top: 0%;left: 20%;" src="../assets/1.png"/>
               </a>
          </div>
          <div style="width: 60%;position: relative;top: 0%;left: 0px;">
              <h3>《L01 基础入门》</h3>
              <p>
                我们将带你从零开发一个项目并部署到线上，本课程教授 Web 开发中专业、实用的技能，
                如 Git 工作流、Laravel Mix 前端工作流等。
              </p>
          </div>
        </div>
        <div class="sell_picture_right" style="height: 80%;width: 50%;position: relative;top: 10%;left: 0px;">
          <div style="width: 40%;position: relative;top: 0%;left: 0px;">
              <a>
                 <img style="height: 100%;width:60%;position: relative;top: 0%;left: 20%;" src="../assets/1.png"/>
               </a>
          </div>
          <div style="width: 60%;position: relative;top: 0%;left: 0px;">
              <h3>《L01 基础入门》</h3>
              <p>
                我们将带你从零开发一个项目并部署到线上，本课程教授 Web 开发中专业、实用的技能，
                如 Git 工作流、Laravel Mix 前端工作流等。
              </p>
          </div>
        </div>
    </div>
    <div class="the_last" style="height: 200px;">
        <div style="width: 94%; height: 50px;
                    position: relative;top: 10%;left: 3%;
                    display: flex;justify-content: space-between;">
          <h3 style="line-height: 50px;">
            <i class="el-icon-check"></i>
            推荐文章
          </h3>
          <span style="line-height: 50px;">
            更对推荐
          </span>
        </div>
        <ul>
          <li style="display: flex;justify-content: space-between;border-bottom: 1px solid #a2a2a2;">
            <p class="li_span_left">
              <img src="../assets/1.jpg"/>
              <span style="background-color: rgb(223,205,205);">博客</span>
              <span>基于注解的PHP枚举类实现</span>
            </p>
            <p class="li_span_right">
              <i class="el-icon-thumb"></i><span>10</span><span>/</span>
              <i class="el-icon-chat-dot-round"></i><span>11</span><span>|</span><span>1年前</span>
            </p>
          </li>
          <li style="display: flex;justify-content: space-between;">
            <p class="li_span_left">
              <img src="../assets/1.jpg"/>
              <span style="background-color: rgb(223,205,205);">博客</span>
              <span>基于注解的PHP枚举类实现</span>
            </p>
            <p class="li_span_right">
              <i class="el-icon-thumb"></i><span>10</span><span>/</span>
              <i class="el-icon-chat-dot-round"></i><span>11</span><span>|</span><span>1年前</span>
            </p>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        imgList:[
          {id:1,url:require('../assets/1.jpg')},
          {id:2,url:require('../assets/2.jpg')},
          {id:3,url:require('../assets/3.jpg')},
          {id:4,url:require('../assets/4.jpg')},
          {id:5,url:require('../assets/5.jpg')},
          {id:6,url:require('../assets/1.jpg')},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .li_span_right{
    height: 50%;
    position: relative;
    top: 30%;
    i,span{
      padding-right: 5px;
      font-size: 12px;
    }
  }
  .li_span_left{
    height: 100%;
    width: 70%;
    img{
      height: 35px;
      width: 35px;
      position: relative;
      top: 10px;
      left: 5px;
    }
    span{
      position: relative;
      top: 0px;
      left: 8px;
    }
  }
  .the_last{
    ul{
      width: 94%;
      height: 110px;
      position: relative;top: 10%;left: 3%;
      li{
        color: #a2a2a2;;
        width: 100%;
        height: 48%;
      }
      li:hover{
        background-color: #f4f3f3;
      }
    }

  }
  .sell_picture_left,.sell_picture_right{
    div{
      height: 100%;
      float: left;

    }
  }
  .sell_picture{
    div{
      float: left;
    }
  }
  .fb{
    // height: 500px;
    width: 100%;
    // background-color: red;
    div{
      width: 58%;
      position: relative;
      left: 11%;
      border-radius: 5px;
      background-color: white;
      margin-bottom: 1%;
    }
  }

</style>
