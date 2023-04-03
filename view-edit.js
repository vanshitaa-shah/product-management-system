import isValid from "./validation.js";
const prdName = document.getElementById("productName");
const description = document.getElementById("productDescription");
const price = document.getElementById("productPrice");
const imagePreview = document.getElementById("imgPreview");
const editBtn = document.getElementById("editBtn");
const updateBtn = document.getElementById("updateBtn");
const backBtn = document.getElementById("backBtn");
const cancelBtn = document.getElementById("cancelBtn");
const photoUpload = document.getElementById("photoUpload");
const productPhoto = document.getElementById("productPhoto");
const heading = document.querySelector("h3");
let productList = [];

if (localStorage.getItem("productList") != null) {
  productList = JSON.parse(localStorage.getItem("productList"));
}

const productID = new URLSearchParams(window.location.search).get("ProductID");
const productData = productList.filter((product) => {
  return product.id == productID;
});
prdName.value = productData[0].name;
description.value = productData[0].desc;
price.value = productData[0].price;
imagePreview.src = productData[0].image;

backBtn.parentElement.href = "./index.html";
editBtn.addEventListener("click", () => {
  heading.innerHTML = "Update Product";
  const formFields = document.querySelectorAll("input,textarea");
  for (let field of formFields) field.removeAttribute("readonly");
  allBtnHandler();
});

cancelBtn.addEventListener("click", () => {
  const formFields = document.querySelectorAll("input,textarea");
  for (let field of formFields) field.readOnly = true;
  allBtnHandler();
  prdName.value = productData[0].name;
  description.value = productData[0].desc;
  price.value = productData[0].price;
  imagePreview.src = productData[0].image;
  heading.innerHTML = "View Product";
  productPhoto.value="";
});

productPhoto.addEventListener("change", (e) => {
    let fReader = new FileReader();
    fReader.onload = (e) => {
      imgUrl = e.target.result;
    };
    fReader.readAsDataURL(productPhoto.files[0]);
  const img = URL.createObjectURL(e.target.files[0]);
  const imgPreview = document.getElementById("imgPreview");
  imgPreview.src = img;
});

let imgUrl = productData[0].image;
updateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(isValid(prdName.value,price.value,productPhoto)){
    let index = productList.findIndex((product) => product.id == productID);
    const updateCheck=JSON.parse(JSON.stringify(productList[index]));
    productList[index].name = prdName.value;
    productList[index].desc = description.value;
    productList[index].price = price.value;
    productList[index].image = imgUrl;
    if(JSON.stringify(updateCheck) !==JSON.stringify(productList[index])){ 
        localStorage.setItem("productList", JSON.stringify(productList));
        swal("Product Details Updated!", "", "success");
        const formFields = document.querySelectorAll("input,textarea");
        for (let field of formFields) field.readOnly = true;
        allBtnHandler();
        imagePreview.src = productList[index].image;
        heading.innerHTML = "view Product";
    }
    else{
      swal("No update found!", "", "warning");
    }
  }
});

function allBtnHandler(){
  photoUpload.classList.toggle("invisible");
  cancelBtn.classList.toggle("d-none");
  updateBtn.classList.toggle("d-none");
  backBtn.classList.toggle("d-none");
  editBtn.classList.toggle("d-none");
}
