<template>
    <header class="container-fluid shadow pl-4">
       <nav class="navbar navbar-light bg-white justify-content-between">  
        <a class="navbar-brand">
             <img class="img-responsive float-left mr-2" style="width:30px;" src="../assets/logo.jpg" alt=""> 
             <h3 class="font-weight-bolder font-italic float-left">Blogo</h3>
        </a>
        <form class="form-inline">
            <input class="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
     </nav>
    </header>   
</template>

<style>
  header{
      background-color: white;
  } 
</style>

<script>
    export default {
        name : 'navbar'
    }
</script>

