<template>
    <!-- Footer -->
    <footer class="footer">
      <div class="container">
          <div class="row">
              <div class="col-9">
                   <h2> IMM GradShow</h2>
          <h2 class="outline"> 2020 </h2>
          
              </div>
              <div class="col-3">
                  <a href="#nav"><h3><img
                    src="/static/images/socialIcons/arrow-right.png"
                    alt=""
                    srcset=""
                  />&nbsp; &nbsp; Top</h3></a>
              </div>
          </div>

    <div class="container">
        <div class="row d-flex column">
          <div class="col-6">    
            <div class="col-4">
               <a href="#">
                  <img
                    src="/static/images/socialIcons/Icons-Facebook.svg"
                    alt=""
                    srcset=""
                  />
                </a>
              
            </div>
          <div class="col-4">
              <a href="#">
                  <img
                    src="/static/images/socialIcons/Icons-Instagram.svg"
                    alt=""
                    srcset=""
                  />
                </a>
          </div>
          <div class="col-4">
             <a href="#">
                  <img
                    src="/static/images/socialIcons/Icons-Twitter.svg"
                    alt=""
                    srcset=""
                  />
                </a>
          </div>
          </div>
          <div class="col-6">
             <span class="copyright">Copyright &copy; IMM 2020</span>
          </div>
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
.footer span.copyright {
  font-size: 95%;
  line-height: 40px;
  text-transform: none;
  float: right;
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
.row{
  border: blue solid 2px;
}
</style>