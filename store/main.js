export const state = () => ({
    acad: false,
    perso: false,
    other: false,

    image: {url:{
      perso:"Dessins%20personnelles/",
      acad:"Dessins%20académiques/",
      autre:"Autres/"
    },
      perso: [
        {
          name:"Emris",
          url:".Emris.png",
          desc:"Personnage Emris"  
        }],
      acad: [{name:"acad 1",
              url:"acad1.jpg",
              desc:"des choses bien"  },
      {name:"acad 2",
              url:"acad2.jpg",
              desc:"des choses bien"  },
      {name:"acad 3",
              url:"acad3.jpg",
              desc:"des choses bien"  },
      {name:"acad 4",
              url:"acad4.jpg",
              desc:"des choses bien"  },],
      Autres: []
    }
  })
  
export const mutations = {
  invertacad(state){
    state.acad = !state.acad
  },invertperso(state){
    state.perso = !state.perso
  },invertother(state){
    state.other = !state.other
  },falsemain(state){
    state.acad= false,
    state.perso= false,
    state.other= false
  }
  
}