<template>
  <div id="app">
    <dtBar></dtBar>
    
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
		height: 500px;
		width: 100%;
	}

  .ct{
    height: 500px;
    width: 100%;
    background-color: blue;
  }
  .c {
    height: 500px;
    width: 100%;
  }
  .cc {
    
    background-color: blue;
  }
  
</style>
