const fs = require("fs");

fs.readFile("people.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const jsonData = JSON.parse(data);
    console.log(jsonData);
});
