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
        <mailchimp-subscribe
          url="https://sheridancollege.us5.list-manage.com/subscribe/post-json"
          user-id="0f989d38861f906f55f887ece"
          list-id="ba049562ad"
          @error="onError"
          @success="onSuccess"
        >
          <!-- SIGNUP FORM -->

          <template v-slot="{ subscribe, setEmail, error, success, loading }">
            <form @submit.prevent="subscribe">
              <div class="row">
                <div class="col-md-12">
                  <label for="email">Sign up here for more information</label>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-md-8">
                  <!-- INPUT TEXT -->
                  <input
                    type="email"
                    id="email"
                    @input="setEmail($event.target.value)"
                    placeholder="youremail@email.com"
                  />
                </div>
                <div class="col-md-4">
                  <!-- SUBMIT BUTTON -->
                  <button class="primary subscribe-btn" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
              <!-- ALERTS -->
              <div class="row">
                <div class="col-md-12">
                  <div class="alert" v-if="error || success || loading">
                    <div v-if="error">{{ error }}</div>
                    <div v-if="success">Successfully subscribed</div>
                    <div v-if="loading">Sending...</div>
                  </div>
                </div>
              </div>
            </form>
          </template>
        </mailchimp-subscribe>
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
  components: {
    MailchimpSubscribe
  },
  data: function() {
    return {
      images: {
        comingSoon: "coming-soon-text.svg"
      },
      error: null,
      success: false,
      loading: true
    };
  },
  methods: {
    onSuccess() {
      console.log("Successful");
    },
    onError() {
      console.log("Error");
    }
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
  @include text-h5();
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
  @include primary-btn();
}

.footer-message {
  @include text-body-lg();
  margin-top: 40px;
}
.alert {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  /* color: #fff; */
  font-weight: normal;
  margin: 20px 0;
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
  .newsletter input[type="email"],
  .subscribe-btn {
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
