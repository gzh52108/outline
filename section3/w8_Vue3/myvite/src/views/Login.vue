<template>
  <div>Login</div>
  <button @click="login">登录</button>
</template>

<script setup>
import { useRouter,useRoute } from "vue-router";
const router = useRouter();
console.log("router", router);
const login = () => {
  // this.$router.push('/home')
//   router.push("/home");
  router.push({
      path:'/home',
      query:{
          username:'laoxie',
          password:123
      }
  });
};
</script>