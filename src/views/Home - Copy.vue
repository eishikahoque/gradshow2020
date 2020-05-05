<template>
<<<<<<< HEAD
  <div>
    <!-- About -->
    <About></About>

    <!-- Grads -->
    <Grads></Grads>

    <!-- Projects-->
    <Projects></Projects>
    <!--this ia a coponent-->

    <!-- Location -->
    <Location></Location>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item m-4">
                <a href="#">
                  <img
                    src="../assets/images/Icons-Facebook.svg"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
              <li class="list-inline-item m-4">
                <a href="#">
                  <img
                    src="../assets/images/Icons-Instagram.svg"
                    alt=""
                    srcset=""
                  />
                </a>
              </li>
              <li class="list-inline-item m-4">
                <a href="#">
                  <img
                    src="../assets/images/Icons-Twitter.svg"
                    alt=""
                    srcset=""
                  />
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
=======
  <div class="container">
    <!-- ======= NAVIGATION -->
    <div class="row">
      <div class="col-12">
        <!-- Put navigation component here -->
        <p>
          Navigation
          <button v-scroll-to="'#introSec'">
            Home
          </button>
          <button v-scroll-to="'#profileSec'">
            Profiles
          </button>
          <button v-scroll-to="'#projectSec'">
            Projects
          </button>
        </p>
      </div>
    </div>

    <!-- ======== MAIN BODY -->
    <!-- INTRO -->
    <div class="row">
      <div class="col-12">
        <!-- Put intro component here -->
        <h1 id="introSec">Hi. I'm Intro</h1>
      </div>
    </div>

    <!-- STUDENT PROFILES -->
    <div class="row">
      <div class="col-12">
        <!-- Put student profiles component here -->
        <!-- REMOVE BELOW H1 WHEN YOU PLACE YOUR COMPONENTS -->
        <h1 id="profileSec">I'm Profile</h1>
      </div>
    </div>

    <!-- FEATURED PROJECTS -->
    <div class="row">
      <div class="col-12">
        <!-- Put student projects component here -->
        <!-- REMOVE BELOW H1 WHEN YOU PLACE YOUR COMPONENTS -->
        <h1 id="projectSec">I'm Projects</h1>
      </div>
    </div>
    <!--  -->
>>>>>>> develop
  </div>
</template>

<script>
import About from "./about";
import Grads from "./grads";
import Projects from "./projects";
import Location from "./location";

export default {
  name: "Home",
  components: {
    About,
    Grads,
    Projects,
    Location
  }
};
</script>

<<<<<<< HEAD
<style language="sass" scoped>
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
=======
<style scoped>
/* REMOVE THIS ONCE YOU PLACE YOUR COMPONENTS */
h1 {
  min-height: 900px;
}
/* ========================================== */
>>>>>>> develop
</style>
