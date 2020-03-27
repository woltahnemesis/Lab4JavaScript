//JavaScript Document

//GitHub URL: https://woltahnemesis.github.io/Lab4JavaScript/onlineStore.json

let requestURL = 'https://woltahnemesis.github.io/Lab4JavaScript/onlineStore.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {
    let propertyProducts = request.response;
    console.log(propertyProducts);
    products(propertyProducts);
};

function products(jsonObj) {
    
    let products = jsonObj.products;
    let container = document.getElementById('container');
    let mainArea = document.getElementById('main-area');
    
    for(let i = 0; i < products.length; i++){
        
        let div = document.createElement('div');
        let img = document.createElement('img');
        let hr = document.createElement('hr');
        
        let name = products[i].name;
        let price = products[i].price;
        let details = products[i].details;
        let image = products[i].image;
        
        img.setAttribute('src', 'https://woltahnemesis.github.io/Lab4JavaScript/Images/' + image);
        img.setAttribute('alt', image);
        img.setAttribute('width', 400);
    
        div.innerHTML = 
            '<p>Name: ' + name + '</p>' +
            '<p>Price: ' + price + '</p>' + 
            '<p>' + details + '</p>';
        
        div.appendChild(img);
        div.appendChild(hr);
        mainArea.appendChild(div);
        
    }
    
}