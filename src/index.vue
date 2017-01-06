<template>
  <div id="app">
    <dtBar></dtBar>
    <div class="content">
    	
    </div>
  </div>
</template>

<script>

import DtBar from './components/DtBar'
 
export default {
  name: 'app',
  components: {
    DtBar
  }
}
</script>

<style>
	.content{
		height: 5000px;
		width: 100%;
	}
</style>
