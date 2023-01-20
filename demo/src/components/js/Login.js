import { mapGetters } from "vuex";
import Login from '../../mixins/Login';
export default {
    name:"LoginComponent",
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