<template>
    <div id="home">
      <Navbar/>
      <div class="container-fluid d-flex justify-content-center">
        <div class="container-lg d-flex flex-row mb-4 mb-lg-5">
          <Sidebar/>
          <div class="col-12 col-lg-9 col-main-dashboard">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
</template>

<script>
// col-main-dashboard d-flex justify-content-end
// class="padding-180"
import Navbar from '../../components/main/Navbar'
import Sidebar from '../../components/main/Sidebar'
import Footer from '../../components/main/Footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Footer
  }
}
</script>

<style lang="scss" scoped>

.container-fluid {
  // background-color: rgb(137, 255, 113);
  padding: 0;
  padding: 180px 0 0 0;
}

.container-lg {
  padding: 0;
  height: fit-content;
  width: 100%;
  // background-color: aquamarine;
  padding: 0;
}

.col-lg-9 {
  padding: 0;
}

@media (max-width: 991px) {
  .container-fluid {
    padding: 0;
  }
}
</style>

<style>
/* Global CSS */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, a {
display: block;
}
body {
line-height: 1;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
body {
font-family: 'Nunito Sans';
background: #FAFCFF;
}

</style>
