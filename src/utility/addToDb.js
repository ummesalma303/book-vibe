
const getBook=()=>{
    const storeListStr = localStorage.getItem('read-list')
    if (storeListStr) {
        const storeList= JSON.parse(storeListStr)
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

export {addToStoredReadList,getBook}