<template>
    <div class="comment-box shadow mb-3">
        <div class="row">
           <div class="col-2">
              <img style="width:90%;" class="mt-2" src="../assets/user.png" alt="">
           </div>
           <div class="col-10">
                <h5 class="text-left">John Stewart</h5>
                 <p style="font-size:15px;">20 May 2012</p>
                <p>This is a very great post thanks steve</p>  
           </div>
        </div>
         
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
   .comment-box{
       background-color: white;
       padding: 10px;
   }

   .comment-box:hover{
       box-shadow: 0px 0px 20px gray !important;;
   }
</style>


