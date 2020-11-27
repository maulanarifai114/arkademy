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
</style>
