<template>
     <div id="contain-view">
       <h3 class="text-center">Add A New Post</h3> 
       <form class="form">
             <div class="form-group">
                <label for="title">Title</label>
               <input class="form-control" type="text" name="title" id="title">
              </div>
              <div class="form-group ">
                <label for="slug">Slug</label>
               <input class="form-control" type="text" name="slug" id="slug">
              </div>
              <div class="form-group ">
                <label for="category">category</label>
                <select  class="form-control" name="category" id="category">
                   <option v-for="category in categories" :value="category.categoryId">
                     {{category.name}}
                   </option>
                </select>
                <!-- ToDo add tags -->
              </div>

              <div id="tag-div">
                 <label>Tags</label><br>
                 <select id="tags" name="tags[]" multiple="multiple">
                    
                    <option v-for="tag in tags" :value="tag.tagId">{{tag.name}}</option>
                 </select>
              </div>
       </form>
       <label for="body">Body</label>
               <quill-editor ref="myTextEditor"
                v-model="content"
                :config="editorOption">
        </quill-editor>

        <div>
            <button @click="save()" class="savePostBtn btn btn-primary">
              Save Post
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
      }).catch((err) => {
        console.log(err + " Fetching categories");     
      })

      //get tags
      this.$http.get(`${this.$url}tags`)
      .then((result) => {
          this.tags = result.data.data   
          
          $('#tags').select2();
      }).catch((err) => {
        console.log(err + " Fetching categories");     
      })
  },
  data(){
    return{
      categories : [],
      tags : [],
      content : "",
      editorOption: {}
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
              featured : false
           },
           categoryId:categoryId,
           tags : tags 
         }
           
            this.$http.post(`${this.$url}posts`,post)
            .then((data)=>{
							//alert
							this.$swal({
								type: 'success',
								title: 'Post Added',
								showConfirmButton: false,
								timer: 1500
							});
              //clear th field
							document.getElementById("title").value = ""
              document.getElementById("slug").value = ""
              this.$refs.myTextEditor.quill.root.innerHTML = ""
            
            
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

  .savePostBtn{
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
