
import React ,{useState , useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddPost.css'
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesOf } from '../Store/actions/actions'
const AddPost = () => {
  const [row,setRow]=useState("");
  const { register, handleSubmit, watch, errors } = useForm();

  function Submit(data){console.log(data)}
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
              <form onSubmit={handleSubmit(Submit)}>
                <div className="select-items">
                  <div ClassName="Row">
                      <div>
                        <label className="label1" > القسم الرئيسي</label>
                        <select name="القسم الرئيسي" className="select1" placeholder=" إختر " onChange={idChanged}
                        ref={register} id="cat">
                        {categories.map((el)=><option value={el.value} >{el.label}</option>)}
                        </select>  
                      </div>
                      <div>
                        <label className="label1"> القسم الفرعي</label>
                        <select id="select2" name="القسم الفرعي" ref={register} onChange={printValue} onChange={handleChangRow}
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
                   <label className="label1">الوصف</label>
                    <textarea name="Description" ref={register}  >
                    </textarea>
                   </div>
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input"
    name="images" ref={register} multiple  
    id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>
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

export default AddPost
