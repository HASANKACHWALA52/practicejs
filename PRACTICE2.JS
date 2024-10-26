// FOR IN LOOP 

let student = {
    name: "HASAN KACHWALA",
    age: 20,
    cgpa: 7.5,
    ispass: true,
};

for (let key in student) {
    console.log("key=", key, "value=", student [key] );
}