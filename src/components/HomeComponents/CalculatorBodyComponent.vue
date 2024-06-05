<template>
    <div class="input-group">
        <input type="number" v-model="number1" min="0" placeholder="Enter number 1" />
        <input type="number" v-model="number2" min="0" placeholder="Enter number 2" />
    </div>
    <p v-if="showErrorMessage" class="calc-error-message">{{ showErrorMessage }}</p>
    <div class="operations">
        <button class="calc-operations" @click="calculate('add')">+</button>
        <button class="calc-operations" @click="calculate('subtract')">-</button>
        <button class="calc-operations" @click="calculate('multiply')">x</button>
        <button class="calc-operations" @click="calculate('divide')">/</button>
    </div>
    <div class="result">
        <h3>Result: {{ result }}</h3>
    </div>
</template>

<script>
import axiosInstance from '@/services/axiosInterceptors';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { ERROR_MESSAGE_GETTER, ERROR_MESSAGE_MUTATION, LOGOUT_ACTION } from '@/store/storeConstants';

export default {
    name: 'CalculatorBody',
    data() {
        return {
            number1: null,
            number2: null,
            result: 0,
        }
    },
    computed: {
        ...mapGetters('auth', {
            showErrorMessage: ERROR_MESSAGE_GETTER,
        })
    },
    methods: {
        ...mapActions('auth', {
            onLogout: LOGOUT_ACTION,
        }),
        ...mapMutations('auth', {
            setErrorMessage: ERROR_MESSAGE_MUTATION,
        }),
        async calculate(operation) {
            try {
                if (this.number1 === null || this.number2 === null) {
                    this.setErrorMessage("Number fields cannot be empty");
                    return;
                }
                const response = await axiosInstance.get(`/${operation}/?num1=${this.number1}&num2=${this.number2}`);
                this.setErrorMessage("");
                switch (operation) {
                    case 'add': this.result = response.data.sum;
                        break;
                    case 'subtract': this.result = response.data.difference;
                        break;
                    case 'multiply': this.result = response.data.product;
                        break;
                    case 'divide': this.result = response.data.quotient;
                        break;
                    default: console.log("Invalid operation");
                }
            } catch (error) {
                console.log("Error while calculation api: ", error);
                if (error.response && error.response.status === 403) {
                    this.setErrorMessage("Token is not valid");
                    this.onLogout();
                    this.$router.replace('/login');
                    this.setErrorMessage("");
                } else if (error.response && error.response.data && error.response.data.message) {
                    this.setErrorMessage(error.response.data.message);
                } else {
                    this.setErrorMessage('An unexpected error occurred');
                }
            }
        }
    }
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
    margin-bottom: 2rem;
    margin-top: 3rem;
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

.calc-error-message {
    color: red;
    position: absolute;
    top: 11rem;
    font-size: 12px;
}

.result {
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid #eee;
}
</style>