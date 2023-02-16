let serial=0;
document.getElementById("first-btn").addEventListener("click",function(){
    serial++;
//  const product=document.getElementById("first-card").innerText;
//  const price=document.getElementById("first-price").innerText;
   
// ------in a function way to make easier
// --------1-get element
 const product=getElementValue("first-card");
  const price=getElementValue("first-price");
 const quantity=document.getElementById("first-quantity").value;
//  check quantity is empty or not
 const quantityValue=parseInt(quantity);
 if(quantity===""|| isNaN(quantityValue)){
    alert("please provide a number");
    return;
 }
 const total=parseInt(quantity)* parseInt(price);

// 2--Set element value in table:-------
  setElement(serial,product,price,quantity,total);

// 3-- total products, total cost
// const totalProducts=document.getElementById("total-product");
// totalProducts.innerText=serial;
// const price1=document.getElementById("total-price");
// const totalPrice=parseInt(price1.innerText)+total;
// price1.innerText=totalPrice;

// -----calling funtion
totalProduct(serial,total);

})

// 2nd 
document.getElementById("second-btn").addEventListener("click",function(){
    serial++;
// ------in a function way to make easier
// --------1-get element
 const product=getElementValue("second-card");
  const price=getElementValue("second-price");
 const quantity=document.getElementById("second-quantity").value;
 const quantityValue=parseInt(quantity);
 if(quantity===""|| isNaN(quantityValue)){
    alert("please provide a number");
    return;
 }
 const total=parseInt(quantity)* parseInt(price);

// 2--Set element value in table:-------
  setElement(serial,product,price,quantity,total);

// 3-- total products, total cost
// -----calling funtion
totalProduct(serial,total);

})

// 3rd
document.getElementById("third-btn").addEventListener("click",function(){
    serial++;
// ------in a function way to make easier
// --------1-get element
 const product=getElementValue("third-card");
  const price=getElementValue("third-price");
 const quantity=document.getElementById("third-quantity").value;
 const quantityValue=parseInt(quantity);
 if(quantity===""|| isNaN(quantityValue)){
    alert("please provide a number");
    return;
 }
 const total=parseInt(quantity)* parseInt(price);

// 2--Set element value in table:-------
  setElement(serial,product,price,quantity,total);

// 3-- total products, total cost
// -----calling funtion
totalProduct(serial,total);

})


// 4th---using event object
document.getElementById("fourth-btn").addEventListener("click",function(e){
 serial++;
  const product=e.target.parentNode.parentNode.children[0].innerText;
  const price= e.target.parentNode.parentNode.children[2].children[0].innerText;
  const quantity= e.target.parentNode.parentNode.children[3].value;
  if(quantity===""|| isNaN(parseInt(quantity))){
    alert("please provide a number");
    return;
 }
  const total=parseInt(price)*parseInt(quantity);

  // 2--Set element value in table:-------
  setElement(serial,product,price,quantity,total);

  // 3-- total products, total cost
  // -----calling funtion
  totalProduct(serial,total)
})

// function
function totalProduct(serial,total){
    const totalProducts=document.getElementById("total-product");
    totalProducts.innerText=serial;
    const price1=document.getElementById("total-price");
    const totalPrice=parseInt(price1.innerText)+total;
    price1.innerText=totalPrice; 
}

function getElementValue(elementId){
    const element=document.getElementById(elementId).innerText;
    return element;
}

function setElement(serial,product,price,quantity,total){
    const table=document.getElementById("table")
    const tr=document.createElement("tr");
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${product}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td>${total}</td>
    `;
    table.appendChild(tr);
}

