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

    <div class="common-line-container">
      <div class="common-line"></div>
    </div>

    <div class="dt-title">
      <h3>专辑精选</h3>
      <button>更多专辑 > </button>
    </div> 

    <div class="w album-container">
      <div class="album">
        <div class="album-section">
          <img src="./assets/album.jpeg" class="album-img">
          <div class="desc-container">
            <h3 class="dt-clear-padding">胶卷里的十二月</h3>
            <h2>21张图拍呢 * 1203人收藏</h2>
            <h2>by qingtianbuyu</h2>
          </div>
        </div>
        <section class="album-section">
          <img src="./assets/album.jpeg" class="album-img">
          <div class="desc-container">
            <h3>胶卷里的十二月</h3>
            <h2>21张图拍呢 * 1203人收藏</h2>
            <h2>by qingtianbuyu</h2>          
          </div>

        </section>
        <section class="album-section">
          <img src="./assets/album.jpeg" class="album-img">
          <div class="desc-container">
            <h3>胶卷里的十二月</h3>
            <h2>21张图拍呢 * 1203人收藏</h2>
            <h2>by qingtianbuyu</h2>
          </div>
        </section>
        <section class="album-section">
          <img src="./assets/album.jpeg" class="album-img">
          <div class="desc-container">
            <h3>胶卷里的十二月</h3>
            <h2>21张图拍呢 * 1203人收藏</h2>
            <h2>by qingtianbuyu</h2>          
          </div>
        </section>
        <section class="album-section">
          <img src="./assets/album.jpeg" class="album-img">
          <div class="desc-container">
            <h3>胶卷里的十二月</h3>
            <h2>21张图拍呢 * 1203人收藏</h2>
            <h2>by qingtianbuyu</h2>          
          </div>
        </section>

      </div>
    </div>
    
    <div class="common-line-container">
      <div class="common-line"></div>
    </div>

    <div class="dt-title">
      <h3>单品推荐</h3>
      <button>更多专辑 > </button>
    </div> 

    <div class="w album-container">
      <div class="album">
        <section class="album-section">
          <img src="./assets/beauty-leg.jpeg" class="album-img">
          <div class="desc-container">
              <h3 class="dt-clear-padding">胶卷里的十二月</h3>
              <h2>21张图拍呢 * 1203人收藏</h2>
              <h2>by qingtianbuyu</h2>  
          </div>
        </section>
        <section class="album-section">
          <img src="./assets/beauty-leg.jpeg" class="album-img">
          <div class="desc-container">
              <h3>胶卷里的十二月</h3>
              <h2>21张图拍呢 * 1203人收藏</h2>
              <h2>by qingtianbuyu</h2>
          </div>
        </section>
        <section class="album-section">
          <img src="./assets/beauty-leg.jpeg" class="album-img">
          <div class="desc-container">
              <h3>胶卷里的十二月</h3>
              <h2>21张图拍呢 * 1203人收藏</h2>
              <h2>by qingtianbuyu</h2>
          </div>
        </section>
        <section class="album-section">
          <img src="./assets/beauty-leg.jpeg" class="album-img">
          <div class="desc-container">
              <h3>胶卷里的十二月</h3>
              <h2>21张图拍呢 * 1203人收藏</h2>
              <h2>by qingtianbuyu</h2>
          </div>
        </section>
        <section class="album-section">
          <img src="./assets/beauty-leg.jpeg" class="album-img">
          <div class="desc-container">
              <h3>胶卷里的十二月</h3>
              <h2>21张图拍呢 * 1203人收藏</h2>
              <h2>by qingtianbuyu</h2>
          </div>
        </section>
      </div>
    </div>
    
    <div class="common-line-container">
      <div class="common-line"></div>
    </div>
    
    <div class="dt-title">
      <h3>达人推荐</h3>
      <button>更多专辑 > </button>
    </div> 

    <div class="recommend-container of">
      <div v-for="item in userList.items" class="user-list-item-container common-border">
          <div class="img">
            <a href="#">
              <img src="./assets/user_background_image.jpeg" alt="">  
            </a>
            <div class="avatar-container">
              <img src="./assets/avatar.jpeg" alt="" class="avatar">
              <img src="./assets/badge-v.png" alt="" class="badge-vip">
            </div>
          </div>
          <div class="recommend-desc-container">
            <a href="#">{{item.username}}</a>
            <p>
              <span class="daren-star"> </span>
              <span class="daren-count-total">3612</span>
            </p>
            <p class="daren-expertise">
              擅长领域：<b>{{ item.tags.join(',')}}</b>
            </p>
          </div>
      </div >
    </div>

    <div class="common-line-container">
      <div class="common-line"></div>
    </div>

    <div class="dt-title">
      <h3>大家都在逛</h3>
    </div> 

  <div class="dt-water-container">
     <div class="grid">
        <div class="grid-sizer"></div>
        <div class="grid-item" v-for="item in hotList" >
              <img  v-bind:src="item.photo.path + '?imageView2/2/w/224'" >
              <div class="grid-msg">
                {{ item.msg }}
              </div>
              <p>
                <span class="daren-star"> </span>
                <span class="daren-count-total">3612</span>
                <span class="daren-thumb"> </span>
                <span class="daren-count-total">3612</span>
              </p>
              <div class="grid-item-line"></div>
              <div class="sender-container">
                  <a href="#">
                    <img src="./assets/hot-avatar.jpeg" alt="">
                  </a>
                  <ul class="sender-container-right">
                    <li>
                        <a href="#">{{item.sender.username}}</a>  
                    </li>
                    <li>  
                        <span>收藏到 
                            <a href="#">{{ item.album.name }}
                        </span>
                    </li>
                  </ul>
              </div>
        </div>
     </div>  
  </div>

  <div class="dt-water-container">
      <div class="dt-water-container-wrap">
        <button class="btn-more-scan">浏览更多></button>  
      </div>
      
  </div>

  </div>
