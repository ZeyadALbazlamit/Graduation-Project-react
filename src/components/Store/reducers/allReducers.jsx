import { CategoriesReducer } from './categories';
import { subCategoriesReducer } from './subCategories';
import { combineReducers } from "redux";
export const AllReducers = combineReducers({
    categories : CategoriesReducer ,
    subCategories : subCategoriesReducer,
})
 
export default AllReducers;
