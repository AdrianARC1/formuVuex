<template>
  <section id="seccion">
    <label for="">Nombre</label>
    <input type="text" placeholder="nombre" v-model="$store.state.nombre">
    <h1 class=""></h1>
    <label for="">Edad</label>
    <input type="text" placeholder="nombre" v-model="$store.state.edad">
    <button @click="addPerson">Enviar</button>
    </section>
</template>

<script>
export default {
    name: 'VistaFormu',
    methods:{
        addPerson(){
            this.$store.dispatch('accionAddPerson')
        }
    }
}
</script>

<style lang="sass">
*
    padding: 0
    margin: 0
    box-sizing: border-box

#seccion
    height: 100vh
    background: rgb(44,151,174)
    background: linear-gradient(90deg, rgba(44,151,174,1) 0%, rgba(41,194,148,1) 100%)
</style>