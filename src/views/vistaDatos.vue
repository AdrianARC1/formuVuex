<template>
    <div class="h-[90vh]" id="div-prin">
      <h1 v-if="$store.state.datos_login.length==0" class="flex justify-center">No hay datos que mostrar</h1>
        <nav class="flex justify-evenly">
            <span class="p-2"><input type="checkbox" v-model="$store.state.mayores">Mayores</span>
              <p>{{ $store.state.mayores }}</p>
            <span class="p-2"><input type="checkbox" v-model="$store.state.menores">Menores</span>
              <p>{{ $store.state.menores }}</p>
        </nav>

      <div v-if="$store.state.mayores && $store.getters.persMayores" class="w-full flex justify-center" id="tabla">
        <table v-if="$store.state.datos_login.length>0" class="border-solid mt-10 text-center">
          <tr class="border-solid border">
            <th class="border-solid border">Nombre</th>
            <th class="border-solid border">Edad</th>
          </tr>
          <tr class="border-solid border" v-for="dato in $store.state.datos_login" :key="dato">
            <td class="border-solid border p-0.5">{{dato.nombre}}</td>
            <td class="border-solid border p-0.5">{{dato.edad}}</td>
          </tr>
        </table>
      </div>
      <div v-if="$store.state.menores && $store.getters.persMenores" class="w-full flex justify-center" id="tabla">
        <table v-if="$store.state.datos_login.length>0" class="border-solid mt-10 text-center">
          <tr class="border-solid border">
            <th class="border-solid border">Nombre</th>
            <th class="border-solid border">Edad</th>
          </tr>
          <tr class="border-solid border" v-for="dato in $store.state.datos_login" :key="dato">
            <td class="border-solid border p-0.5">{{dato.nombre}}</td>
            <td class="border-solid border p-0.5">{{dato.edad}}</td>
          </tr>
        </table>
      </div>
      <div v-if="$store.state.mayores && $store.state.menores || $store.state.mayores == false && $store.state.menores == false" class="w-full flex justify-center" id="tabla">
        <table v-if="$store.state.datos_login.length>0" class="border-solid mt-10 text-center">
          <tr class="border-solid border">
            <th class="border-solid border">Nombre</th>
            <th class="border-solid border">Edad</th>
          </tr>
          <tr class="border-solid border" v-for="dato in $store.state.datos_login" :key="dato">
            <td class="border-solid border p-0.5">{{dato.nombre}}</td>
            <td class="border-solid border p-0.5">{{dato.edad}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="flex justify-center relative">
        <img class="absolute bottom-0 h-80" src="../assets/images/Bear_market.png" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
#div-prin
  background: rgb(44,151,174)
  background: linear-gradient(90deg, rgba(44,151,174,1) 0%, rgba(41,194,148,1) 100%)

#tabla
  overflow: scroll
  overflow-x: hidden
  height: 250px
  tr
    th,td
      width: 100px
      padding: 10px
      text-align: center
    td
      background: #e5e5e5
  &::-webkit-scrollbar-thumb
    background: #123456
    border-radius: 10px
  &::-webkit-scrollbar
    width: 5px
    border-radius: 10px
</style>