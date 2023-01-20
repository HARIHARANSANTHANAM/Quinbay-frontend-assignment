<template>
    <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <!-- <center><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAdVBMVEUAlNn///8AktgAjdcAkNgAkdgAjNe52/LD3/PX6vfV5/Z5vedSrOE5pN5Ep+Cczeze8Pnz+/4AhNTs9vzM5fUAiNV/vuey1/CIw+lls+O22fEYmtswoN3m8/vJ4/Wn0u6UyOtRq+GdyesAgdNfseKPxepvt+T76J/3AAALdUlEQVR4nO2c6bqqOhKGyaguRwQVFyB6Wr3/S+yABFIQFFwRu89T3489IBTkJUNVJcHzUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhviDKGKXikzdQ+v803i3OvOnUu84/xY1yRpNV8pmifdT4M/HpKSTEJ3P5kZdGWbLeEEKm7CPG48L46RPGn4rLJPu5ryJvd/Y/cHOWnEihyQeM83j6MP6Rd/JMbBrO2TaZ87tPyMp1daPyTMjHsMlIGx8f24+6a1je/e64e6NsSj6HjU3I97DNSK0zd2tcnsjnsMma2hew6ZIdVCP9xy02viafw8Zv5IvYuOp8pt59nWx3i4ljHwTUZNfYgPHRsdFlutpeE3mZHZa7T5bMObafL2KjQvlVekQI5pwp79GZ8X8tNnndx7Ie7USSkmDprIP7t2IrynXbBeXNf3dBcEzJI1JRcepfK96/CxvXPJTjM5kHRPwWt75LxgI/2QVp/gxyNdlMPAu3AXFzN7YuG0OMd2L7TGDPzj+Ti8zNr0i49XzCQjJLyV5mhzhRxbuT+Y6zA/GnZNZ4iSpuZnFsg2m/kx2bsuLFjDet5Ma9OO5t3I6NMp4kwmEHrW9XdGUHZVhVtvjikz1L5Ha791Sk4icKl/orjWYk2v3nTkAhVNx8C5V3t+7b+dmxUbFWvUKQecDb0caz3sat2ISX+59kmjh23OmFHORqoyoSk2STEbLfLaNJMGOPkeEs2b4YWP3ZJiCpWdtYXLrlf8MmEr88sjK4cW38b9hEoo9c3XKjC/Jz4dsJOWV5odJEhmXPVpbmkGxVo11Pf34mkdGQqKy88j9ho55fHarrMouGG7dgo159yHEKjuURj78pTPv73aosRSb0/VaUr1RV3G7l8sh1Icyg/E/Yil6gUQHN8PJP2EzjodvBlUqxP8zSIM1bJK8q9Wz7IEnypBvl+u1HZSmkQeBP2LhvHCsrBDu9Y9yCDRjvPbi8lnLGVrfzUm53jIlYPSGr7iIPxhNUBSnHUiNH8zdsNDEOlfk9fnjLeBsbjU3jC2fYaFzGUX5eiygo2XL++LsI52WjFNJ8ja6xyc1HsF2dYeN7bVO3fJ7pI1F5z7xuq3EDvjJ32IxOW7cjZ9g80TbuQjUOPW0gjtWddwWaTf5DDVN3ba6weSysD5U9gDtsxrjVctX/It58F3W9DrZFgQq/qSqIvrc7bCo0qbR4OG7usJldwMWhA8KqJ9QZSanjeOKddVHqlpQ5r20eqzqKs34nzrB5/KqPRC79j9qxOehSVGPk/ZL/mT+1yEvmB5vZj35lDrF57Jrm/w+OldfmDpvHk+Kem4tTr03c9Y103KQ9ND84i3ByuDHBVaRNd1ulXRUSu8TmCbm8z1eyCq1cYlMulne9xtJtiFB1Zb6fr5wQVHBvkcRcKkw7SuNkdZzf/skO059ZWpBaOR5Jy8cQwiiXU2yfWRLC98dLEgsmd4zGcXK5zqPb+jANS0ot/ZaDnVtsUI6xfUA03keK0mm2CeyYmro5dndt+t/HxvvBqvXU3c3z5ryVbjRK9gyb6iLKS+3YXhp/hk3ZfnLpUMHoo4+8J9jYZTqdZPsVb2dqyxO6k+Jq2FnMoydRAlu9Mt6JTTAW36Obw8wRG1jb/Cfurqzm3MObJ20T013Y8uVVhROy7MRWL7mZnWO78Q5sVCZFgtelv8vMJ+yhJ1GC/DVPDK+WsnVg4572FTuxSTMpQsKjzbgdG4918sbh8ikzaOujSSc2mTVOTReteY8Od7cKgzuxMXPxSGH82PLE7Nhk5Zi6xMabhX2hdVdwxe/tk09eYxS0YpPGkpcObHV+oVYYN43bsNVt2y22yHiQpaXoZOGZGcl9BzZKLZcScoUDmjUDYjxBBzZqH+/v8iU2s3gusQmDlApyQA9S6CBBRuyoA/4GtlYrKnUDRbNgE0vzdDs2fiZWrcFLsaUpLTlQJ6KX2mzCdu2eLtxJI7NTlquFjYrmdVqZyc2WplyYZ3dg6zQO5h8t2MxHd4rNcNz8CIyFpU6ZScizYxP75mWVzkbR3sMmbH3HQya3UbHZ+6RO6brTwMZCEmZZNrW5M8e6634Pmxrtw0OWTWzG54bxEbHVcyu95HdgE5FQgQ9nki3a3aMxafxebYtoHlbZjdeu/7jYjPIHxCbzaMAsl+XdT5X3oQysoc0VVt3bm32badwcGnNtauOjYqupRDuvDS6l0hgkNx21zbRIudcYWfTw+y42YFyY/hCpXaJxsbG0Mkspazu/a2Y6ILOu2gZEJfQYAg3779hy47DCVTt1xq1t9SOqV9l2kG7cHGx/emGDnj+pd4W4wGbO2RTSyyvGrW11SZbUMtQfhXnvsCc2sLVCVVLpElsjrk+18S9h23M4RV6IgQBl2hcbpSAeKt09R9gawVYivopN3Yo1Hd4DAxt+emOD0aDutx1hM9Zg5Cp3OH0Lm6oTrWxv49CkNzboR+uw3RE2GG6VPcfXsKlQhcMUzVUF6ebo2h8bzOSljrGBdWL+l7HlLjczuV1ZI4kwABtsSG4bqSfm5lWPnvN72FI1KFQbgMk05sovBx5w/76t8ciPAMsZNvgyky9jU+4szedD5tkhm8fFv8HP9Rb0HthAN5k4xgaG/MX42CTMK6QFLKHCclEATMGv/f22ZslWbrF5wrz/I3gbF1sDjBrOWRE6U8F4K2XbL7hyis2+LwFgu4+PjbWj999jzCWLj5PWL0Yob9LWa7yeYBvUSF+vefh+Ix00v5xWQbn5jNYV/7DXHjQkAPfCunYUdpzLL2AbQq3OZYA18L60GIbxbRn/9MMGOge78at5VTw+ts7pDbsqbMArs63BBmUPBrm7cFrUtnQDpGr88YOroWtnNDbYBPeWbhsgOg3CBnuuyGJcGsvLH2vZR8YGpilfq6pXYCixdG7wfawHRQlwZcqs3Uoh12z82gY7iddKdH4broJot1I437walDhqzCe3jcPfj+MnjmBw91rVBhxYTbNmdYP1QSeu+2KDVXXSrG4UeG3kC9ld/s8wbPVHj2DY1ey3YXZXu6x9sYEcn8U4yApW+xtGxMbaM49PVX/0CA53G7huSsJ0v25mvbHB8qZwxReDLURfMyo28FpfywgIJKhuE5ObhAWrV7L1xdaobifTOIMTHqHVA/80tmZI+kLGV/jgM5GT0BWRN+cN6+G3Nzbo4JDQMN4IlKsWPCq2YdS0j/S4FtLx56xY0MDujTD3VjXs/tg8BqcM/X2H8XowGhGbZarqhcDSqOZiluk6OrfWetVrGYZgAxsmC53W0W3SjKCN1zgmtgUZKNOJMj+q0KnA2LkzBBvl9iUpQL7x5ZYRsbVWorwU2DndIzTzTc5DsCnjL18KND4etqH+RzNCFK+KloIP+QBsD2eugc1cN0/jF/UtiM3TAbYD/yi2GRmoXxgPUO+phQncsWLeLngsvwLYGvlOKpr9G9AJbtwzsZWNF2Bz+AWvwVuuwFBaPJlllVL18PfGzgQDm25fJrbfVogmOxY755o3diYY2CrjBrZWiPa+hm+50glH83GXHRVuzZspnxrbTDdeA1tkKRhLuow39zwY2Ga68RrYzu6oDQ7kc7WzhpRd22ULbrS9pUxjUy5e5ddqbGFibURULtot1T977S+LaWz+vqqGFbaZ3fibGpptI1UqFUrIZG2Sm62X0rYP7+Hone6yNvLA5v8urdvPijNYfDaNb7KL3fjsYZwZxgts/mTleM+3WM4HquMTd/kn6pb32zrLzvcV69q7KI7zYyIZGC6T7DxXx56V62E8yo3PV9zK7Inx5XPjb6mYSR4g8eQJSlvPThGi9StVV/T4uu/7xp0zQ6FQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqG+rP8C4gWn4qUjrbgAAAAASUVORK5CYII=" width="400" height=200/></center> -->
        <form>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" v-model="userName"/>
            <label class="form-label" for="form1Example13" >Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" v-model="password" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            <!-- Checkbox -->
           
            <a style="background:none;text-decoration:underline">Forgot password?</a>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-lg btn-block" @click="signin">Sign in</button>

          
          <!-- <button type="button" class="btn btn-primary btn-lg btn-block" @click="signinAsGuest()">Guest user</button> -->

        </form>
      </div>
    </div>
  </div>
</section>
</template>


<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
 
<script src="./js/Login.js"/>

<style scoped>
.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
button{
    width:100%;
}
</style>