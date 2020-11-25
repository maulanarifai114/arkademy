<template>
    <div id="auth">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
            <a class="navbar-brand my-4" href="#">Zwallet</a>
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item ml-auto">
                        <router-link to="/login">
                        <button class="btn btn-primary btn-custom outline-btn my-lg-5 my-2">Login</button>
                        </router-link>
                    </li>
                    <li class="nav-item ml-auto">
                        <router-link to="/signup">
                        <button class="btn btn-primary btn-custom solid-btn my-lg-5 ml-lg-5 my-2">Sign
                            up</button>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <section class="container con-1">
        <div class="row d-flex">
            <div class="col-xl-6 col-lg-6 col-md-12 order-lg-0 order-1 d-none d-lg-block">
                <img src="../../assets/landing/phone-section-1.png" alt="">
            </div>
            <div
                class="col-xl-6 col-lg-6 col-md-12 order-lg-1 order-0 d-flex justify-content-center flex-column pl-lg-5 px-5 px-lg-0">
                <h1>
                    Awesome App
                    For Saving <span> Time.</span>
                </h1>
                <p>
                    We bring you a mobile app for banking problems that
                    oftenly wasting much of your times.
                </p>
                <button class="btn btn-primary btn-custom solid-btn">
                    Try It Free
                </button>
                <p>
                    Available on
                </p>
                <div class="store-place">
                    <img src="../../assets/landing/gplay.svg" alt="Google Play">
                    <img src="../../assets/landing/appstore.svg" alt="App Store">
                </div>
            </div>
        </div>
    </section>

    <section class="container-fluid con-2">
        <div class="container d-flex flex-wrap">
            <div class="d-flex justify-content-center col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <img src="../../assets/landing/microsoft.svg" alt="microsoft">
            </div>
            <div class="d-flex justify-content-center col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <img src="../../assets/landing/dropbox.svg" alt="dropbox">
            </div>
            <div class="d-flex justify-content-center col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <img src="../../assets/landing/hnm.svg" alt="hnm">
            </div>
            <div class="d-flex justify-content-center col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <img src="../../assets/landing/airbnb.svg" alt="airbnb">
            </div>
            <div class="d-flex justify-content-center col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <img src="../../assets/landing/canon.svg" alt="canon">
            </div>
            <div class="d-flex justify-content-center col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <img src="../../assets/landing/dell.svg" alt="">
            </div>
        </div>
    </section>

    <section class="container con-3">
        <div class="row">
            <div class="col-12 px-5 px-lg-0 d-flex align-items-center flex-column">
                <h1 class="text-center">
                    <span>About </span>the Application.
                </h1>
                <p class="px-5 px-md-0">
                    We have some great features from the application and it’s totally free
                    to use by all users around the
                    world.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 order-md-1 order-lg-1 px-4 px-lg-0">
                <div class="box box-inactive">
                    <img src="../../assets/landing/phone.svg" alt="phone">
                    <h3>24/7 Support</h3>
                    <p>
                        We have 24/7 contact support so you can contact us whenever you want and we will respond it.
                    </p>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 order-md-4 order-lg-2 px-4 px-lg-0">
                <div class="box box-active">
                    <img src="../../assets/landing/lock.svg" alt="lock">
                    <h3>Data Privacy</h3>
                    <p>
                        We make sure your data is safe in our database and we will encrypt any data you submitted to us.
                    </p>
                </div>
            </div>
            <div class="col-md-3 d-md-block d-lg-none order-md-3"></div>
            <div class="col-xl-4 col-lg-4 col-md-6 order-md-2 order-lg-3 px-4 px-lg-0">
                <div class="box box-inactive">
                    <img src="../../assets/landing/download.svg" alt="download">
                    <h3>Easy Download</h3>
                    <p>
                        Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.
                    </p>
                </div>
            </div>
            <div class="col-md-3 d-md-block d-lg-none order-md-5"></div>
        </div>
    </section>

    <section class="container-fluid con-4">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 d-none d-lg-block">
                    <img src="../../assets/landing/phone-section-4.png" alt="">
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 d-flex justify-content-center flex-column">
                    <h1 class="text-center text-lg-left">
                        All The <span> Great </span> <br>
                        Zwallet Features.
                    </h1>
                    <div class="box-features">
                        <h3> <span>1. </span> Small Fee</h3>
                        <p>We only charge 5% of every success transaction done in Zwallet app.</p>
                    </div>
                    <div class="box-features">
                        <h3> <span>2. </span> Data Secured</h3>
                        <p>All your data is secured properly in our system and it’s encrypted.</p>
                    </div>
                    <div class="box-features">
                        <h3> <span>3. </span> User Friendly</h3>
                        <p>Zwallet come up with modern and sleek design and not complicated.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container con-5 d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-center">What Users are <span> Saying.</span> </h1>
        <p class="px-5 px-md-0">We have some great features from the application and it’s totally free to use by all
            users around the
            world.
        </p>
        <div class="big-box d-flex flex-column justify-content-center w-100 align-items-center">
            <img src="../../assets/landing/profile.png" alt="profile" width="120px" height="120px">
            <h4 class="text-center">Alex Hansinburg</h4>
            <h6>Designer</h6>
            <p>
                “This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece
                and it’s suitable for you who is bussy with their bussiness and must transfer money to another person
                aut there. Just try this app and see the power!”
            </p>
            <div class="container-arrow a-left d-none d-sm-block">
                <img src="../../assets/landing/arrow-left.svg" alt="left">
            </div>
            <div class="container-arrow a-right d-none d-sm-block">
                <img src="../../assets/landing/arrow-right.svg" alt="right">
            </div>
        </div>
    </section>

    <footer class="container-fluid bg-zwallet">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-3">
                    <h4>Zwallet</h4>
                    <p>
                        Simplify financial needs and saving much time in banking needs with one single app.
                    </p>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12 col-lg-6">
                    2020 Zwallet. All right reserved.
                </div>
                <div class="col-12 col-lg-6 d-lg-flex justify-content-lg-end">
                    <p>+62 5637 8882 9901</p>
                    <p class="ml-lg-5">contact@zwallet.com</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

