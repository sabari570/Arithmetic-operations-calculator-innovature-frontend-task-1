<template>
  <div class="login-bg">
    <div class="login-card">
      <LoginBgImageVue />
      <LoginFormComponentVue />
    </div>
  </div>
</template>

<script>
import LoginBgImageVue from '@/components/LoginComponents/LoginBgImage.vue'
import LoginFormComponentVue from '@/components/LoginComponents/LoginFormComponent.vue'

export default {
  name: 'LoginView',
  components: { LoginBgImageVue, LoginFormComponentVue }
}
</script>

<style>
.login-bg {
  padding: 3rem;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  width: 40rem;
  height: 100%;
  padding: 4rem 1rem;
  background: rgb(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 15px 16.83px .17px rgba(0, 0, 0, .05);
}

@media (max-width: 700px) {
  .login-bg{
    height: 50%;
    width: 100%;
    padding: 2rem 0;
  }
  .login-card{
    display: flex;
    flex-direction: column;
    width: 80%;
  }
}
</style>