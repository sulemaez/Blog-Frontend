<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap h-100" class="content-wrapper">
    <section class="content h-100 d-flex justify-content-md-center">
      
      <transition name="page" mode="out-in">
        <router-view ></router-view>
      </transition>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>

export default {
  name: 'va-content-wrap',
  created () {
    
  },
  mounted(){
     
  },
  data(){
   return{
     
   }
  },
  methods:{

  },
  components:{
     
  }
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
