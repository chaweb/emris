<!--------------- web --------------->

<template lang="pug">

div
  #container
    footer#nav
      a(v-for="item in nav_radio" key="name" :href="`#${item.name}`") {{item.name}}
    .block(v-for="item in nav_radio" key="name" :id="item.name")
      div(:id="`bloc${item.name}`")
        component(:is="item.name").interne
  
  
    #FondDark(v-if="projects.acad.state || projects.perso.state || projects.other.state" v-on:click="FALSE()")
      component(v-for="value in projects" :is="`projects-${value.name}`" key="" v-if="value.state" :id="value.name" class="projects")
      
</template>

<!--------------- script --------------->

<script>
export default {
  methods: {
  },
  watch: {
  },
  data () {
    return {
      nav_radio: [
        {name:"name"},
        {name:"project"},
      ]
    }
    
  },
  computed: {
        projects () {
            return {
              acad : {name:"acad", 
                      state: this.$store.state.main.acad},
              perso : {name:"perso", 
                      state: this.$store.state.main.perso},
              other : {name:"other", 
                      state: this.$store.state.main.other},
            }
        }
    },
  methods: {
    FALSE(){
      this.$store.commit(`main/falsemain`)
    }
  }
}
</script>

<!--------------- style --------------->

<style lang="sass">

#FondDark
    z-index: 4
    position: fixed 
    overflow: hidden
    height: 100vh
    width: 100vw
    left: 0
    top: 0
    background-color: #00000050

#nav
    -webkit-backface-visibility: hidden
    position: fixed
    z-index: 2
    right:40px
    top: 50px
    display: flex
    flex-direction: column
    background-color: #DDD
    border-radius: 10px
    padding:10px
    box-shadow: 0px 0px 15px #444
    & > a
      display: flex
      align-items: center
      margin: 5px
      padding: 15px
      text-decoration: none
      color: black
      @media screen and (min-width: $portable)
        &:after
          z-index: -1 
          opacity: 0
          width: 0%
          height: 2px
          content: ''
          background: $black
          transition: all 0.2s
          display: block
          position: absolute
          right: 0px
          margin:30px
          margin-top: 50%
        &:hover::after
          transition: 0.7s
          opacity: 1
          width: calc(100% - 55px)
        &:before
          z-index: -1 
          width: calc(100% - 55px)
          height: 0
          content: ''
          background: lighten($black , 10%)
          transition: all 0.2s
          display: block
          position: absolute
          right: 0px
          margin:30px
          opacity: 0.3
        &:hover::before
          transition: 0.4s
          height: 20px
          width: calc(100% - 55px)

    
    @media screen and (max-width: $portable)
      
      flex-direction: row
      top: auto
      bottom: 0
      left: 20px 
      right: 20px
      border-bottom-right-radius: 0
      border-bottom-left-radius: 0
      & > a
        margin: 10px


#blocname

    background-color: $black
    height: 30vh
    width: 20vw
    padding: 40vh 10vw
    @media screen and (max-width: $tablet)
        width: calc(80vw - 180px)
    @media screen and (max-width: $portable) 
        width: 80vw
    @media screen and (min-height: $tablet-h) 
      margin-top: 2vh
      padding: 30vh 10vw
      box-shadow: 10px 0 20px #22222299
       


#blocproject
    background-color: $black
    height: 40vh
    padding: 5vh 0
    transform: translateY(50%)
    @media screen and (max-width: $tablet)
      padding: 10vh 0
      height: calc(80vh)
      transform: none

    @media screen and (max-height: $portable-h)
      transform: translateY(0)
      height: calc(90vw - 100px)

    @media screen and (max-width: $portable)
      transform: translateY(0)
      height: 90vh


.block
    width: 100vw
    height: 100vh

.interne
    color:#fff
    @media screen and (max-witdh: $portable)
      padding-bottom: 50px !important
      height: calc(100% - 50px)
    height: 100%

#container 
    height: 100vh
    display: flex
    overflow-x: hidden
    flex: none
    flex-flow: column nowrap
    overflow-y: scroll
    scroll-snap-type: y mandatory
    scroll-behavior: smooth
    & > div
      scroll-snap-align: center
      flex: none

.projects
    padding: 50px
</style>