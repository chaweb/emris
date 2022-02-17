<template lang="pug">
div
    .res
        a.insta(href="https://www.instagram.com/emrislemagicien/" target="_blank")
            img(src="instaPP.jpg")
            .title instagram
            .subtitle @emrislemagicien
        a.mail(href="mailto:emriscaron@gmail.com")
            .title mail pro
            .subtitle emriscaron@gmail.com
</template>

<style lang="sass" scoped>

.res
    display: flex
    gap:10px
    flex-wrap: wrap

a
    text-decoration-line: none
    cursor: pointer
    user-select: none
    color: black !important
    border-radius: 30px 
    display: flex
    gap:20px
    padding: 10px
    flex-wrap: wrap
    background-color: #E7E7E7
    align-items: center
    transition: 0.5s
    box-shadow: 0px 0px 15px white
    width: 500px
    &.insta    
        height: 250px !important        
        &> img
            border-radius: 50%
            width: 100px
            height: 100px
    &.mail
        flex-direction: column
        align-items: flex-start
        height: 160px


</style>



<script>
export default {
    setup() {
        
    },
}
</script>