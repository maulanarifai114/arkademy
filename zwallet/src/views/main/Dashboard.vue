<template>
  <div>
<section class="row row-default row-balance">
    <div class="col-balance">
        <div class="left-balance">
            <div class="balance">Balance</div>
            <div class="amount-balance">Rp120.000</div>
            <div class="phone-balance">+62 813-9387-7946</div>
        </div>
        <div class="right-balance">
            <div class="btn-balance">
                <img src="../../assets/home/transfer-balance.svg" alt="" class="icon-balance" width="28px"
                    height="28px">
                <p class="abjad-balance">Transfer</p>
            </div>
            <div class="btn-balance">
                <img src="../../assets/home/topup-balance.svg" alt="" class="icon-balance" width="28px"
                    height="28px">
                <p class="abjad-balance">Top Up</p>
            </div>
        </div>
    </div>
</section>

<section class="row row-default row-report">
    <aside class="report">
        <section class="container-money-in-out">
            <div class="money-box">
                <img src="../../assets/home/income.svg" alt="" width="28px" height="28px">
                <p class="abjad-money">Income</p>
                <p class="amount-money">Rp2.120.000</p>
            </div>
            <div class="money-box">
                <img src="../../assets/home/expense.svg" alt="" width="28px" height="28px">
                <p class="abjad-money">Expense</p>
                <p class="amount-money">Rp1.560.000</p>
            </div>
        </section>

        <section class="graphic">
            <div class="label-report">
                +Rp65.000
            </div>
            <div class="container-bar-graphic">
                <div class="bar-graphic bar-sat blue"></div>
                <div class="bar-graphic bar-sun blue"></div>
                <div class="bar-graphic bar-mon grey"></div>
                <div class="bar-graphic bar-tue grey absolute-circle">
                    <div class="circle-big">
                        <div class="circle-little"></div>
                    </div>
                </div>
                <div class="bar-graphic bar-wed grey"></div>
                <div class="bar-graphic bar-thu blue"></div>
                <div class="bar-graphic bar-fri grey"></div>
            </div>
            <div class="day">
                <div class="name-day">Sat</div>
                <div class="name-day">Sun</div>
                <div class="name-day">Mon</div>
                <div class="name-day">Tue</div>
                <div class="name-day">Wed</div>
                <div class="name-day">Thu</div>
                <div class="name-day">Fri</div>
            </div>
        </section>
    </aside>

    <aside class="history">
        <header class="container-transaction">
            <p class="transaction-h">Transaction History</p>
            <a class="see-all" href="#">See all</a>
        </header>
        <section class="container-history">
            <img src="../../assets/home/samuel-suhi.png" alt="profile-h" class="profile-h">
            <div class="container-name-purpose">
                <div class="name cut-text">Samuel Suhi</div>
                <div class="purpose">Transfer</div>
            </div>
            <div class="amount-plus">+Rp50.000</div>
        </section>
        <section class="container-history">
            <img src="../../assets/home/netflix.png" alt="profile-h" class="profile-h">
            <div class="container-name-purpose">
                <div class="name cut-text">Netflix</div>
                <div class="purpose">Subscription</div>
            </div>
            <div class="amount-minus">-Rp149.000</div>
        </section>
        <section class="container-history">
            <img src="../../assets/home/christine-marine.png" alt="profile-h" class="profile-h">
            <div class="container-name-purpose">
                <div class="name cut-text">Christine Marine</div>
                <div class="purpose">Transfer</div>
            </div>
            <div class="amount-plus">+Rp150.000</div>
        </section>
        <section class="container-history">
            <img src="../../assets/home/adobe.png" alt="profile-h" class="profile-h">
            <div class="container-name-purpose">
                <div class="name cut-text">Adobe Inc.</div>
                <div class="purpose">Subscription</div>
            </div>
            <div class="amount-minus">-Rp249.000</div>
        </section>
    </aside>
</section>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style lang="scss" scoped>
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

body {
    font-family: 'Nunito Sans';
    background: #FAFCFF;
}

.primary-z {
    background: #6379F4;
    background-color: #6379F4;
}

.primary-z-c {
    color: #6379F4;
}

.dark-z {
    background: #3A3D42;
    background-color: #3A3D42;
}

.dark-z-c {
    color: #3A3D42;
}

.error-z {
    background: #FF5B37;
    background-color: #FF5B37;
}

.error-z-c {
    color: #FF5B37;
}

.white-z {
    background: #ffffff;
    background-color: #ffffff;
}

.white-z-c {
    color: #ffffff;
}

/* Navbar */
.container-out {
    padding: 0;
    height: 140px;
    background-color: #fff;
    border-radius: 0 0 25px 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    margin: 0 0 40px 0;
}

