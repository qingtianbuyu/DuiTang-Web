<template>
	<div class="top20">
		<div class="dt-water-container">
	      <div class="grid">
	        <div class="grid-sizer"></div>
	        <div class="grid-item" v-for="item in albums" >
	              <img  v-bind:src="item.photo.path + '?imageView2/2/w/224'" >
	              <div class="grid-msg">
	                {{ item.msg }}
	              </div>
	              <p>
	                <span class="daren-star"> </span>
	                <span class="daren-count-total">3612</span>
	                <span class="daren-thumb"> </span>
	                <span class="daren-count-total">3612</span>
	                <span class="price">¥ {{item.item.price}}</span>
	              </p>
	              <div class="grid-item-line"></div>
	              <div class="sender-container">
	                  <a href="#">
	                    <img src="../../assets/hot-avatar.jpeg" alt="">
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
	</div>
</template>

<script>
import Vue from 'vue'
import * as types from '../../store/modules/album/mutation-types'


var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Masonry = require('masonry-layout');
var imagesLoaded = require('imagesloaded');

imagesLoaded.makeJQueryPlugin( $ );
jQueryBridget( 'masonry', Masonry, $ );

export default {
	data() {
		return {
			albums: []
		}
	}, 

	mounted: function(){
		this.$store.dispatch(types.LISTBYPEOPLECOLLECT).then(() => {
	      this.albums = this.$store.state.albumList.peopleCollectAlbumList
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
	}


}


</script>

<style>

.top20 {
	margin: 20px 0 0 0;
}

	
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

  .price {
  	float: right;
  	margin: 0 10px 0 0;
  	color: red;
  }
	
</style>