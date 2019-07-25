/*************** Setting initial quantities ****************/
let quantities = Array.from(document.querySelectorAll('.qte'))
for (let quantity of quantities){
    quantity.setAttribute('value',1)
}
/*************** Setting initial prices ****************/
const pu1=25;
const pu2=25;
const pu3=25;
let price1=pu1;
let price2=pu2;
let price3=pu3;
let total=price1+price2+price3
document.querySelector('.price-1').innerHTML=price1+' dt'
document.querySelector('.price-2').innerHTML=price2+' dt'
document.querySelector('.price-3').innerHTML=price3+' dt'
/*************** Total price ****************/
document.querySelector('.total').innerHTML=total+' dt'
/*************** Shopping item 1 ****************/

/************ + button *************/
document.querySelector('.item-1 > .plus-btn')
.addEventListener("click", function(e) {
    document.querySelector('.qte-perfume').setAttribute('value',
    Number(document.querySelector('.qte-perfume').getAttribute('value'))+1)
    price1=price1+pu1
    total=total+pu1
    document.querySelector('.price-1').innerHTML=price1+' dt'
    document.querySelector('.total').innerHTML=total+' dt'
});
/************ - button *************/
document.querySelector('.item-1 > .minus-btn')
.addEventListener("click", function(e) {
    if(Number(document.querySelector('.qte-perfume').getAttribute('value')) >1){
        document.querySelector('.qte-perfume').setAttribute('value',
        Number(document.querySelector('.qte-perfume').getAttribute('value'))-1)
        price1=price1-pu1
        total=total-pu1
        document.querySelector('.price-1').innerHTML=price1+' dt'
        document.querySelector('.total').innerHTML=total+' dt'
    } else {
        document.querySelector('.qte-perfume').setAttribute('value',1)
    }
    
});
/*************** Shopping item 2 ****************/

/************ + button *************/
document.querySelector('.item-2 > .plus-btn')
.addEventListener("click", function(e) {
    document.querySelector('.qte-vitamin').setAttribute('value',
    Number(document.querySelector('.qte-vitamin').getAttribute('value'))+1)
    price2=price2+pu2
    total=total+pu2
    document.querySelector('.price-2').innerHTML=price2+' dt'
    document.querySelector('.total').innerHTML=total+' dt'
});
/************ - button *************/
document.querySelector('.item-2 > .minus-btn')
.addEventListener("click", function(e) {
    if(Number(document.querySelector('.qte-vitamin').getAttribute('value')) >1){
        document.querySelector('.qte-vitamin').setAttribute('value',
        Number(document.querySelector('.qte-vitamin').getAttribute('value'))-1)
        price2=price2-pu2
        total=total-pu2
        document.querySelector('.price-2').innerHTML=price2+' dt'
        document.querySelector('.total').innerHTML=total+' dt'
    } else {
        document.querySelector('.qte-vitamin').setAttribute('value',1)
    }
    
});
/*************** Shopping item 3 ****************/

/************ + button *************/
document.querySelector('.item-3 > .plus-btn')
.addEventListener("click", function(e) {
    document.querySelector('.qte-butter').setAttribute('value',
    Number(document.querySelector('.qte-butter').getAttribute('value'))+1)
    price3=price3+pu3
    total=total+pu3
    document.querySelector('.price-3').innerHTML=price3+' dt'
    document.querySelector('.total').innerHTML=total+' dt'
});
/************ - button *************/
document.querySelector('.item-3 > .minus-btn')
.addEventListener("click", function(e) {
    if(Number(document.querySelector('.qte-butter').getAttribute('value')) >1){
        document.querySelector('.qte-butter').setAttribute('value',
        Number(document.querySelector('.qte-butter').getAttribute('value'))-1)
        price3=price3-pu3
        total=total-pu3
        document.querySelector('.price-3').innerHTML=price3+' dt'
        document.querySelector('.total').innerHTML=total+' dt'
    } else {
        document.querySelector('.qte-butter').setAttribute('value',1)
    }
    
});
/*************** Icone close item 1 ****************/
document.querySelector('.icon-1')
       .addEventListener("click", function(e) {
        total=total-price1
        document.querySelector('.total').innerHTML=total+' dt'
        document.querySelector('.product-1').remove()
});
/*************** Icone close item 2 ****************/
document.querySelector('.icon-2')
       .addEventListener("click", function(e) {
        total=total-price2
        document.querySelector('.total').innerHTML=total+' dt'
        document.querySelector('.product-2').remove()
});
/*************** Icone close item 3 ****************/
document.querySelector('.icon-3')
       .addEventListener("click", function(e) {
        total=total-price3
        document.querySelector('.total').innerHTML=total+' dt'
        document.querySelector('.product-3').remove()
});
/*************** Icone Love ****************/
let hearts = Array.from(document.querySelectorAll('.fa-heart'))
for (let heart of hearts){
    heart.addEventListener("click", function(e) {
        heart.style.setProperty('color','red')
});
}