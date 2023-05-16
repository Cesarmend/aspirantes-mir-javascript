let persona = {
    nombre: "Gustavo Ceratti",
    edad: 55,
    ciduad: "Buenos Aires",
    prefesion: "Musician"
};

console.log(persona);

function presentacion(persona){
    
    return "\nHi, my name is " + persona.nombre + ", I am "
    + persona.edad + " years old and I live in "+ persona.ciduad + "."
}


let mensaje = presentacion(persona) 
console.log(mensaje)

persona.hobbies = ["Playing music", "Composing songs", "Singing", "Performing"]

console.log("\nList of hobbies:\n")

for (let i = 0; i < persona.hobbies.length; i++){ 
    console.log( (i+1) +". "+ persona.hobbies[i])

}



// console.log(presentacion(persona));




