<template>
  <div>
    <verify
      @success="alert('success')"
      @error="alert('error')"
      :type="4"
    />
  </div>
</template>

<script>
import Verify from 'vue2-verify';

export default {
  name: 'Home',
  components: {
    Verify,
  },
  methods: {
    alert(text) {
      console.log(text);
    },
  },
};
</script>
