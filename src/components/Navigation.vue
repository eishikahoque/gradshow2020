<template>
  <div class="container">
    <nav class="navbar" :style="{ background: background || '#333' }" id="nav">
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
nav {
  padding: 3em 1em;
}
.navbar .icon {
  display: none;
}

/* Add a black background color to the top navigation */
.navbar {
  overflow: hidden;
  display: flex;
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
  // color: #472B7A;
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

// nav {
// //   position: fixed;
//   z-index: 3;
//   height: 60px;
//   width: 100%;
//   font-weight: bold;
//   right: 0;
//   padding: 13px;
//   border: 0;
//   margin-bottom: 10px;
//   // background: rgba(126, 91, 91, 0.1);
//   ul {
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//     /* background-color: #606c76; */
//     display: flex;
//     float: right;
//     height: 100%;
//     align-items: center;
//     margin-block-start: 0;
//     margin-block-end: 0;
//     padding-inline-start: 0;
//   }
//   li {
//     // float: right;
//     margin-bottom: 0;
//     list-style-type: none;
//     padding: 0px 10px;
//     a {
//       display: flex;
//       color: $color-purple;
//       text-align: center;
//       padding: 12px 12px;
//       text-decoration: none;
//       flex-direction: row-reverse;
//       align-items: center;
//     }
//     a:hover {
//       // background-color: #ab5dda;
//     }
//   }
//   //   .navbar li {
//   //     background-color: #ab5dda;
//   //   }
// }
// .navbar-brand {
//   float: left;
//   margin-bottom: 0;
//   color: white;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
// }
// .navbar {
//   @include text-body-sm();
//   right: 0;
//   padding: 13px;
//   border: 0;
// }
// @include media-breakpoint-down(sm) {
//   nav {
//     ul {
//       position: absolute;
//       width: 120px;
//       flex-direction: column;
//       height: fit-content;
//       transition: 300ms ease all;
//       top: 60px;
//       &.active {
//         left: 0px;
//       }
//       figure {
//         position: fixed;
//         z-index: 3;
//         top: 10px;
//         left: 2px;
//       }
//       li {
//         width: 100%;
//         padding-left: 0;
//         padding-right: 0;
//       }
//       a {
//         flex-direction: row;
//         margin-left: 20px;
//         justify-content: space-between;
//         margin-right: 13px;
//       }
//     }
//   }
// }
/* @media (min-width: 992px) {
  #mainNav {
    padding-top: 25px;
    padding-bottom: 25px;
    -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
    transition: padding-top 0.3s, padding-bottom 0.3s;
    border: none;
    background-color: transparent;
  }
  .navbar-expand-lg,
  .navbar-expand-lg .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
  }
  .navbar-expand-lg {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    -webkit-box-pack: start;
    justify-content: flex-start;
  }
} */
// #mainNav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #fff;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
//}

@media screen and (max-width: 600px) {
  // .navbar a:not(:first-child) {display: none;}
  .navbar a {
    display: none;
  }
  .navbar a.icon {
    right: 0;
    top: 0;
    // float: right;
    display: block;
  }

  .navbar__wrapper {
    margin-left: 0;
  }

  .navbar.responsive {
    position: relative;
  }
  .navbar.responsive a.icon {
    // position: absolute;
    // right: 0;
    // top: 0;
  }
  .navbar.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
