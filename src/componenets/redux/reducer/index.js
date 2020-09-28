const initialState = {
    instaPost: [],
    link: '',
    post: '',
    user: '',
    id: 0,
    edit: true
}

const reduser = (state = initialState, action) => {
    switch(action.type){
         case "ADD_POST":
            const newItem = {
                user: action.payload.user,
                link: action.payload.link,
                post: action.payload.post,
                like: false,
                id: state.id++
            }
            return{
                ...state,
                instaPost:[
                    ...state.instaPost,
                    newItem
                ]
            }

        case "DEL_POST":
            const idx = action.payload;
            const itemIndex = state.instaPost.findIndex(item => item.id === idx)
            return{
                ...state,
                instaPost:[
                    ...state.instaPost.slice(0, itemIndex),
                    ...state.instaPost.slice(itemIndex + 1)
                ]
            }

        case "ADD_EDIT":
            console.log(state.edit)
            return{
                ...state,
                edit: !state.edit
            }
        
        default:
            return state
    }
}

export default reduser