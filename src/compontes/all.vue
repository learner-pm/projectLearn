<template>
  <div id="all">
      <Header></Header><!-- 头部层 -->
      <div id="main">
        <div id="main_left">
          <ul class="ul_left" id="ul_left">
            <li style="border-bottom: 1px solid #a2a2a2;
            height: 70px;"><i class="el-icon-aim" ></i><p>6</p> </li>
            <li  style="border-bottom: 1px solid #a2a2a2;
            height: 45px;"><i class="el-icon-star-off"></i> </li>
            <li style="border-bottom: 1px solid #a2a2a2;
            height: 70px;"><i class="el-icon-chat-square"></i><p>3</p> </li>
            <li  style="height: 45px;"><i class="el-icon-s-promotion"></i> </li>
          </ul>
          <div class="main_left_one">
            <h3>LLTT--YY</h3>
            <br />
            <hr />
            <div class="main_left_one_picture">
               <el-carousel :interval="4000" type="card" height="200px">
                   <el-carousel-item v-for="item in picture" :key="item.id">
                     <img :src="item.url"/>
                   </el-carousel-item>
               </el-carousel>
            </div>
          </div>
          <div class="main_left_two">
            <p >Make haste in doing good, restrain your mind from evil. Whosoever is slow in doing well,his
            mind delights in evil?</p>
            <p>-及时行善，以免你的心里再起坏念头。凡是不能及时行善的人，内心常会生起恶念。</p>
            <p>As from a heap of flowers many a garland is made even so many good
               deeds should be done by one born a mortal.</p>
            <p>
             -人生难免一死，应趁有生之年多做一点善事，宛如从一堆花朵做成许多花圈。</p>
            <p>
              Be tolerant among the intolerant, gentle among the violent,
              and free from greed among the greedy.</p>
            <p>
              -在急躁的人中要容忍，在凶暴的人中要温和，在贪婪的人口中要慷慨。</p>
            <p>
              As a beautiful flower that is full of hue but lacks fragrance,
              even so fruitless is the well-spoken word of one who does not practice it.
              </p>
            <p>
              -只说好话而没有实行是毫无结果的，这好比一朵美丽的花，徒具颜色而没有芳香。</p>
            <p>
              -所谓爱，就是一个人对一个人的全部付出。
            </p>
          </div>
