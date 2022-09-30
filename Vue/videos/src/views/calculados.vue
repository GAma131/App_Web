<template>
    <div>
        <button v-on:click="contador++">Incrementar</button>
        <button v-on:click="contador--">Decrementar</button>
        <button v-on:click="segundoContador++">incrementar Segundo Contador</button>
        <p>El contador: {{contador}} | {{segundoContador}}</p>
        <p>El resultado: {{result()}} | Llamando a: {{salida}}</p>
    </div>
</template>
<script>
export default{
    data(){
        return{
            contador:0,
            segundoContador: 0
        }
    },
    watch: {
        counter: function(value){
            var vm = this;
            setTimeout(function(){
                vm.contador=0;
            },2000);
        }
    },
    computed: {
        salida: function(){
            console.log('computed: ');
                return this.contador > 5 ? 'Es mayor 5': 'mas pequeno que 5';
        }
    },
    methods: {
        result(){
            return this.contador > 5 ? 'Es mayor 5': 'mas pequeno que 5';
        }
    }
}
</script>