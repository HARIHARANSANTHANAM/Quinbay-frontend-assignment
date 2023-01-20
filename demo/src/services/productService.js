import axios from 'axios';

const PRODUCT_ENDPOINT=axios.create({
    baseURL:"https://www.blibli.com/backend"
})

const getProduct=(id,{success,fail})=>{
    PRODUCT_ENDPOINT.get(`/product-detail/products/${id}/_summary`)
    .then((res)=>{
        success(res)
    })
    .catch((err)=>{
        fail(err)
    })
}

const getProducts=async (searchTerm,{success,fail})=>{
PRODUCT_ENDPOINT.get(`/search/products?searchTerm=${searchTerm}&start=0&itemPerPage=24`)
    .then((res)=>{
        success(res)
    })
    .catch((err)=>{
        alert("failed")
        fail(err)
    })
}

export default {getProducts,getProduct};