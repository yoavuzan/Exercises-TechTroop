function safeJsonParse(myString){
    try{
        const jsonfile = JSON.parse(myString);
        return jsonfile;
    }catch(err){
        console.log("Invalid JSON format");
    }
}
console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: "John" }

console.log(safeJsonParse('invalid json')); 
// Output: "Invalid JSON format"