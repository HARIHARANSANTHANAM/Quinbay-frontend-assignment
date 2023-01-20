import { mapGetters } from "vuex";
import Login from '../../mixins/Login';
export default {
    name:"LoginComponent",
    computed:{
        ...mapGetters('userStore',['users'])
    },
    mixins:[Login],
    data(){
        return{
            userName:'',
            password:''
        }
    }
}