<template>
	<div>
		<DtBar></DtBar>
		<div class="content">
			<div class="content-header">
				<img src="http://ogvz3mlxq.bkt.clouddn.com/20170207101007_sCuiU.jpeg?imageMogr2/thumbnail/!500x500r/blur/50x30/gravity/Center/crop/500x500" class="content-header-bg" alt="">
				<div class="content-container"> <!-- 最外层用于整个 -->
					<div class="content-detail">
						<div class="content-detail-header">
							<a href="#" class="btn-collect">
								<i class="i-collect"></i>
								<em class="em-collect-info">收集 93</em>
							</a>
							<a href="#" class="btn-buy">
								<i class="i-collect"></i>
								<em class="em-collect-info">购买</em>
							</a>
						</div>  <!-- end-content-detail-header -->
						<div class="line"></div>
						<div class="content-detail-content">
							<img src="http://ogvz3mlxq.bkt.clouddn.com/20170207111556_rQZh2.jpeg?imageView2/1/w/400/h/400" alt="">
						</div>
						<div class="content-detail-footer">
							<p class="msg">{{blog.msg}}</p>
							<div class="link">
								<div class="link-cover"></div>
								  <img src="http://img4.duitang.com/uploads/misc/201411/06/20141106140440_a3ACH.png" alt="" class="source_shortcut_icon">  
								  <span class="source-title">暴走的萝莉 长腿女神瑜伽运动长裤 </span>
								  <span class="price">¥{{ blog.item.price }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import * as types from '../../store/modules/blog/mutation-types'
	import * as DtBar from '../../components/DtBar'

	export default {
		data(){
			return {
				blog: ''
			}
		},

		mounted: function() {
			this.$store.dispatch(types.LOADBLOGBYID).then(() => {
				var blogModule = this.$store.state.blogModule;
				this.blog = blogModule.blog;
			});
		},

		components: {
			DtBar
		}
	}

</script>

<style>

	.line {
		background-color: rgba(0,0,0,0.1);
		height: 1px;
	}

	.content-header {
		width: 100%;
		height: 683px;
		overflow: hidden;
		margin: 64px 0 0 0;
	}

	.content-header-bg {
		position: fixed;
		width: 100%;
		height: auto;
	}
	
	.content-container {
		padding: 32px 0 0 0;
	}

	.content-detail {
		width: 432px;
		background-color: #fff;
		margin: 0 auto;
		position: relative;
	}

	.content-detail-header {
		height: 64px;
		line-height: 64px;
		padding: 0 0 0 15px;
	}

	.content-detail-content {
		height: 416px;
		padding: 16px 0 0 16px;
	}

	.content-detail-footer {
		height: 85px;
		line-height: 85px;
	}
	
	.btn-collect {
		background-color: #f46;
		padding: 8px;
		border-radius: 5px;
		border: 1px solid #f46;
		color: #fff;
	}

	.btn-buy {
		margin: 0 0 0 15px;
		color: #666;
		padding: 8px;
		border-radius: 5px;
		border: 1px solid #ccc;
	}
	
	.i-collect {
		
	}

	.em-collect-info {

	}

	.msg {
		height: 40px;
		line-height: 40px;
    	text-overflow: ellipsis;
    	overflow: hidden;
		white-space:nowrap;
		margin: 0px;
		padding: 0 16px;
	}
	
	.link {
		overflow: hidden;
		height: 40px;
		line-height: 40px;
	}

	.link-cover {
		background-color: #000;
		opacity: 0.1;
		height: 40px;
		width: 100%;
		position: absolute;
	}

	.source_shortcut_icon {
		width: 20px;
		height: 20px;
		margin: 10px 0 0 10px;
	}

	.source-title {
		height: 40px;
		line-height: 40px;
		vertical-align: top;
	}

	.price {
		float: right;
		color: #f46;
		padding-right: 15px;
	}
	
</style>
