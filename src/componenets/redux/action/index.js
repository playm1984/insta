const addPost = (data) => {
    return{
        type: "ADD_POST",
        payload: {...data}
    }
}

const delPost = (id) => {
    return{
        type: "DEL_POST",
        payload: id
    }
}

const addEdit = () => {
    return{
        type: "ADD_EDIT"
    }
}

export { addPost, delPost, addEdit }