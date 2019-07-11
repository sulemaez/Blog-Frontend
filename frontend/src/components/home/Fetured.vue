<template>
    <div class="container-fluid mt-4">
       <div class="row d-flex justify-content-center">
                <div class="feature col-md-3 col-xs-6 col-lg-3 shadow">
                <div class="row">
                    <div class="col-md-12 featured-img p-0">
                    <img class="img-responsive" src="../../assets/1.jpg" alt="">
                </div>
                <div class="col-md-12 p-3">
                    <h4 class="preview-header">What If an Algorithm Could Predict Your Unborn Child’s Intelligence?</h4>
                    <p class="preview-text">Stephen Hsu’s startup Genomic Predictions analyzes genetic data to predict the chance of diseases like diabetes and cancer — and forecast..</p>
                </div>
            </div>
        </div>
        <div class="feature col-md-3 col-xs-6 col-lg-3 shadow">
                <div class="row">
                    <div class="col-md-12 featured-img p-0">
                    <img class="img-responsive" src="../../assets/1.jpg" alt="">
                </div>
                <div class="col-md-12 p-3">
                    <h4 class="preview-header">The best thing to happen here lately </h4>
                    <p class="preview-text">Stephen Hsu’s startup Genomic Predictions analyzes genetic data to predict the chance of diseases like diabetes and cancer — and forecast..</p>
                </div>
            </div>
        </div>
        <div class="feature col-md-3 col-xs-6 col-lg-3 shadow">
                <div class="row">
                    <div class="col-md-12 featured-img p-0">
                    <img class="img-responsive" src="../../assets/1.jpg" alt="">
                </div>
                <div class="col-md-12 p-3">
                    <h4 class="preview-header">The best thing to happen here lately </h4>
                    <p class="preview-text">Stephen Hsu’s startup Genomic Predictions analyzes genetic data to predict the chance of diseases like diabetes and cancer — and forecast..</p>
                </div>
            </div>
        </div>
       </div>
    </div>      
</template>

<script>
export default {
    name : 'featured'
}
</script>

<style>
   *{
      font-family: medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important
   }

   .feature{
       margin-left: 10px;
   }
   .featured-img img{ 
       max-width: 100%;
   }

   .preview-header{
       font-weight: 600 !important;
       font-size: 18px !important;
   }

   .preview-text{
       font-size: 15px;
       font-weight: normal;
       color: gba(0,0,0,.54);
   }
</style>
