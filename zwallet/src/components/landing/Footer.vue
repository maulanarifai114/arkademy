<template>
    <div>
<footer class="container-fluid" id="footer-fluid">
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
  name: 'Footer'
}
</script>

<style lang="scss" scoped>

#footer-fluid {
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
