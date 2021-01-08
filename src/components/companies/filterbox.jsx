import React from 'react'
import './companies.css'


function Filterbox(Props) {
    return (
        <div className="filterContainer2" >
            <div className="filterBox2" >
                <div className="cityBox2">
                    <label>المدينة</label>
                    <select name="location" style={{width:"100px" }}  className="userSearch" onChange={(e)=>Props.setLocation(e.target.value)} >
                        <option value="is not null">كل المدن</option>
                        <option value="عمان"   > عمان</option>
                        <option value="اربد"   > اربد</option>
                        <option value="الزرقاء"   > الزرقاء</option>
                        <option value="عجلون"   > عجلون</option>
                        <option value="جرش"   > جرش</option>
                        <option value="المفرق"   > المفرق</option>
                        <option value="مادبا"   > مادبا</option>
                        <option value="السلط"   > السلط</option>
                        <option value="الكرك"   > الكرك</option>
                        <option value="الطفيلة"   > الطفيلة</option>
                        <option value="معان"   > معان</option>
                        <option value="العقبة"   > العقبة</option>
                    </select>  
                </div>
                <div className="catBox2">
                    <label>ابحث</label>
                     <input   className="userSearch"     placeholder="...ادخل اسم السوق "  onChange={(e)=>Props.setName(e.target.value)} style={{textAlign:"end"}} />
                </div>
                
            </div>
        </div>
    )
}

export default Filterbox
