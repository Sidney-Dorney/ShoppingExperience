let cart = new Array();
const sideBarContainer = document.querySelector("#sideBarContainer");
function clearStorageAndCart() {
    Array.cart = [];
    let currentStorage = JSON.parse(localStorage.getItem("CART"));
    if (currentStorage) {
        Array.cart = [currentStorage];
    }
};