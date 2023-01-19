import { mapActions ,mapGetters} from "vuex";

export default{
    computed:{
        ...mapGetters(['users'])
    },
    methods:{
        ...mapActions(['checkLogin']),
        toSigninPage()
        {
            this.checkLogin({guest:false});
        },
        Logout(){
            alert("Logged Out!!")
            this.setLogout()
        },
        signin(e){
            e.preventDefault();
                let user=this.users.find((user)=>this.userName===user.userName && user.password===this.password);
                console.log(user)
                if(user){
                    user.guest=false;
                // this.checkLogin(user);
                this.$router.push({path:'/home',query:{id:1}})
                }
                else{
                    alert("Invalid Username and Password")
                }
         },
         signinAsGuest(){
            let guestuser={guest:true}
            this.checkLogin(guestuser)
         }
    }
}