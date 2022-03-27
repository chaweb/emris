<template lang="pug">
div
    .subtitle Mes travaux !
    #project
        a.content(href="https://drive.google.com/drive/folders/1VRFouVDus7-Nduce0taKASA48JzbryUc" target="_blank")
            center.text Dessins academiques
        a.content(href="https://drive.google.com/drive/folders/1kh31KCmW96h6rLupyKe3A4uGadWDhbkC" target="_blank")
            center.text Dessins personnels
        a.content(href="https://drive.google.com/drive/folders/1WTgfRGAjQ0ZeNoC2bg_TUhi_JfjHMmyK" target="_blank")
            center.text Autres travaux

    
    
</template>

<script>
export default {
    data () {
        return {
        }
    },
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
        flex-wrap: wrap
        gap: 10px
        padding: calc(5vh + 45px) calc(5vw + 25px)
    @media screen and (min-width: $tablet)
    & > a
        text-decoration-line: none
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