import {mapGetters,mapActions} from 'vuex'

export default {
    name:"Header",
    props:{
        brand:String
    },
    computed:{
        ...mapGetters(['user','cart'])
    },
    methods : {
        ...mapActions(['checkLogin','setLogout']),
        Logout(){
            alert("called")
            this.setLogout()
        },
        moveToCart(){
            this.$emit('cart',true)
        }
    },
    watch:{
        searchQuery(value)
        {
            this.$emit('search',value)
        }
    },
    data(){
        return{
            searchQuery:''
        }
    }
}