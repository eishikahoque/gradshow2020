<template>
  <div class="container">
    <header>
        <div class="row">
          <div class="col">
            <img src="../assets/images/imm-logo.svg" alt="" srcset="" />
          </div>
        </div>
    </header>
    <div class="intro-container">
      <!-- INTRO MESSAGE -->
      <img
        class="coming-soon-header"
        :src="require(`../assets/images/${images.comingSoon}`)"
        alt="Coming Soon"
      />
      <!-- NEWSLETTER -->
      <div class="newsletter">
        <!-- SIGNUP FORM -->
        <label for="email">Sign up here for more information</label>
        <div class="row no-gutters">
          <div class="col-md-8">
            <!-- INPUT TEXT -->
            <input
              name="email"
              type="email"
              placeholder="youremail@email.com"
            />
          </div>
          <div class="col-md-4">
            <!-- SUBMIT BUTTON -->
            <button class="primary subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <!-- FOOTER MESSAGE -->
      <div class="row footer-message">
        <div class="col">
          <p>Connect with your IMM grads on May 14th</p>
        </div>
      </div>
      <!-- BLOB CONTAINER -->

    </div>
  </div>
</template>

<script>

// MAILCHIMP
import MailchimpSubscribe from "vue-mailchimp-subscribe";

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
@import "@/styles/mixins/typography";
@import "@/styles/mixins/buttons";
@import "@/styles/mixins/breakpoints";

header {
  margin: 70px 0;
}

.coming-soon-header {
  width: 100%;
  max-width: 750px;
  margin-bottom: 80px;
}

.intro-container {
  max-width: 800px;
  margin: 0 auto;
  background-image: url(../assets/images/blob.png);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}

.newsletter {
  margin: 40px 0px;
}

.newsletter input[type="email"] {
  @include text-h3();
  width: 100%;
  background-color: $color-white;
  border-color: $color-white;
  height: 80px;
  border-radius: 24px 0px 0px 24px;
  padding: 0 3rem;
}

.newsletter label {
  @include text-h4();
  margin-bottom: 15px;
  display: block;
}

.subscribe-btn {
  @include text-h3();
  color: $color-white;
  width: 100%;
  height: 80px;
  border-radius: 0px 24px 24px 0px;
  text-transform: unset;
  @include primary-btn-color();
}

.footer-message {
  @include text-body-lg();
  margin-top: 40px;
}

// .blob-container {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: -1;
//   background-image: url(../assets/images/blob.png);
//   background-position: center;
//   background-repeat: no-repeat;
// }

@include media-breakpoint-down(sm) {
  .newsletter input[type="email"], .subscribe-btn {
    border-radius: 24px;
    margin-bottom: 16px;
  }
  .newsletter label {
    text-align: center;
    padding-left: unset;
  }
  .footer-message {
    text-align: center;
  }
}

@include media-breakpoint-down(lg) {
  header {
    text-align: center;
    margin: 70px 0;
  }
  .subscribe-btn {
    margin: unset;
  }
}
</style>
