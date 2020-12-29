import axios from 'axios';
import React ,{useState , useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddPost.css'
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesOf } from '../Store/actions/actions'
import { RiImageAddFill } from 'react-icons/ri'
import { Alert } from 'react-bootstrap';

const AddPost = () => {
  
  const [str,setStr]= useState([]);
const [img,setImg]=useState({});
  const [row,setRow]=useState("");
  const { register, handleSubmit, reset, errors } = useForm();
 const [price,setPrice]=useState(10);
function convertImage(F){
  Array.from(F).forEach((f)=>{
    let fr= new FileReader();
    fr.readAsDataURL(f);
    fr.onload=function(){
  console.log(fr.result);
  setStr([...str,fr.result]);
  
  }
  
  })
  
    }
  function Submit(data,e){

    console.log(data);  
  const pro=  Object.entries(data).filter(([key, value]) =>{  
    if (key==="user_id"||  key ==="category_id" ||  key ==="price" ||  key ==="location" ||  key ==="Description" ||  key ==="images" ||  key ==="Sub_Category_name"||key ==="title")
      return false;
  else
  return true;
}); 
const Const=Object.entries(data).filter(([key, value]) =>{   
  if (key==="user_id"||  key ==="category_id" ||  key ==="price" ||  key ==="location" ||  key ==="Description" ||   key ==="Sub_Category_name" ||key ==="title")
    return true;
else
return false;}); 
const Data=[
  Object.fromEntries(pro),
  Object.fromEntries(Const),
  str,
  localStorage.getItem('user_id')
];
console.log(Data);  
if(Data.user_id !=0){
  console.log('GO to DataBase '+   localStorage.getItem('user_id')
  );
   axios.post("http://127.0.0.1:8000/api/Post",Data   )
.then(res => {
  console.log(res);
}).catch(function(error) {
  console.log(error);
})
  }
  setStr([])
}
  function printValue(e){console.log(e.target.value)}
  const [x, setX] = useState(true); 

  const [show, setShow] = useState(false); 
  const categories = useSelector(state => state.categories)
  const subCategories = useSelector(state => state.subCategories)
  const [id , setId] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategoriesOf(id))
  },[id])

  const idChanged = (e,index) => {
    const selectedIndex =document.getElementById("cat").selectedIndex;
    setId(selectedIndex+1);
    console.log(id);
  };

  function handleChangRow(e){  setRow( e.target.value)   }
function deleteImage(e){
  setStr( str.filter((el)=>el===e) )
  e.target.reset(); // reset after form submit

}
  return (
    <>
    <Button variant="" onClick={() => setShow(true)} >
      أضف إعلانك 
    </Button>
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title" >
      <Modal.Body className="Modal" >
        <h5 className="h51">ما اللذي تود بيعه او الإعلان عنه؟ </h5>
          <div className="tableDiv">
            <form onSubmit={handleSubmit(Submit)} >
              <div className="select-items">
                <div ClassName="Row">
 <h3>{localStorage.getItem('user_id')}</h3>
                    <div>
                      <label className="label1" > القسم الرئيسي</label>
                      <select class="scrollbar"  name="category_id"  placeholder=" إختر " onChange={idChanged}
                      ref={register} id="cat">
                      {categories.map((el)=><option class="Option" key={el.id}value={el.id} >{el.label}</option>)}
                      </select>  
                    </div>
                    <div>
                      <label className="label1"> القسم الفرعي</label>
                      <select class="scrollbar" id="select2" name="Sub_Category_name" ref={register} onChange={printValue} onChange={handleChangRow}
                         placeholder=" إختر" >
                        {subCategories.map((el)=>
                            <option value={el.value}  key={el.value}>{el.label}</option>
                          )}
                      </select>
                    </div>
                    {subCategories.filter((e)=>e.label==row ).map((e)=> e.properties.map((el)=>el[0]?
                      <div>
                        <label className="label1">{el[0].kind}</label>
                        <select class="scrollbar" placeholder=" إختر " name={el[0].kind} id="select2"  ref={register} >
                            {el.map((el)=><option value={el.value} key={el.value}>{el.label}</option>)}
                        </select>
                      </div>
                    :''))}
                </div> 
                {/*///////////////////new//////////////////////*/}
                <div>
                  <label  className="label1" > اسم الإعلان</label>
                  <input className="addPostInput" className="addPostInput" placeholder="اسم الإعلان " name="title" ref={register} />
                </div>
                <div>
                  <label className="label1" >الوصف</label>
                  <textarea name="Description" ref={register} placeholder="وصف الإعلان"></textarea>
                </div>
            
                <div>
                  <label  className="label1" > السعر</label>
                  <input type="number" className="addPostInput" className="addPostInput" placeholder="السعر المطلوب بالدينار" name="price" ref={register} />
                </div>
                <div>
                  <label className="label1" > المدينة</label>
                  <select name="location"   ref={register} >
                    <option >عمان</option>
                    <option >اربد</option>
                    <option >الزرقاء</option>
                    <option >عجلون</option>
                    <option >جرش</option>
                    <option >المفرق</option>
                    <option >مادبا</option>
                    <option >السلط</option>
                    <option >الكرك</option>
                    <option >الطفيلة</option>
                    <option >معان</option>
                    <option >العقبة</option>
                  </select>  
                </div>
                <div class="input-group mb-3">
                  <div class="custom-file">
                    <input className="addPostInput" type="file" class="custom-file-input"
                    name="images"  
                    onChange={(e)=>convertImage(e.target.files) }
                      ref={register}/>
                    <label  class="custom-file-label"  for="inputGroupFile01"><RiImageAddFill  /> حمل الصور </label>
                  </div>
                </div>
                <div style={{display:"flex"}}>
                {  str.length>0 ? <Alert    onClick={ ()=>setStr([])  } dismissible >
                { str.map((el)=>
                 

                <img className="image"   src={el}/>
              

               )}
</Alert >:" "
}
</div>
              </div> {/*the end of input  */}
              <br />
              <button className="btn btn-outline-dark text-right pull-right " >تم</button>

            </form>
          </div>
      </Modal.Body>
      <closeButton/>
    </Modal >
    
</>
    )
}

export default AddPost;
