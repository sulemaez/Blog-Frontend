<template>
  <div id="app">
    <va-header></va-header>
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/Header'
export default {
  components : {
    'va-header' : Header
  }
}
</script>
 
<style>
 #app{
    background-color: #fcfcfc;
}


.tags{
  color: blue;
  cursor: pointer;   
}

 
</style>


