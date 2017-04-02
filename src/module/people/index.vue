<template>
	<div>
		<dtBar></dtBar>
		<div class="people-content">
			<div class="people-content-header">
				<div class="header-left">
					<img src="../../assets/people-header-blur.jpeg" alt="" class="header-left-bg">
					<div class="header-cover"></div>
					<div class="header-left-content">
								<table>
									<tr>
										<td>
											<img src="http://ogvz3mlxq.bkt.clouddn.com/20110908164416_ErsHk.jpg?imageView2/1/w/180/h/180" alt="" class="people-avatar">
											<p>遛弯</p>
											<p> ★ 308178</p>
											<p>	
												<span class="margin-right">关注1</span>
												 <span>粉丝 3080</span>
										    </p>
										    <p>
										    	<button class="btn btn-warning">已关注</button>
										    </p>	
										</td>
									</tr>
								</table>
								
					</div>
				</div>
				<div class="header-right">
					<img src="../../assets/people-header-right-blur.jpeg" alt="" class="ab">
				</div>
			</div> <!-- /people-content-header -->
			<div class="toolbar-container">
				<div class="toolbar">
					<ul class="tool-container">
						<li><router-link to="/people/album">专辑</router-link></li>	
						<li><router-link to="/people/article">文章</router-link></li>
						<li><router-link to="/people/favalbum">收藏的专辑</router-link></li>
						<li><router-link to="/people/collect">收集的图片</router-link></li>
						<li><router-link to="/people/original">发布的图片</router-link></li>
					</ul>
				</div>	
				<div class="tool-content">
					  <router-view></router-view>
				</div>		
			</div>
			
		</div>
		<loginView></loginView>
		<addAlbumDialog></addAlbumDialog>
		
	</div>
</template>

<script>
	import dtBar from '../../components/DtBar'
	import 	loginView from '../../components/LoginView'
	import 	addAlbumDialog from '../../components/AddAlbumDialog'

	export default {
		data() {
			return {

			}
		},

		components: {
			dtBar, loginView, addAlbumDialog
		}


	}

</script>

<style scoped>

	.people-content {
		margin: 0 auto;
		width: 1200px;
		padding: 100px 0 0 0;
	}

	.people-content-header {
		width: 100%;
		height: 356px;
	}

	.header-left {
		float: left;
		width: 488px;
		height: 100%;
		position: relative;
		display: inline-block;
	}

	.header-right {
		float: left;
		width: 712px;
		height: 100%;
		display: inline-block;
	}

	.header-left-bg {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.header-cover {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.24);
		position: absolute;
	}

	.header-left-content {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.header-left-content table {
		width: 100%;
		height: 100%;
	}

	.header-left-content table tr {
		width: 100%;
		height: 100%;
		text-align: center;
	}

	.header-left-content table tr td{
		vertical-align: middle;
	}

	.people-avatar {
		width: 100px;
		height: 100px;
		border: 2px solid #fff;
		border-radius: 50px;
	}

	.header-left-content p {
		height: 30px;
		color: #fff;
		padding: 10px 0;
		margin: 0;
	}

	.margin-right {
		margin-right: 20px;
	}

	.toolbar {
		height: 64px;
		line-height: 64px;
		text-align: center;
		background-color: #fff;
	}

	.tool-container {
		list-style: none;
		overflow: hidden;
		margin: 0px;
		padding: 0px;
	}

	.tool-container li {
		padding: 0 20px;
		display: inline-block;
		font-size: 16px;
	}

	.tool-content {

	}




	
</style>