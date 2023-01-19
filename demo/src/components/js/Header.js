import {mapGetters,mapActions} from 'vuex'
import Login from '../../mixins/Login'
import debounce from '../../helpers/debounce.js'

export default {
    name:"Header",
    props:{
        brand:String
    },
    mixins:[Login],
    computed:{
        ...mapGetters(['user','cart'])
    },
    methods : {
        ...mapActions(['checkLogin','setLogout']),
        moveToCart(){
            this.$emit('cart',true)
        }
    },
    watch:{
        searchQuery: debounce(function (newVal) {
                this.$emit('search',newVal)
              }, 500)
    },
    data(){
        return{
            searchQuery:''
        }
    }
}