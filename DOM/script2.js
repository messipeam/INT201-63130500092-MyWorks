//query products element

const divProductsEle = document.querySelector('#products');

console.log(divProductsEle);



let products = {
    productId : 'P001',
    productName : 'iphone',
    price : 10000,
}


//1. create div element and its id attribute
//1. <div>  </div>
const divProductEle  = document.createElement('div');

//2. create id attribue on div element
//2. <div id ='P001'></div>
divProductEle.setAttribute('id',products.productId);

//3. create <p> for product id
//<p>P001</p>
const pProductIdEle = document.createElement('p');
pProductIdEle.textContent = products.productId;
divProductEle.appendChild(pProductIdEle);

//4. create <p> for product name
//<p>iphone</p>
const pProductNameEle = document.createElement('p');
pProductNameEle.textContent = products.productName;
divProductEle.appendChild(pProductNameEle);

//5. create <p> for product price
//<p>10000 Baht</p>
const pProductPriceEle = document.createElement('p');
pProductPriceEle.textContent = products.productPrice;
divProductEle.appendChild(pProductPriceEle);


//6. add product element to products element

divProductsEle.appendChild(divProductEle);


function listProduct(){

products.forEach(product => {
    
});
}