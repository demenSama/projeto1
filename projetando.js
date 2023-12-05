//criando projeto usando como base para tudo o if e else. 
let heroi1 = "jack";
let xpHero = 15000;
//variaveis para o projeto
if (xpHero < 1000){
    console.log("ferro");
} else
    if(xpHero > 1000 && xpHero <=2000){
        console.log("bronze");
    }else 
        if(xpHero>2000 && xpHero <= 5000){
            console.log("prata");
        }else 
            if(xpHero>6000 && xpHero<+7000){
                console.log("ouro");
            }else
                if(xpHero>7000 && xpHero<=8000){
                    console.log("Platina");
                }else 
                    if(xpHero>8000 && xpHero<=9000){
                        console.log("ascendente");
                    }else
                        if(xpHero>9000 && xpHero<=10000){
                            console.log("imortal");
                        }else 
                            if(xpHero>10000){
                                console.log("Radiante");
                            }