<!--          <div class="main_left_three">
            <br />
            <h3>安装包</h3>
            <br />
            <hr />
            <p>可以通过 composer 在终端中运以下命令来安装包:</p>
          </div>
          <div class="main_left_three">
            <br />
            <h3>创建第一个枚举</h3>
            <br />
            <hr />
            <p>可以通过 composer 在终端中运以下命令来安装包:</p>
          </div>
          <div class="main_left_three">
            <br />
            <h3>创建第一个枚举</h3>
            <br />
            <hr />
            <p>可以通过 composer 在终端中运以下命令来安装包:</p>
          </div>
          <div class="main_left_three">
            <br />
            <h3>创建第一个枚举</h3>
            <br />
            <hr />
            <p>可以通过 composer 在终端中运以下命令来安装包:</p>
          </div>
          <div class="main_left_three">
            <br />
            <h3>创建第一个枚举</h3>
            <br />
            <hr />
            <p>可以通过 composer 在终端中运以下命令来安装包:</p>
          </div>
          <div class="main_left_three">
            <br />
            <h3>创建第一个枚举</h3>
            <br />
            <hr />
            <p>可以通过 composer 在终端中运以下命令来安装包:</p>
          </div> -->
        </div>
        <div id="main_right">
            <div class="main_right_one">
                <el-button
                  icon="el-icon-message-solid"
                >订阅我把</el-button>
                <p>翻译发布时,您将收到即时通知</p>
            </div>
            <div class="main_right_two">
                <p style="height: 40%;padding-top:0;padding-left: 35%;
                line-height: 30px;">文章译者</p>
                <hr />
                <p style="height: 60%;">
                  <span style="margin-left: 5%;">
                      <img src="../assets/1.jpg"/>
                  </span>
                  <span><img src="../assets/2.jpg"/></span>
                  <span><img src="../assets/3.jpg"/></span>
                  <span><img src="../assets/4.jpg"/></span>
                  <span><img src="../assets/5.jpg"/></span>
                  <span  style="margin-right: 5%;"><img src="../assets/1.jpg"/></span>
                </p>
            </div>
            <div class="main_right_three">
              <el-button
              icon="el-icon-s-promotion"
              style="border: 1px solid orangered;color: orangered;"
              >纠错改进</el-button>
            </div>
            <div style="height: 70px;">
              广告位招租
            </div>
            <div style="height: 70px;">
              广告位招租
            </div>
            <!-- <div class="main_right_last" id="main_right_last">
               <ul>
                 <li style="background-color: #eff1f1;">安装包</li>
                 <li :class="{'bColor':liIndex[0].id}" >创建第一个枚举</li>
                 <li :class="{'bColor':liIndex[1].id}" >把值储存在数据库中</li>
                 <li :class="{'bColor':liIndex[2].id}" >在操作中使用枚举</li>
                 <li :class="{'bColor':liIndex[3].id}" >显示枚举</li>
                 <li :class="{'bColor':liIndex[4].id}" >验证方式</li>
                 <li :class="{'bColor':liIndex[5].id}" >结束</li>
               </ul>
            </div> -->
        </div>
      </div>

      <CorrelationArticle></CorrelationArticle><!-- 中间推广 -->
      <Comment></Comment><!-- 评论层 -->
      <div class="last">
        <div style="height: 200px;">

        </div>
      </div>
      <Footer></Footer> <!-- 底部 -->
      <el-button icon="el-icon-arrow-up" circle
       style="position: fixed;bottom: 10%;right: 5%;"
       id="go_top" @click="goTop"
      ></el-button>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  import CorrelationArticle from './CorrelationArticle.vue'
  import Comment from './Comment.vue'
  export default{
    data(){
      return{
        picture:[
          {id:1,url:require('../assets/1.jpg')},
          {id:2,url:require('../assets/2.jpg')},
          {id:3,url:require('../assets/3.jpg')},
          {id:4,url:require('../assets/4.jpg')}
        ],
        list:[
            {id:0,name:'邓智斌',conton:"---4081"},
            {id:1,name:'彭茂',conton:"---4081"}
          ],
          scrollTop:'',
          liIndex:[
            {id:""},{id:""},{id:""},{id:""},{id:""},{id:""}
          ]
        }
    },
    watch:{
         scrollTop(old,newls){
            if(newls ==600){
               let right=document.getElementById('main_right_last')
               right.style.position="fixed"
               right.style.top="2%"
               right.style.width="18.1%"
               right.style.height="41.5%"
          }
        // if(scrollTop==600){
        //    let right=document.getElementById('main_right_last')
        //    right.style.position="fixed"
        //    right.style.top="2%"
        //    right.style.width="18.1%"
        //    right.style.height="41.5%"
        }
    },
    methods:{
      goul(){
        //900 1100
        window.scrollTo(0,1100)
      },
      go_ul(){
        let right=document.getElementById('main_right_last')
        let li=right.getElementsByTagName('li')
        for(let i=0;i<li.length;i++){
          li[i].index=i
          li[i].onclick=function(){
           // window.scrollTo(0,900+li[i].index*100)
           console.log('1')
          }

        }
      },
      goTop(){
        setTimeout(()=>{
          // document.body.scrollTop=100;这样无法回到顶部
          window.scrollTo(0,0)//这样可以。对于window
        },100)
      },
      getL(){
        window.scrollTo(0,800)
      },
      handleScroll() {
      // var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//浏览器不同
      //         console.log(scrollTop)
      //         console.log("1")
          this.get()
      },
      get(){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//浏览器不同
        console.log(scrollTop)
        if(scrollTop>=400){
          let go_top=document.getElementById('go_top')
          go_top.style.display="block"
        }
        else{
          let go_top=document.getElementById('go_top')
          go_top.style.display="none"
        }
        if(scrollTop>=90){
          let ul_left=document.getElementById('ul_left')
          ul_left.style.position="fixed"
          ul_left.style.left="6.4%"
          ul_left.style.top="3%"
        }
        else{
          let ul_left=document.getElementById('ul_left')
          ul_left.style.position="absolute"
          ul_left.style.left="-8%"
          ul_left.style.top="0%"
        }
        if(scrollTop>=900&&scrollTop<=2150){
            for(let i=0;i<this.liIndex.length;i++){
              this.liIndex[i].id=false
            }
            if(scrollTop>=1100&&scrollTop<=1200){this.liIndex[0].id=true}
            if(scrollTop>=1300&&scrollTop<=1400){this.liIndex[1].id=true}
            if(scrollTop>=1500&&scrollTop<=1600){this.liIndex[2].id=true}
            if(scrollTop>=1700&&scrollTop<=1800){this.liIndex[3].id=true}
            if(scrollTop>=1900&&scrollTop<=2000){this.liIndex[4].id=true}
            if(scrollTop>=2000&&scrollTop<=2100){this.liIndex[5].id=true}
           let right=document.getElementById('main_right_last')
           right.style.position="fixed"
           right.style.top="2%"
           right.style.width="18.1%"
           right.style.height="41.8%"
        }
        else{
          let right=document.getElementById('main_right_last')
          right.style.position="relative"
          right.style.width="100%"
          right.style.height="41.5%"
        }
      }
    },
    mounted() {
      this.go_ul()
     var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop//浏览器不同
     window.addEventListener('scroll',this.handleScroll,true)
     //添加事件柄句 scroll 设置true
     // console.log(document.body)
      var sotre =localStorage//储存localstorage的数据
      for(let i =0;i<this.list.length;i++){
           sotre.setItem(i,JSON.stringify(this.list[i]))
           console.log(sotre.getItem(i))
          //sotre.removeItem(i)
      }

      let right=document.getElementById('main_right_last')
      let li=right.getElementsByTagName('li')
      for(let i=0;i<li.length;i++){
        li[i].onclick=function(){
          li[i].index=i
          li[i].onclick=function(){
           window.scrollTo(0,900+li[i].index*200)
          }
        }
      }
      console.log(right.getElementsByTagName('li'))
    },
    components:{
      Header:Header,
      Footer:Footer,
      CorrelationArticle:CorrelationArticle,
      Comment:Comment
    }
  }
