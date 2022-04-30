<template>
  <div
    class="
      navbar
      header-navbar
      navbar navbar-shadow
      align-items-center
      navbar-light navbar-expand
      floating-nav
    "
  >
    <div class="navbar-container d-flex content align-items-center">
      <nuxt-link
        @click.native="toggleLayoutCollapsed"
        to=""
        class="nav-link modern-nav-toggle"
      >
        <align-justify-icon
          size="1.5x"
          class="custom-class"
        ></align-justify-icon>
      </nuxt-link>

      <ul class="navbar-nav nav align-items-center ml-auto">
        <li
          id="dropdown-grouped"
          class="nav-item b-nav-dropdown dropdown dropdown-language"
          variant="link"
        >
          <b-nav-item-dropdown
            id="dropdown-grouped"
            variant="link"
            class="dropdown-language"
            right
          >
            <template #button-content>
              <b-img
                :src="require('/assets/images/flags/en.png')"
                height="14px"
                width="22px"
                alt="English"
              />
              <span class="ml-50 text-body">English</span>
            </template>
            <b-dropdown-item
              v-for="localeObj in locales"
              :key="localeObj.locale"
              @click="$i18n.locale = localeObj.locale"
            >
              <b-img
                :src="localeObj.img"
                height="14px"
                width="22px"
                :alt="localeObj.locale"
              />
              <span class="ml-50">{{ localeObj.name }}</span>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </li>
        <li class="nav-item d-none d-lg-block">
          <nuxt-link to="" class="nav-link">
            <moon-icon
              @click="toggleMode('dark')"
              v-if="dashboardMode"
              size="1.5x"
              class="custom-class"
            ></moon-icon>
            <sun-icon
              @click="toggleMode('light')"
              v-else
              size="1.5x"
              class="custom-class"
            ></sun-icon>
          </nuxt-link>
        </li>
        <li class="nav-item b-nav-dropdown dropdown dropdown-user">
          <b-nav-item-dropdown
            right
            toggle-class="d-flex align-items-center dropdown-user-link"
            class="dropdown-user"
          >
            <template #button-content>
              <div class="d-sm-flex d-none user-nav">
                <p class="user-name font-weight-bolder mb-0">Abdelmomen</p>
                <span class="user-status">Admin</span>
              </div>
              <b-avatar
                size="40"
                :src="require('/assets/images/flags/en.png')"
                variant="light-primary"
                badge
                class="badge-minimal"
                badge-variant="success"
              >
                <user-icon size="1.5x" class="custom-class"></user-icon>
              </b-avatar>
            </template>

            <b-dropdown-item
              :to="{ name: '' }"
              link-class="d-flex align-items-center"
            >
              <user-icon size="1.5x" class="custom-class mr-50"></user-icon>
              <span>Profile</span>
            </b-dropdown-item>

            <b-dropdown-divider />

            <b-dropdown-item
              :to="{ name: '' }"
              link-class="d-flex align-items-center"
            >
              <settings-icon
                size="1.5x"
                class="custom-class mr-50"
              ></settings-icon>
              <span>Settings</span>
            </b-dropdown-item>
            <b-dropdown-item
              link-class="d-flex align-items-center"
              @click="$auth.logout()"
            >
              <log-out-icon
                size="1.5x"
                class="custom-class mr-50"
              ></log-out-icon>
              <span>Logout</span>
            </b-dropdown-item></b-nav-item-dropdown
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  DiscIcon,
  CircleIcon,
  MoreHorizontalIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon,
  AlignJustifyIcon,
} from "vue-feather-icons";
export default {
  async asyncData(context) {
    console.warn("app refresh", context);
  },
  props: ["width"],
  data() {
    return {
      view: false,
      locales: [
        {
          locale: "ar",
          img: require("/assets/images/flags/ar.png"),
          name: "Arabic",
        },
        {
          locale: "en",
          img: require("/assets/images/flags/en.png"),
          name: "English",
        },
        {
          locale: "de",
          img: require("/assets/images/flags/de.png"),
          name: "German",
        },
      ],
    };
  },
  methods: {
    toggleLayoutCollapsed() {
      this.$store.dispatch("toggleLayoutCollapsed", this.width);
    },
    toggleMode(mode) {
      this.$store.dispatch("layoutMode", mode);
      this.$cookies.set("dashboard-mode", mode);
      if (mode == "dark") {
        document.body.classList.remove("light-layout");
        document.body.classList.add("dark-layout");
      } else {
        document.body.classList.remove("dark-layout");
        document.body.classList.add("light-layout");
      }
    },
  },
  components: {
    DiscIcon,
    CircleIcon,
    MoreHorizontalIcon,
    HomeIcon,
    MoonIcon,
    SunIcon,
    UserIcon,
    SettingsIcon,
    LogOutIcon,
    AlignJustifyIcon,
  },
};
</script>

<style lang="scss" scoped>
.custom-class {
  color: #6e6b7b;
}
@media (max-width: 1199.98px) {
  .vertical-layout.vertical-menu-modern.menu-collapsed
    .header-navbar.floating-nav {
    width: calc(100vw - (100vw - 100%) - calc(2rem * 2)) !important;
  }
}
</style>
