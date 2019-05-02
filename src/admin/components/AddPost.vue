<template>
     <div>
        <quill-editor ref="myTextEditor"
                v-model="content"
                :config="editorOption">
        </quill-editor>

        <button @click="save" style="background-color:blue;">
              Save
        </button>
     </div>
</template>



<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'app',
  mounted(){
      
  },
  data(){
    return{
      content : "",
      editorOption: {}
    }
  },
  methods:{
     save(){
        alert(this.editor.root.innerHTML)
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

