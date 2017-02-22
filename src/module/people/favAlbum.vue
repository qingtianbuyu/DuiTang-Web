<template>
	<div class="album">
		<div v-bind:class="[ (index%rowCount != (rowCount-1))?'item-album':'item-album-row-last']" v-for="(item, index) in albumList">
			<img src="http://ogvz3mlxq.bkt.clouddn.com/20160406174620_trvcT.jpeg?imageView2/2/w/224">
			<div class="item-album-content">
				<p class="item-album-title">{{ item.name}}</p>
				<div class="item-album-info">
					{{item.count}}张图片 {{item.favorite_count}}人收藏
				</div>
				<p>by {{ item.user.username}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import * as types from '../../store/modules/album/mutation-types'


	export default {
		data() {
			return {
				albumList: [],
				rowCount: 5
			}
		},

		mounted: function() {
			//加载数据
				this.$store.dispatch(types.LISTBYUSER).then( () => {
					this.albumList = this.$store.state.albumList.albumList;
				});
		}
}

</script>

<style scoped>
	.album {
		padding: 40px 0 0 0; 
	}

	.item-album,
	.item-album-row-last {
		width: 224px;
		height: 313px;
		display: inline-block;
		margin: 0 20px 20px 0;
		overflow: hidden;
	}

	.item-album-row-last {
		margin: 0 0 20px 0;
	}

	.item-album-content {
		padding: 10px;
 	   background-color: #fff;
       border-left: 1px solid #dedfe0;
       border-right: 1px solid #dedfe0;
       border-bottom: 1px solid #dedfe0;
	}

	.item-album-title {
		padding: 0px;
		width: 100%;
		height: 35px;
		line-height: 35px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space:nowrap;
		margin:0px;
	}	

</style>