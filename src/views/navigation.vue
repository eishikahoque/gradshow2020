<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <router-link class="navbar-brand js-scroll-trigger" to="/"
        >IMM 2020</router-link
      >
      <!-- <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu <img src="../assets/images/bars-solid.svg" alt="" srcset="" />
      </button> -->
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item" v-for="(linkObj, ind) in navList" :key="ind">
            <a
              class="nav-link js-scroll-trigger"
              :href="linkObj.path"
              v-if="linkObj.path.indexOf('#') === 0"
              >{{ linkObj.name }}</a
            >
            <router-link
              class="nav-link js-scroll-trigger"
              v-else
              :to="linkObj.path"
              >{{ linkObj.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    navList: [
      // {
      //   name: "About",
      //   path: "#about"
      // },
      // {
      //   name: "Grads",
      //   path: "#grads"
      // },
      // {
      //   name: "Projects",
      //   path: "#projects"
      // },
      // { name: "Location", path: "#location" }

      {
        name: "Location",
        path: "#location"
      },
      {
        name: "Projects",
        path: "#projects"
      },
      {
        name: "Grads",
        path: "#grad"
      },
      {
        name: "About",
        path: "#about"
      }
    ]
  })
};
</script>

<style language="sass" scoped>
#mainNav.navbar {
  background: rgba(0, 0, 0, 0.1);
}

#mainNav .navbar-toggler {
  font-size: 12px;
  right: 0;
  padding: 13px;
  text-transform: uppercase;
  /* color: #fff; */
  border: 0;
  /* background-color: #7250a8; */
}

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

.navbar {
  margin-bottom: 10px;
}

.navbar-brand {
  float: left;
  margin-bottom: 0;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* background-color: #606c76; */
}

.navbar li {
  float: right;
  margin-bottom: 0;
}

.navbar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar li a:hover {
  background-color: #ab5dda;
}
</style>
