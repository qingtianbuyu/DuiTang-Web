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
		      		<div class="upload-container mt">
		      			<el-upload
			        	  v-show="!dialogVisible"
						  action="//upload.qiniu.com/"
			        	  list-type="picture"
						  drag
						  :before-upload="beforeUpload"
						  :on-success="uploadSuccess"
						  :multiple="false"
						  :on-error="uploadFailed"
						  :data="form">
							  <i class="el-icon-upload"></i>
							  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
							  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
						</el-upload>	
		      		</div>

					<div class="previewImgContainer" v-show="dialogVisible">
						<div class="uploadedImage-wrap">
							<img  :src="dialogImageUrl" alt="" class="uploadedImage">		
						</div>
					</div>
					<div class="drop-cotainer">
						<!-- Split button -->
						<div class="btn-group">
							  <button type="button" class="btn btn-default btn-select-width">Action</button>
							  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    <span class="caret"></span>
								    <span class="sr-only">Toggle Dropdown</span>
						  		</button>
						  	<ul class="dropdown-menu btn-select-width" >
							    <li><a href="#">Action</a></li>
							    <li><a href="#">Another action</a></li>
							    <li><a href="#">Something else here</a></li>
							    <li>
								    <div class="inner-create-album">
											    <div class="input-group">
											      <input type="text" class="form-control" placeholder="">
											      <span class="input-group-btn">
											        <button class="btn btn-default" type="button">创建</button>
											      </span>
											    </div><!-- /input-group -->
									</div><!-- /.row -->
						    	</li>
						  	</ul>
						</div>	<!-- /.btn-group -->
					</div>

					
					<div class="input-group padding-20 gray-boder">
		            	<textarea  class="textarea-desc" v-model="desc" placeholder="写点介绍,让更多人喜欢ta"></textarea>
		        	</div>

		        	<button type="button" class="btn btn-info margin-left-bottom-20 w60">发布</button>
					
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>

	import eventBus from '../eventBus.js'
	import * as commonTool from '../api/common'
	

	export default {
		data() {
			return {
				name: '',
				desc: '',
				tag: '',
				dialogVisible: false,
				dialogImageUrl: '',
				form: {}
			}
		},


		methods: {
			showUploadDialog: function() {
      			$('#addAlbumDialog').modal();
    		},

    		create: function (){
    			
    			// 跳转页面
    		},

      		beforeUpload: function(file){
      			return commonTool.getQNToken(file.name).then(response => {
      				this.form = {
      					token: response.data.token
      				}
      			})
      		},

      		uploadSuccess: function(response, file, fileList){
      			this.dialogVisible = true
      			var fileUrl = 'http://ogvz3mlxq.bkt.clouddn.com/' + response.key + '?imageView2/1/w/120/h/120';
      			console.log(response)
      			this.dialogImageUrl = fileUrl
      		},
      		uploadFailed: function(err, file, fileList){
      			this.dialogVisible = false
      		}

		},
		created: function(){
      		//注册事件监听
      		eventBus.$on('clickShowUploadDialog', this.showUploadDialog);
    	},

	}
</script>


<style scoped>
	
	@import url("./../../node_modules/element-ui/lib/theme-default/index.css");
	

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
	  width: 500px;
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
		padding: 0px;
		overflow: visible;
	}

	.close {
		width: 46px;
		height: 46px;
		background: url('../assets/ic_cancle.png') no-repeat;
		background-position: 15px 15px;
	}

	.input-group {
		margin-bottom: 10px;
		width: 100%;
	}


	.previewImgContainer {
		background-color: #f7f7f7;
		text-align: left;
		overflow: hidden;
	}

	.uploadedImage-wrap {
		display: inline-block;
		overflow: hidden;
		margin: 20px;
		padding: 5px;
		background-color: #fff;
	}

	.uploadedImage {
		width: 120px;
		height: 120px;
	}

	.drop-cotainer {
		padding: 20px;
	}

	.btn-select-width {
		width: 300px;
	}

	.inner-create-album {
		padding: 10px;
	}

	.padding-20 {
		padding: 0px 20px 20px 20px;
	}

	.gray-boder {
		color: #e0e0e0 solid 1px;
	}

	.textarea-desc {
		width: 100%;
		border: #bdbdbd 1px solid;
		height: 68px;
	}

	.margin-left-bottom-20 {
		margin: 0 0 20px 20px;
	}

	.upload-container {
		text-align: center;
	}

	.w60 {
		width: 80px;
	}

	.mt {
		margin-top: 20px;
	}


</style>