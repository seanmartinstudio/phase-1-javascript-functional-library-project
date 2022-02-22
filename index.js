function myEach(collection, alert) {
  for(let item in collection) {
      alert(collection[item])
  }
  return collection
}

function myMap(collection, callback) {
    let newArr = []
    for(let item in collection) {
        let value = callback(collection[item])
        newArr.push(value)
    }
return newArr
}

// function myReduce(collection, callback, acc) {
//     let total = 0
//     for(let item in collection) {
//         total = callback(acc, collection[item])
//         console.log(total)
        
    
// }
// // return total
// }

function myFind(collection, predicate) {
    collection.forEach(item => {
        for(let key in item) {
            console.log("Key=>", key, "Item=>", item)
        }
    })
}
    

 
