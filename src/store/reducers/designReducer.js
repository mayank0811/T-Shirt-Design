import { ADD_item } from './actiontypes';
import { DELETE_item } from './actiontypes';
import { subtract } from './actiontypes';
import { add } from './actiontypes';

const initialState = {
    designs: [
        {id: 1, name: 'Black T-Shirt', tshirtcolor: 'black'},
        {id: 2, name: 'Blue T-Shirt', tshirtcolor: 'blue'},
        {id: 3, name: 'White T-Shirt', tshirtcolor: 'white'},
        {id: 4, name: 'Red T-Shirt', tshirtcolor: 'red'},
        {id: 5, name: 'Grey T-Shirt', tshirtcolor: 'grey'}
    ],
    newdesigns: []
}

const designReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_item:
            return{
                ...state,
               newdesigns: state.newdesigns.concat({id: state.newdesigns.length ,name: action.tshirt.tshirtcolor ,tshirtcolor: action.tshirt.tshirtcolor, price: action.tshirt.price , count: 1})
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
        default:
            return state;
    }   
}

export default designReducer;