function whatIsInAName(collection, source) {
    const value = Object.values(source)
    for(let i=0;i<collection.length;i++){
        if(collection[i].hasOwnProperty("last")){
            console.log(Object.values(collection[i]))
        if(Object.values(collection[i]).includes(value[0])){
            console.log(collection[i])
        }
          }
      
    }
    
   
    
    }
    
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });