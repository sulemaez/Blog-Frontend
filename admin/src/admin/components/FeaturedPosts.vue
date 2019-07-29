<template>
    <div>
    <vuetable ref="vuetable"
                :api-mode="false"
                :fields="fields"
                :css="css.table"
                :data="posts"
                >
            <div slot="action-slot" slot-scope="props">
                <button class="btn btn-primary" @click="editRow(props.rowData)"><i class="glyphicon glyphicon-pencil"></i></button> 
                <button class="btn btn-danger" @click="removeRow(props.rowData.postId)"><i class="glyphicon glyphicon-remove"></i></button> 
            </div>
    </vuetable>
    </div>
</template>

<script>

import {Vuetable,VuetablePagination} from 'vuetable-2'

export default {
  mounted(){
      this.getFeatured();   
  }
  ,data(){
     return{
         url : `${this.$urluser}posts/featured`,
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
             width: '20%',
             
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
      },
       posts : []
     }  
  },
  methods : {
     getFeatured(){
         this.$http.get(this.url)
        .then((data)=>{
             this.posts = data.data
         })
     },
     removeRow(id){
        this.$swal.fire({
            title: 'Remove from featured !',
            text: "continue ?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes Remove !'
        }).then((result) => {
            //if remove featured
            let po;
            if (result.value) {
                this.posts.forEach(p=>{
                   if(p.postId == id){
                       po = p
                   }
                })
                 let tg = []
                 po.tags.forEach(t=>{
                     tg.push(t.tagId)
                 })
                let post = {
                    post : {
                        title : po.title,
                        slug : po.slug,
                        body : po.body,
                        preview : po.preview,
                        featured : false                   
                        },
                    categoryId: po.category.categoryId,
                    tags : tg 
                 }
                    
                this.$http.put(`${this.$url}posts/${id}`,post)
                    .then((data)=>{
                            //alert
                            this.$swal({
                                type: 'success',
                                title: 'Post Removed from featured',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            this.getFeatured()
                        //clear th field
                        }).catch((error) =>{
                    this.$swal({
                        type : 'error',
                        title : 'Failed to remove!',
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
