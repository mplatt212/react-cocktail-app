const reducer = (state,action) => {
    if(action.type === 'LOADING') {
        return {...state,loading: true}
    }

    if(action.type === 'DISPLAY_DATA') {
        return {...state,cart: action.payload,loading:false}
    }

    if(action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload.id) {
                if(action.payload.type === 'inc') {
                    return {...cartItem,amount: cartItem.amount + 1}
                }
                if(action.payload.type === 'dec') {
                    return {...cartItem,amount: cartItem.amount - 1}
                }
             }
             return cartItem
        }).filter((cartItem) => {
            return cartItem.amount > 0
        })

        return {...state,cart:tempCart}
    }

    if(action.type === 'REMOVE_ITEM') {
        let tempCart = state.cart.filter((cartItem) => {
            return action.payload !== cartItem.id
        })

        return {...state,cart:tempCart}
    }

    if(action.type === 'CLEAR_CART') {
        return {...state,cart: []}
    }

    if(action.type === 'GET_TOTALS') {
        let {total,amount} = state.cart.reduce((acc,curr) => {
            const {price,amount} = curr
            const itemPrice = price * amount

            acc.total += itemPrice
            acc.amount += amount

            return acc
        },{
            amount: 0,
            total: 0
        })
        total = parseFloat(total.toFixed(2))
        return {...state,amount,total}
    }
}

export default reducer