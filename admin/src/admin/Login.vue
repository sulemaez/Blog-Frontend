<template>
    <div class="container-fluid outer" style="height: 80vh;" >
        <div class="col-md-4 inner text-center" style="clear:both;height:300px;">
              <h3>Login</h3>
              <div class="outer">
                   <input class="login-input" type="text" id="username" placeholder="username">
                   <input class="login-input" type="password" id="password" placeholder="password">
                    <input class="pass" type="submit" value="Login">
              </div>
        </div> 
    </div>
</template>


<script>
export default {
    name: 'app'
}
</script>

<style>
    .outer{
        /* width: 70%; */
        display:flex;
        flex-direction:column;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        align-content: center;
        
	}

	.inner{
	    box-shadow: 0px 0px 10px gray;
	}

  .login-input{
    padding:10px 10px;
    width: 200px;
    outline: none;
    border :0;
    color:white;
    background: none;
    text-align: center;
    border: 2px solid #3498db;
    border-radius: 24px;
    transition: 0.25s;
    display: block;
    margin: 20px;
}
.login-input:hover{
    width:280px;
    border: 2px solid #2ecc71;
    border-radius: 24px;
}

.pass{
    background: none;
    color:black;
    border:0;
    border: 2px solid #2ecc71;
    border-radius: 24px;
    padding: 12px 10px;
    width:100px;
}

.pass:hover{
    background:#2ecc71;
    cursor: pointer;
}

</style>
