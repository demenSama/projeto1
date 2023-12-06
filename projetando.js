//criando projeto usando como base para tudo o if e else. 
let heroi1 = "jack";
let xpHero=0;
let ranks =["ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]
let rank;
//if e elses para os ranks
if (xpHero<1000){
    rank=ranks[0]
}else 
    if(xpHero>=1000 && xpHero<=2000){
        rank=ranks[1]
        
 //construindo o sistema de repetição para que o xp aumente
while(xpHero<3000){
    console.log(heroi1+ "apresenta " +xpHero+" logo ele está no rank "+ rank);
    xpHero+=1000
}   }





