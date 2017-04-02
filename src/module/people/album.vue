<template>
	<div class="album">
		<div v-bind:class="[ (index%rowCount != (rowCount-1))?'item-album':'item-album-row-last']" v-for="(item, index) in albumList">
			<div v-if="item.id">
					<img src="http://ogvz3mlxq.bkt.clouddn.com/20160406174620_trvcT.jpeg?imageView2/2/w/224">
					<div class="item-album-content">
						<p class="item-album-title">{{ item.name}}</p>
						<div class="item-album-info">
							{{item.count}}张图片 {{item.favorite_count}}人收藏
						</div>
					</div>	
			</div>
			<div  v-else style="position: relative" @click="createAlbum">
				<div class="album-add"></div>
				<span class="sp-add">创建专辑</span>
			</div>

			
		</div>
	</div>
</template>
<script>

	import eventBus from '../../eventBus.js'
	import * as types from '../../store/modules/album/mutation-types'

	export default {
		data() {
			return {
				albumList: [],
				rowCount: 5
			}
		},

		methods : {
			createAlbum: function () {
				eventBus.$emit('clickAddAlbum', ''); 
			}
		},

		mounted: function() {
			//加载数据
			this.$store.dispatch(types.LISTBYUSER).then( () => {
				var albumList = this.$store.state.albumList.albumList;
				//如果是自己登录，需要添加一个‘添加’的位置
				var account = JSON.parse(window.localStorage.getItem('account'));
				if(account){
					albumList.splice(0,0,{});					
				}	
				this.albumList = albumList;
			});
		},

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
		width: 100%;
		height: 35px;
		line-height: 35px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space:nowrap;
	}

	.album-add {
		background: url('../../assets/album_dd.png') no-repeat;
		width: 224px;
    	height: 308px;
		position: absolute;
		background-position: 0 0;
	}

	.album-add:hover {
		background-position: -224px 0;
	}

	.sp-add {
		position: relative;
		width: 100%;
		display: inline-block;
		text-align: center;
		height: 20px;
		color: #888;
		margin-top: 180px;
	}


</style>