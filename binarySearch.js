exports.search = (list, item) => {    
    let sortedList = [...list].sort()
    let low = 0
    let high = sortedList.length

    while(low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = sortedList[mid]
        if(guess === item) {
            return mid
        } 
        if(guess > item) {
            high = mid -1            
        } else {
            low = mid + 1
        }
    }

    return null
}