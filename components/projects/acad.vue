<template lang="pug">
div
    .acad
        .title Mes dessins academiques

        .projects#image
            div(v-for="item in images"  key="name")
                img(width="250px" :src="`${url}${item.url}`")
                div.subtitle {{item.name}}
                div.subtitle.description
</template>

<style lang="sass" scoped>

.acad
    z-index:8
    background-color: #EEE
    border: solid $black 20px
    padding: 10px
    overflow: hidden
    height: calc(100vh - 190px)
    width: calc(100vw - 140px)

.projects#image
    height: calc(100vh - 400px) //debug à faire !
    border: solid #000 2px
    display: flex
    gap: 20px
    justify-content: space-between
    flex-wrap: wrap
    overflow-y: scroll
    flex: none
    padding: 20px 0 !important
    justify-content: center
    & > div
        z-index: 10
        transform: scale(100%)
        & > img:hover
            z-index: 11
            transition: 200ms
            transform: scale(200%)

div.subtitle
    text-align: center
    
</style>

<script>
export default {
    data () {
    return {
        images : this.$store.state.main.image.acad,
        url : this.$store.state.main.image.url.acad,
        }
    
  },
}
</script>