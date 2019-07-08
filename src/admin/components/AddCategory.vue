<template>
	<div class="row">
		<div class="outer">
		<form class="inner con">
			<h4>Add Category</h4>
			<div class="form-group">
				<label>Name</label>
				<input class="form-control" type="text" name="name" id="name">
			</div>
			<div class="form-group">
				<label>Description</label>
				<textarea class="form-control" name="description" id="description" cols="10" rows="6" style="resize:none" />
			</div>
			<button @click="sendCategory" type="button" class="form-control btn btn-primary">save</button>
		</form>
    </div>
    </div>
</template>

<script>
	export default{
      methods :{
      	  sendCategory(event){
              event.preventDefault();
              let nameS = document.querySelector("#name").value
              let descriptionS = document.querySelector("#description").value
              
              this.$http.post(`${this.$url}categories`,{
				        name: nameS,
						    description: descriptionS 
  					  }).then(()=>{
									//alert
									this.$swal(
										 {
											 type: 'success',
											 title: 'Category Added',
											 showConfirmButton: false,
											 timer: 1500
										 }
									);

									//clear fields
									document.getElementById("name").value = ""
									document.getElementById("description").value = ""
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
	};
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