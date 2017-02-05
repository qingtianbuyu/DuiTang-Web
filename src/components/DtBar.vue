<template>
  <div class="header navbar-fixed-top">
    <div class="container">
      <div class="row">

        <a href="#" class="dt-logo col-xs-1 col-lg-1 col-md-1 col-sm-1">堆糖</a>
    
        <div class="col-xs-1 col-lg-1 col-md-1 col-sm-1">
            <div v-bind:class="[ isShow? 'borderContainer-show' : 'borderContainer']">
              <div class="category-btn" v-on:mouseover="show()" v-on:mouseout="show()">
                分类
              </div>
              <div v-bind:class="[isShow ? 'popwindow-addtional' : '']" v-on:mouseover="showing()" v-on:mouseout="show()">
                
              </div>
              <div v-bind:class="[isShow ? 'popwindow' :'' ]" v-on:mouseover="showing()" v-on:mouseout="show()">
                
              </div>
            </div>
        </div>
          
        <div class="col-xs-4 col-lg-4 col-md-4 col-sm-4 search-container">
          <div class="input-group">
            <input type="text" class="form-control">
            <span class="input-group-btn">
            <button class="btn btn-default" type="button">搜索</button>
            </span>
          </div>
        </div>
      
        <div class="fr col-xs-6 col-lg-6 col-md-6 col-sm-6 clear-padding">
            <ul class="fr">
              <li class="line"></li>
                <li>
                  <a href="#">堆糖生活家</a>
                  <span class="btn-common sp-new">new</span>
                </li>
                <li class="line"></li>
                <li>
                  <a href="#" class="btn-common register">注册</a>
                </li>
                <li class="line"></li>
                <li>
                  <a href="#" v-on:click="loginClick">登录</a>
                </li>
                <li class="line"></li>
                <li>
                  <span class="phone"></span>
                  <a href="#">手机版</a>
                  <span class="phone"></span>
              </li>
            </ul>
        </div>
      </div>
    </div>

  <div class="line-horizontal"></div>

  </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        isShow: false,
      }
    },

    methods: {
      show: function() {
        this.isShow = !this.isShow;
      },
      showing: function() {
        this.isShow = true;
      },

      loginClick:function() {
        //点击登录按钮
        
      }
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .clear-padding{
    padding: 0;
  }

  .line-horizontal{
    width: 100%;
    height: 1px;
    background-color: #000;
    box-shadow:0 1px 1px rgba(0,0,0,.8);
    opacity: .12;
  }

  ul {
    list-style: none;
  }
  div.header {
    background-color: white;
    height: 64px;
    width: 100%;
    font: 13px "宋体";
  }

  div.nav-container {
    margin: 0 auto;
    height: 64px; 
  }

  a {
    text-decoration: none;
    color: #666;
    font: 400 13px/13px "宋体";
  }

  .dt-logo {
    float: left;
    height: 64px;
    line-height: 64px;
    background: url('../assets/dt-logo.png') 0 12px no-repeat;
    text-indent: -9999px;
  }

  .borderContainer{
    float: left;
    margin: 17px 0 0 22px;
    height: 26px;
    border: 1px solid rgb(225,225,225);
  }

  .borderContainer-show{
    float: left;
    margin: 17px 0 0 22px;
    height: 40px;
    border: 1px solid rgb(225,225,225);
    box-shadow:  0 0.2px 0.2px rgba(0,0,0,0.1);
  }

  .category-btn{
    text-align: center;
    font-size: 10pt;
    width: 50px;
    height: 26px;
    line-height: 26px;
  }

  .btn-search{
    background-color: transparent;
    border: 0;
    height: 34px;
  }
  
  .fl {
    float: left;
    height: 64px;
    line-height: 64px;
  }

  .fr {
    float: right;
    height: 64px;
    line-height: 64px;
  }

  .fr .line {
    width: 1px;
    height: 24px;
    background: rgba(221,221,221,0.8);
    margin-top: 20px;
    padding: 0;
  }

  .fr li {
    float: left;
    padding: 0  24px 0 24px;
  }

  .fr .lastt{
    float: left;
    padding: 0  0px 0 0px;
  }


  .btn-common {
    background-color: rgb(255,62,108);
    border-radius: 3px;
    color: white;
  }

  .sp-new {
    padding: 2px;
    font-size: 9px;
  }

  .register{
    padding: 7px 14px;
    font-size: 13px;
  }
  
  .phone{
    position: relative;
    background: url('../assets/dt-phone.png') no-repeat;
    width: 11px;
    height: 20px;
    display: inline-block;
    margin: 0 0 -5px 0;
  }

  .search-container{
    padding: 15px 0 0 15px;
  }

  .popwindow {
    background-color: #fff;
    width: 400px;
    height: 400px;
    z-index: 990;
    box-shadow:  0 1px 3px rgba(0,0,0,0.6);
    position: absolute;
    margin-top: 10px;
    border: 1px solid #f9f9f9;
  }

  .popwindow-addtional {
    background-color: #fff;
    width: 50px;
    height: 40px;
    z-index: 999;
    margin: -3px 0;
    position: absolute;
  }


</style>
