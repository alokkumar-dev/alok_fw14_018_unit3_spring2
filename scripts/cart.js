let arrData = JSON.parse(localStorage.getItem("U3CartData")) || [];
displalayCartData(arrData)

let total = document.querySelector(".total");
var sum =0;
for(var i=0; i<arrData.length; i++){
   sum += Number(arrData[i].price)
}
total.innerText = sum;
function displalayCartData(arrData){
    arrData.map(function (elem){
        let contentDiv = document.createElement('div')
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let price = document.createElement("p")
        let category = document.createElement("p")
        let remove = document.createElement("button")
        remove.innerText = "Remove";
    
        img.src = elem.imgage;
        price.innerText = elem.price;
        category.innerText =elem.name;



        imgDiv.append(img);
        contentDiv.append(imgDiv,category,price,remove);
        document.querySelector(".dicesMain").append(contentDiv);

        
    })
}
