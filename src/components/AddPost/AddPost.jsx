import axios from 'axios';
import React ,{useState , useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddPost.css'
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesOf } from '../Store/actions/actions'
const AddPost = () => {
  
  const [str,setStr]= useState([]);
const [img,setImg]=useState({});
  const [row,setRow]=useState("");
  const { register, handleSubmit, watch, errors } = useForm();
const [user_id,userSetId]=useState(0);
function handleFile(e){ 
  
  setImg(e.target.files[0]);
console.log(e.target.files[0])
/*
  const fd = new FormData();
  fd.append("image",img,img.name)
  axios.post("http://127.0.0.1:8000/api/Post",fd)
.then(res => {
  console.log(res);

});*/
}
 
function convertImage(F){

  Array.from(F).forEach((f)=>{
    let fr= new FileReader();
    fr.readAsDataURL(f);
    fr.onload=function(){
  console.log(fr.result.length);
  setStr([...str,fr.result]);
  
  }
  
  })
  
    }
  function Submit(data){
    console.log(data);  

  const pro=  Object.entries(data).filter(([key, value]) =>{  
    if (key==="user_id"||  key ==="category_id" ||  key ==="price" ||  key ==="location" ||  key ==="Description" ||  key ==="images" ||  key ==="Sub_Category_name")
      return false;
  else
  return true;
}); 
const Const=Object.entries(data).filter(([key, value]) =>{   
  if (key==="user_id"||  key ==="category_id" ||  key ==="price" ||  key ==="location" ||  key ==="Description" ||   key ==="Sub_Category_name")
    return true;
else
return false;}); 
if(localStorage.getItem('user_id'))
{
  userSetId(localStorage.getItem('user_id'))
  
} else userSetId(0)
//const imag=Object.entries(data).filter(([key, value]) => key ==="images"); 
//console.log(Object.fromEntries(imag).images);



/*
const fd = new FormData();
console.log(fd);
fd.append("image",imag[0][1][0]/* images file  *//*,imag[0][0]*//* images name *///)/*

const Data={
  pro:Object.fromEntries(pro),
  contant:Object.fromEntries(Const),
  image:55,
  user_id

};

/*
const Data={
  name:"zeyad",
  image:fd,

};*/
console.log(Data);  
  console.log('GO to DataBase '+ user_id);
   axios.post("http://127.0.0.1:8000/api/Post",Data   , {  'Content-Type': 'application/json','Content-Type': `multipart/form-data; ` })
.then(res => {
  console.log(res);

});


  }
  function printValue(e){console.log(e.target.value)}

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
  return (
  <>
      <Button variant="primary" onClick={() => setShow(true)} >
        Custom Width Modal
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title" >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
          <h5 className="h51">ما اللذي تود بيعه او الإعلان عنه؟ </h5>
            <div className="tableDiv">
              <form onSubmit={handleSubmit(Submit)} enctype='multipart/form-data' >
                <div className="select-items">
                  <div ClassName="Row">
                     
                      <div>

                        <label className="label1" > القسم الرئيسي</label>
                        <select name="category_id" className="select1" placeholder=" إختر " onChange={idChanged}
                        ref={register} id="cat">
                        {categories.map((el)=><option value={el.id} >{el.label}</option>)}
                        </select>  
                      </div>
                      <div>
                        <label className="label1"> القسم الفرعي</label>
                        <select id="select2" name="Sub_Category_name" ref={register} onChange={printValue} onChange={handleChangRow}
                          className="select1" placeholder=" إختر" >
                          {subCategories.map((el)=><option value={el.value} >{el.label}</option>)}
                        </select>
                      </div>
                      {subCategories.filter((e)=>e.label==row ).map((e)=> e.properties.map((el)=>el[0]?
                        <div>
                          <label className="label1">{el[0].kind}</label>
                          <select className="select1" placeholder=" إختر " name={el[0].name} id="select2"  ref={register} >
                              {el.map((el)=><option value={el.value} >{el.label}</option>)}
                          </select>
                        </div>
                      :''))}
                  </div> 
                  <div>
                   
                  </div>
                  <div>
                   <label className="label1">الوصف</label>
                    <textarea name="Description" ref={register}  >
                    </textarea>
                   </div>
                   <div>
                   <label className="label1">السعر</label>
                    <input type="number" name="price" ref={register}  />
                   </div>
                   <div>
                   <label className="label1">المكان</label>
                    <input name="location" ref={register}  />
                   </div>
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input"
    name="images"  
    onChange={(e)=>convertImage(e.target.files) }
      ref={register}
  />
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>
{str.map((el)=><img    className="image"  src={el}/> )

}

                </div> {/*the end of input  */}
                <br />
                <br />
                <button className="btn btn-primary text-right pull-right " >تم</button>
              </form>
            </div>
        </Modal.Body>
      </Modal>
  </>   
    )
}

export default AddPost;
