<template>
    <div class="container-fluid" >
          <div class="container main-read mt-4 pt-3">
            <div class="row justify-content-center align-content-center">
              <div class="col-12 col-sm-10 col-md-8 col-lg-7">
                    <div class="comment-box shadow mb-3">
                        <div class="row">
                            <div class="col-2">
                                <img style="width:100%;" class="mt-2" src="../assets/user.png" alt="">
                            </div>
                            <div class="col-10">
                                 <input type="text" placeholder="Name to comment" class="form-control mb-2 col-5">
                                 <textarea placeholder="Write Response.." class="form-control" cols="30" rows="3"></textarea>
                                 <button class="btn  btn-outline-primary my-2">
                                     comment
                                 </button>
                             </div>
                        </div>
                     </div>
                  <comment/>
                  <comment/>
                  <comment/>
              </div>
            </div> 
        </div>
    </div>
</template>


<script>
import Vue from 'vue'
import Comment from './Comment'

export default {
    name : 'comments',
    props : {},
    data : ()=>{
       return{

       }
    },
    methods :{
        properDate : (d)=>{
           let date = new Date(d) 
           return date.toDateString()
        }
    },
    components:{
        comment : Comment
    }
  
}
</script>
