const alertDisplay = document.getElementById("alertDisplay");

// Form Validation Function
export default function isValid(name, price, photo) {
  if (name == "" || name.trim() == "") {
    showAlert("please enter name.");
    return false;
  } else if (!name.match(/^[A-Za-z][ A-Za-z0-9_/()-]*$/)) {
    showAlert("Invalid name.");
    return false;
  } else if (price.includes("e")) {
    showAlert("please enter valid price");
    return false;
  } else if (price == "" || price.trim() == "") {
    showAlert("please enter price.");
    return false;
  } else if (!isFileValid(photo)) {
    return false;
  }
  return true;
}

// File Format Checker function
function isFileValid(productPhoto) {
  const idxDot = productPhoto.value.lastIndexOf(".") + 1;
  const extFile = productPhoto.value
    .substr(idxDot, productPhoto.value.length)
    .toLowerCase();
  if (extFile === "") {
    return true;
  }
  if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
    if (productPhoto.files[0].size > 200000) {
      showAlert("File should be <200KB");
      productPhoto.value = "";
      return false;
    }
  } else {
    showAlert("Only jpg/jpeg and png files are allowed!");
    productPhoto.value = "";
    return false;
  }
  return true;
}

// Alert Handler Function
function showAlert(msg) {
  alertDisplay.classList.remove("invisible");
  alertDisplay.value = " ! " + msg;
  setTimeout(() => {
    alertDisplay.classList.add("invisible");
  }, 2000);
}
