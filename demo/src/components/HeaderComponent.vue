<template>
    <div class="header">
            <div class="logo">
                <img @click="toggleSidebar()" style="max-width:100%;" src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg"/>
            </div>
            
            <div class="search_nav_container">
            <div class="searchcontainer"> 
                <form id="searchform" style="display:flex" >
            <input type="text" placeholder="Search.." class="search" v-model="searchQuery">
            <button class="searchBtn" style="cursor:pointer" >Search</button>
        </form>
            </div>
            <nav>
                <a class="username">hi, {{user?.userName}}</a>
                <button class="btn warning" @click="Logout" >Logout</button>
                <!-- <button class="btn warning" @click="toSigninPage" v-else>Login</button> -->
            </nav>
            <div :class="[isSidebarOpened?'show-sm-open':'show-sm']">
                <div class="sidebar-container">
                <button @click="toggleSidebar()" dir="rtl">close</button>
                <a href="#">Home</a>
                <a href="products.html" >Products</a>
                <a href="#" >Contactus</a>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script src="./js/Header.js"/>
<style scoped>

.username{
    color:white;
}
.header {
    display: flex;
    position: sticky;
    top: 0%;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    width:100%;
    background-color: #2874f0;
}

.header .logo{
    height:50px;
    width:50px;
    border-radius: 5px;
    position: relative;
    display: flex;
}

.header .brand{
    color:white;
}

.header .logo img{
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    border-radius: 5px;
    margin-left:2px;
}



.searchBtn{
  padding: 12px 20px;
  margin: 5px 5px;
  box-sizing: border-box;
    color: white;
    background-color: #2874f0;
    border: 3px solid white;
    border-radius: 5px;
}

.search{
    padding: 12px 20px;
    margin: 5px 5px;
    width:100%;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #2875f03f;
    border:2px solid white;
  }

  .search::placeholder{
    color:white;
  }
  
  .search:focus{
      color:white;
  }
   .search_nav_container{
    display: flex;
    align-items: center;
}
.show-sm{
    display:none;
}

.sidebar-container{
    width: 70%;
    height: 100vh;
    overflow: scroll;
    background: white;
}

@media (max-width:630px){
    .header nav{
        display: none;
    }
    .search_nav_container{
        display: block;
    }

   
    .searchcontainer{
        display:block;
    }
    .show-sm{
         display: block;
    position: absolute;
    background: #00000066;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: translate(-100%, 0px);
    transition: .5s;
    }
   
.show-sm-open {
     display: block;
    position: absolute;
    background: #00000066;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: translate(0%, 0px);
    transition: .5s;
}
.show-sm a{
        display: block;
        background: none;
        color: black;
}
    .show-sm-open a{
        display: block;
        background: none;
        color: black;
    }
    .search{
        width:fit-content
    }
}

@media (min-width : 631px) and (max-width:900px) {
    .header{
        width: 100%;
    }
}
</style>