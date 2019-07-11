<template>
     	<div class="row">
		<div class="outer">
           
		<form class="inner con">
             <h4>Add Tag</h4>
			<div class="form-group">
				<label>Name</label>
				<input class="form-control" type="text" name="name" id="name">
			</div>
			<button @click="sendCategory" type="button" class="form-control btn btn-primary">save</button>
		</form>
    </div>
    </div>
</template>


<script>
export default {
     methods :{
      	  sendCategory(event){
              event.preventDefault();
              let nameS = document.querySelector("#name").value
              
              
            this.$http.post(`${this.$url}tags`,{
				        name: nameS,
  					}).then(()=>{
							//alert
							this.$swal({
								type: 'success',
								title: 'Tag Added',
								showConfirmButton: false,
								timer: 1500
							});
              //clear th field
							document.getElementById("name").value = ""
			      }).catch((error) =>{
                this.$swal({
                type : 'error',
                title : 'Failed to Add!',
                showConfirmButton : false,
                timer : 1500 
			        })
			     });
      	 }
      },
}
</script>

<style type="text/css">
	.con{
		background-color: #fffe;
		border-radius: 20px;
		padding: 30px;
	}

	.outer{
        width: 70%;
        margin: 0 auto;
	}

	.inner{
		width: 60%;
		margin: 0 auto;
	}
</style>