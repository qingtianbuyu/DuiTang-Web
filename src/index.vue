<template>
  <div id="app">
    <dtBar></dtBar>
    <div class="dt-container top bgc">

        <div class="banner-container dt-clear-padding bgc">
            <div class="bgc">
              <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    
                  <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  </ol>
                    
                  <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="./assets/banner1.jpeg" alt="">
                        <div class="carousel-caption">
                        
                        </div>
                    </div>
                    <div class="item">
                        <img src="./assets/banner2.jpeg" alt="">
                        <div class="carousel-caption">
                          
                        </div>
                    </div>
                  </div>

              </div>
            </div>
        </div> 

         <div class="hot-container">
            <div class="hot-wrap">
              <div class="hot-wrap-container">
                <h3 class="dt-clear-margin">社区热点</h3>  
                <div class="line"></div>
                <div class="hotSpot">
                  <ul>
                    <li v-for="item in hots">
                      <a href="#">{{ item.name }}</a>
                      <div class="line-horizantal"></div>
                    </li>
                  </ul>
                </div>
                <div class="line"></div>
                <div class="activity">
                  <a href="#">年度爱用大作战</a>
                  <span class="activity">活动</span>
                </div>
                <div class="line0"></div>
                <div class="activity">
                  <a href="#">「人气连衣裙精选」大合集</a>
                  <span class="activity">精选</span>
                </div>
                <div class="line0"></div>
                <div class="activity">
                  <span>收图小助手:  </span>
                  <a href="#">堆糖收集工具</a>
                </div>
              </div>
            </div>
        </div> 
    </div>

    <div class="line"></div>

    <div class="w album-container">
      <div class="album">
        <section class="album-section">
          <img src="./assets/album.jpeg" class="album-img">
          <h3>胶卷里的十二月</h3>
          <h3>21张图拍呢 * 1203人收藏</h3>
          <h3>by qingtianbuyu</h3>
        </section>
        <section class="album-section">
          <img src="./assets/album.jpeg" class="album-img">
          <h3>胶卷里的十二月</h3>
          <h3>21张图拍呢 * 1203人收藏</h3>
          <h3>by qingtianbuyu</h3>
        </section>
        <section class="album-section">
          <img src="./assets/album.jpeg" class="album-img">
          <h3>胶卷里的十二月</h3>
          <h3>21张图拍呢 * 1203人收藏</h3>
          <h3>by qingtianbuyu</h3>
        </section>
        <section class="album-section">
          <img src="./assets/album.jpeg" class="album-img">
          <h3>胶卷里的十二月</h3>
          <h3>21张图拍呢 * 1203人收藏</h3>
          <h3>by qingtianbuyu</h3>
        </section>

      </div>
    </div>


    

  </div>
</template>

<script>

import DtBar from './components/DtBar'

 
export default {
  name: 'app',
  data(){
      return {
        bannerList:[
          {id: 1, name: "呵呵", picUrl:""},
          {id: 1, name: "呵呵", picUrl:""}
        ],

        hots: [
          {id: 1, name:"冬天", url:'#'},
          {id: 2, name:"把生活过成一首诗", url:'#'},
          {id: 3, name:"早餐", url:'#'},
          {id: 4, name:"记下时间走过的路", url:'#'},
          {id: 5, name:"穿搭", url:'#'},
          {id: 6, name:"家居", url:'#'},
          {id: 7, name:"原创", url:'#'}
        ]
      }
  },

  mounted:function(){
    this.$nextTick(function(){
        //对DOM的操作放在这

    })
  },

  components: { 
    DtBar
  }
}


</script>

<style scoped>

  .w {
    width: 1200px;
  }

  .dt-clear-padding {
    padding: 0;
  }

  .dt-clear-margin{
    margin: 0;
  }

  .bgc {
    background-color: rgb(241,242, 243);
  }
  
  .cc {
    background-color: blue;
  }

  ul {
    list-style: none;
    padding-top: 5px;
    width: 100%;
    height: 60px;
  }

  li {
    float: left;
    margin-top: 10px;
  }

  li a {
    margin-right: 10px;
    padding-left: 10px;
    color: #666;
    font-size: 13px;
  }

  .dt-container {
    margin: 0 auto;
    width: 1200px;
    height: 555px;
    padding: 105px 0 0 0;
  }

  .hot-wrap {
    padding-left: 20px;

  }

  .hot-wrap-container {
    background-color: #fff;
    padding: 15px 20px;
    height: 445px;
    border: 1px solid #ddd;
  }

  .hot-wrap-container h3 {
      font-size: 16px;
      color: #666;
  }

  .line {
    width: 100%;
    background-color: #eee;
    height: 1px;
    margin-top: 15px;
  }

  .line-horizantal {
    width: 1px;
    background-color: #ccc;
    height: 10px;
    display: inline-block;
  }

  .activity {
    line-height: 48px;
  }
  
  span.activity {
    background-color: rgb(255, 187,51);
    border-radius: 3px;
    padding: 3px;
    font-size: 12px;
    color: #fff;
  }

  div.activity  a {
    color: #666;
  }


  .line0 {
    width: 100%;
    background-color: #eee;
    height: 1px;
  }

  .album-img{
    width: 224px;
    height: 224px;
  }

  .album-container{
    margin: 0 auto;
    padding: 40px 0 0 0;
  }

  .album-section {
    width: 224px;
    height: 60px;
    display: inline-block;
    margin-right: 72px;
  }


  @media screen and ( min-width: 1261px) {
    .banner-container {
      width: 712px;
      height: 445px;
      float: left;
    }

    .hot-container {
      width: 428px;
      height: 445px; 
      float: left;
    }
  }

  
  @media screen and ( max-width: 1260px) {
    .banner-container {
      width: 468px;
      height: 293px;
      display: inline;
      float: left;
    }

    .hot-container {
      width: 468px;
      height: 293px;
      display: inline; 
      float: left;
    }
  }  
  
</style>
