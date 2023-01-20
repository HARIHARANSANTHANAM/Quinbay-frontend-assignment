import { mapActions ,mapGetters} from "vuex";

export default{
    computed:{
        ...mapGetters(['users'])
    },
    methods:{
        ...mapActions(['AUTH_LOGIN','AUTH_LOGOUT']),
        // toSigninPage()
        // {
        //     this.AUTH_LOGIN({guest:false});
        //     this.$router.push('/');
        // },
        Logout(){
            alert("Logged Out!!")
            this.AUTH_LOGOUT();
            this.$router.push('/')
        },
        signin(e){
            e.preventDefault();
                let user=this.users.find((user)=>this.userName===user.userName && user.password===this.password);
                console.log(user)
                if(user){
                 this.AUTH_LOGIN(user);

                this.$router.push({path:'/home'})
                }
                else{
                    alert("Invalid Username and Password")
                }
         },
         signinAsGuest(){
            let guestuser={guest:true}
            this.AUTH_LOGIN(guestuser)
         }
    }
}