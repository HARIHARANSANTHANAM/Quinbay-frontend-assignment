const userStore={
    state:{
        user:{},
        users:[{
          userName:"hari21032001@gmail.com",
          password:"Hari21032001"
        }]
    },
    mutations:{
    setLogin(state,user)
    {
        localStorage.setItem('user',JSON.stringify(user));
        state.user=user;
      
    },
    setLogout(state)
    {
      localStorage.removeItem('user');
      state.user={}
    }
    },
    actions:{
        AUTH_LOGIN({commit},user){
            commit("setLogin",user);
          },
         AUTH_LOGOUT({commit}){
              commit("setLogout");
          }
    },
    getters:{
        user(state){
            return state.user;
          },
          users(state){
            return state.users;
          }
    },
    namespaced:true
}

export default userStore;