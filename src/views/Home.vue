<template>
  <div>
<<<<<<< Updated upstream
=======
    Home Page...
    <!-- <div class="row">
      <div class="col-sm-6 col-md-3">Col 1</div>
      <div class="col-sm-6 col-md-3">Col 2</div>
      <div class="col-sm-6 col-md-3">Col 3</div>
      <div class="col-sm-6 col-md-3">Col 4</div>
    </div> -->
>>>>>>> Stashed changes
    <!-- About -->
    <About></About>

    <!-- Grads -->
    <Grads></Grads>
<<<<<<< Updated upstream

    <!-- Projects-->
    <Projects></Projects>
    <!--this ia a coponent-->

    <!-- Location -->
    <Location></Location>

    <!-- Contact -->
    <Contact></Contact>

=======
    <!-- Location -->
    <Location></Location>
>>>>>>> Stashed changes
    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <span class="copyright">Copyright &copy; IMM 2020</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
<<<<<<< Updated upstream
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
=======
// @ is an alias to /src
import About from "./about";
import Grads from "./grads";
import Location from "./location";
export default {
  name: "Home",
  components: { About, Grads, Location }
>>>>>>> Stashed changes
};
</script>

<style></style>
