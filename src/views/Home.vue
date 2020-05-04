<template>
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

    <!-- Contact -->
    <Contact></Contact>

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

<style></style>
