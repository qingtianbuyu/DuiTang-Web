<template>
	<div>
		<!-- Modal -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		        	
		        </button>
		        <h4 class="modal-title">登录</h4>
		        
		      </div>
		      <div class="modal-body">
		        <div class="login-container">
		        	<div class="input-group">
			            <input type="text" class="form-control" placeholder="用户名/邮箱" v-model="phone">
			            <span class="input-group-btn">
			            </span>
			        </div>
			        <div class="input-group">
			            <input type="text" class="form-control" placeholder="密码" v-model="password">
			            <span class="input-group-btn">
			            </span>
			        </div>
			        <div class="input-group">
				        <div class="checkbox remember-pwd">
							<label>
								<input type="checkbox"> 记住我
							</label>
						</div>
						<div class="forget-pwd">
							<a href="#">忘记密码?</a>
						</div>
				    </div>
				    <div class="input-group">
					    <a href="#">
					    	<button type="button" @click="login" class="btn btn-login">登录</button>
					    </a>
				    </div>
				    <div class="input-group">
				    	<ul>
				    		<li>
				    			<a href="#"  class="qq"></span>
				    		</li>
				    		<li>
				    			<a href="#" class="sina"></a>
				    		</li>
				    		<li>
				    			<a href="#" class="douban"></a>
				    		</li>
				    		<li>
				    			<a href="#" class="taobao"></a>
				    		</li>
				    		<li>
				    			<a href="#" class="tencent-weibo"></a>
				    		</li>
				    	</ul>
				    </div>

		        </div>
		        <div class="qrc-container">
		        	<img src="../assets/duitang-qrc.png" alt="">
		        	<p>扫一扫下载手机客户端</p>
		        	<p>浏览体验更佳</p>
		        </div>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn-goto-login" data-dismiss="modal">还没有账号?立即注册</button>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>

	import eventBus from '../eventBus.js'
	import * as types from '../store/modules/user/mutation-types'

	export default {
		data() {
			return {
				phone: '',
				password: '',
			}
		},


		methods: {
			delayShowLogin: function() {
      			$('#myModal').modal();
    		},

    		login: function (){
    			this.$store.dispatch(types.LOGIN,{phone: this.phone, password: this.password
    					
	    			}).then(() => {
					      
				});
    		}
		},
		created: function(){
      		//注册事件监听
      		eventBus.$on('clickLogin', this.delayShowLogin);
    	},

		mounted: function() {
			setTimeout(this.delayShowLogin,3000);
		}
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
		margin-bottom: 20px;
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

	.input-group ul {
		overflow: hidden;
	}

	.input-group ul li {
		float: left;
		list-style: none;
		width: 25px;
		height: 25px;
		margin-right: 30px;
	}

	.input-group ul li:last-child {
		float: left;
		list-style: none;
		margin-right: 0px;
	}


	.input-group ul li a{
		display: inline-block;
		width: 25px;
		height: 25px;
		margin-right: 30px;
	}

	.qq {
		background: url('../assets/login-type.png') no-repeat;
		background-position: -36px -4px;
	}

	.sina {
		background: url('../assets/login-type.png') no-repeat;
		background-position: -4px -4px;
	}

	.douban {
		background: url('../assets/login-type.png') no-repeat;
		background-position: -67px -4px;
	}

	.taobao {
		background: url('../assets/login-type.png') no-repeat;
		background-position: -100px -4px;
	}

	.tencent-weibo {
		background: url('../assets/login-type.png') no-repeat;
		background-position: -131px -4px;
	}


</style>