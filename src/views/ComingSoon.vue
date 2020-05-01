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
      <div>
        <!-- ==== -->
      </div>
      <!-- NEWSLETTER -->
      <div class="row newsletter">
        <div class="column">
          <!-- MAILCHIMP TEST -->
          <mailchimp-subscribe
            url="https://sheridancollege.us5.list-manage.com/subscribe/post-json"
            user-id="0f989d38861f906f55f887ece"
            list-id="ba049562ad"
            @error="onError"
            @success="onSuccess"
          >
            <template v-slot="{ subscribe, setEmail, error, success, loading }">
              <!-- SIGNUP FORM -->
              <form @submit.prevent="subscribe">
                <div class="row row-no-padding">
                  <div class="column column-75">
                    <label for="email">Sign up here for more information</label>
                    <input
                      type="email"
                      id="email"
                      @input="setEmail($event.target.value)"
                      placeholder="youremail@email.com"
                    />
                  </div>
                  <div class="column column-25">
                    <!-- SUBMIT BUTTON -->
                    <button class="primary subscribe-btn" type="submit">
                      Subscribe
                    </button>
                    <!-- <button class="primary subscribe-btn">Subscribe</button> -->
                  </div>
                </div>
                <div class="alert" v-if="error || success || loading">
                  <div v-if="error">{{ error }}</div>
                  <div v-if="success">Yay!</div>
                  <div v-if="loading">Loading…</div>
                </div>
              </form>
            </template>
          </mailchimp-subscribe>
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
    subscribe() {
      console.log("SUBSCRIBE");
    },
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
  background-image: url(../assets/images/blob.png);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
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
  font-family: "Montserrat", sans-serif;
}

.newsletter label {
  padding-left: 3rem;
  font-family: "Montserrat", sans-serif;
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
.alert {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  /* color: #fff; */
  font-weight: normal;
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
//   //   background-size:;
// }

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
