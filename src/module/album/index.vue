<template>
	<div class="bgc">
		<dtBar></dtBar>
		<div class="content">
			<div class="album-header">
				<img src="../../assets/blur.jpeg" class="bg">
				<div class="blue-mask"></div>
				<div class="content-info">
					<div class="content-info-wrap">
						<h1>新年新气象,手机壳也要棒!</h1>
						<p>70张图片 * 2191人收藏</p>
					</div>
				</div>
				<div class="album-header-bottom-mask">
				</div>
				
				<div class="album-header-bottom-container">
					<div class="operate-wrap">
						<div class="operate">
							<div @click="release" class="release">
								<span class="btn-collect-common btn-collect"><i class="btn-collect-star"></i>发布
								</span>	
							</div>
							<a href="#">
								<span class="btn-collect-common btn-collect"><i class="btn-collect-star"></i>收藏
								</span>	
							</a>
							<a href="#">
								<span class="btn-collect-common btn-zan"><i class="btn-zan-thumb"></i>赞</span>	
							</a>
							<a href="#">
								<span class="btn-collect-common btn-share">
									<i class="btn-share-inner"></i>
								</span>	
							</a>
							
						</div>	
					</div>
				</div>
				<div class="album-header-bottom-container-top">
					<img src="../../assets/album_avatar.jpeg" alt="" class="album-avatar">
					<img src="../../assets/badge-v.png" alt="" class="album-avatar-v">
					<a href="/people/?user_id=1723501789" target="_blank">
						<span class="nickname">李大象在哪里</span>	
					</a>
					
				</div>
			</div>
			<div class="album-mode">
				<span class="mode-list"></span>
				<span class="mode-scan"></span>
			</div>
			<div class="divider"></div>
			<div class="dt-water-container">
		      <div class="grid">
		        <div class="grid-sizer"></div>
		        <div class="grid-item" v-for="item in albumList" >
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
		                    <img src="../../assets/hot-avatar.jpeg" alt="">
		                  </a>
		                  <ul class="sender-container-right">
		                    <li>
		                        <a href="#">{{item.sender.username}}</a>  
		                    </li>
		                  </ul>
		              </div>
		          </div>
		        </div>  
		    </div>
		</div>
		<loginView></loginView>
		<dragUploadDialog></dragUploadDialog>
	</div>
</template>

<script>
	require('../../../static/reset.css')
	
	import Vue from 'vue'
	import DtBar from '../../components/DtBar'
	import loginView from '../../components/LoginView'
	import dragUploadDialog from '../../components/DragUploadDialog'
	import * as types from '../../store/modules/album/mutation-types'
	import eventBus from '../../eventBus.js'


	export default {
		data() {
			return {
			 	albumList: []
			}
		},

		methods: {
			release: function() {
				//显示拖拽上传对话框
				eventBus.$emit('clickShowUploadDialog')
			}
		},

		mounted: function() {
			//拿到ID之后可加载接口数据
			var albumId = this.$route.query.id;
			var that = this;
			this.$store.dispatch(types.LISTBYALBUMID, {id: albumId}).then(() => {
      			var albumList = this.$store.state.albumList;
      			that.albumList = this.$store.state.albumList.albumItemList;

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


			});

		},
		components: {
			DtBar,
			loginView,
			dragUploadDialog
		}
	}
</script>

<style scoped>
	
  .bgc {
    background-color: rgb(241,242, 243);
  }

	.content {
		margin: 0 auto;
		width: 1200px;
	}
	
	.album-header {
		width: 1200px;
		height: 280px;
		margin:  100px 0 0 0; 
		overflow: hidden;
		position: relative;
	}

	.album-header .bg {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.blue-mask {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #000000;
		display: block;	
		opacity: 0.24
	}
	.content-info {
		width: 100%;
		height: 208px;
		position: absolute;
		align-items:center;
		display:-webkit-flex;
		justify-content:center;
	}

	.content-info-wrap {
		text-align: center;
		vertical-align: middle;
	}

	.content-info-wrap h1,
	.content-info-wrap p {
		color: #fff;
		margin: 0;
	}

	.content-info-wrap h1 {
		line-height: 80px;
	}

	.content-info-wrap p {
		line-height: 15px;
	}

	.album-header-bottom-mask, 
	.album-header-bottom-container,
	.album-header-bottom-container-top {
		bottom: 0;
		position: absolute;
		width: 100%;
		height: 72px;
		overflow: hidden;
	}


	.album-header-bottom-container-top {
		width: auto;
		text-decoration: none;
	}


	.album-header-bottom-mask {
		opacity: 0.4;
		background-color: #000;
	}

	.album-avatar {
		width: 36px;
		height: 36px;
		border: 1px #fff solid;
		border-radius: 18px;
		margin: 18px; 
	}

	.album-avatar-v {
		width: 20px;
		height: 20px;
		margin: 0 0 15px -40px;
		vertical-align: bottom;
	}

	.nickname {
		color: #fff;
		padding: 0 15px;
	}
	
	.operate-wrap {
		width: 100%;
		height: 100%;
		text-align: center;
		display: inline-block;
		position: absolute;
	}

	.operate {
		height: 72px;
		line-height: 72px;
	}

	.operate a {
		overflow: hidden;
		padding: 5px 15px;
		text-decoration: none;
	}

	.btn-collect-common {
   		border-radius: 3px;
    	color: white;
    	padding: 10px 10px;	
	}	

	.btn-collect {
	    background-color: rgb(255,62,108);
	}

	.btn-collect-star {
	  	background-image: url('../../assets/sprite.png');
	  	background-position: -3px -3px;
	  	width: 20px;
	  	height: 20px;
	  	display: inline-block;
	  	vertical-align: middle;
	}

	.btn-zan {
	  	background-color: rgb(255,187,51);	
	}

	.btn-zan-thumb {
	  	background-image: url('../../assets/tool-sprite.png');
	  	background-position: -6px -3px;
	  	width: 20px;
	  	height: 20px;
	  	display: inline-block;
	  	vertical-align: middle;
	}
	
	.btn-share {
	  	background-color: #fff;
	}

	.btn-share-inner {
		background-image: url('../../assets/sprite1.png');
		background-position: -120px 0;
		width: 20px;
	  	height: 20px;
	  	display: inline-block;
	  	margin: -5px 0;
	}

	.album-mode {
		width: 1200px;
		margin: 24px 0;
		overflow: hidden;
		position: relative;
	}

	.mode-list {
		background-image: url('../../assets/sprite1.png');
		background-position: -400px -42px;
		width: 20px;
		height: 20px;
		display: inline-block;
	}

	.mode-scan {
		background-image: url('../../assets/sprite1.png');
		background-position: -440px -2px;
		width: 20px;
		height: 20px;
		margin-left: 15px;
		display: inline-block;
	}

	.divider {
		width: 100%;
		height: 1px;
		background-color: rgba(0,0,0,0.1);
		margin-bottom: 24px;
	}


	/*下面需要优化*/

	
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




	.dt-water-container {
    margin: 0 auto;
    width: 1222px;
  }

   .dt-water-container-wrap {
    padding: 20px;
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

  .release {
  	display: inline-block;
  	cursor: pointer;
  }

		


</style>