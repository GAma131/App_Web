<template>
    <div>
        <button v-on:click="contador++">Incrementar</button>
        <button v-on:click="contador--">Decrementar</button>
        <p>El contador: {{contador}}</p>
        <p>El resultado: {{result()}}</p>
    </div>
</template>
<script>
export default{
    data(){
        return{
            contador:0
        }
    },
    methods: {
        result(){
            return this.contador > 5 ? 'Es mayor 5': 'mas pequeno que 5';
        }
    }
}
</script>