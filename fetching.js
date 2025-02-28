fetch("people.json")  
        .then(response=>response.json())
        .then(values=>values.forEach(value=>console.log(value.age)))
        .catch(error=>console.log("THIS IS THE ERROR BITCH",error))