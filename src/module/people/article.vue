<template>
	<div class="article">
		<div class="item-article" v-for = "(item, index) in articleList">
			<div class="item-article-content">
				<div class="item-article-content-left">
					<h3 class="inner-title">{{ item.title }}</h3>
					<p class="inner-content">{{ item.content }}</p>
				</div>
				<div class="item-article-content-right">
					<img src="http://ogvz3mlxq.bkt.clouddn.com/20160914161215_twMRS.png?imageView2/1/w/110" alt="">
				</div>
			</div>
			<div class="item-article-footer">
				<span class="fl">2017/02/09</span>
				<span class="fr">2017/02/09</span>
			</div>
		</div>	
	</div>
</template>

<script>
	import * as types from '../../store/modules/article/mutation-types.js'

	export default {
		data() {
			return {
				articleList: []
			}
		}, 

		mounted: function (){
			//加载数据
				this.$store.dispatch(types.ARTICLELISTBYUSER).then(() => {
					this.articleList = this.$store.state.articleList.itemList
				});	
		}, 

		methods: {
			
		}
	}
</script>

<style scoped>
	
	.fl {
		float: left;
	}

	.fr{
		float: right;
	}

	.article {
		margin: 0 auto;
		text-align: center;
	}

	.item-article {
		padding: 10px;
 	   	background-color: #fff;
       	border: 1px solid #dedfe0;
		height: 197px;
		width: 470px;
		display: inline-block;
		margin: 20px 30px 0px 30px;
		padding: 20px;
		overflow: hidden;
	}

	.item-article-content {
		overflow: hidden;
	}

	.item-article-content-left {
		width: 240px;
		height: 120px;
		float: left;
	}

	.item-article-content-right {
		float: right;
	}

	.item-article-footer {
		height: 50px;
		line-height: 50px;
	}

	.item-article-footer span {
		font-size: 12px;
	}

	.inner-title {
		text-align: left;
		font-size: 16px;
		margin: 0px;
		padding: 0 0 10px 0;
	}

	.inner-content {
		text-align: left;	
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 14px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		height: 42px;
		color: #aaa;
		line-height: 1.6;
	}

</style>