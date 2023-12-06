//antes de tudo quero explicar aos profissionais da Dio os quais estão lendo esse codigo que o mesmo apresenta algumas coisas a mais do que foi pedido no desafio, 
//contudo acredito que ele ainda contem o que foi pedido. Obrigado pela atenção.


//criando variaveis
let heroi1 = "jack";
let xpHero=100;
let ranks =["ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"];
let rank;

//construindo o sistema de repetição para que o xp aumente
while(xpHero<12000){
//if e elses para os ranks
if (xpHero<1000){
    rank=ranks[0]
}else 
    if(xpHero>=1000 && xpHero<=2000){
        rank=ranks[1];
    }else 
        if(xpHero>2000 && xpHero<=5000){
            rank=ranks[2];
        }else 
            if(xpHero>5000 && xpHero<=7000){
                rank=ranks[3];
            }else
                if(xpHero>7000 && xpHero<=8000){
                    rank=ranks[4];
                }else 
                    if(xpHero>8000 && xpHero<=9000){
                        rank=ranks[5];
                    }else
                        if(xpHero>9000 && xpHero<=10000){
                            rank=ranks[6];
                        }else 
                            if(xpHero>10000){
                                rank=ranks[7];
                            }

console.log("parabéns você ganhou mais "+ xpHero+ " de xp!");
console.log("Agora o seu heroi de nome "+heroi1+ " apresenta " +xpHero+" de xp logo ele está no nivel "+ rank+"!");
console.log("\n");
//metodo de repetição usado
 xpHero+=1000
}

