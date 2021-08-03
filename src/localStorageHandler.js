export function addToStorage(key,val){
    localStorage.setItem(key,JSON.stringify(val))

}

export function getFromStorage(key){
    return JSON.parse(localStorage.getItem(key))
}