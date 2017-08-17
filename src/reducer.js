import {Map, List} from 'immutable';

//set the original state
function setState(state, newState) {
    return state.merge(newState);
}

//order one dish
function order(state, entry) {
    var price = findprice(entry);
    var total = state.get('total') + price;
    const newstate = state.set('total', total)
    const list1 = newstate.get('ordered').push(entry);
    return newstate.set('ordered', list1);
}

//find the price of the dish
function findprice(entry) {
    var arr = entry.split(" ");
    var price = Number(arr[arr.length-1]);
    return price;
}

//delete one dish
function deleteEntry(state, entry) {
    const list1 = state.get('ordered');
    const index = list1.indexOf(entry);
    const list2 = list1.delete(index);
    var price = findprice(entry)
    var total = state.get('total') - price;
    const newstate = state.set('total', total);
    return newstate.set('ordered', list2);
}

// clear all order
function clearOrder(state, newState) {
    const newstate = state.set('total', 0);
    const newstate2 = newstate.set('ordered', List());
    return newstate2;
}
  
export default function(state = Map(), action) {
    switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'ORDER':
      return order(state, action.entry);
    case 'DELETE':
      return deleteEntry(state, action.entry);
    case 'CLEAR':
      return clearOrder(state, action.state);
    return state;
    }
}