input {
    margin: 1px;
    outline: 0;
    padding: 1px;
    border: 0;
}

input:focus {
    margin: 1px;
    outline: 0;
    padding: 1px;
    border: 0;
}

/* End CSS Reset */
/* * {
    border: 0.01px solid rgb(252, 233, 231) !important;
} */

body {
    font-family: 'Nunito Sans';
    background: #FAFCFF;
    /* background: #a8c6f3; */
}

a {
    transition: .3s;
}

.navbar-brand {
    font-family: Nunito Sans;
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #6379F4 !important;
}

.navbar-toggler {
    border: 1px solid rgba(99, 121, 244, 0.3);
    padding: .5rem;
    border-radius: 10px !important;
    transition: .3s;
}

.navbar-toggler:focus {
    outline: 0;
    border: 1px solid #6379F4 !important;
    background-color: rgba(204, 128, 128, 0) !important;
}

.navbar-toggler-icon {
    background-color: #6379f400;
}

/* nav {
    background-color: rgba(99, 121, 244, 0.2) !important;
} */

button {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
}

button:focus {
    background: rgb(79, 98, 207) !important;
}

.btn-custom {
    border-radius: 12px;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    width: 120px;
    height: 48px;
    /* Fonts */
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
}

.outline-btn {
    background-color: rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    border: 2px solid #6379F4;
    color: #6379F4;
}

.outline-btn:hover {
    background: #6379F4;
    border: 2px solid #6379F4;
}

.outline-btn:active {
    /* background: rgb(79, 98, 207) !important; */
    background: rgb(58, 75, 172) !important;
    border: 2px solid rgb(79, 98, 207) !important;
}

.outline-btn:focus {
    color: #fff;
}

.solid-btn {
    background: #6379F4;
    border: 0;
}

.solid-btn:hover {
    background: rgb(79, 98, 207);
}

.solid-btn:active {
    background: rgb(58, 75, 172) !important;
    border: 0;
}

.con-1 {
    margin-top: 118px;
    margin-bottom: 113px;
}

.con-1 .row .col-xl-6:nth-child(2) h1 {
    font-family: Nunito Sans;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 93px;
    letter-spacing: 0em;
    text-align: left;
}

.con-1 .row .col-xl-6:nth-child(2) h1 {
    margin-bottom: 40px;
}

.con-1 .row .col-xl-6:nth-child(2) h1 span {
    color: #6379F4;
}

.con-1 .row .col-xl-6:nth-child(2) p {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 50px;
}

.con-1 .row .col-xl-6:nth-child(2) button {
    height: 57px;
    width: 173px;
    margin-bottom: 50px;
}

.con-1 .row .col-xl-6:nth-child(2) p:nth-of-type(2) {
    margin-bottom: 20px;
}

.con-1 .row .col-xl-6:nth-child(2) .store-place img {
    width: 50px;
}

.con-1 .row .col-xl-6:nth-child(2) .store-place img:nth-of-type(1) {
    margin-right: 25px;
}

.con-2 {
    background-color: rgba(71, 58, 209, 0.06);
    padding: 90px 0;
}

.con-3 {
    box-sizing: border-box;
    padding-top: 120px;
    padding-bottom: 120px;
}

.con-3 h1 {
    font-family: Nunito Sans;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 93px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 30px;
}

