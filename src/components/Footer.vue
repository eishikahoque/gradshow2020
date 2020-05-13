<template>
    <!-- Footer -->
    <footer class="footer mb-5">
      <div class="container">
          <div class="row">
              <div class="col-10 mb-5">
                <h3> IMM Grad Show</h3>
                <h3 class="outline"> 2020 </h3>
          
              </div>
              <div class="col-2 textAlignRight mt-3">
                  <a href="#nav">
                    <h4>
                    <i class="fas fa-arrow-up"></i> Top </h4>
                  </a>
              </div>
          </div>

        <div class="row align-items-center">
          <div class="col-lg-6 col-sm-12">
            <div class="row">    
            <div class="col-1">
               <a href="https://www.facebook.com/sheridanIMM">
                 <i class="fab fa-facebook-square fa-lg"></i>
              </a>
              
            </div>
            <div class="col-1">
                <a href="https://www.instagram.com/sheridanimm/">
                  <i class="fab fa-instagram fa-lg"></i>  
                </a>
            </div>
            <div class="col-1">
              <a href="https://twitter.com/SheridanIMM">
                <i class="fab fa-twitter-square fa-lg"></i>
              </a>
            </div>
            <div class="col-1">
              <a href="https://www.linkedin.com/company/interactive-multimedia-at-sheridan-college/">
                <i class="fab fa-linkedin fa-lg"></i>
              </a>
          </div>
          </div>
          </div>
          <div class="col-lg-6 col-sm-12">
             <h5 class="copyright"> Copyright &copy; IMM 2020 </h5>
          </div>
      </div>
      </div>
    </footer>


</template>

<script>
export default {
    
}
</script>

<style scoped>
/* @import "@/styles/mixins/typography"; */
/* @import "@/styles/mixins/breakpoints"; */

.outline {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000;
  color: rgba(0, 0, 0, 0);
  padding-bottom: 0;
}

.footer {
  padding: 20px 0;
  text-align: left;
  /* background-color: red; */
}
.copyright {
  text-align: right;
}

a {
  text-decoration: none;
  background-color: transparent;
}
ul {
  display: block;
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
ul.social-buttons li a {
  font-size: 20px;
  line-height: 50px;
  /* display: block; */
  width: 35px;
  height: 35px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  /* color: #fff;
    border-radius: 100%; */
  outline: none;
  /* background-color: #212529; */
}
.list-inline-item {
  /* display: inline-block; */
}
li {
  /* display: inline-block; */
}
list-inline,
.list-unstyled {
  /* padding-left: 0; */
  /* list-style: none; */
}
.list-inline-item:not(:last-child) {
  /* margin-right: 0.5rem; */
}
/* .row{
  border: blue solid 2px;
} */

.textAlignRight {
  text-align: right;
}
</style>