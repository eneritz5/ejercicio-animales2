let express = require('express');
let app = express();

app.use(express.static('public'));
app.use(express.urlencoded());

class Zoo{
    constructor(){
        this.animales = [];
    }
    aynadirAnimal (animal) {
        this.animales.push(animal);

    }

    encontrarAnimal(animal){
        for(let i=0; i< this.animales.length;i++){
            if(this.animales.nombre===animal){
                return i;
            }
        } return -1;
    }

    eliminarAnimal()
}
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
       // this.hambre = 0;
       // this.sueyno = 0;
       // this.aburrimiento = 0;
       // this.suciedad = 0;
       // this.id = id;
        this.tipo = tipo;

    }

   /* comer() { //no se puede llamar como una de las propiedades dentro del metodo, en este caso hambre.
        this.hambre = 0;
        this.sueyno += 3;
        this.aburrimiento += 3;
        this.suciedad += 3;
        this.mostrarEstado();
    }
    dormir() {
        this.sueyno = 0;
        this.hambre += 3;
        this.aburrimiento += 3;
        this.suciedad += 3;
        this.mostrarEstado();
    }
    jugar() {
        this.hambre += 3;
        this.sueyno += 3;
        this.aburrimiento = 0;
        this.suciedad += 3;
        this.mostrarEstado();

    }
    limpiar() {
        this.hambre += 3;
        this.sueyno += 3;
        this.aburrimiento += 3;
        this.suciedad = 0;
        this.mostrarEstado();


    }

    mostrarEstado() {
        let estado = document.getElementById('animal' + this.id);
        estado.innerHTML = `El estado de la ${this.animal} es: Hambre: ${this.hambre}, Suciedad: ${this.suciedad}, Aburrimiento: ${this.aburrimiento}, Sueño: ${this.sueyno}`;

    }*/


}

let zoo = new Zoo();
app.post('/formulario',function(req,res){
    let nombreanimal = req.body.nombreanimal;
    let tipo = req.body.tipo;
    let texto='';
        zoo.aynadirAnimal(new Animal(nombreanimal, tipo));
        for(let i=0; i<zoo.animales.length; i++){
            texto += `<p>${zoo.animales[i].nombre}</p> `;
        }
        res.send(texto);
        console.log(zoo.animales);
})

app.delete('/delete',function(req,res){
    
})

app.listen(3000);