const onSuccess=(successCallback,...msg)=>{
   // console.log(msg)
    console.debug(msg)
    successCallback(msg);
}

const onError=(...err)=>{
    console.error(err);
}

export default {
    onSuccess,
    onError
}