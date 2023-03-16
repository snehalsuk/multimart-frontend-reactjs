import { myAxios } from "./helper"


 



export const loadAllPosts=()=>{
    return myAxios.get(`/banner/getAll`)
    .then(response=>response.data)
}



export const postByMobileCategory=()=>{
    return myAxios.get(`/prod/category/1/products`)
    .then(response=>response.data)
}

export const postByLaptopCategory=()=>{
    return myAxios.get(`/prod/category/2/products`)
    .then(response=>response.data)
}

export const postByWatchCategory=()=>{
    return myAxios.get(`/prod/category/3/products`)
    .then(response=>response.data)
}
export const postByHeadphoneCategory=()=>{
    return myAxios.get(`/prod/category/4/products`)
    .then(response=>response.data)
}

export const postBySofaCategory=()=>{
    return myAxios.get(`/prod/category/5/products`)
    .then(response=>response.data)
}


export const SinglePost=()=>{
    return myAxios.get(`/api/categories`)
    .then(response=>response.data)
}

