<template>
  <div>
    Login
  </div>
</template>

<script>
import { login } from '@/api/login';

export default {
  name: 'Login',
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
