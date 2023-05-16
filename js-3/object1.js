let Mbappe = {
    nombre: "Kylian Mbappé",
    edad: 24,
    activo: true,
    hobbies: ["futbol","Tennis","video games"],
    saluda: function(){
        return "Hola, me llamo " + this.nombre}
}

console.log(Mbappe.edad)

Mbappe.estatura= 1.8;
delete Mbappe.activo;

for (let key in Mbappe){
    if (key=== 'saluda'){
        continue;
    }

    console.log(key + ": " + Mbappe[key]);
}

console.log(Mbappe.saluda());

