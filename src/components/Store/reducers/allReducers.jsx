import { CategoriesReducer } from './categories';
import { subCategoriesReducer } from './subCategories';
import { UserInfoReducer } from './userInfo'
import { combineReducers } from "redux";
export const AllReducers = combineReducers({
    categories : CategoriesReducer ,
    subCategories : subCategoriesReducer,
    userInfo : UserInfoReducer,
})
 
export default AllReducers;
