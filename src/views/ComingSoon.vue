<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="column">
            <img src="../assets/images/imm-logo.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </header>
    <div class="intro-container">
      <!-- INTRO MESSAGE -->
      <div class="row">
        <div class="column">
          <section>
            <img
              :src="require(`../assets/images/${images.comingSoon}`)"
              alt="Coming Soon"
            />
          </section>
        </div>
      </div>
      <!-- NEWSLETTER -->
      <div class="row newsletter">
        <div class="column">
          <!-- SIGNUP FORM -->
          <div class="row row-no-padding">
            <div class="column column-75">
              <label for="email">Sign up here for more information</label>
              <!-- INPUT TEXT -->
              <input
                name="email"
                type="email"
                placeholder="youremail@email.com"
              />
            </div>
            <div class="column column-25">
              <!-- SUBMIT BUTTON -->
              <button class="primary subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <!-- FOOTER MESSAGE -->
      <div class="row footer-message">
        <div class="column">
          <p>Connect with your IMM grads on May 14th</p>
        </div>
      </div>
      <!-- BLOB CONTAINER -->
      <div class="blob-container"></div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import "@/assets/css/gradshow.scss";

export default {
  data: function() {
    return {
      images: {
        comingSoon: "coming-soon-text.svg"
      }
    };
  }
};
</script>

<style lang="scss">
header {
  margin: 70px 0;
}

// MEDIA QUERY FOR SCREENS LESS THAN 960px
@media only screen and (max-width: 960px) {
  header {
    text-align: center;
    margin: 70px 0;
  }
}
.intro-container {
  max-width: 800px;
  margin: 0 auto;
}
.newsletter {
  margin: 40px 0px;
}
.newsletter input[type="email"] {
  background-color: #ffffff;
  border-color: #ffffff;
  height: 80px;
  border-radius: 24px 0px 0px 24px;
  padding: 0 3rem;
  font-size: 2rem;
}
.newsletter label {
  padding-left: 3rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.subscribe-btn {
  margin-top: 3rem;
  width: 100%;
  height: 80px;
  border-radius: 0px 24px 24px 0px;
  font-size: 2rem;
  text-transform: unset;
}

.footer-message {
  text-align: center;
  font-size: 2.4rem;
}

.blob-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-image: url(../assets/images/blob.png);
  background-position: center;
  background-repeat: no-repeat;
  //   background-size:;
}

// MEDIA QUERY FOR SCREENS LESS THAN 960px
@media only screen and (max-width: 960px) {
  .newsletter input[type="email"],
  .subscribe-btn {
    border-radius: 15px;
    height: 50px;
  }
  .subscribe-btn {
    margin: unset;
  }
  .newsletter label {
    text-align: center;
    padding-left: unset;
  }
}
</style>
