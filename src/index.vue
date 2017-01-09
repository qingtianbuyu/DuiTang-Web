<template>
  <div id="app">
    <dtBar></dtBar>
    <section class="container top">

        <div class="banner-container col-xs-7 col-lg-7 col-md-7 col-sm-7">
            <div class="banner">
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

         <div class="col-xs-5 col-lg-5 col-md-5 col-sm-5 banner-desc">
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

<style>
  
  .w {
    width: 1200px;
  }


	.content{
		height: 500px;
		width: 100%;
	}

  .ct{
    height: 500px;
    width: 100%;
    background-color: blue;
  }
  .c {
    height: 500px;
    width: 100%;
  }
  .cc {

    background-color: blue;
  }

  .top{
    margin-top: 105px;

  }

  .banner-container{
    height: 445px;
    
  }

  .banner-desc{
    height: 445px;
  }
  
  
</style>
