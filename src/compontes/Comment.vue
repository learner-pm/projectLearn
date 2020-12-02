<template>
  <div class="discuss">
    <div style="height: 50px;" class="discuss_one">
        <i class="el-icon-chat-round">讨论数量</i>
    </div>
    <div style="height: 70px;" class="discuss_two">
      <p>排序:</p>
      <p>时间</p>
      <p>投票</p>
    </div>
    <div style="height: 200px;margin-top: 4px;margin-bottom: 10px;" class="discuss_three"
        v-for="item in list" :key="item.id"
    >
      <div style=" width: 8%;position: relative;
          left: 0%;border-radius: 0px;background-color: #f4f3f3;">
        <img src="../assets/1.jpg" style="height: 50px;width: 50px;position: relative;
               left: 6%;border-radius: 5px;"/>
      </div>
      <div style="width: 91.5%;position: relative;
               left: 0%;border: 0px solid #a2a2a2;" class="discuss_three_right_one">
         <div style="height: 40px;width: 100%;position: relative;
                    left: 0%; border-radius: 0px; border-bottom: 1px solid #a2a2a2;">
          <h3 style="display: inline-block;">{{item.name}}</h3>
          <p style="border: 1px solid green;color: green;height: 20px;line-height: 20px;
                    position: relative;top: 10px;padding: 0 8px;font-size: 10px;">
                    读者one</p>
          <i class="el-icon-trophy" style="font-size: 13px;color: #a2a2a2;"></i>
          <p style="font-size: 13px;color: #a2a2a2;">0</p>
          <p style="font-size: 13px;color: #a2a2a2;">声望</p>
        </div>
         <div style="height: 118px;width: 100%;position: relative;
                     left: 0%;border-radius: 0px; " class="discuss_three_right_two">
            <div style="position: relative;left: 0%;
                        width: 100%;border-radius: 0px;height: 50px;">
                        <p>{{item.conton}}</p>
            </div>
            <div style="position: relative;left: 0%;
                        width: 100%;border-radius: 0px;height: 40px;"class="discuss_three_right_two_last">
                  <i class="el-icon-time" style="margin-left: 5%;"></i><p>3天前</p>
                  <i class="el-icon-chat-line-round"></i><p>评论</p>
            </div>
          </div>
         <div style="height: 40px;width: 100%;position: relative;
                     left: 0%;bottom: 0%;border-radius: 0px;
                     border-top: 1px solid #a2a2a2;"
          class="discuss_three_right_three">
          <div style="position: relative;left: 0%;width: 7%;">
                <i class="el-icon-thumb"></i>
          </div>
          <div style="position: relative;left: 0%;width: 9%;">
                <i class="el-icon-s-flag">举报</i>
          </div>
          <div style="position: relative;left: 0%;width: 6%;">
                <p>#</p>
          </div>
         </div>
      </div>
    </div>

    <div class="discuss_four" style="height: 335px;border: 0.5px solid #a2a2a2;
          border-radius: 5px;
         position: relative;left: 15.7%;width: 53%;">
       <div style="position: relative;left: 0%;
        height: 12%;margin-top: 2%;border: 1px solid #a2a2a2;
        width: 94%;" class="discuss_four_one">
            <i class="el-icon-warning-outline" style="line-height: 39px;
            padding-left: 50px;">请勿发布不友善或者负能量的内容。
            与人为善，比聪明更重要！</i>
        </div>
       <div style="position: relative;left: 0%;height: 40%;
            background-color: blue;margin-top: 2%;width: 94%;">
            <textarea v-model="commentList"></textarea>
       </div>
       <div style="position: relative;left: 0%;height: 17%;margin-top: 2%;
            width: 94%;" class="discuss_four_three">
          <div style="position: relative;
            left: 0%;width: 20%; float: left;margin: 0;">
              <i class="el-icon-remove"></i>
              <i class="el-icon-picture"></i>
              <p>支持</p><p>MD</p><p>帮助</p>
          </div>
          <div style="position: relative;left: 0%;width: 27%;
           float: right;margin: 0;">
              <el-checkbox v-model="checked" style="line-height: 40px;"
              >关注本文</el-checkbox>
              <el-button type="primary" style="height: 40px;width: 110px;
              " @click="add()"
              ><i class="el-icon-chat-round"
                  style="padding-right: 25px;line-height: 15px;float: left;
                  color: white;display: inline;padding-right: 30px;"
               ></i>评论</el-button>
          </div>
       </div>
       <div style="position: relative;left: 0%;height: 12%;
            border: 1px solid #a2a2a2;width: 94%;"></div>
       </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:'sss',
        checked: false,
        commentList:'',
        list:[
        ]
      }
    },
    methods:{
      add(){
        var newlist={id:1,name:'无名氏',conton:this.commentList}
        if(this.commentList){
            this.list.push(newlist)
        }
        else
            alert("请输入文本。")
      }
    },
    mounted(){
        var store=localStorage//读取localstorage的数据
        let i=0
        while(store.getItem(i)){
          this.list.push(JSON.parse(store.getItem(i)))
          console.log(this.list[i])
          i++
        }
    },

  }
</script>

<style lang="scss" scoped="scoped">
  .el-icon-warning-outline:before{

      padding-right: 15px;

  }
  .discuss_four_three{
    div{
      height: 100%;
      display: flex;
      justify-content: space-between;
      el-button{
        font-size: 18px;
      }
      i,p{
        font-size: 15px;
        color: #a2a2a2;
        line-height: 35px;
      }
    }
  }
  .discuss_four{
    div{
      margin: 0 3%;
      border-radius: 4px;
      i{
        display: block;

      }
      textarea{
        display: inline;
        resize: none;//去掉chrome下的自动推拽
        width: 100%;
        height: 100%;
      }
    }
  }
  .discuss_three_right_two_last{
    i,p{
      font-size: 13px;
      color: #a2a2a2;
    }
  }
  .discuss_three_right_three{
    div{
      border-right: 1px solid #a2a2a2;
      i,p{
        width: 100%;
        text-align: center;
        font-size: 17px;
        color: #a2a2a2;
      }
    }
  }
  .discuss_three_right_one{
    border-radius: 5px;
    h3{
      margin-left: 15px;
    }
    h3,p,i{
      float: left;
      line-height: 40px;
      margin-right: 5px;
    }
  }
  .discuss_three{
    div{
      height: 100%;
      float: left;
    }
  }
  .discuss_two{
    p{
      float: left;
      width: 50px;
      height:30px;
      font-size: 17px;
      background-color: #cecaca;
      margin-left: 10px;
      text-align: center;
      line-height: 30px;
    }
  }
  .discuss_one:after{
    content: "";
    background-color: #cecaca;
    height: 2px;
    width: 45%;
    position: absolute;
    top: 50%;
    right: 0px;
  }
  .discuss_one:before{
    content: "";
    background-color: #cecaca;
    height: 2px;
    width: 45%;
    position: absolute;
    top: 50%;
    left: 0px;
  }
  .discuss_one{
    i{
      display: block;
      position: relative;
      text-align: center;
      line-height: 52px;
    }
  }
  .discuss{
    width: 100%;
    // background-color: red;
    div{
      width: 58%;
      position: relative;
      left: 11%;
      background-color: white;
    }
  }
</style>
