
export class Animais {
    nome_Animais: string;
    idade_Animais: number;
    possui_Som: boolean;
    consegue_Correr: boolean;
    sobre_Arvore: boolean;


    constructor(nome_Animais: string, idade_Animais: number, possui_Som: boolean, consegue_Correr: boolean, sobre_Arvore: boolean) {
        this.nome_Animais = nome_Animais;
        this.idade_Animais = idade_Animais;
        this.possui_Som = possui_Som;
        this.consegue_Correr = consegue_Correr;
        this.sobre_Arvore = sobre_Arvore;
    }

    nomedoAnimal() {
        console.log (`O nome do animal é...: ${this.nome_Animais}`)
        console.log(`A idade do animal é...: ${this.idade_Animais}`);
        console.log(`Ele emite som...: ${this.possui_Som}`)
        console.log(`Ele corre...: ${this.consegue_Correr}`);
        console.log(`Ele sobe em arvore...: ${this.sobre_Arvore}`)
    }

}

