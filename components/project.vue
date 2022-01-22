<template lang="pug">
div
    .subtitle Mes travaux !
    #project
        .content(v-on:click="inv('acad')" v-bind:class="{true : acad}")
            center.text Dessins academiques
        .content(v-on:click="inv('perso')" v-bind:class="{true : perso}")
            center.text Dessins personnelles
        .content(v-on:click="inv('other')" v-bind:class="{true : other}")
            center.text Autres travaux

    
    
</template>

<script>
export default {
    data () {
        return {
        }
    },
    computed: {
        acad () {
            return this.$store.state.main.acad
        },
        perso () {
            return this.$store.state.main.perso
        },
        other () {
            return this.$store.state.main.other
        },
    },
    methods:{
        inv(e){
            this.$store.commit(`main/invert${e}`)
        }
    }
}
</script>



<style lang="sass" scoped>


div.subtitle
    margin: 3vh 0 0 5vw

#project
    padding: 25px calc(5vw + 25px)
    height: 80%
    overflow: hidden
    display: flex
    justify-content: space-between
    flex-wrap: nowrap
    flex-direction: row 
    align-items: center
    @media screen and (max-width: $tablet) 
        flex-direction: column 
        padding: calc(5vh + 45px) calc(5vw + 25px)
    @media screen and (min-width: $tablet)
    & > div
        cursor: pointer
        user-select: none
        color: black !important
        border-radius: 30px 
        display: flex
        width: 150px
        height: 150px !important
        background-color: #E7E7E7
        align-items: center
        transition: 0.5s
        box-shadow: 0px 0px 15px white,
        & > center
            width: 100%
            color: black
        &:hover, &.true
            background: #050505
            transition: 200ms
            @media screen and (min-width: $portable)
                box-shadow: 0px 0px 40px white  
                transform: scale(110%)
            & > center
                color: white


</style>

<style lang="sass">
</style>