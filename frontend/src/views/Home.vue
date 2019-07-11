<template>
  <div class="home">
     <featured/>
  </div>
</template>

<script>
import Featured from '../components/home/Fetured'
export default {
  name: 'home',
  components: {
    featured : Featured
  }
}
</script>
