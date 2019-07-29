<template>
     <div id="contain-view">
       <h3 class="text-center">Add A New Post</h3> 
       <form class="form">
             <div class="form-group">
                <label for="title">Title</label>
               <input class="form-control" type="text" name="title" id="title" :value="rowData.title">
              </div>
              <div class="form-group">
                <label for="slug">Slug</label>
               <input class="form-control" type="text" name="slug" id="slug" :value="rowData.slug">
              </div>
              <div class="form-group" id="select-group">
               
                <!-- ToDo add tags -->
              </div>

              <div id="tag-div"></div>
       </form>
       <label for="body">Body</label>
               <quill-editor ref="myTextEditor"
                v-model="content"
                :config="editorOption">
        </quill-editor>

        <div>
            <button @click="save()" class="savebtnpostedit btn btn-primary">
              Save Edit
            </button>
        </div>
     </div>
</template>



<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import  'select2/dist/css/select2.min.css'
import  'select2/dist/js/select2.min.js'
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'app',
  mounted(){
        //get the categories
      this.$http.get(`${this.$url}categories`)
      .then((result) => {
          this.categories = result.data.data   
             //get tags
             this.$http.get(`${this.$url}tags`)
              .then((result) => {
                    this.tags = result.data.data 
                      //get the post
                      this.$http.get(`${this.$url}posts/${this.$route.params.id}`)
                      .then((result) => {
                          this.rowData = result.data    
                          this.currentCategory = result.data.category
                          this.currentTags = result.data.tags   
                          this.populateSelect()      
                          this.populateTags();
                          this.$refs.myTextEditor.quill.root.innerHTML = result.data.body
                        })
                        .catch((err)=>{
                            console.log(err+" error getting post data")
                        });
          
                   
              }).catch((err) => {
                  console.log(err + " Fetching categories");     
             }) 
           
      }).catch((err) => {
        console.log(err + " Fetching categories");     
      })

      
  },
  data(){
    return{
      content : "",
      editorOption: {},
      categories: [],
      tags : [],
      rowData : {},
      currentCategory : {},
      currentTags : []
    }
  },
  methods:{
     save(){
         let title = document.getElementById("title").value
         let slug = document.getElementById("slug").value
         let body = this.$refs.myTextEditor.quill.root.innerHTML
         let categoryId = document.getElementById("category").value
         let preview = this.getPreview()
     
         let tags = []
         $("#tags").select2('val').forEach(id => {
             tags.push(id)
         });
      
         //TODO validate
         
         let post = {
           post : {
              title : title,
              slug : slug,
              body : body,
              preview : preview,
              featured : this.rowData.featured
           },
           categoryId:categoryId,
           tags : tags 
         }
           
       this.$http.put(`${this.$url}posts/${this.$route.params.id}`,post)
        .then((data)=>{
				//alert
				this.$swal({
					type: 'success',
					title: 'Post Edited',
					showConfirmButton: false,
					timer: 1500
				});
              //clear th field
			}).catch((error) =>{
          this.$swal({
            type : 'error',
            title : 'Failed to Add!',
            showConfirmButton : false,
            timer : 1500 
			   })
		  });
     },
    getPreview(){
      let text = this.$refs.myTextEditor.quill.getText()
      let preview = text
      if(text.length > 200){
         preview = text.substr(0,200) 
      }
      return preview
     }
     ,populateSelect(){
         let selectDiv = document.querySelector("#select-group")
         let centerContent = ""
         this.categories.forEach((cat)=>{
            if(cat.categoryId == this.currentCategory.categoryId){
                centerContent += `<option selected="true" value="${cat.categoryId}">${cat.name}</option>`
            }else{
              centerContent += `<option value="${cat.categoryId}">${cat.name}</option>`
            }
         })

         selectDiv.innerHTML = `<label for="category">category</label>
                                 <select  class="form-control" name="category" id="category">
                                    ${centerContent}
                                </select>`                  
     },
     populateTags(){
        let tagDiv = document.querySelector("#tag-div")
        let centerContent = ""
        this.tags.forEach((tag)=>{
           let selected = false
           this.currentTags.forEach(t =>{
              if(t.tagId == tag.tagId)selected = true
           }) 
           if(selected){          
                centerContent += `<option selected="true" value="${tag.tagId}">${tag.name}</option>`
           }else{
              centerContent += `<option value="${tag.tagId}">${tag.name}</option>`
           }
           
        })
        tagDiv.innerHTML = `<label>Tags</label><br>
                             <select id="tags" name="tags[]" multiple="multiple">
                               ${centerContent}
                           </select>`
         $('#tags').select2();           

     }
  },
  components: {
      quillEditor
  },
  computed:{
     editor(){
       return this.$refs.myTextEditor.quill
     }
  }
}
</script>

<style>
    .form-group{
      margin-top: 20px;
    }
    #contain-view{
      background-color: white;
      padding: 4px 60px 30px 60px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    form{
       width: 60%;
    }

    .savebtnpostedit{
      margin-top: 20px;
      width: 300px;
    }

    #tags{
      width:100%;
      margin-bottom:30px;
    }

    #tag-div{
        margin-bottom:30px;
    } 
</style>
