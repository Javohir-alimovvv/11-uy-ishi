const containerEl = document.querySelector(".container");
const addEl = document.querySelector(".savat");
const div_2El = document.querySelector(".shopping");

fetch("https://fakestoreapi.com/products")
    .then((respons) => respons.json())
    .then((data) => {
        data.forEach(e => {
            const divEl = document.createElement("div");
            const imgEl = document.createElement("img");
            const titleEl = document.createElement("p");
            const descriptionEl = document.createElement("p");
            const dollorEl = document.createElement("p");
            const btn_groupEl = document.createElement("div");
            const btn_gitEl = document.createElement("button");
            const btn_deleteEl = document.createElement("button");
            const buy_imgEl = document.createElement("img");
            const buy_dollor = document.createElement("p");


            divEl.className = "card";
            imgEl.className = "img";
            titleEl.className = "title_text";
            descriptionEl.className = "description_text";
            dollorEl.className = "dollor_text";
            btn_groupEl.className = "btn_group";
            btn_gitEl.className = "btn_git";
            btn_deleteEl.className = "btn_delete";
            buy_imgEl.className = "buy_img";
            buy_dollor.className = "buy_sum"


            imgEl.src = e.image;
            titleEl.innerText = e.title;
            descriptionEl.innerText = e.description;
            dollorEl.innerText = "$ " + e.price;
            btn_gitEl.innerHTML = `<i class="bi bi-cart-plus"></i>`;
            btn_deleteEl.innerHTML = `<i class="bi bi-trash"></i>`;

            document.body.appendChild(containerEl);
            document.body.appendChild(addEl);
            document.body.appendChild(div_2El);
            div_2El.appendChild(buy_imgEl);
            div_2El.appendChild(buy_dollor);
            containerEl.appendChild(divEl);
            divEl.appendChild(imgEl);
            divEl.appendChild(titleEl);
            divEl.appendChild(descriptionEl);
            divEl.appendChild(dollorEl);
            divEl.appendChild(btn_groupEl);
            btn_groupEl.appendChild(btn_gitEl);
            btn_groupEl.appendChild(btn_deleteEl);

            btn_gitEl.addEventListener('submit', (e) => {
                e.preventDefault();
                buy_imgEl.src = e.image;
                buy_dollor.innerText = "$ " + e.price;
            });
            addEl.addEventListener('click', (e) => {
                e.preventDefault();
                div_2El.style.display = "block"
            });
        });
    });