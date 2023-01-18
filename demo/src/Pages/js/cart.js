import {mapGetters} from 'vuex'

export default {
    name:"CartComponent",
    methods:{
        backToHome(){
            this.$emit("cartApp",false)
        }
    },
    computed:{
        ...mapGetters(['cart'])
    }
}