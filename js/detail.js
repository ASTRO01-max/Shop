const url = "https://shop-co-backend-1.onrender.com"; 
const id = "69955f55adc2ffd5aa8aa550";

const elList = document.querySelector(".list");
const elMain = document.querySelector(".main"); 
const elWrapper = document.querySelector(".detail__wrapper");

const noImg = "";

function fetchProduct() {
    fetch(`${url}/api/products/${id}`)
        .then((res) => res.json())
        .then((product) => {
            console.log(product);
            renderProduct(product, elList);
        });
}

function renderProduct(product, parent) {
    let images = product.images || [noImg, noImg, noImg];

    elMain = images[0] || noImg;

    parent.innerHTML = `
        <li class="item">
            <img src="${images[0] || noImg}" data-i= "0" alt="" class="image">
        </li>
        <li class="item">
            <img src="${images[1] || noImg}" data-i= "1" alt="" class="image">
        </li>
        <li class="item">
            <img src="${images[2] || noImg}" data-i= "2" alt="" class="image">
        </li>
    `;

    click(images);
}

function click(images) {
    elList.addEventListener("click", (e) => {
        if(el.target.className === "image") {
            elMain.src = images[e.target.dataset.i];
        }
    });
}

fetchProduct();