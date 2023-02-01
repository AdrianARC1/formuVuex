<template>
  <section id="seccion" class="h-[90vh] flex-col justify-center">
    <div class="flex-col mx-8 pt-6" id="div-prin">
        <div class="" id="input1">
            <label for="">Nombre</label>
            <input class="p-2 rounded-lg w-72 border-white" type="text" placeholder="Nombre" v-model="$store.state.nombre">
        </div>
        <div id="input1" class="mt-10">
            <label for="">Edad</label>
            <input class="p-2 rounded-lg w-72 border-white" type="text" placeholder="Edad" v-model="$store.state.edad">
        </div>
    <button @click="addPerson" class="mt-5 bg-blue-600 p-2 rounded-lg">Enviar</button>
    </div>
    <div class="flex justify-center items-center">
        <img class="absolute bottom-0 h-80" src="../assets/images/Group.png" alt="">
    </div>
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


#seccion
    background: rgb(44,151,174)
    background: linear-gradient(90deg, rgba(44,151,174,1) 0%, rgba(41,194,148,1) 100%)
    #input1
        display: flex
        flex-direction: column

</style>