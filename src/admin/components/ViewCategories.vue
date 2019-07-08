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
      <button class="btn btn-danger" @click="deleteRow(props.rowData.categoryId)"><i class="glyphicon glyphicon-remove"></i></button> 
   </div>
    </vuetable>
    <vuetable-pagination ref="pagination"
      :css="css.pagination"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination>
     
       <!-- Modal -->
      <div class="modal fade" id="bsModal" tabindex="-1" role="dialog" aria-labelledby="bsModalLabel" data-toggle="modal" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="bsModalLabel">Edit {{editCategoryName}}</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" type="text" name="name" id="name" :value="editCategoryName">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" name="description" id="description" cols="10" rows="6" style="resize:none" >{{editDescription}}</textarea>
			          </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="confirmEdit">Edit</button>
              <button type="button" class="btn btn-danger" @click="cancelEdit">Cancel</button>
            </div>
          </div>
        </div>
      </div>

   </div>
</template>

<script>

import {Vuetable,VuetablePagination} from 'vuetable-2'

export default {
  mounted(){

  },
  data(){
     return{
         url : `${this.$url}categories`,
         editCategoryName:"",
         editDescription:"",
         editId : -1,
         fields: [
           {
            title : 'ID',
            name : 'categoryId',
            sortField : 'categoryId',
            width : '10%'
           },
          { 
             name: 'name', 
             title: 'NAME',
             sortField: 'name',
             width : "20%",
            titleClass: "text-center",
             
          },
          {
            name: 'description',
            titie : 'DESCRIPTION',
            dataClass : 'text-left',
            titleClass: "text-center",
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
                      'Category deleted.',
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
         $('#bsModal').modal('show')
         this.editCategoryName = rowData.name
         this.editDescription = rowData.description
         this.editId = rowData.categoryId
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
                 let descriptionS = document.querySelector("#description").value
                 this.$http.put(`${this.url}/${this.editId}`,{
				           name: nameS,
						       description: descriptionS 
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
        this.editDescription = ""
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
