<template>
  <div class="home-bg">
    <div class="calculator-card">
      <h2 class="calculator-heading">API Calculator</h2>
      <div class="input-group">
        <input type="number" v-model="number1" min="0" placeholder="Enter number" />
        <input type="number" v-model="number2" min="0" placeholder="Enter number" />
      </div>
      <div class="operations">
        <button class="calc-operations">+</button>
        <button class="calc-operations">-</button>
        <button class="calc-operations">x</button>
        <button class="calc-operations">/</button>
      </div>
      <div class="result">
        <h3>Result: 7</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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

input {
  width: 45%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background: transparent;
}

.operations {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.calc-operations {
  width: 22%;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #003366;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all ease-in 0.3s;
}

.calc-operations:hover {
  background-color: #5a97d3;
}

.result {
  width: 100%;
  padding: 1rem;
  border-top: 1px solid #eee;
}
</style>