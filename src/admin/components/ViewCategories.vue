<template>
    <div class="table-container">
          <v-server-table :columns="columns" :options="options">
                  <template slot="actions" slot-scope="props">
                      <a class="fa fa-edit" title="edit" @click="edit(props.row.categoryId)"></a>
                      <a class="fa fa-eraser" title="delete" @click="erase(props.row.categoryId)"></a>
                  </template>
          </v-server-table>
    </div>
</template>

<script>
import Vue from 'vue'


export default {
    mounted(){

    },
    methods:{
       //delete an entry from table
       erase(id){
         
       }
    },
    data(){
              return{
          columns: ['categoryId','name', 'description','actions'],
          tableData: [],
          options: {
            requestFunction: function (data) {
                return this.$http.get(`${this.$url}categories`, {
                    params: data.data
            }).catch(function (e) {
                    this.dispatch('error', e);
            }.bind(this));
          }   
      ,
       responseAdapter({data}) {
        return {
          data,
          count: data.length
        }
      },
      templates: {
            edit : 'edit'
        }
      }
    }
    },
    
}
</script>

<style>
  .table-container{
      background-color: white !important;
      align-content: center;
      padding: 20px;
      border-radius: 20px;
  }
</style>
