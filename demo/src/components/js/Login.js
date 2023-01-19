import { mapActions, mapGetters } from "vuex";
import Login from '../../mixins/Login';
export default {
    name:"LoginComponent",
    methods : {
        ...mapActions(['checkLogin']),
    },
    computed:{
        ...mapGetters(['users'])
    },
    mixins:[Login],
    data(){
        return{
            userName:'',
            password:''
        }
    }
}