.con-3 .row:nth-child(1) h1 span {
    color: #6379F4;
}

.con-3 .row:nth-child(1) p {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 70px;
    width: 567px;
}

.box {
    box-sizing: border-box;
    padding: 40px 30px 0 30px;
    height: 344px;
    width: 366px;
    border-radius: 25px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.box-active {
    box-shadow: 0 4px 250px rgba(172, 172, 172, 0.15);
}

.box h3 {
    font-family: Nunito Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 35px;
}

.box p {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
}

.box-inactive {
    background-color: rgba(255, 255, 255, 0);
}

.con-4 {
    background-color: rgba(71, 58, 209, 0.06);
    padding-top: 80px;
    padding-bottom: 80px;
}

.con-4 .container .row div:nth-child(2) h1 {
    font-family: Nunito Sans;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 93px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 40px;
}

.con-4 .container .row div:nth-child(2) h1 span {
    color: #6379F4;
}

.box-features {
    width: 100%;
    height: 127px;
    background-color: white;
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.box-features h3 {
    font-family: Nunito Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
}

.box-features h3 span {
    color: #6379F4;
    margin-right: 15px;
}

.box-features p {
    font-family: Nunito Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
}

.con-5 {
    box-sizing: border-box;
    padding-top: 130px;
    padding-bottom: 120px;
}

.con-5 h1 {
    font-family: Nunito Sans;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 93px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 30px;
}

.con-5 h1 span {
    color: #6379F4;
}

.con-5 p {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 60px;
    width: 567px;
}

.big-box {
    box-sizing: border-box;
    border-radius: 30px;
    background-color: #ffffff;
    padding: 60px;
    position: relative;
    box-shadow: 0 5px 70px rgba(197, 197, 197, 0.15);
}

.big-box img {
    margin-bottom: 30px;
}

.big-box h4 {
    font-family: Nunito Sans;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 9px;
}

.big-box h6 {
    font-family: Nunito Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 45px;
}

.big-box p {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 0;
}

.container-arrow {
    height: 60px;
    width: 60px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    box-shadow: 0 5px 70px rgba(197, 197, 197, 0.15);

}

.container-arrow img {
    position: absolute;
    margin: 0;
}

.a-left {
    left: -96px;
}

.a-right {
    right: -96px;
}

.bg-zwallet {
    background-color: #6379F4;
}

footer .container {
    box-sizing: border-box;
    padding-top: 80px;
    padding-bottom: 80px;
}

footer .container .row:nth-child(1) div:nth-child(1) h4 {
    font-family: Nunito Sans;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    margin-bottom: 30px;
}

footer .container .row:nth-child(1) div:nth-child(1) p {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(239, 239, 239, 0.75);
}

hr {
    margin-top: 50px;
    margin-bottom: 30px;
    border-top: 1px solid rgba(239, 239, 239, 0.75);
}

footer .container .row:nth-child(3) div:nth-child(1) {
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
}

footer .container .row:nth-child(3) div:nth-child(2) {
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
}

@media (max-width: 1310px) {
    .a-left {
        left: 60px;
    }

    .a-right {
        right: 60px;
    }
}

@media (max-width: 1199px) {
    .box {
        width: 100%;
        margin: 0;
        height: fit-content;
    }

    .box p {
        margin-bottom: 40px;
    }
}

@media (max-width: 991px) {
    .box-features {
        height: fit-content;
    }
}

@media (max-width: 767px) {

    .big-box p {
        width: 100%;
    }

}

@media (max-width: 575px) {

    .box p {
        font-size: 16px;
    }

    .con-5 p {
        width: 100%;
    }

    .con-3 .row:nth-child(1) p {
        width: 100%;
    }

}

@media (max-width: 320px) {

    .navbar-brand {
        padding-left: 15px !important;
    }

    .navbar-toggler {
        margin-right: 15px !important;
    }

    .nav-item button {
        margin-right: .5rem !important;
    }

    .con-1 .row .col-xl-6:nth-child(2) h1 {
        font-size: 34px;
        line-height: 1.5em;
    }

    .con-1 .row .col-xl-6:nth-child(2) p {
        font-size: 15px;
    }

    .con-3 h1 {
        font-size: 34px;
        line-height: 1.5em;
        box-sizing: border-box;
    }

    .con-3 .row:nth-child(1) p {
        width: 100%;
        font-size: 14px;
        line-height: 2em;
        box-sizing: border-box;
    }

    .con-4 .container .row div:nth-child(2) h1 {
        font-size: 34px;
        line-height: 1.5em;
    }

    .con-5 h1 {
        font-size: 34px;
        line-height: 1.5em;
    }

    .con-5 p {
        font-size: 14px;
        line-height: 2em;
    }
}
</style>
