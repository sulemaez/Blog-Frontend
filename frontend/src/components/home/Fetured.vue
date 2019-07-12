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
                articles :[{
                    img : 'https://i.imgur.com/uNh0ygB.jpg',
                    title : 'The best thing to happen here lately',
                    preview : 'Stephen Hsu’s startup Genomic Predictions analyzes genetic data to predict the chance of diseases like diabetes and cancer — and forecast..',
                    date : '20th June 2019'
                },
                 {
                    img : 'https://i.imgur.com/x2Wct77.jpg',
                    title : 'The best thing to happen here lately',
                    preview : 'Stephen Hsu’s startup Genomic Predictions analyzes genetic data to predict the chance of diseases like diabetes and cancer — and forecast..',
                    date : '20th June 2019'
                 }
                ]
            }
        }
    }
</script>

<style>
   *{
      font-family: medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important
   }
</style>
