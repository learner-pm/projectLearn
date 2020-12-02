<template>
  <div id="footer">
    <div class="footer_one">
        <div style="color: white;">
          <h3>关于我们</h3>
          <p style="padding-top: 5%; ">LearnKu 是终身编程者的知识社区</p>
          <p>保持好奇，刻意练习，每日精进</p>
          <a>
            <span>诞生的故事</span>
          </a>
        </div>
        <div >
          <h3>资源推荐</h3>
          <a>
            <span style="color: #f4f3f3;">社区使用指南</span>
          </a>
          <a>
            <span style="color: #f4f3f3;">文档撰写指南</span>
          </a>
        </div>
        <div>
          <h3>赞助商</h3>
          <p style="color: #f4f3f3;">111111</p>
        </div>
        <div style="border-right: 0px solid #f4f3f3; color: #f4f3f3;">
          <h3>其他信息</h3>
          <p style="padding-top: 2%;">联系站长</p>
          <p style="padding-top: 2%;">成为版主</p>
          <p style="padding-top: 2%;">所有社区</p>
          <p style="padding-top: 2%;">创建新论坛</p>
        </div>
    </div>
    <div class="footer_two">
          <p>网警备号：--------</p>
          <p>-----------------</p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
  .footer_two{
    width: 78%;
    height: 10%;
    // background-color: blue;
    margin: 0 auto;
    color: white;
    p{
      width: 100%;
      text-align: center;
    }
  }
  .footer_one{
    width: 78%;
    height: 60%;
    // background-color: blue;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f4f3f3;
    div{
      height: 88%;
      width: 25%;
      // background-color: pink;
      border-right: 1px solid #f4f3f3;
      position: relative;
      top: 6%;
      h3{
        padding-top: 8%;
        width: 100%;
        text-align: center;
        color: white;
      }
      p{
        width: 100%;
        height: 12%;
        text-align: center;
      }
      span{
        width: 100%;
        height: 13%;
        text-align: center;
        display: block;
        padding-top: 5%;
      }
    }
  }
  #footer{
    height: 300px;
    background-color: #1b1c1d;;
  }
</style>
