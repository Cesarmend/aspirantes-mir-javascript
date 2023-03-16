let persona = {
    nombre: "Stephen King",
    edad: 86,
    ciduad: "Maine",
    prefesion: "Writer"
};

console.log(persona);

function presentacion(persona){
    
    return "\nHi, my name is " + persona.nombre + ", I am "
    + persona.edad + " years old and I live in "+ persona.ciduad + "."
}


let mensaje = presentacion(persona) 
console.log(mensaje)

persona.hobbies = ["Reading", "Writting", "Music", "Painting"]

console.log("\nList of hobbies:\n")

for (let i = 0; i < persona.hobbies.length; i++){ 
    console.log( (i+1) +". "+ persona.hobbies[i])

}







// console.log(presentacion(persona));




