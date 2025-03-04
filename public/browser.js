console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return `<li 
        class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        <span class="intem-text">${item.reja}</span>
        <div>
            <button 
            data-id="${item._id}"
            class="edit-me btn btn-secondary btn-sm mr-1">
                Ozgartirish
            </button>
            <button
            data-id="${item._id}"
            class="delete-me btn btn-danger btn-sm">
                Ochirish
            </button>
        </div>
    </li>`;
};

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();


    axios
        .post("/create-item",{reja: createField.value})
        .then((response) => {
            document
                .getElementById("item-list")
                .insertAdjacentHTML("beforeend", itemTemplate(response.data));
            createField.value = "";
            createField.focus();
        })
        .catch((err) => {
            console.log("Iltimos qaytadan harakat qiling!");
    });
});

document.addEventListener("click", function (event) {
    //delete oper
    console.log(event.target);
    if(event.target.classList.contains("delete-me")) {
        if(confirm("Aniq o'chirmoqchimisiz")) {
            axios
            .post("/delete-item", { id: event.target.getAttribute("data-id")}) 
            .then((respose) => {
                console.log(respose.data);
                event.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("iltimos qaytadan harakat qiling");
            });
        } 
    }
    
    //edit oper
    if(event.target.classList.contains("edit-me")) {
        alert("siz edit tugmasini bosdingiz");
    }
}); 