</template>

<script>

import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import DtBar from './components/DtBar'
import * as types from './store/modules/user/mutation-types'
var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Masonry = require('masonry-layout');
var imagesLoaded = require('imagesloaded');

imagesLoaded.makeJQueryPlugin( $ );
jQueryBridget( 'masonry', Masonry, $ );


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
        ],

        userList: [],
        hotList:  []

      }
  },

  beforeMount(){
    this.$store.dispatch(types.LIST_USER_BY_TOP).then(() => {
      this.userList = this.$store.state.userList
      //终于取到值了
    }),

    this.$store.dispatch(types.LIST_HOT).then(() => {
      this.hotList = this.$store.state.userList.hotList
      
      Vue.nextTick(function(){
          
        // init Masonry
         var $grid = $('.grid').masonry({
          itemSelector: '.grid-item',
          percentPosition: true,
          columnWidth: '.grid-sizer',
          gutter: 20
        });
    
        $grid.imagesLoaded().always( function() {
          $grid.masonry('layout');
        });
          //----end masonry---------    
      })
    })
  },

  mounted:function(){
    
  },

  components: { 
    DtBar
  }
}

  
</script>

<style scoped>
  .test {
    width: 100px;
    background-color: red;
    height: 500px;
  }
  .w {
    width: 1222px;
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

  .common-border {
    border: 1px solid #ddd;
  }

  .of {
    overflow: hidden;
  }


  .hotSpot ul {
    list-style: none;
    padding-top: 5px;
    width: 100%;
    height: 60px;
  }

  .hotSpot li {
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
    margin: 15px;
  }

  .common-line {
    width: 1200px;
    background-color: #eee;
    height: 1px;
    margin: 15px 0;
  }

  .common-line-container{
    margin: 0 auto;
    width: 1200px;
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
    overflow: hidden;
  }

  .album-container{
    margin: 0 auto;
    padding: 0;
    margin-bottom: 40px;
  }

  .album-section {
    width: 224px;
    display: inline-block;
    margin-right: 15px;
    border: 1px solid #ddd;
  }

  .album-section h3 {
    font-size: 13px;
    margin: 10px 0 15px 0;
  }

  .album-section h2 {
    color: #999;
    font-size: 12px;
    margin:  0 0 5px 0;
  }

  .desc-container {
    padding: 0px 0 10px 10px;
  }

  .dt-title {
    margin: 0 auto;
    width: 1200px;
  }

  /*此处设置高度后，height自动变为0*/
  .dt-title h3{
    font: 20px solid red;
    line-height: 27px;
    padding: 30px 0;
    margin: 0;
    display: inline-block;
  }

  .dt-title button{
    float: right;
    float: right;
    margin-top: 30px;
    border: 0;
    color: white;
    background-color: rgb(34,180,246);
    border-radius: 3px;
  }

  .recommend-container {
    margin: 0 auto;
    padding: 0;
    width: 1222px;
    margin-bottom: 40px;
  }

  .user-list-item-container {
    width: 224px;
    height: 254px;
    float: left;
    margin-right: 20px;
  }

  .recommend-desc-container {
    width: 222px;
    height: 140px;
    background-color: #fff;
  }

  .recommend-desc-container a {
    height: 71px;
    text-align: center;
    display: block;
    padding-top: 51px;
    color: #333 !important;
  }


  .recommend-desc-container p {
    margin: 4px auto 0;
    padding: 0;
    overflow: hidden;
    text-align: center;
  }

  .daren-star {
    background: url('./assets/sprite.png') no-repeat;
    width: 16px;
    height: 16px;
    display: inline-block;
    background-position: -4px -50px;
  }

  .daren-thumb {
    background: url('./assets/sprite.png') no-repeat;
    width: 16px;
    height: 16px;
    display: inline-block;
    background-position: -90px -50px;
  }

  .daren-expertise {
    color: #999;
  }
  .daren-expertise b {
    color: #666;
  }

  .avatar-container {
    width: 80px;
    height: 80px;
    position: absolute;
    margin: -40px 70px;
  }

  .avatar {
    border: white solid 3px;
    border-radius: 44px;
  }

  .badge-vip {
    position: absolute;
    margin: -28px 0 0 55px;
  }


  .hot-list-container {
    margin: 0 auto;
    padding: 0;
    width: 1222px;
    margin-bottom: 40px;
    background-color: rgb(241,242,243);
  }


* { box-sizing: border-box; }

/* force scrollbar */
html { overflow-y: scroll; }

body { font-family: sans-serif; }

/* ---- grid ---- */

/* clear fix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- .grid-item ---- */

.grid-sizer,
.grid-item {
  width: 224px;
}

.grid-item {
  float: left;
  margin: 0 0 10px 0;
  background-color: #fff;
}

.grid-item img {
  display: block;
  max-width: 100%;
}


  .dt-water-container {
    margin: 0 auto;
    width: 1222px;
  }

  .dt-water-container-wrap {
    padding: 20px;
  }

  .btn-more-scan {
    margin: 0 auto;
    display: block;
    color: white;
    border: 0px;
    border-radius: 3px;
    padding: 5px;
    background: rgb(34,180,243);
  }

  .grid-msg {
    padding: 10px 10px;
  }


  .grid-item p {
    margin: 0 0 0 10px;
    padding: 0;
    overflow: hidden;
  }


  .grid-item-line  {
    width: 100%;
    background-color: #eee;
    height: 1px;
    margin: 5px 0;
  }
  
  .sender-container {
    padding: 0 0 10px 10px;
    overflow: hidden;
    float: left;
  }

  .sender-container a {
    float: left;
    display: inline;
  }
  .sender-container a img{
    width: 24px;
    height: 24px;
    border-radius: 12px;
    display: inline;
    float: left;
  }

  .sender-container-right {
    width: 190px;
    display: inline;
    overflow: hidden;
    float: right;
    padding: 0 0 0 10px;
  }

  .sender-container-right li {
    overflow: hidden;
  }
  
  .sender-container-right li span{
    color: #888;
    font-size: 12px;
    padding: 0; 
  }

  .sender-container-right a,
  .sender-container-right li span a{
    color: #666;
    font-size: 12px;
    padding: 0; 
    word-wrap: break-word;
    word-break: break-all;
    float: none;
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
