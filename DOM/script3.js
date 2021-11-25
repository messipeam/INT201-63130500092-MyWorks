//query products element

let products = [
  { productId: "P001", productName: "iphone", price: 10000 },
  { productId: "P002", productName: "ipad", price: 20000 },
  { productId: "P003", productName: "imac", price: 20000 },
];

function listProduct() {
  const divProductsEle = document.querySelector("#products");

  for (const element in products) {
    const divProductEle = document.createElement("div");
    divProductEle.setAttribute("id", products[element].productId);

    let productId = document.createElement("p");
    productId.textContent = products[element].productId;

    divProductEle.appendChild(productId);

    divProductsEle.appendChild(divProductEle);
  }
}
listProduct();
