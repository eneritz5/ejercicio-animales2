

        class Zoo{
            constructor(){
                this.animales = [];
            }
            aynadirAnimal (animal) {
                this.animales.push(animal);

            }
        }
        class Animales {
            constructor(animal, id) {
                this.animal = animal;
                this.hambre = 0;
                this.sueyno = 0;
                this.aburrimiento = 0;
                this.suciedad = 0;
                this.id = id;
               

            }

            comer() { //no se puede llamar como una de las propiedades dentro del metodo, en este caso hambre.
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

            }



        }