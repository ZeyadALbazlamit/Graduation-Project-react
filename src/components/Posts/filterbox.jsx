import React, {  useState } from 'react'
import './posts.css'

function Filterbox(Props) {
    const [count, setCount] = useState([5,10,15,20,30]);
    return (
        <div className="filterContainer  "  >
            <div className="filterBox alert alert-warning " >
                <div className="cityBox">
                    <label>المدينة</label>
                    <select  style={{width:"100px"}} name="location" className="userSearch" onChange={(e) => Props.handleLocationChange(e.target.value)} >
                        <option value={"is not null"}>كل المدن</option>
                        <option value={"='عمان'"}>عمان</option>
                        <option value={"='اربد'"}>اربد</option>
                        <option value={"='الزرقاء'"}>الزرقاء</option>
                        <option value={"='عجلون'"}>عجلون</option>
                        <option value={"='جرش'"}>جرش</option>
                        <option value={"='المفرق'"}>المفرق</option>
                        <option value={"='مادبا'"}>مادبا</option>
                        <option value={"='السلط'"}>السلط</option>
                        <option value={"='الكرك'"}>الكرك</option>
                        <option value={"='الطفيلة'"}>الطفيلة</option>
                        <option value={"='معان'"}>معان</option>
                        <option value={"='العقبة'"}>العقبة</option>
                    </select>
                </div>
                
                <div className="orderBox">
                    <label>الترتيب حسب</label>
                    <select  style={{width:"120px"}} name="location" className="userSearch" onChange={(e) => Props.handleOrderChange(e.target.value)} >
                        <option value={"id "}>التاريخ الاقدم </option>
                        <option value={"id desc"}>التاريخ الاحدث</option>
                        <option value={"price desc"} >السعر الأعلى</option>
                        <option value={"price"}>السعر الأقل</option>
                        <option value={"rate"}>الأكثر اعجاب</option>
                    </select>
                </div>
                <div className="priceBox">
                    <label>عدد المنتجات</label>
                    <div className="fromTo">
                        <select  style={{width:"50px"}} className="userSearch" onChange={(e) => Props.handlePostCount(e.target.value)}>
                            {
                                count.map((el) => <option key={el} >{el}</option>)
                            }

                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filterbox
