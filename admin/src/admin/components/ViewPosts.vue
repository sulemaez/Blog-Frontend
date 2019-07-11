<template>
   <div>
         <vuetable ref="vuetable"
            :api-url="url"
            :fields="fields"
            :css="css.table"
             @vuetable:pagination-data="onPaginationData"
       
  >
   <div slot="action-slot" slot-scope="props">
      <button class="btn btn-primary" @click="editRow(props.rowData)"><i class="glyphicon glyphicon-pencil"></i></button> 
      <button class="btn btn-danger" @click="deleteRow(props.rowData.postId)"><i class="glyphicon glyphicon-remove"></i></button> 
   </div>
    </vuetable>
    <vuetable-pagination ref="pagination"
      :css="css.pagination"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination>

   </div>
</template>

<script>

import {Vuetable,VuetablePagination} from 'vuetable-2'

export default {
  mounted(){

  },
  data(){
     return{
         url : `${this.$url}posts`,
         editCategoryName:"",
         editDescription:"",
         editId : -1,
         fields: [
           {
            title : 'ID',
            name : 'postId',
            sortField : 'postId',
            width : '10%'
           },
          { 
             name: 'title', 
             title: 'TITLE',
             sortField: 'title',
             width : "40%",
             titleClass: "text-center",
             
          },
           {
             name : 'category.name',
             title : 'CATEGORY',
             width: '20%'
          },
          {
             name : 'created',
             title : 'CREATED',
             sortField : 'created',
             width: '20%'
          }, 
           {
           name: "action-slot",
           title: '<i class="glyphicon glyphicon-cog"></i>Actions',
           width: "20%",
           titleClass: "text-center",
      }
        ],
        
        css: {
          table: {
            tableWrapper : 'bg-light',
            tableClass: 'table table-striped table-bordered table-hovered table-condensed',
            loadingClass: 'loading',
            ascendingIcon: 'glyphicon glyphicon-chevron-up',
            descendingIcon: 'glyphicon glyphicon-chevron-down',
            handleIcon: 'glyphicon glyphicon-menu-hamburger',
          },
          pagination: {
            infoClass: 'pull-left',
            wrapperClass: 'vuetable-pagination pull-right',
            activeClass: 'btn-primary',
            disabledClass: 'disabled',
            pageClass: 'btn btn-border',
            linkClass: 'btn btn-border',
            icons: {
              first: '',
              prev: '',
              next: '',
              last: '',
            },
        }
      }
     }
  },
  methods : {
     deleteRow(id){
      
        this.$swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            //if delete selected
            if (result.value) {
                //delete request
                this.$http.delete(`${this.url}/${id}`)
                   //if success
                   .then((data)=>{
                    this.$swal.fire(
                      'Deleted!',
                      'Post deleted.',
                      'success'
                    )
                   //refresh table
                   this.$refs.vuetable.refresh()
                }).catch((err)=>{
                 this.$swal({
						type : 'error',
						title : 'Failed to delete!',
						showConfirmButton : false,
						timer : 1500 
					})
             })
           }
        })
     },
     editRow(rowData){
       this.$router.push({name : 'editPost',params :{
           id : rowData.postId
       }})
     },
     onChangePage(page){
        this.$refs.vuetable.changePage(page)
     },
     onPaginationData(data){
        this.$refs.pagination.setPaginationData(data)
     },
     confirmEdit(){
         this.$swal.fire({
            title: 'Are you sure?',
            text: "Edit Category",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Edit it!'
         })
         .then((result)=>{
             //if confirmed edit
             if(result.value){
                 let nameS = document.querySelector("#name").value
                 this.$http.put(`${this.url}/${this.editId}`,{
				           name: nameS,
  					     })  
                 .then((data)=>{
                    this.$swal.fire(
                      'Edited!',
                      'Category deleted.',
                      'success'
                    )
                    this.cancelEdit()
                    this.$refs.vuetable.refresh()
                 })
                 .catch((err)=>{
                    this.$swal({
								type : 'error',
								title : 'Failed to Edit!',
								showConfirmButton : false,
								timer : 1500 
							})
                 })
             }
         })
     },
     cancelEdit(){
        $('#bsModal').modal('hide')
        this.editCategoryName = ""
        this.editId = -1
     }
  },
   components: {
    VuetablePagination,
    Vuetable
  }
}
</script>

<style>
  .vuetable-body-wrapper{
    background-color: white;
    margin-bottom: 5px;
    padding: 20px;
    border-radius:20px; 
  }

  .modal-content{
      padding:20px;
      border-radius: 20px;
   }
</style>
