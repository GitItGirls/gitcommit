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

export function currentUserCandace(index) {
  return {
    type: 'CANDACE',
    index
  }
}

export function currentUserUser(index) {
  return {
    type: 'USER',
    index
  }
}




