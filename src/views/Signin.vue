<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <!-- <div class="col-12">
        <navbar
          isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          v-bind:darkMode="true"
          isBtn="bg-gradient-success"
        />
      </div> -->
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Đăng nhập</h4>
                  <p class="mb-0">Nhập email và mật khẩu của bạn để đăng nhập</p>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                      <argon-input :err="$store.state.error" type="email" placeholder="Email" name="email" size="lg" :value="formData.email" @input="formData.email = $event.target.value" />
                      <div v-if="$store.state.error" class="error mx-auto mb-4 text-sm">{{ $store.state.error }}</div>
                    </div>
                    <div class="mb-3">
                      <argon-input :err="$store.state.error" type="password" placeholder="Password" name="password" size="lg" :value="formData.password" @input="formData.password = $event.target.value" />
                    </div>
                    <argon-switch id="rememberMe">Ghi nhớ</argon-switch>

                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                        @click="submit()"
                      >Đăng nhập</argon-button>
                    </div>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                   Bạn chưa có tài khoản?
                   <router-link class="text-success text-gradient font-weight-bold" to="/signup">Đăng ký</router-link>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
          background-size: cover;"
              >
                <span class="mask bg-gradient-success opacity-6"></span>
                <h4
                  class="mt-5 text-white font-weight-bolder position-relative"
                >"Trải nghiệm kỳ nghỉ tuyệt vời"</h4>
                <p
                  class="text-white position-relative"
                >Combo tour - khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất với bạn.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import router from '@/router'
const body = document.getElementsByTagName("body")[0];
import { createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('auth');

export default {
  name: "signin",
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
  data() {
    return {
      formData: {
        email:"",
        password:"",
      },
      cookieName:"",
    } 
  },
  methods: {
    ...mapActions(['login']),
    submit() {
      let data = {
        username: this.formData.email,
        password: this.formData.password 
      }
      this.login(data)
      .then(res => {
        localStorage.setItem('token', res.cookieString.value);
        if (!res) return;
        router.push('/dashboard-default')
      })
      .catch(err=> {
        console.log(err);
      })
    }
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
