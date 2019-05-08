class Dado
{
    lanzar(){
        return Math.floor(Math.random() * (10 - 1)) + 1
    }
}

class Pista{
    constructor(){
        // this.casillas = []
        // for(let i = 0; i <= 100; i++){
        //     this.casillas[i] = i
        // }
        this.corredores = [
            new Corredor("Roberto"),
            new Corredor("Carlos")
        ]
        this.dado = new Dado()
    }

    jugar()
    {
        // if(this.corredores[0].Posicion && this.corredores[1].Posicion === 100)
        // {
        //     console.log("Empate")
        //     return
        // }
      
        for (const corredor of this.corredores) {
            if(this.dado.lanzar() <= 2)
            {
                corredor.avanzar(1)
            }
            else if(this.dado.lanzar() > 2 && this.dado.lanzar() <=4)
            {
                corredor.avanzar(-1)
            }
            else if(this.dado.lanzar() > 4 && this.dado.lanzar() <= 8)
            {
                corredor.avanzar(2)
            }
            else
            corredor.avanzar(3)
            console.log(corredor.nombre + " Esta en la posicion: " + corredor.Posicion)
        }
            
        
        // if(this.dado.lanzar() <= 2)
        //     {
        //         this.corredores[1].avanzar(1)
        //     }
        //     else if(this.dado.lanzar() > 2 && this.dado.lanzar() <=4)
        //     {
        //         this.corredores[1].avanzar(-1)
        //     }
        //     else if(this.dado.lanzar() > 4 && this.dado.lanzar() <= 8)
        //     {
        //         this.corredores[1].avanzar(2)
        //     }
        //     else
        //     this.corredores[1].avanzar(3)
        
        // console.log(this.corredores[0].nombre + "Esta en la posicion" + this.corredores[0].Posicion)
        // console.log(this.corredores[1].nombre + "Esta en la posicion" + this.corredores[1].Posicion)
        
    }
}

class Corredor{
    constructor(nombre){
        this.nombre = nombre
        this.posicion = 0
    }

    set Nombre(nom){
        this.nombre = nom
    }

    get Nombre(){
        return this.nombre
    }

    set Posicion(x){
        this.posicion = x
    }
    
    get Posicion(){
        return this.posicion
    }

    avanzar(casillas)
    {
        if(this.posicion + casillas > 100){

            // let avanzar = 100 - this.posicion
            // let atras = casillas - avanzar
            this.posicion = 100// - atras
        }
        else{
            this.posicion += casillas
        }
        // let numero = new Dado().lanzar()
        // if(numero <= 2)
        // {
        //     this.posicion += casillas
        // }
        // else if(numero > 2 && numero <= 4)
        // {
        //     this.posicion -= casillas
        // }
        // else if(numero > 4 && numero <= 8){
        //     this.posicion = this.posicion + casillas +1
        // }
             
    }
}
let pista = new Pista()
setInterval(() => {
    pista.jugar()
    console.log('\n')
}, 1000);