</script>

<style lang="scss" scoped="scoped">
  #go_top{
    display: none;
  }
  .ul_left{
    position: absolute;
    background-color: white;
    width: 42px;
    left: -8%;
    border:  0.5px solid #a2a2a2;
    border-radius: 3px;
    li{
      width: 100%;
      text-align: center;
      color: #a2a2a2;
      i{
        padding-top: 15px;
        font-size: 19px;
      }
      p{
        font-size: 14px;
      }
    }
  }
  .bColor{
    background-color: rgb(239, 241, 241);
  }
  .last{
    margin-top: 2%;
    width: 100%;
      // background-color: red;
      div{
        width: 58%;
        position: relative;
        left: 11%;
        background-color: white;
      }

  }
  .main_right_last{
    height: 35%;
    ul{
      width: 90%;
      height: 90%;
      position: relative;
      left: 5%;
      top: 5%;
      // background-color: red;
      li{
        width: 100%;
        height: 14%;
        // background-color: blue;
        line-height: 40px;
      }
      li:hover{
        background-color: #eff1f1;
      }
    }
  }
  .main_right_three{
    height: 10%;
    button{
      width: 50%;
      margin-top: 8%;
      margin-left: 25%;
      border: 1px solid #cecaca;
    }
  }
  .main_right_two{
    height: 10%;
    p{
      width: 100%;
      display: flex;
      justify-content: space-between;
      span{
        height: 65%;
        width: 13%;
        display: block;
        float: left;
        // background-color: red;
        margin-top: 4%;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .main_right_one{
    height: 12%;
    button{
      width: 90%;
      height: 40px;
      margin-top: 8%;
      margin-left: 5%;
      background-color: #ff5722;
      color: white;
    }
    p{
      font-size: 15px;
      padding-left: 9%;
      padding-top: 5%;
    }
  }
  .main_left_three{
    height: 200px;
    h3{
      padding-left: 5%;
    }
    p{
      width: 90%;
      padding-left: 5%;
      margin-bottom: 2%;
      margin-top: 2%;
      font-size: 16px;
    }
  }
  .main_left_two{
    // margin-top: 1px;
    height: 410px;
    // background-color: red;
    padding-top: 15px;
    p{
      width: 92%;
      padding-left: 5%;
      margin-bottom: 2%;
      font-size: 16px;
    }
  }
  .main_left_one_picture{
      //background-color: blue;
      height: 250px;
      padding-top: 15px;
  }
  .el-carousel__item img {
     width: 100%;
     height: 100%;
   }
  .main_left_one{
    border-bottom: 1px solid #c6bebe;
    height: 360px;
    h3{
      padding-top: 5%;
      padding-left: 5%;
      display: block;
      width: 100%;
      // background-color: blue;
    }
    p{
      height: 5%;
      width: 45%;
      background-color: white;
      color: #a2a2a2;
      margin-top: 2%;
      margin-left: 5%;
      display: flex;
      justify-content: space-between;
      span{
        height: 100%;
        width: 70px;
        text-align: center;
      }
    }
  }
  #main{
    height: 810px;
    width: 77.3%;
    margin-left: 11%;
    background-color: #f4f3f3;
  }
  #main_left{
    position: relative;
    top: 2%;
    // height: 100%;
    width: 75%;
    //background-color: blue;
    float: left;
    div{
      // width: 100%;
      background-color: white;
    }
  }
  #main_right{
    position: relative;
    top: 2%;
    left: 1%;
    width: 23%;
    height: 800px;
    // background-color: pink;
    float: right;
    div{
      width: 100%;
      background-color: white;
      border-radius: 3px;
      margin: 0 auto;
      margin-bottom: 15px;
    }
  }
  #all{
    // height: 100%;
    width: 100%;
    background-color: #f4f3f3;
  }
</style>
