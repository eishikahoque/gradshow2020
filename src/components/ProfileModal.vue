<template>
  <main class="modal">
    <div
      v-if="profile && profile.picture"
      class="imageGradient"
      v-bind:style="{
        backgroundImage: `linear-gradient(180deg, rgba(130, 107, 176,0.4) 0%, rgba(71,43,122,0.95) 100%), 
        url(${profile.picture})`
      }"
    >
      <section class="jobTitleRow">
        <div class="jobTitle">
          <span class="hashtag" v-for="(hash, i) in profile.hash" :key="i">
            {{ hash }}
            <!-- <template v-if="i < profile.hash.length - 1">|</template> -->
          </span>
        </div>
        <span>
          <i class="fas fa-times"></i>
        </span>
      </section>
      <section class="studentDescription">
        <div class="className">
          IMM 2020
        </div>
        <div class="studentName">
          {{ profile.name }}
        </div>
        <div class="studentBlurb">
          {{ profile.blurb }}
        </div>
        <div class="modalButtonRow">
          <button
            class="button button-outline"
            target="_blank"
            @click="viewPortfolio"
          >
            View Portfolio
          </button>
          <div class="socialIconRow">
            <template v-for="(icon, i) in availableIcons">
              <img
                :key="i"
                v-if="profile[icon.name]"
                v-bind:src="`/static/images/socialIcons/${icon.image}`"
                alt="social icon"
                class="socialIcon"
                @click="redirectSocial(profile[icon.name])"
              />
            </template>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "profilemodal",
  props: ["profile"],
  components: {},
  data() {
    return {
      availableIcons: [
        {
          name: "codepen",
          image: "codepen.svg"
        },
        {
          name: "behance",
          image: "behance.svg"
        },
        {
          name: "dribble",
          image: "dribble.svg"
        },
        {
          name: "facebook",
          image: "facebook.svg"
        },
        {
          name: "instagram",
          image: "instagram.svg"
        },
        {
          name: "pinterest",
          image: "pinterest.svg"
        },
        {
          name: "twitter",
          image: "twitter.svg"
        },
        {
          name: "github",
          image: "github.svg"
        },
        {
          name: "linkedin",
          image: "linkedin.svg"
        }
      ]
    };
  },
  methods: {
    viewPortfolio: function() {
      window.open(this.profile.portfolio, "_blank");
    },
    redirectSocial: function(path) {
      window.open(path, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins/breakpoints.scss";

.modal {
  max-width: 95vw;
  max-height: 90vh;
  background-color: white;
}

.imageGradient {
  background-repeat: no-repeat;
  background-size: contain;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 95vw;
  height: 90vh;
}

.fas.fa-times {
  font-size: 2.5rem;
  color: white;
}

.jobTitleRow {
  display: flex;
  justify-content: space-between;
  flex: 1;
}

.jobTitle {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: white;
}

.studentDescription {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.className {
  color: #fbb6cb;
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
}

.studentName {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  background: linear-gradient(270deg, #c5fbda, #c6bdf5);
  background-clip: text;
  color: transparent;
}

.studentBlurb {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: white;
}

.modalButtonRow {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.button.button-outline {
  color: white;
  margin-top: 1rem;
  border-color: white;
  max-width: 60%;
}

.button.button-outline:hover {
  color: white;
  border-color: white;
}

.socialIconRow {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
}

.socialIcon {
  width: 4rem;
  height: 3rem;
  margin: 0 1rem;
}

@include media-breakpoint-up(sm) {
  .imageGradient {
    padding: 3rem;
  }

  .jobTitle {
    flex-direction: row;
    justify-content: start;
  }

  .hashtag {
    margin-right: 0.75rem;
  }

  .modalButtonRow {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .socialIconRow {
    justify-content: flex-end;
    margin: 0;
  }
  .button.button-outline {
    max-width: 100%;
  }
}

@include media-breakpoint-up(md) {
  .modal {
    max-width: 60rem;
    max-height: 60rem;
  }

  .imageGradient {
    padding: 3rem;
    padding-top: 4rem;
    padding-bottom: 2rem;
    width: 60rem;
    height: 60rem;
    background-size: cover;
  }

  .jobTitle {
    flex-direction: row;
    justify-content: start;
  }

  .fas.fa-times {
    font-size: 2.5rem;
  }

  .jobTitle {
    font-size: 1.8rem;
  }

  .className {
    font-size: 2.1rem;
  }

  .studentName {
    font-size: 3.4rem;
  }

  .studentBlurb {
    font-size: 1.8rem;
  }

  .button.button-outline {
    margin-top: 2rem;
    max-width: 100%;
  }
}
</style>
