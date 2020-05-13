<template>
  <nav class="navbar" :style="{ background: background || '#333' }" id="nav">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        ><figure class="image-logo" @click="toggleNav">
          <img :src="imagePath" height="80%" width="80%" /></figure
      ></router-link>
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
      <ul ref="nav">
        <!-- <router-link class="navbar-brand" to="/"
          ><figure class="image-logo" @click="toggleNav">
            <img :src="imagePath" height="80%" width="80%" /></figure
        ></router-link> -->
        <!-- <figure class="image-logo" @click="toggleNav">
            <img :src="imagePath" height="60px" width="60px" />
          </figure> -->
        <li
          class="nav-item"
          v-for="(linkObj, ind) in navList"
          :key="ind"
          @mouseenter="
            $event.currentTarget.style.background = hoverBackground || '#999'
          "
          @mouseleave="
            $event.currentTarget.style.background = background || '#333'
          "
        >
          <a :href="linkObj.path" v-if="linkObj.path.indexOf('#') === 0">{{
            linkObj.name
          }}</a>
          <router-link v-else :to="linkObj.path"
            >{{ linkObj.name }}
          </router-link>
        </li>
      </ul>

      <!--      
      <div id="navbarResponsive">
        <ul class="navbar-nav" ref="nav">
          <li class="nav-item" v-for="(linkObj, ind) in navList" :key="ind">
            <a :href="linkObj.path" v-if="linkObj.path.indexOf('#') === 0">{{
              linkObj.name
            }}</a>
            <router-link v-else :to="linkObj.path"
              >{{ linkObj.name }}
            </router-link>
          </li>
        </ul> -->

      <!-- <ul :style="{ background: background || '#333' }" ref="nav">
          <figure class="image-logo" @click="toggleNav">
            <img :src="imagePath" height="60px" width="60px" />
          </figure>
          <li
            v-for="(link, index) in navList"
            :key="index"
            @mouseenter="
              $event.currentTarget.style.background = hoverBackground || '#999'
            "
            @mouseleave="
              $event.currentTarget.style.background = background || '#333'
            "
          >
            <router-link
              :to="link.path"
              :style="{ color: linkColor || '#DDD' }"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul> -->

      <!-- <ul :style="{ background: background || '#333' }" ref="nav">
          <figure class="image-logo" @click="toggleNav">
            <img :src="imagePath" height="100%" width="100%" />
          </figure>
          <li
            v-for="(link, index) in navList"
            :key="index"
            @mouseenter="
              $event.currentTarget.style.background = hoverBackground || '#999'
            "
            @mouseleave="
              $event.currentTarget.style.background = background || '#333'
            "
          >
            <a
              href="#"
              v-if="link.path.indexOf('#') === 0"
              :v-scroll-to="link.path"
              :style="{ color: linkColor || '#DDD' }"
            ></a>
            <router-link v-else :to="link.path">{{ link.name }} </router-link>
          </li>
        </ul> -->
    </div>
  </nav>
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
      // { name: "Location", path: "#location" }
      // {
      //   name: "Location",
      //   path: "#location"
      // },
      // {
      //   name: "Projects",
      //   path: "#projects"
      // },
      // {
      //   name: "Grads",
      //   path: "#grads"
      // },
      // {
      //   name: "About",
      //   path: "#about"
      // }
    ]
  }),
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins/typography";
@import "@/styles/mixins/buttons";
@import "@/styles/mixins/breakpoints";
figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
  // margin-right: 10px;
}
nav {
  //   position: fixed;
  z-index: 1000;
  height: 60px;
  width: 100%;
  font-weight: bold;
  right: 0;
  padding: 13px;
  border: 0;
  margin-bottom: 10px;
  // background: rgba(126, 91, 91, 0.1);
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    /* background-color: #606c76; */
    display: flex;
    float: right;
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }
  li {
    // float: right;
    margin-bottom: 0;
    list-style-type: none;
    padding: 0px 10px;
    a {
      display: flex;
      color: $color-purple;
      text-align: center;
      padding: 12px 12px;
      text-decoration: none;
      flex-direction: row-reverse;
      align-items: center;
    }
    a:hover {
      // background-color: #ab5dda;
    }
  }
  //   .navbar li {
  //     background-color: #ab5dda;
  //   }
}
.navbar-brand {
  float: left;
  margin-bottom: 0;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.navbar {
  @include text-body-sm();
  right: 0;
  padding: 13px;
  border: 0;
  position: relative;
  z-index: 1;
}
@include media-breakpoint-down(sm) {
  nav {
    ul {
      position: absolute;
      width: 120px;
      flex-direction: column;
      height: fit-content;
      transition: 300ms ease all;
      top: 60px;
      &.active {
        left: 0px;
      }
      figure {
        position: fixed;
        z-index: 3;
        top: 10px;
        left: 2px;
      }
      li {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }
      a {
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        margin-right: 13px;
      }
    }
  }
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
</style>
