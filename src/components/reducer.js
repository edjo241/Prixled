

export const initialState = {
    fontsize:null,
    color:"",
    fontfamily:"",
    align:'justify',
    hightlight:'',
    fontweight:null
  };
  function reducer(state, action) {
      switch(action.type){
        case 'FONT_SIZE':
          return {...state,fontsize:action.fontsize};
        case 'COLOR':
          return{...state,color:action.color}
        case 'FONT_FAMILY':
          console.log(action.fontfamily);
          return{...state,fontfamily:action.fontfamily}
        case 'ALIGN':           
          return{...state,align:action.align}
        case 'HIGHLIGHT':
          return{...state,hightlight:action.hightlight}
        case 'HEADING':
          console.log(action.heading);
          return{...state,fontsize:action.heading,fontweight:'bold'}
          default :return state;
      }
  }
  export default reducer;