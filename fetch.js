fetch("http://[::]:8000/people.json")
    .then(response => response.json())
    .then(values=>values.forEach(value=>console.log(value.city)))
    .catch(error=>console.error(error));
