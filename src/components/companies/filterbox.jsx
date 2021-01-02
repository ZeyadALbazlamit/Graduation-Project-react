import React from 'react'
import './companies.css'


function Filterbox(Props) {
    return (
        <div className="filterContainer2" >
            <div className="filterBox2" >
                <div className="cityBox2">
                    <label>المدينة</label>
                    <select name="location" className="filterSelect2"  onChange={(e)=>Props.filterByLocation(e.target.value)} >
                        <option >كل المدن</option>
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
                <div className="catBox2">
                    <label>القسم</label>
                    <select name="location" className="filterSelect22"   onChange={(e)=>Props.filterByLocation(e.target.value)}>
                        <option >سيارات - مركبات </option>
                        <option >موبايل - تابليت </option>
                        <option >العاب فيديو وملحقاتها</option>
                        <option >اجهزة - الكترونيات</option>
                        <option >عقارات للبيع</option>
                        <option >عقارات للايجار</option>
                        <option >المنزل والحديقة</option>
                        <option >ازياء - موضة نسائية</option>
                        <option >ازياء - موضة رجالي</option>
                        <option >لوازم الاطفال والالعاب</option>
                        <option >طعام - غذاء </option>
                        <option >التعليم والتدريب</option>
                        <option >حيوانات للبيع</option>
                        <option >الخدمات</option>
                    </select>  
                </div>
                
            </div>
        </div>
    )
}

export default Filterbox
