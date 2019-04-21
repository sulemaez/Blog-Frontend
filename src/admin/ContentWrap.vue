<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap h-100" class="content-wrapper">
    <section class="content h-100 d-flex justify-content-md-center">
       <success-alert v-if="success"></success-alert>
      <transition name="page" mode="out-in">
        <router-view ></router-view>
      </transition>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import SuccessAlert from './components/SuccessAlert'
export default {
  name: 'va-content-wrap',
  created () {
    
  },
  mounted(){
      this.$router.app.$on('alert',()=>{
       this.success = true
       setTimeout(()=>{
         this.success = false
       },1000);
     });
  },
  data(){
   return{
     success :false
   }
  },
  methods:{

  },
  components:{
      'success-alert' : SuccessAlert
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
