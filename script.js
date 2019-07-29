/*************** Setting initial quantities ****************/
let quantities = Array.from(document.querySelectorAll('.qte'))
for (let quantity of quantities){
    quantity.setAttribute('value',1)
}
/*************** Setting initial prices ****************/
var price= [];
var pu=[];
for (let i=1;i<=3;i++){
price[i]=25;
pu[i]=25;
}
let total=price[1]+price[2]+price[3]
document.querySelector('.price-1').innerHTML=price[1]+' dt'
document.querySelector('.price-2').innerHTML=price[2]+' dt'
document.querySelector('.price-3').innerHTML=price[3]+' dt'
/*************** Total price ****************/
document.querySelector('.total').innerHTML=total+' dt'
/*************** Shopping items ****************/

/************ + button *************/
for(let i=1;i<=3;i++){
  document.querySelector(`.item-${i} > .plus-btn`)
.addEventListener("click", function(e) {
    document.querySelector(`.qte-${i}`).setAttribute('value',
    Number(document.querySelector(`.qte-${i}`).getAttribute('value'))+1);
    price[i]=price[i]+pu[i];
    total=total+pu[i];
    document.querySelector(`.price-${i}`).innerHTML=price[i]+' dt';
    document.querySelector('.total').innerHTML=total+' dt';
});
}
/************ - button *************/
for (let i=1;i<=3;i++){
  document.querySelector(`.item-${i} > .minus-btn`)
.addEventListener("click", function(e) {
    if(Number(document.querySelector(`.qte-${i}`).getAttribute('value')) >1){
        document.querySelector(`.qte-${i}`).setAttribute('value',
        Number(document.querySelector(`.qte-${i}`).getAttribute('value'))-1);
        price[i]=price[i]-pu[i];
        total=total-pu[i];
        document.querySelector(`.price-${i}`).innerHTML=price[i]+' dt';
        document.querySelector('.total').innerHTML=total+' dt';
    } else {
        document.querySelector(`.qte-${i}`).setAttribute('value',1);
    }
    
});
}

/*************** Icone close items ****************/
for(let i=1;i<=3;i++){
document.querySelector(`.icon-${i}`)
       .addEventListener("click", function(e) {
        total=total-price[i];
        document.querySelector('.total').innerHTML=total+' dt';
        document.querySelector(`.product-${i}`).remove();
});
}

/*************** Icone Love ****************/
let hearts = Array.from(document.querySelectorAll('.fa-heart'))
for (let heart of hearts){
    heart.addEventListener("click", function(e) {
        heart.style.setProperty('color','red')
});
}