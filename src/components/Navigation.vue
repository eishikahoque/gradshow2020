<template>
  <div class="container">
    <div class="row align-items-center justify-content-between">
      <div class="col-xs-6 logo">
        <h4>IMM2020</h4>
      </div>
      <div class="col-xs-6">
        <nav
          class="navbar"
          :style="{ background: background || '#333' }"
          id="nav"
        >
          <a href="javascript:void(0);" class="icon" @click="myFunction">
            <i class="fa fa-bars"></i>
          </a>
          <div class="navbar__wrapper">
            <a href="#about">About</a>
            <a href="#grads">Grads</a>
            <a href="#projects">Works</a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    imagePath: require("../assets/images/imm-logo.svg"),
    linkColor: " #472b7a",
    background: "rgba(0, 0, 0, 0)",
    hoverBackground: "#ab5dda",
    navList: [
      {
        name: "About",
        path: "#about"
      },
      {
        name: "Grads",
        path: "#grads"
      },
      {
        name: "Works",
        path: "#projects"
      }
    ]
  }),
  methods: {
    myFunction: function() {
      var x = document.getElementById("nav");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins/typography";
@import "@/styles/mixins/buttons";
@import "@/styles/mixins/breakpoints";
.logo {
  padding: 3em 30px;
  z-index: 1;
}

.logo h4 {
  color: $color-purple;
}

nav {
  padding: 3em 1em;
}
.navbar .icon {
  display: none;
}

/* Add a black background color to the top navigation */
.navbar {
  // overflow: hidden;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 1;

  &__wrapper {
    margin-left: auto;
  }
}

/* Style the links inside the navigation bar */
.navbar a {
  font-weight: 600;
  float: left;
  display: block;
  text-align: center;
  padding-right: 3rem;
  text-decoration: none;
}

/* Change the color of links on hover */
.navbar a:hover {
  color: $color-light-purple;
}

/* Add an active class to highlight the current page */
.navbar a.active {
  background-color: #4caf50;
  color: white;
}

@media screen and (max-width: 600px) {
  .navbar a {
    display: none;
  }
  .navbar a.icon {
    right: 0;
    top: 0;
    display: inline-block;
  }

  .navbar__wrapper {
    position: absolute;
    right: 0;
    top: 70px;
    height: auto;
  }

  .navbar.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
