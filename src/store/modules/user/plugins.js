import { STORAGE_KEY_ACCOUNT } from './mutations'

const localStoragePlugin = store => {
  store.subscribe((mutation, { account }) => {
  	console.log('---call-----')
    window.localStorage.setItem(STORAGE_KEY_ACCOUNT, JSON.stringify(account))
    console.log(account)
  })
}

export default localStoragePlugin