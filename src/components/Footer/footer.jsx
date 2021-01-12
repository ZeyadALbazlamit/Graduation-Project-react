import React from 'react'
import './footer.css'
import {MdEmail} from 'react-icons/md'
import {FaPhoneVolume ,FaFacebookSquare,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/ri'
import {FiInstagram} from 'react-icons/fi'
export default function Footer() {
    return (
      <div className="footerContainer">
        <div class="about col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">: حول الموقع</h5>
          <p className="footerp">
            نوفا   هو واحد من أهم روّاد المواقع الإلكترونية 
            المتخصصة في مجال الإعلانات المبوبة والتي تمكّن المستخدمين 
            سواء كانوا بائعين أم مشترين من بيع وشراء مختلف السلع والمنتجات
            والخدمات خلال أقصر وقت ممكن وبأقل جهد يُذكر، وسواء كانت 
            حالة تلك المنتجات جديدة أم مستعملة. وحتى يسهل على المستخدم
            إيجاد ما يبحث عنه أو الإعلان عمّا يريد بيعه يوجد أقسام
            رئيسية وفرعية لعرض وتصفّح مختلف أنواع السلع
            والخدمات المتداولة بينهم وإتاحة التواصل المباشر فيما بينهم بكل سهولة
          </p>
        </div>
        <div class="links col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0"> : تابعنا على</h5>

          <ul class="list-unstyled">
              <li>
                <br/>
              </li>
              <li className="li12">
                <a href="#!" class="text-dark"><FaFacebookSquare className="fIcon"/></a>
              </li>
              <li className="li13">
                <a href="#!" class="text-dark"><FiInstagram className="iIcon"/></a>
              </li>
              <li className="li14">
                <a href="#!" class="text-dark"> <FaTwitterSquare className="tIcon"/></a>
              </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">: يمكنك التواصل معنا عن طريق</h5>

          <ul class="list-unstyled">
            <li>
              <br/>
            </li>
            <li className="li12">
              <label > <MdEmail className="footerIcon1"/></label>
              <a href="#!" class="text-dark">novadal@gmail.com</a>
            </li>
            <li className="li13">
              <label > <FaPhoneVolume className="footerIcon2"/></label>
              <a href="#!" class="text-dark">+962 8 8414 1771</a>
            </li>
            <li className="li14">
              <label > <RiWhatsappFill className="footerIcon3"/></label>
              <a href="#!" class="text-dark">+962 8 8414 1771</a>
            </li>
          </ul>
        </div>
      </div>
    )
}
