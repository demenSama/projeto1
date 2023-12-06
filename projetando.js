//criando projeto usando como base para tudo o if e else. 
let heroi1 = "jack";
let xpHero=0;
let ranks =["ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]
let rank;
//construindo o sistema de repetição para que o xp aumente
while(xpHero<12000){
    console.log(heroi1+ "apresenta " +xpHero+" logo ele está no rank "+ rank);
    xpHero+=1000
  

//if e elses para os ranks
if (xpHero<1000){
    rank=ranks[0]
}else 
    if(xpHero>=1000 && xpHero<=2000){
        rank=ranks[1]
    }else 
        if(xpHero>2000 && xpHero<=5000){
            rank=ranks[2]
        }else 
            if(xpHero>5000 && xpHero<=7000){
                rank=ranks[3]
            }else
                if(xpHero>7000 && xpHero<=8000){
                    rank=ranks[4]
                }else 
                    if(xpHero>8000 && xpHero<=9000){
                        rank=ranks[5]
                    }else
                        if(xpHero>9000 && xpHero<=10000){
                            rank=ranks[6]
                        }else 
                            if(xpHero>10000){
                                rank=ranks[7];
                            }

}

