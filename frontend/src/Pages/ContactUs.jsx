import React from "react";
import BootstrapNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./pages.scss";
import image from '../Images/img-01.png';


const ContactUs = () => {
    return (
        <>
            <div class="" >
<div class="container-contact100">
<div class="wrap-contact100">
<div class="contact100-pic js-tilt" data-tilt>
<img src={image} alt="IMG"/>
</div>
<form class="contact100-form validate-form">
<span class="contact100-form-title fw-bold fst-italic fs-2">
Get in touch
</span>
<div class="wrap-input100 validate-input" data-validate="Name is required">
<input class="input100 form-control reg-form" type="text" name="name" placeholder="Name"/>
<span class="focus-input100"></span>
<span class="symbol-input100">
<i class="fa fa-user" aria-hidden="true"></i>
</span>
</div>
<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<input class="input100 form-control reg-form" type="text" name="email" placeholder="Email"/>
<span class="focus-input100"></span>
<span class="symbol-input100">
<i class="fa fa-envelope" aria-hidden="true"></i>
</span>
</div>
<div class="wrap-input100 validate-input" data-validate="Message is required">
<textarea class="input100 form-control reg-form" name="message" placeholder="Message"></textarea>
<span class="focus-input100"></span>
</div>
<div class="container-contact100-form-btn">
<button class="contact100-form-btn">
Send
</button>
</div>
</form>
</div>
</div>
</div>

        </>
    );

};

export default ContactUs;