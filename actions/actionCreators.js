// increment like
export function increment(index) {
  return {
    type: 'COUNTER',
    index
  }
}

export function candaceViewStart(index) {
  return {
    type: 'START',
    index
  }
}

export function candaceViewMatches(index) {
  console.log('made it to action matches');
  return {
    type: 'MATCHES',
    index
  }
}

export function candaceViewSaved(index) {
  return {
    type: 'SAVED',
    index
  }
}


