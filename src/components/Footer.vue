<template>
    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item m-4">
                <a href="#">fb!
                  <!-- <img
                    src="../assets/images/Icons-Facebook.svg"
                    alt=""
                    srcset=""
                  /> -->
                </a>
              </li>
              <li class="list-inline-item m-4">
                <a href="#">IN!
                  <!-- <img
                    src="../assets/images/Icons-Instagram.svg"
                    alt=""
                    srcset=""
                  /> -->
                </a>
              </li>
              <li class="list-inline-item m-4">
                <a href="#">TT
                  <!-- <img
                    src="../assets/images/Icons-Twitter.svg"
                    alt=""
                    srcset=""
                  /> -->
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <span class="copyright">Copyright &copy; IMM 2020</span>
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
.footer {
  padding: 20px 0;
  text-align: left;
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
  display: block;
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
  display: inline-block;
}
li {
  display: inline-block;
}
list-inline,
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}
</style>