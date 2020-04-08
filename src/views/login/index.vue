<template>
  <div class="page">
    <!-- <password-login /> -->
    <phone-login />
  </div>
</template>

<script>
import { login } from '@/api/login';
// import PasswordLogin from '@/components/login/password-login';
import PhoneLogin from '@/components/login/phone-login';

export default {
  name: 'Login',
  components: {
    // PasswordLogin,
    PhoneLogin,
  },
  data() {
    return {
      userId: 1,
    };
  },
  mounted() {
    this.handleLogin();
  },
  methods: {
    handleLogin() {
      login({ userId: this.userId });
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
}
</style>
