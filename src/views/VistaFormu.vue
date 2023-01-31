<template>
  <section>
    <label for="">Nombre</label>
    <input type="text" placeholder="nombre" v-model="$store.state.nombre">

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

</style>