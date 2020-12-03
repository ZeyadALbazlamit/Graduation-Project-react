export const UserInfoReducer = (state =[{
    userId : 1234,
    userName : "لقاء ابو جبه",
    userEmail : "leqaa@gmail.com",
    userPhoneNo : "078665499",
    userRate : 5,
    userImg : "/images/6.png",
    userPostsId :[1,2,3,4],
    userIntrest : ["cars","mobiles"],
    userFavoritesPostsId :[1,2,3]
}], action) => {
            switch (action.type){
                case "GET_USER_INFO":
                        return state;
                default : return state;  
            }
}

