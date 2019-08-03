<template>
    <header class="container-fluid shadow pl-4">
       <nav class="navbar navbar-light  justify-content-between">  
        <a href="/" class="navbar-brand">
             <img class="img-responsive float-left mr-2" style="width:30px;" src="../assets/logo.jpg" alt=""> 
             <h3 class="font-weight-bolder font-italic float-left">Blogo</h3>
        </a>
        <form class="form-inline">
            <input id="searchField" class="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button @click="search" class="btn btn-outline-primary my-2 my-sm-0">Search</button>
        </form>
     </nav>
    </header>   
</template>

<style>
  header,nav{
     background-color: #fcfcfc !important;
  } 
</style>

<script>
    export default {
        name : 'navbar',
        methods:{
            search(e){
               e.preventDefault()
               this.$router.push(`/search?q=${document.querySelector("#searchField").value}`)
               this.$bus.$emit('search')
            }
        }
    }
</script>

