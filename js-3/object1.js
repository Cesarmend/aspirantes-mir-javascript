let vladimir = {
    nombre: "Vladimir Putin",
    edad: 70,
    activo: true,
    hobbies: ["war","desctruction","nuclear weapons"],
    saluda: function(){
        return "Hola, me llamo " + this.nombre}
}

console.log(vladimir.edad)

vladimir.estatura= 1.8;
delete vladimir.activo;

for (let key in vladimir){

    console.log(key + ": " + vladimir[key])
}

console.log(vladimir.saluda());

