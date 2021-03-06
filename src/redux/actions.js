import Actions from "./action.types";


export const addComment = (comment) => ({
    type : Actions.ADD_COMMENT,
    comment 
})

export const setCurrUser = user => ({
    type : Actions.SET_CURR_USER,
    user
})

export const deleteComment = cid => ({
    type : Actions.DELETE_COMMENT,
    cid
})