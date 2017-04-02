<template>
	<div>
		<!-- Modal -->
		<div class="modal fade" id="addAlbumDialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		        	
		        </button>
		        <h4 class="modal-title">创建专辑</h4>
		        
		      </div>
		      <div class="modal-body">
		        <div class="login-container">
		        	<div class="input-group">
		        		<span class="album-input-label">专辑名称</span>
			            <input type="text" class="form-control"  v-model="name">
			        </div>
			        <div class="input-group">
			        	<span class="album-input-label">描述</span>
			            <textarea cols="32" rows="3" class="textarea-desc" v-model="desc"></textarea>
			        </div>

			        <div class="input-group">
			        	<span class="album-input-label">标签</span>
			            <input type="text" class="form-control"  v-model="tag">
			        </div>

				    <div class="input-group">
					    <a href="#">
					    	<button type="button" @click="create" class="btn btn-login">创建</button>
					    </a>
				    </div>
				    
		        </div>
		        <div class="qrc-container">
		        	<p>常用标签</p>
		        	<!-- 列出所有按钮 -->

		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>

	import eventBus from '../eventBus.js'
	import * as types from '../store/modules/user/mutation-types'
	import * as articleTool from '../api/album'

	export default {
		data() {
			return {
				name: '',
				desc: '',
				tag: ''
			}
		},


		methods: {
			delayShowLogin: function() {
      			$('#addAlbumDialog').modal();
    		},

    		create: function (){
    			let account = JSON.parse(window.localStorage.getItem('account'))
    			
    			// 创建专辑
    			articleTool.create(account.data.id,this.name, this.desc, this.tag).then((data) => {
    				if(!data.errorCode){
    					$('#addAlbumDialog').modal('hide');				
    					//创建成功		
    					this.$router.push('/album/?id=' + 123)	
    				}
    			})	
    			// 跳转页面
    		}
		},
		created: function(){
      		//注册事件监听
      		eventBus.$on('clickAddAlbum', this.delayShowLogin);
    	},

	}
</script>

<style scoped>
	
	.dt-clear-margin {
		margin: 0;
	}

	.modal {
	  text-align: center;
	  padding: 0!important;
	}

	.modal:before {
	  content: '';
	  display: inline-block;
	  height: 100%;
	  vertical-align: middle;
	  margin-right: -4px;
	}

	.modal-dialog {
	  width: 660px;
	  display: inline-block;
	  text-align: left;
	  vertical-align: middle;
	}

	.modal-title {
		text-align: center;
		line-height: 45px;
		color: #606060
	}

	.modal-header {
		padding: 0;
	}

	.modal-footer {
		text-align: center;
	}

	.modal-body {
		padding: 40px;
		overflow: hidden;
	}

	.btn-goto-login {
		border: 0;
		background: transparent;
		color: #5678a0;
	}

	.close {
		width: 46px;
		height: 46px;
		background: url('../assets/ic_cancle.png') no-repeat;
		background-position: 15px 15px;
	}

	.login-container {
		width: 288px;
		float: left;
		display: inline-block;
		padding: 0 40px 0 0;
	}

	.qrc-container {
		width: 280px;
		float: left;
		display: inline-block;
		text-align: center;
		border-left: 1px solid #ebebeb;
	}

	.input-group {
		margin-bottom: 10px;
		width: 100%;
	}

	.qrc-container p {
		height: 20px;
		margin: 24px 0 0 0;
	}

	.qrc-container p:last-child {
		height: 20px;
		margin:  0;
	}

	.remember-pwd {
		margin: 0;
		font-size: 12px;
		text-align: center;
		line-height: 20px;
		float: left;
		color: #888;
	}

	.forget-pwd {
		float: right;
		font-size: 12px;
		line-height: 20px;
	}

	.btn-login {
		width: 100%;
		color: #fff;
	    background-color: #22b4f6;
	}

	.btn-login:hover {
		width: 100%;
	    color: #fff;
	    background-color: #1e9ed8
	}

	.album-input-label {
		float: left;
	}

	.textarea-desc {
		border: 1px #ccc solid;
		border-radius: 3px;
	}



</style>