.container-in {
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title {
    font-family: 'Nunito Sans';
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
}

.profile {
    width: auto;
    height: 55px;
    display: flex;
    align-items: center;
}

.photo-p {
    margin: 0 20px 0 0;
}

.name-phone {
    height: 100%;
    width: auto;
    margin: 0 30px 0 0;
}

.name {
    font-family: 'Nunito Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
}

.phone {
    font-family: 'Nunito Sans';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}

/* End Navbar */

/* Dashboard */
.row-dashboard {
    padding: 0;
    margin-top: 180px;
    margin-bottom: 35px;
}

.row-default {
    margin: 0;
}

.row-max {
    height: 100vh;
}

/* End Dashboard */

/* Little Dashboard */
.col-menu {
    padding: 0;
    width: 100%;
    height: 678px;
}

.menu {
    width: calc(100% - 15px);
    height: 100%;
    border-radius: 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    background-color: white;
    padding: 45px 0 0 0;
    display: flex;
    flex-direction: column;
}

.menu-row {
    width: 100%;
    height: 35px;
    margin: 0 0 48px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 35px;
}

.menu-logout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
}

.logout {
    margin: 0 0 50px 0;
}

.menu-active {
    border-left: 5px solid #6379F4;
    padding-left: 30px;
}

.menu-abjad-active {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #6379F4;
    margin: 0 0 0 20px;
}

.menu-abjad-inactive {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0 0 0 20px;
    color: rgba(58, 61, 66, 0.8);
}

/* End Little Dashboard */

/* Main Dashboard */

.col-main-dashboard {
    padding: 0;
    width: 100%;
    height: 678px;
    flex-wrap: wrap;
}

/* Container Balance */
.row-balance {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    margin: 0 0 20px 0;
}

.col-balance {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 30px;
    width: calc(100% - 5px);
    height: 190px;
    background-color: #6379F4;
    border-radius: 25px;
}

.balance {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #E0E0E0;
    margin-bottom: 10px;
}

.amount-balance {
    font-family: Nunito Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    margin-bottom: 15px;
}

.phone-balance {
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #DFDCDC;
}

.btn-balance {
    height: 57px;
    width: 162px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    border: 1px solid white;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
}

.icon-balance {
    margin-left: auto;
}

.abjad-balance {
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    margin: 0 27px 0 10px;
}

/* End Container Balance */

/* Report */
.row-report {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: fit-content;
}

.report {
    background-color: white;
    height: 468px;
    width: 463px;
    border-radius: 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    padding: 30px;
}

