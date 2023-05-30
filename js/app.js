'use strict'
const yourFood = [];
function Restaurant(foodName) {
    this.foodName = foodName;
    this.typeOffood = this.tyPe();
    this.foodid = this.foodId();
    this.price = this.pRice();
    yourFood.push(this);

}
Restaurant.prototype.foodId = function () {
    let x = Math.floor(Math.random() * 9000) + 1000;
    let arr1=[0];
    for (let i = 0; i <arr1.length; i++) {

        if (x==arr1[i]) {
        arr1.push(x);
        
    }
    else {

        return x;

    }
    
    }
}
    
 
Restaurant.prototype.pRice = function (min, max) {

    let y = Math.floor(Math.random() * (max - min + 1) + min);
    return y;

}

Restaurant.prototype.tyPe = function () {

    let select = document.getElementById('type');
    let value = select.options[select.selectedIndex].value;
    let text = select.options[select.selectedIndex].text;

    return text;

}

let main = document.getElementsByTagName('main')[0];

let render = document.getElementById('output');

Restaurant.prototype.rendering = function () {




    let table = document.getElementById('table');
    table.style.border = '1px solid black';
    table.style.padding='5px';
        let rows = document.createElement('tr')
        table.appendChild(rows)

        let name = document.createElement('td');
        name.textContent =  this.foodName
        rows.appendChild(name);
        render.appendChild(table);

        let foodtype = document.createElement('td')
        foodtype.textContent = this.tyPe();
        rows.appendChild(foodtype);

        render.appendChild(table);

        let foodid = document.createElement('td')
        foodid.textContent = this.foodId()
        rows.appendChild(foodid);

        render.appendChild(table);

        let price = document.createElement('td');
        price.textContent = ` ${this.pRice(2, 10)}  $`
        rows.appendChild(price);
        render.appendChild(table);


        if (name.textContent=='null'|| name.textContent==0 ){
             foodtype.textContent = 0;
            foodid.textContent = 0;
            price.textContent = 0

    
        }






    }





function final(e) {
    e.preventDefault();
    let foodName = e.target.foodName.value;
    let typeOffood = e.target.food.value;
    let meal = new Restaurant(foodName);

    meal.foodId();
    meal.tyPe();
    meal.pRice(2, 10);
    meal.rendering();




}

let saveValue = document.getElementById('form')
saveValue.addEventListener('submit', final)





