<template>
  <div id="app">
    <div class="wrapper text-center">
      <va-navibar></va-navibar>
      <va-slider :slideMenuItems="slideMenuItems"></va-slider>
      <va-content-wrap></va-content-wrap>
      <Modal></Modal>
    </div>
  </div>
</template>

<script>


import slideMenuItems from './lib/slideMenuItems.js'
import VANaviBar from './NaviBar.vue'
import VASlider from './Slider.vue'
import VAContentWrap from './ContentWrap.vue'
import Modal from 'va/components/Modal.vue'
// import store from 'va/vuex/store.js'

export default {
  name: 'app',
  data () {
    return {
       slideMenuItems: slideMenuItems,
       baseurl : 'http://localhost:8080'
    }
  },
  created () {
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap,
    Modal
  }
  // ,
  // store
};

</script>


