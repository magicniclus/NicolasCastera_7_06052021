function updateMatchingList(refList, filterList){
    const newList = [];
    for (const id of refList){
        if ( filterList.indexOf(id) !==-1) newList.push(id)
    }
    return newList;
}


const tableau1 = [
    1,2,3,4,5
]


const tableau2 = [
    7,3,8,5,0,44
]

console.log(updateMatchingList(tableau1, tableau2))