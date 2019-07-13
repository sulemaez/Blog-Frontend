<template>
    <div class="container-fluid mt-4">
       <h4 class="text-center mb-3">Featured Articles</h4>
       <div id="featured-articles" class="row d-flex justify-content-center">
           <feature v-for="article in articles" :article="article"/>
       </div>
    </div>      
</template>

<script>
    import Feature from './Feature.vue' 
    export default {
        name : 'featured',
        components :{
            'feature' : Feature
        },
        data : () =>{
            return{
               articles : []
            }
        },
        mounted(){
            this.$http.get(`${this.$url}posts/featured`)
            .then(data=>{
               this.articles = data.data
            })
        }
    }
</script>


