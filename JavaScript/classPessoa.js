class Pessoa{

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log("Ola " + this.nome);
     }

     get nomeCompleto(){
        console.log("Ola "+ this.nome + " " + this.sobrenome)
     }
}

p1 = new Pessoa("Fabio", "Silva");
p1.falar();
p1.nomeCompleto;