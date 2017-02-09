<template>
	<div>
		<dtBar></dtBar>
		<div class="content">
			<div class="album-header">
				<img src="../../assets/blur.jpeg">
				<div class="blue-mask"></div>
				<div class="content-info">
					<div class="content-info-wrap">
						<h1>新年新气象,手机壳也要棒!</h1>
						<p>70张图片 * 2191人收藏</p>
					</div>
				</div>
			</div>
		</div>
		<loginView></loginView>
	</div>
</template>

<script>
	
	import DtBar from '../../components/DtBar'
	import loginView from '../../components/LoginView'
	import * as types from '../../store/modules/album/mutation-types'


	export default {
		mounted: function() {
			//拿到ID之后可加载接口数据
			console.log(this.$route.query.id);

			this.$store.dispatch(types.LISTBYALBUMID).then(() => {
      			var albumList = this.$store.state.albumList
      				//终于取到值了
      			console.log(this.$store.state.albumList.itemList)
			});

		},
		components: {
			DtBar,
			loginView
		}
	}
</script>

<style scoped>
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

	.album-header img {
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
		text-align: center;
		line-height: 208px;
		align-items:center;
		display:-webkit-flex;
		justify-content:center;
	}

	.content-info-wrap {
		text-align: center;	
		line-height: 208px;
		vertical-align: middle;
	}

	.content-info-wrap h1,
	.content-info-wrap p {
		color: #fff;
		margin: 0;
		vertical-align: middle;
	}

	.content-info-wrap h1 {
		line-height: 40px;
	}

	.content-info-wrap p {
		line-height: 15px;
	}


</style>