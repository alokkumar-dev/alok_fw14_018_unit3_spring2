async function allMunes(){
    try{
            let resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
    let data =await resp.json();

    console.log(data);

    displalayData(data.meals)
    }
    catch(err){
        console.log("error form chech :", err);
    }
}
allMunes();

var mainDiv = document.querySelector(".dicesMain");

function displalayData(data){
    data.map(function (element){
        let contentDiv = document.createElement('div')
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let price = document.createElement("p")
        let category = document.createElement("p")
        let cart = document.createElement("button")
        

        cart.innerText = "ADD TO CART";
      let diceName = category.innerText = element.strCategory;
       let diceimg= img.src = element.strMealThumb;
        let dicePrice = price.innerText = Math.floor(Math.random(100)*500);
     

        let arr = [];

        cart.addEventListener("click",function (){
            document.querySelector(".length").innerText = arr.length;
           let cartObj = {
               imgage : diceimg,
               name : diceName,
               price: dicePrice
           }
           arr.push(cartObj);
           localStorage.setItem("U3CartData", JSON.stringify(arr));
        });

        imgDiv.append(img);
        contentDiv.append(imgDiv,category,price,cart)
        mainDiv.append(contentDiv);
    })
}