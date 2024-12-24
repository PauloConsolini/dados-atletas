class Atleta {

  constructor(nome, idade, peso, altura, notas){

    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;

  }
  calculaCategoria(){

    if (this.idade >= 9 && this.idade <= 11){

      return "Infantil";

    }else if (this.idade >= 12 && this.idade <= 13){

      return "Juvenil";

    }else if (this.idade >= 14 && this.idade <= 15){

      return "Intermediário";
      
    }else if (this.idade >= 16 && this.idade <= 30){

      return "Adulto";

    }else{

      return "Sem categoria";  // Para atletas fora da faixa de 9 a 30 anos
    }
  
  }
  obtemIdadeAtleta(){

    return `A idade do atleta ${this.idade}`;

  }
  obtemPesoAtleta(){

    return `O peso do atleta ${this.peso}`;

  }
  obtemNotasAtleta(){

    return `As notas do atleta são: ${this.notas}`;

  }
    obtemCategoria(){

      return this.calculaCategoria();  // Retorna a categoria do atleta, usando a função calculaCategoria

    }
    obtemIMC(){

      if (this.altura <= 0 || this.peso <= 0) {

      return "Valores de peso ou altura inválidos.";

    }
      let imc = this.peso / (this.altura * this.altura)

      return imc.toFixed(2);  // Retorna o IMC com 2 casas decimais

    }
    obtemMediaValida(){

      if (this.notas.length === 0) {

      return "Não há notas para calcular a média";

    }
       let soma = 0;

       this.notas.forEach(function(nota) {
      
       soma = soma + nota;
    });

    let media = soma / this.notas.length;

    return media.toFixed(2);  // Retorna a média com 2 casas decimais;

    }
}
