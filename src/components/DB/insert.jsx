import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
const Upload = () => {
    const URL="http://127.0.0.1:8000/api/";
    const DBEl=['Category','Post'];
const categories = useSelector(state => state.categories)
/*
function UplodFromRedux(element){
  categories.map((el)=>{
    axios.post(URL+DBEl[0],{
      "name":el.label,
      "img":el.value,
})
.then(res => { console.log(res);});
  });
}
*/



return (
  <div>
   {/* <button onDoubleClick={UplodFromRedux(DBEl[0])}>upload  Category from store </button>*/}

  <form>

  </form>



  </div>
      );
}
export default Upload;