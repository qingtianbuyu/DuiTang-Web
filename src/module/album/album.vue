<template>
	<div>
		<dtBar></dtBar>
		<div class="content">
			<div class="album-header">
				{{$route.query.id}}
			</div>
		</div>
		<loginView></loginView>
	</div>
</template>

<script>
	import DtBar from '../../components/DtBar'
	import loginView from '../../components/LoginView'

	export default {
		mounted: function() {
			//拿到ID之后可加载接口数据
			console.log(this.$route.query.id)
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
		background-color: red;
		margin:  100px 0 0 0; 
	}


</style>