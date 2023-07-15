import { ADD_TODO, TOGGLE_TODO,DELETE_TODO,ORDER_TODO } from "../actions/types/todo";

// 1.

export const filters = {
   ALL: "ALL",
   COMPLETED: "COMPLETED",
   NOT_COMPLETED: "NOT_COMPLETED",
 };
const initialState = {
  allIds: [],
  byIds: {},
  typeFilter: filters.ALL
};

// 2.
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case ADD_TODO: {
      // 4.
      const { id, content } = action.payload;
      
      // 5.
      return {
        ...state,

        allIds: [...state.allIds, id],

        byIds: {
          ...state.byIds,

          [id]: {
            content,
            completed: false,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;

      const targetTodo = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };

    }
    case DELETE_TODO:{
       const { id } = action.payload;

       const id_del = {...state.byIds}
    
        for (const key in id_del) {
            if (key === String(id)) {
                delete id_del[id];
            }
        }
    
        const filteredIds = state.allIds.filter((item) =>  item !== id )
        
        
        return {
            ...state,
            allIds: filteredIds,
            ...state.byIds
        };
   }
   case ORDER_TODO: {
    return{
      ...state,
      ...state.allIds,
      ...state.byIds,
      typeFilter:action.payload
    }
   }
   

    default:
      return state;
  }
}