.container-money-in-out {
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.money-box {
    height: 100%;
    width: 117px;
    display: flex;
    flex-direction: column;
}

.abjad-money {
    margin: auto 0;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #6A6A6A;
}

.amount-money {
    margin: auto 0 0 0;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #3A3D42;
}

.graphic {
    height: 268px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.label-report {
    height: 29px;
    width: 94px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    position: absolute;
    background-color: rgb(255, 255, 255);
    padding: 5px 11px;
    /* Font */
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: right;
    color: #1EC15F;
    /* Position */
    top: 21px;
    left: 50%;
    transform: translate(-50%, -50%);
}

.container-bar-graphic {
    width: 100%;
    height: 100%;
    padding: 0 61px 15px 61px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.blue {
    background-color: #6379F4;
}

.grey {
    background-color: #9DA6B5;
}

.bar-graphic {
    width: 14px;
    /* height: 233px; */
    border-radius: 7px;
    /* background-color: #6379F4; */
}

.absolute-circle {
    position: relative;
}

.circle-big {
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 100%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle-little {
    width: 14px;
    height: 14px;
    background-color: #6379F4;
    border-radius: 100%;
}

.bar-sat {
    height: 233px;
}

.bar-sun {
    height: 97px;
}

.bar-mon {
    height: 149px;
}

.bar-tue {
    height: 183px;
}

.bar-wed {
    height: 139px;
}

.bar-thu {
    height: 197px;
}

.bar-fri {
    height: 155px;
}

.day {
    height: 20px;
    width: 100%;
    padding: 0 61px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.name-day {
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #8F8F8F;
}

/* End Report */

/* Container History */
.history {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 30px 0 0 0;
    height: 468px;
    width: 367px;
    background-color: rgb(255, 255, 255);
    margin: 0 0 0 20px;
    border-radius: 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

/* Container Transaction */
.container-transaction {
    display: flex;
    box-sizing: border-box;
    padding: 0 30px 0 30px;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px 0;
}

.transaction-h {
    margin: 0;
    font-family: 'Nunito Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
}

.see-all {
    margin: 0;
    font-family: 'Nunito Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #6379F4;
    transition: .3s;
}

.see-all:hover {
    text-decoration: none;
}

/* End Container Transaction */

/* Container One History */
.container-history {
    display: flex;
    box-sizing: border-box;
    padding: 20px 30px;
    height: 96px;
    align-items: center;
}

.profile-h {
    margin: 0 15px 0 0;
}

.container-name-purpose {
    display: flex;
    flex-direction: column;
    width: 112px;
    height: 52px;
}

.cut-text {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.name {
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 9px;
}

.purpose {
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
}

.amount-plus {
    display: flex;
    margin-left: auto;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: right;
    color: #1EC15F;
}

.amount-minus {
    display: flex;
    margin-left: auto;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: right;
    color: #FF5B37;
}

/* End Container One History */

/* End Container History */

/* End Main Dashboard */

/* Footer */
body {
    display: flex;
    flex-direction: column;
}

footer {
    height: 68px;
    background-color: #6379F4;
}

footer .container {
    padding: 0;
}

.copyright {
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(239, 239, 239, 0.9)
}

.container-contact {
    display: flex;
    flex-direction: row;
}

.contact {
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #EFEFEF;
}

.email {
    margin: 0 0 0 40px;
}

/* End Footer */

@media (min-height: 961px) and (min-width: 1200px) {
    footer {
        position: absolute;
        bottom: 0;
    }
}

@media (min-height: 961px) and (max-width: 1199px) and (min-width: 992px) {
    footer {
        position: absolute;
        bottom: 0;
    }
}

@media (min-height: 1061px) and (max-width: 991px) and (min-width: 768px) {
    footer {
        position: absolute;
        bottom: 0;
    }
}

@media (min-height: 1529px) and (max-width: 767px) and (min-width: 576px) {
    footer {
        position: absolute;
        bottom: 0;
    }
}

@media (min-height: 1529px) and (max-width: 575px) and (min-width: 376px) {
    footer {
        position: absolute;
        bottom: 0;
    }
}

@media (min-height: 1529px) and (max-width: 375px) and (min-width: 0px) {
    footer {
        position: absolute;
        bottom: 0;
    }
}

/* Media Large 992 - 1199 */
@media (max-width: 1199px) {

    .report {
        width: 330px;
    }

    .container-bar-graphic {
        padding: 0 0 15px 0;
    }

    .day {
        padding: 0;
    }
}

/* Media Medium 768 - 991px */
@media (max-width: 991px) {

    .btn-balance {
        display: none;
    }

    .col-main-dashboard {
        height: fit-content;
    }

    footer {
        margin: 0 0 100px 0;
    }

    .row-dashboard {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0px;
        width: 100%;
    }

    .menu {
        width: 100%;
        height: 100px;
        margin: 0;
        border-radius: 0;
        flex-direction: row;
        padding: 0;
    }

    .menu-active {
        border: 0;
    }

    .menu-logout {
        width: 20%;
        flex-direction: row;
        display: flex;
        justify-content: center;
    }

    .menu-abjad-active {
        display: none;
    }

    .menu-abjad-inactive {
        display: none;
    }

    .menu-row {
        height: 100%;
        width: 20%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    .col-menu {
        height: fit-content;
        position: fixed;
        bottom: 0;
        z-index: 10;
    }

    .row-balance {
        display: flex;
        justify-content: center;

    }

    .col-balance {
        height: 190px;
        margin-top: 160px;
        width: 95%;
        /* height: 320px; */
        flex-wrap: wrap;
        align-content: flex-end;
    }

    .row-report {
        justify-content: space-evenly;
        margin-bottom: 20px;
    }

    .report {
        width: 45%;
    }

    .history {
        width: 45%;
        margin: 0;
    }

    .menu-active {
        border-bottom: 5px solid #6379F4;
    }

    .menu-active img {
        position: relative;
        bottom: -2.5px;
    }
}

/* Media Small 576 - 767 */
@media (max-width: 767px) {

    /* footer {
        position: static;
        margin-top: 0;
    } */

    .row-dashboard {
        height: fit-content;
    }

    .col-main-dashboard {
        height: fit-content;
    }

    .copyright {
        font-size: 14px;
    }

    .contact {
        font-size: 14px;
    }

    .email {
        margin: 0 0 0 20px;
    }

    .row-report {
        margin-bottom: 0;
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
    }

    .report {
        width: 95%;
    }

    .history {
        margin: 20px 0 0 0;
        width: 95%;
    }
}

@media (max-width: 575px) {

    .container-footer {
        padding-left: 30px;
        padding-right: 30px;
    }

    .container-in {
        box-sizing: border-box;
        padding: 0 30px;
    }

    .copyright {
        font-size: 14px;
    }

    .container-contact {
        display: flex;
        flex-direction: column;
    }

    .contact {
        font-size: 12px;
        line-height: 1.8em;
    }

    .name-phone {
        display: none;
    }

    .email {
        margin-left: 10px;
    }
}

@media (max-width: 375px) {

    .email {
        margin-left: 8px;
    }

    .copyright {
        font-size: 11px;
        line-height: 1.5;
    }

    .contact {
        font-size: 11px;
    }

    .report {
        width: 100%;
        padding-left: 25px;
        padding-right: 25x;
    }

    .history {
        width: 100%;
    }

    .container-transaction {
        padding-left: 25px;
        padding-right: 25px;
    }

    .container-history {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }

    .col-menu {
        height: 75px;
    }

    .menu {
        height: 100%;
    }

    .menu-row img {
        transform: scale(.8);
    }
}

@media (max-width: 320px) {

    .title {
        font-size: 20px;
    }

    .container-out {
        height: 100px;
    }

    .col-menu {
        height: 64px;
    }

    .menu {
        height: 100%;
    }

    footer {
        margin: 0 0 64px 0;
    }

    .col-balance {
        margin-top: 120px;
    }
}
</style>
