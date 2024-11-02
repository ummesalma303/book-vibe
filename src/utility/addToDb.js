
const getBook=()=>{
    const storeListStr = localStorage.getItem('read-list')
    if (storeListStr) {
        const storeList=JSON.parse(storeListStr)
        return storeList
    } else {
        return []
    }
}

const addToStoredReadList = (id) => {
    const storedList = getBook();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the read list')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}
// const remainingList = readList.filter(idx => idx !== id)
        // setReadList(remainingList)
        // removeReadList(id)

const removeReadList = (id) => {
    const removeRead = getBook();
    const remaining = removeRead.filter(idx => idx !== id);
    console.log(id)
    console.log(remaining,removeRead)
    // localStorage.setItem('read-list',remaining)
    localStorage.setItem('read-list',JSON.stringify(remaining))
}

// wish list
const getStoredWishList = () => {
    const storeWishList = localStorage.getItem('wish-list');
    if (storeWishList) {
        const storedWishListParse = JSON.parse(storeWishList);
        return storedWishListParse
    } else {
        return []
    }
}

const setStoredWishList = (id) => {
    const storeWishList = getStoredWishList()
   if (storeWishList.includes(id)) {
    alert(id, 'already exists in the read list')
   } else {
    storeWishList.push(id);
    const storeWishListStr = JSON.stringify(storeWishList);
    localStorage.setItem('wish-list',storeWishListStr)
   }
}
export {addToStoredReadList,getBook,setStoredWishList,getStoredWishList,removeReadList}