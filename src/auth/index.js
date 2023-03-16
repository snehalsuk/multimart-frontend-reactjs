//check auth key is present or not
export const isLoggedIn=()=>{
    let data =localStorage.getItem("data");
    if(data!=null){
        return true;
    }else{
        return false;
    }
}


//set login
export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next()
}

//logout user
export const doLogout=(next)=>{
    localStorage.removeItem("data");
    next()
}

//get current user
export const getCurrentUserDetail=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).user;
    }else{
        return false;
    }
}


export const getToken=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).token
    }
    else{
        return null;
    }
}