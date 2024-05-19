<template>
  <div class="home-bg">
    <div class="calculator-card">
      <h2 class="calculator-heading">API Calculator</h2>
      <CalculatorBodyComponent />
    </div>
    <div class="logout-floating-btn" @click="onloggingOutUser">
      <i class="fa-solid fa-right-from-bracket"></i>
    </div>
  </div>
</template>

<script>
import CalculatorBodyComponent from '@/components/HomeComponents/CalculatorBodyComponent.vue';
import { mapActions, mapGetters } from 'vuex';
import { IS_USER_AUTHENTICATED_GETTER, LOGOUT_ACTION } from '@/store/storeConstants';
export default {
  name: 'HomePage',
  components: { CalculatorBodyComponent },
  computed: {
    ...mapGetters('auth', {
      isUserAuthenticated: IS_USER_AUTHENTICATED_GETTER
    })
  },
  mounted(){
    console.log("Is user authenticated: ", this.isUserAuthenticated);
  },
  methods: {
    ...mapActions('auth', {
      onLogout: LOGOUT_ACTION
    }),
    onloggingOutUser() {
      this.onLogout();
      this.$router.replace('/login');
    }
  }
}
</script>

<style>
.home-bg {
  padding: 2rem 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.calculator-card {
  width: 20rem;
  height: 100%;
  padding: 4rem 1rem;
  background: rgb(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 15px 16.83px .17px rgba(0, 0, 0, .05);
}

.calculator-heading {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
}

.input-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.logout-floating-btn {
  position: fixed;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: #003366;
  z-index: 999;
  right: 2rem;
  bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
}

.logout-floating-btn:hover {
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.10);
  cursor: pointer;
}

.logout-floating-btn i {
  color: #fff;
  position: relative;
  top: 0.7rem;
  left: 1rem;
}

@media only screen and (max-width: 768px) {
  .logout-floating-btn {
    right: 1rem;
    bottom: 1rem;
  }
}
</style>