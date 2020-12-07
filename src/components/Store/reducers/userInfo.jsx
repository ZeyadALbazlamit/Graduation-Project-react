export const UserInfoReducer = (state =[{
    userId : 1234,
    userName : "لقاء ابو جبه",
    userEmail : "leqaa@gmail.com",
    userPhoneNo : "078665499",
    userRate : 5,
    userImg : "/images/6.png",
    userPostsId :[1,2,3,4],
    userIntrest : ["cars","mobiles"],
    userFavoritesPostsId :[1,2,3],
    userLoged : false ,
    userType : "seller"
}], action) => {
            switch (action.type){
                case "GET_USER_INFO":
                        return state;
                case "SET_USER_INFO":
                        return [
                            
                            {
                                userId : action.payload.userId,
                                userName :action.payload.userName,
                                userEmail : action.payload.userEmail,
                                userPhoneNo :action.payload.userPhoneNo,
                                userRate : action.payload.userRate,
                                userImg :action.payload.userImg,
                                userPostsId : action.payload.userPostsId,
                                userIntrest :action.payload.userIntrest,
                                userFavoritesPostsId :action.payload.userFavoritesPostsId,
                                userLoged : action.payload.userId,
                                userType : action.payload.userType
                            }
                        ];
                default : return state;  
            }
}

