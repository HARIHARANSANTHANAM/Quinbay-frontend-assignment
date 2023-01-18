import { mapActions } from "vuex";

export default {
    name:"MyInfo",
    props:{
        users:[]
    },
    methods : {
        ...mapActions(['checkLogin']),
         Signin(e){
            e.preventDefault();
                let user=this.users.find((user)=>this.userName===user.userName && user.password===this.password);
                console.log(user)
                if(user){
                this.checkLogin(user);
                }
                else{
                    alert("Invalid Username and Password")
                }
         }
    },
    data(){
        return{
            userName:'',
            password:''
        }
    }
}