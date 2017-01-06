<template>
  <div class="header">
    <div>
    <div class="w container">
      <a href="#" class="dt-logo">堆糖</a>
  
      <div class="categoryContainer">
          <div class="borderContainer">
            <div class="category-btn">
              分类
            </div>
          </div>
      </div>
    
      <div class="fl input-search-container">
      <div class="input-search-container-border">
        <input type="text" placeholder="搜索感兴趣的内容" class="inputer"></input>
        <button class="btn-search">搜索</button>
        </div>
      </div>
      <div class="fr">
          <ul>
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
              <a href="#">登录</a>
            </li>
            <li class="line"></li>
            <li>
              <em class="phone"></em>
              <a href="#">手机版</a>
            </li>
          </ul>
      </div>
    </div>
  </div>
  <div class="line-horizontal"></div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .w {
    width: 1215px;
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

  div.container {
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
    width: 80px;
    height: 64px;
    line-height: 64px;
    background: url('../assets/dt-logo.png') 0 12px no-repeat;
    text-indent: -9999px;
  }

  .borderContainer{
    float: left;
    margin: 17px 0 0 22px;
    height: 25px;
    width: 70px;
    border: 1px solid rgb(225,225,225);
  }
  .category-btn{
    text-align: center;
    font-size: 10pt;
    width: 50px;
    height: 26px;
    line-height: 26px;
  }

  .input-search-container{
    border: 1px solid #c3c3c3;
    height: 30px;
    width: 364px;
    margin: 16px 0 0 50px;
  }

  .inputer {
    padding: 0 0 0 5px;
    width: 320px;
    border: 0;
    float: left;
    height: 28px;
  }

  .btn-search{
    background-color: transparent;
    border: 0;
    height: 34px;
  }

  .rightContainer{
    float: left;
    background-color: red;
    width: 640px;
    line-height: 64px;
    height: 64px;
  }
  
  .rightContainer div {
    display: inline;
  }
  
  .fl {
    float: left;
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
    padding: 2px 15px 40px 0;
    background: url('../assets/dt-phone.png') no-repeat;
    width: 15px;
    height: 64px;
  }

</style>
