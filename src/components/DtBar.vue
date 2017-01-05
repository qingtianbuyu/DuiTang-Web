<template>
  <div class="header">
    <div class="container">
      <a href="#" class="dt-logo">堆糖</a>
  
      <div class="categoryContainer">
          <div class="borderContainer">
            <div class="category-btn">
              分类
            </div>
          </div>
      </div>
    
      <div class="input-search-container">
      <div class="input-search-container-border">
        <input type="text" placeholder="搜索感兴趣的内容" class="inputer"></input>
        <button class="btn-search">搜索</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.header {
    background-color: white;
    height: 64px;
    width: 100%;
  }

  div.container {
    margin: 0 auto;
    width: 1200px;
    height: 64px;
  }

  .dt-logo {
    float: left;
    width: 80px;
    height: 64px;
    line-height: 64px;
    background: url('http://img5.duitang.com/uploads/files/201312/24/20131224171644_TXGCC.png') 0 12px no-repeat;
    text-indent: -9999px;
  }

  .borderContainer{
    float: left;
    margin: 17px 0 0 15px;
    height: 28px;
    width: 70px;
    border: 1px solid rgb(225,225,225);
  }
  .category-btn{
    text-align: center;
    font-size: 10pt;
    width: 70px;
    height: 26px;
    line-height: 26px;
  }

  .input-search-container{
    height: 34px;
    width: 364px;
    margin: 16px 0 0 20px;
    float: left;
  }


  .input-search-container{
    border: 1px solid #c3c3c3;
    height: 34px;
    width: 364px;
    margin: 16px 0 0 20px;
  }

  .inputer {
    padding: 0 0 0 5px;
    width: 320px;
    border: 0;
    float: left;
    height: 32px;
  }

  .btn-search{
    background-color: transparent;
    border: 0;
    height: 34px;
  }



</style>
