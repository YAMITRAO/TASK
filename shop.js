// https://crudcrud.com/api/904e41ae24dc47e5827cbd62bec116cc
const API_URL = 'https://crudcrud.com/api/f2d40191d08641bf9f0da752fe4ec0fb/myData';

//form Item selection 
     //input values
let itemName = document.querySelector("#itemName");
let itemDesc = document.querySelector("#itemDesc");
let itemAmount = document.querySelector("#itemAmount");
let itemQuan = document.querySelector("#itemQuan");

    //form button
let addButton = document.querySelector("#itemAdd");
let cancleButton = document.querySelector("#itemCancle");

//itemList Container
let itemListDiv = document.querySelector(".itemList");


//Data list to add the item 

let data = [];
getRequest();



// api functions 
function postRequest(data){
    axios.post( API_URL, data)
    .then( res => {
        console.log(res.data);
        getRequest();
    })
    .catch( err => console.log(err));
}

async function getRequest(){
    // axios.get(API_URL)
    // .then( (res) => {
    //     data = [];
    //     data = res.data;
    //     itemListDiv.innerHTML ="";
    //     data.forEach( (item) => addItemToList(item));
    // })
    // .catch(err => console.log(err));
    let res = await axios.get(API_URL)
         data = [];
         data = res.data;
         itemListDiv.innerHTML ="";
         data.forEach( (item) => addItemToList(item));

       

}

function putData(id, data){
    console.log(id);
    console.log(data);
    axios.put(`${API_URL}/${id}`,data)
    .then( res => {
        console.log(res);
        getRequest();
    })
    .catch( err => console.log(err));
}


// get Input Item values
addButton.addEventListener('click', addItem);

function addItem(event){ 
    event.preventDefault();
    let enteredData = {
        name:itemName.value,
        desc:itemDesc.value,
        amount:itemAmount.value,
        quantity:itemQuan.value,
    }
    // -------------POST------------here
    postRequest(enteredData);
    // data.push(enteredData);
    // itemListDiv.innerHTML ="";
    // data.forEach( (item) => addItemToList(item));

    itemName.value = "",
    itemDesc.value = "",
    itemAmount.value = "",
    itemQuan.value = ""

}

//add Item to list
function addItemToList(data){
    //create main div
    let listItemDiv = document.createElement('div');
    listItemDiv.className = "sub-container"

    // enter div 
    let listDivHeading = document.createElement('div');
    listDivHeading.className = 'listDiv itemNameList';
    let listDivDesc = document.createElement('div');
    listDivDesc.className = 'listDiv itemDescList';
    let listDivAmount = document.createElement('div');
    listDivAmount.className = 'listDiv itemAmountList';
    let listDivQuan = document.createElement('div');
    listDivQuan.className = 'listDiv itemQuanList';

    // buying button
    let buy1 = document.createElement('button');
    let buy2 = document.createElement('button');
    let buy5 = document.createElement('button');
    buy1.addEventListener('click', buyQuantity)
    buy2.addEventListener('click', buyQuantity)
    buy5.addEventListener('click', buyQuantity)
    buy1.className=" btn btn-primary buyButton"
    buy2.className=" btn btn-primary buyButton"
    buy5.className=" btn btn-primary buyButton"

    buy1.innerText = "Buy 1"
    buy2.innerText = "Buy 2"
    buy5.innerText = "Buy 5"
    //enter the value to the createdDiv
    listDivHeading.innerText = data.name;
    listDivDesc.innerText = data.desc;
    listDivAmount.innerText = data.amount;
    listDivQuan.innerText = data.quantity;

    // append all in main div
    listItemDiv.appendChild(listDivHeading);
    listItemDiv.appendChild(listDivDesc);
    listItemDiv.appendChild(listDivAmount);
    listItemDiv.appendChild(listDivQuan);
    listItemDiv.appendChild(buy1)
    listItemDiv.appendChild(buy2)
    listItemDiv.appendChild(buy5)

    // append main div to container div 
    itemListDiv.appendChild(listItemDiv);
}


function buyQuantity(event){
    let updateName = event.target.parentElement.querySelector('.itemNameList').innerText;
console.log(updateName)
    let updateDesc = event.target.parentElement.querySelector('.itemDescList').innerText
console.log(updateDesc)

    let updateAmount = event.target.parentElement.querySelector('.itemAmountList').innerText
    console.log(updateAmount)

    let updateQuan = event.target.parentElement.querySelector('.itemQuanList').innerText;
    console.log(updateQuan);
    
   
    itemListDiv.innerHTML ="";
    data.forEach( (item) => {
        if(item.name == updateName && item.amount == updateAmount && item.desc == updateDesc && item.quantity == updateQuan){
            let updateId = item._id;
            let eupdateData = {}
            console.log(item._id);
            console.log(item.name);
            if(event.target.innerText == "Buy 1"){ 
                eupdateData = {
                    name:updateName,
                    desc:updateDesc,
                    amount:updateAmount,
                    quantity:updateQuan-1,
                }
                // item.quantity = item.quantity - 1;
            }
            else if(event.target.innerText == "Buy 2"){
                eupdateData = {
                    name:updateName,
                    desc:updateDesc,
                    amount:updateAmount,
                    quantity:updateQuan-2,
                }
                
                // item.quantity = item.quantity - 2;
            }
            else if(event.target.innerText == "Buy 5"){
                eupdateData = {
                    name:updateName,
                    desc:updateDesc,
                    amount:updateAmount,
                    quantity:updateQuan-5,
                }
                // item.quantity = item.quantity - 5;
            }
            
        putData(updateId, eupdateData);
        console.log(updateId);
        console.log(eupdateData);
           }
        addItemToList(item);
    });
}




