<template lang="pug">
    div Je m'appelle 
        .title Emris Caron
        .text Localisé à Rouen

        img(src="logo/logo_Original.png" v-if="logo")#logo
</template>

<style lang="sass" scoped>

#logo
    height: 50vw
    position: absolute
    bottom: -2px
    right: 9px
    z-index: -1

</style>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    logo () {
        //console.log(process.env  )
        //return process.client || false  ? window.innerWidth > 956 : false
        return true
    }
  },
}
</script>