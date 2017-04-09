<template>
	<div>
		<!-- Modal -->
		<div class="modal fade" id="addAlbumDialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		        	
		        </button>
		        <h4 class="modal-title">上传图片</h4>
		        
		      </div>
		      <div class="modal-body">
		        	<el-upload
					  class="upload-demo"
					  drag
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :multiple="false">
					  <i class="el-icon-upload"></i>
					  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
					  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>
		        
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
	require('./../../node_modules/element-ui/lib/theme-default/index.css')

	export default {
		data() {
			return {
				name: '',
				desc: '',
				tag: ''
			}
		},


		methods: {
			showUploadDialog: function() {
      			$('#addAlbumDialog').modal();
    		},

    		create: function (){
    			
    			// 跳转页面
    		}
		},
		created: function(){
      		//注册事件监听
      		eventBus.$on('clickShowUploadDialog', this.showUploadDialog);
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
		text-align: center;
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