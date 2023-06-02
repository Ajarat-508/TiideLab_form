const form = document.querySelector("#form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const previewUrl = "preview.html";
        window.location.href = previewUrl + "?" + new URLSearchParams(formData);

    });

    document.querySelector("#addRecord").addEventListener("click", function (e){ 
    e.preventDefault();
     document.querySelector("#newRecord").innerHTML = `<input type="" placeholder="" id="" name="">`; 

    });