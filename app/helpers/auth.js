export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      name: 'Michael Friedman',
      avatar: 'https://avatars2.githubusercontent.com/u/17555926?v=3&s=400',
      uid: 'michaelfriedman'
    }), 2000)
  })
}

export function checkIfAuthed (store) {
  return store.getState().isAuthed
}

export function logout () {
  console.log(`Logged Out`)
}
