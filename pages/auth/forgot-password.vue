<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <img src="/img/logo.svg" alt="logo" />

        <h2 class="brand-text text-primary ml-1">Vuexy</h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img
            fluid
            :src="require('@/assets/images/pages/forgot-password-v2-dark.svg')"
            alt="Forgot password V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Forgot password-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title title-tag="h2" class="font-weight-bold mb-1">
            Forgot Password? 🔒
          </b-card-title>
          <b-card-text class="mb-2">
            Enter your email and we'll send you instructions to reset your
            password
          </b-card-text>

          <!-- form -->
          <validation-observer ref="simpleRules">
            <b-form
              class="auth-forgot-password-form mt-2"
              @submit.prevent="validationForm"
            >
              <b-form-group label="Email" label-for="forgot-password-email">
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <b-form-input
                    id="forgot-password-email"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false : null"
                    name="forgot-password-email"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <b-button type="submit" variant="primary" block>
                Send reset link
              </b-button>
            </b-form>
          </validation-observer>

          <p class="text-center mt-2">
            <b-link to="/login">
              <chevron-left-icon
                size="1.5x"
                class="custom-class"
              ></chevron-left-icon>
              Back to login
            </b-link>
          </p>
        </b-col>
      </b-col>
      <!-- /Forgot password-->
    </b-row>
  </div>
</template>

<script>
import { ChevronLeftIcon } from "vue-feather-icons";
export default {
  name: "forgot-password",
  layout: "auth",
  data() {
    return {
      userEmail: "",
    };
  },
  components: {
    ChevronLeftIcon,
  },
};
</script>

<style lang="scss" scoped>
</style>
