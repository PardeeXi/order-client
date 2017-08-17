export function setState(state) {
    return {
      type: 'SET_STATE',
      state
    };
}
  
export function order(entry) {
    return {
      type: 'ORDER',
      entry
    };
}

export function deleteEntry(entry) {
    return {
      type: 'DELETE',
      entry
    };
}

export function clearOrder(entry) {
    return {
      type: 'CLEAR',
      entry
    };
}
