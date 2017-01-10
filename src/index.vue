<template>
  <div id="app">
    <dtBar></dtBar>
    <section class="container top">

        <div class="banner-container dt-clear-padding">
            <div>
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

         <div class="hot-container cc">
            <div class="desc"></div>
        </div> 

    </section>
  </div>
</template>

<script>

import DtBar from './components/DtBar'

 
export default {
  name: 'app',
  data(){
      return {
        bannerList:[
          {id: 1, name: "呵呵", picUrl:""}

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

  body {
    background-color: rgb(241,242,243);
  }

  .w {
    width: 1200px;
  }

  .dt-clear-padding {
    padding: 0;
  }

  .bgc {
    background-color: rgb(241,242, 243);
  }
  
  .cc {

    background-color: blue;
  }

  .top{
    margin-top: 105px;

  }
  
  @media screen and ( min-width: 1261px) {
    .banner-container {
      width: 712px;
      height: 445px;
      float: left;
      display: inline;
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
