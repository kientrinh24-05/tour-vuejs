<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item
          url="/dashboard-default"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Tổng quan'"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/tour"
          :class="getRoute() === 'tour' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Quản lý Tour'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/category"
          :class="getRoute() === 'category' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Quản lý Thể Loại'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-ui-04 text-warning text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/interest"
          :class="getRoute() === 'interest' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Quản lý Sở Thích'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-spaceship text-warning text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/place"
          :class="getRoute() === 'place' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Quản lý Địa Điểm'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-palette text-warning text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/user"
          :class="getRoute() === 'user' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Quản lý người dùng'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-air-baloon text-warning text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item
          url="/profile"
          :class="getRoute() === 'profile' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Thông tin'"
        >
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/signup"
          :class="getRoute() === 'signup' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'اشتراك' : 'Đăng ký'"
        >
          <template v-slot:icon>
            <i class="ni ni-collection text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>
  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <sidenav-card
      :class="cardBg"
      textPrimary="Cần hổ trợ?"
      textSecondary="Hãy liên lạc với tôi"
    />
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavCard from "./SidenavCard.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      title: "Demo Project",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  components: {
    SidenavItem,
    SidenavCard
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    }
  }
};
</script>
