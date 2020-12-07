export function getCategories  () {
    return {
        type: "GET_CATEGORIES"
    };
};

export  function getCategoriesOf  (id) {
    return {
        type: "GET_CATEGORIES_OF"+id
    };
};

export  function getUserInfo  (id) {
    return {
        type: "GET_USER_INFO"+id
    };
};

export function setUserInfo  (userId , userName ,userEmail , userPhoneNo ,userRate ,
     userImg ,userPostsId ,userIntrest ,userFavoritesPostsId ,userLoged  ,userType ) {
    return {
        type: "SET_USER_INFO",
        payload: {
            userId : userId,
            userName : userName,
            userEmail : userEmail,
            userPhoneNo : userPhoneNo,
            userRate : userRate,
            userImg : userImg ,
            userPostsId :userPostsId,
            userIntrest : userIntrest,
            userFavoritesPostsId :userFavoritesPostsId,
            userLoged : userLoged ,
            userType : userType
        }
    };
};