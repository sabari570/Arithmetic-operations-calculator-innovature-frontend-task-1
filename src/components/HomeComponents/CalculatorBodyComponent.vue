<template>
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
</template>

<script>
export default {
    name: 'CalculatorBody'
}
</script>

<style scoped>
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