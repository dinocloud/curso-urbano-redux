import store from '../store'

export const increment = () => {
    store.dispatch({ type: 'INCREMENT' })
}

export const decrement = () => {
    store.dispatch({ type: 'DECREMENT' })
}