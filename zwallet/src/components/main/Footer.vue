<template>
  <div>
    <footer class="container-footer container-fluid d-flex align-items-center">
        <div class="container d-flex flex-row align-items-center">
            <div class="copyright">
                2020 Zwallet. All right reserved.
            </div>
            <div class="container-contact ml-auto">
                <div class="contact">+62 5637 8882 9901</div>
                <div class="contact email">contact@zwallet.com</div>
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
