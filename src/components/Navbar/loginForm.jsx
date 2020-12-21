import React from 'react'
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa'
import './Navbar.css'


function LoginForm() {
    return (
        <div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle mr-4"><FaUser /></a>
                <div class="dropdown-menu action-form">
					<form action="/examples/actions/confirmation.php" method="post">
						<p class="hint-text">تسجيل الدخول بإستخدام    </p>
						<div class="form-group social-btn clearfix">
							<a href="#" class=" btn btn-secondary btn-circle facebook-btn float-left"><i class="fa fa-facebook"></i></a>
							<a href="#" class=" btn btn-secondary btn-circle google-btn float-right"><i class="fa fa-google"></i></a>
						</div>
						<div class="or-seperator"><b>أو</b></div>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="اسم المستخدم" required="required"/>
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="كلمة المرور" required="required"/>
						</div>
						<input type="submit" class="btn btn-secondary btn-block" value="دخول"/>
						<div class="text-center mt-3">
							<span class="text-secondary">انشاء حساب جديد؟</span> <a href="#">تسجل دخول</a>
						</div>
					</form>
                </div>
			</div>
    )
}

export default LoginForm
