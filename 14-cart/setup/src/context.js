import React, {useReducer,useContext,useEffect} from 'react'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext();

const initialState = {
  loading: false,
  amount: 0, 
  total: 0,
  cart: []
}

const AppProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState)

  const fetchData = async () => {
    dispatch({type:'LOADING'})
    const response = await fetch(url)
    const data = await response.json()
    dispatch({type:'DISPLAY_DATA', payload: data})
  }

  useEffect(() => {
    fetchData();
  },[])

  useEffect(() => {
    dispatch({type:'GET_TOTALS'})
  },[state.cart])

  const toggleAmount = (id,type) => {
    dispatch({type: 'TOGGLE_AMOUNT',payload:{id,type}})
  }

  const removeItem = (id) => {
    dispatch({type: 'REMOVE_ITEM',payload: id})
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  return <AppContext.Provider
  value={{
    ...state,
    clearCart,
    removeItem,
    toggleAmount
  }}>
      {children}
  </AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export default useGlobalContext
export {AppProvider,AppContext}