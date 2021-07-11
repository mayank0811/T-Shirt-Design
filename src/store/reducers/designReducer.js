import { ADD_item } from './actiontypes';
import { DELETE_item } from './actiontypes';
import { subtract } from './actiontypes';
import { add } from './actiontypes';
import { VIEW_item } from './actiontypes';

const initialState = {
    designs: {
        id: 1,
        tshirtcolor: 'Black',
        uppertext: "This is UpperText",
        lowertext: "This is LowerText",
        url:'',
        textsize: 38,
        textcolor: 'white',
        price: '14'
    },
    newdesigns: []
}

const designReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_item:
            return{
                ...state,
               newdesigns: state.newdesigns.concat({id: state.newdesigns.length ,name: action.tshirt.tshirtcolor ,tshirtcolor: action.tshirt.tshirtcolor, price: action.tshirt.price , count: 1, uppertext: action.tshirt.uppertext, lowertext: action.tshirt.lowertext, url: action.tshirt.url, textsize: action.tshirt.textsize , textcolor: action.tshirt.textcolor})
            }
        case DELETE_item:
            return{
                ...state,
                newdesigns: state.newdesigns.filter(({id}) => id !== action.tshirt.id)
            }
        case subtract:{
            const index = state.newdesigns.indexOf(action.tshirt);
            const newarray = [...state.newdesigns];
            if(newarray[index].count!==1){
                newarray[index].count= newarray[index].count - 1;
            }
            return{
                ...state,
                newdesigns: newarray
            }
        }  
        case add:{
            const index = state.newdesigns.indexOf(action.tshirt);
            const newarray = [...state.newdesigns];
            newarray[index].count= newarray[index].count + 1
            return{
                ...state,
                newdesigns: newarray
            }
        }
        case VIEW_item:{
            return{
                ...state,
                designs: action.tshirt
            }
        }        
        default:
            return state;
    }   
}

export default designReducer;