<template>
    <div class="flex justify-around text-white h-[10vh]">
      <router-link to="/" class="mt-10 text-lg">Formulario</router-link>
      <router-link to="/datos" class="mt-10 text-lg">Datos</router-link>
    </div>

  <router-view/>
</template>

<script>

export default{
  mounted(){
    let data= localStorage.getItem('Personas')
    if(data!=null){
      this.$store.state.datos_login = JSON.parse(data)
    }else{
      console.log("El local storage está vacio")
    }
  },
}
</script>


<style lang="sass">
*
    padding: 0
    margin: 0
    box-sizing: border-box
    font-family: 'Nunito', sans-serif

div
  background: rgb(44,151,174)
  background: linear-gradient(90deg, rgba(44,151,174,1) 0%, rgba(41,194,148,1) 100%)
  
</style>
