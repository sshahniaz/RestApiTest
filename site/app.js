// Main Table
let mainTable = document.querySelector("#main-table table tbody");

let clearTable = () => {
  mainTable.innerHTML = "";
};

let url = "http://localhost:8081/backend/week9/restAPI/api/";
//GET fetch all data.

//let display = document.querySelector(".disp");
let btn = document.querySelector("#getDat");
btn.addEventListener("click", (e) => {
  clearTable();
  let ourReq = new XMLHttpRequest();

  ourReq.open("GET", url+"fetch_all.php");
  ourReq.onload = () => {
    console.log(ourReq.responseText);
    let ourData = ourReq.responseText;
    let data = JSON.parse(ourData);
    //console.log(data);
    //data.map((x) => console.log(x));
    data.map((i) => {
      mainTable.innerHTML += `<tr><td>${i["productId"]}</td><td>${i["product_name"]}</td><td>${i["unit_price"]}</td><td>${i["quantity"]}</td><td><button class="button" onclick="editRow(this)">Edit</button><button class="button btn-del" onclick="delRow(this)">Delete</button></td> </tr>`;
    });
  };
  ourReq.send();
});

//POST for getting single data

let display2 = document.querySelector(".disp2");
let form = document.getElementById("sub");
form.addEventListener("click", (event) => {
  clearTable();
  let prodID = document.getElementById("prodID").value;
  console.log(prodID);

  let req = {
    pID: prodID,
  };

  req = JSON.stringify(req);
  console.log(req);
  let ourReq2 = new XMLHttpRequest();

  ourReq2.open(
    "POST",
    url+"fetchProd.php",
    true
  );
  ourReq2.setRequestHeader("Content-type", "application/json");
  ourReq2.onload = () => {
    //console.log(ourReq2.responseText);
    let ourData1 = ourReq2.responseText;
    let data1 = JSON.parse(ourData1);
    //console.log(data);
    //data.map((x) => console.log(x));
    data1.map((i) => {
      mainTable.innerHTML += `<tr><td>${i["productId"]}</td><td>${i["product_name"]}</td><td>${i["unit_price"]}</td><td>${i["quantity"]}</td><td><button class="button" onclick="editRow(this)">Edit</button><button class="button btn-del" onclick="delRow(this)">Delete</button></td> </tr>`;
    });
  };
  ourReq2.send(req);
});

// Search Function
let display3 = document.querySelector(".disp3");
let searchForm = document.getElementById("subm");
searchForm.addEventListener("click", (event) => {
  clearTable();
  let sText = document.querySelector("#search").value;
  console.log(sText);

  let req = {
    search: `${sText}`,
  };

  req = JSON.stringify(req);
  console.log(req);
  let ourReq3 = new XMLHttpRequest();

  ourReq3.open(
    "POST",
    url+"fetchSearch.php",
    true
  );
  ourReq3.setRequestHeader("Content-type", "application/json");
  ourReq3.onload = () => {
    //console.log(ourReq2.responseText);
    let ourData1 = ourReq3.responseText;
    let data1 = JSON.parse(ourData1);
    //console.log(data);
    //data.map((x) => console.log(x));
    data1.map((i) => {
      mainTable.innerHTML += `<tr><td>${i["productId"]}</td><td>${i["product_name"]}</td><td>${i["unit_price"]}</td><td>${i["quantity"]}</td><td><button class="button" onclick="editRow(this)">Edit</button><button class="button btn-del" onclick="delRow(this)">Delete</button></td> </tr>`;
    });
  };
  ourReq3.send(req);
});

// Delete with product id.


let delRow = (elem) => {
  let row = elem.parentElement.parentElement;

  let prodID = row.children[0].innerHTML;
  console.log(prodID);

   let req = {
     pID: prodID,
   };

  req = JSON.stringify(req);
  console.log(req);
  let ourReq4 = new XMLHttpRequest();

  ourReq4.open(
    "DELETE",
    url+"fetchDelete.php",
    true
  );
  ourReq4.setRequestHeader("Content-type", "application/json");
  ourReq4.onload = () => {
    console.log(ourReq4.responseText);
    // let ourData1 = ourReq4.responseText;
    // let data1 = JSON.parse(ourData1);
    //console.log(data);
    //data.map((x) => console.log(x));
    // data1.map((i) => {
    // display2.innerHTML += `<tr><td>${i["productId"]}</td><td>${i["product_name"]}</td><td>${i["unit_price"]}</td><td>${i["quantity"]}</td> </tr>`;
    // });
  };
  ourReq4.send(req);

  row.remove();
};

//INSERT

let insForm = document.getElementById("subIns");
insForm.addEventListener("click", (event) => {
  //let prodID = document.getElementById("delID").value;
  // console.log(prodID);

  let req = {
    product_name: `${document.getElementById("product_name").value}`,
    unit_price: `${document.getElementById("unit_price").value}`,
    quantity: ` ${document.getElementById("quantity").value}`,
  };

  req = JSON.stringify(req);
  console.log(req);
  let ourReq4 = new XMLHttpRequest();

  ourReq4.open(
    "POST",
    url+"fetchInsert.php",
    true
  );
  ourReq4.setRequestHeader("Content-type", "application/json");
  ourReq4.onload = () => {
    //console.log(ourReq2.responseText);
    // let ourData1 = ourReq4.responseText;
    // let data1 = JSON.parse(ourData1);
    //console.log(data);
    //data.map((x) => console.log(x));
    // data1.map((i) => {
    // display2.innerHTML += `<tr><td>${i["productId"]}</td><td>${i["product_name"]}</td><td>${i["unit_price"]}</td><td>${i["quantity"]}</td> </tr>`;
    // });
  };
  ourReq4.send(req);
});

// UPDATE
//This calls the function for update and displays the eiitable values in the form for add or update.

let editRow = (elem) => {
  //Disable Add button
  let addBtn = document.getElementById("subIns");
  //console.log(addBtn);
  addBtn.disabled = true;
  
  //Enable Update
  let updateBtn = document.getElementById("update");
  
  updateBtn.disabled = false;
  let row = elem.parentElement.parentElement;

  let editVal = {
    product_name: row.children[1].innerHTML,
    unit_price: row.children[2].innerHTML,
    quantity: row.children[3].innerHTML,
  };
  clearFrom();
  console.log(editVal)
  
  document.getElementById("product_name").value = editVal.product_name;
  document.getElementById("unit_price").value = editVal.unit_price;
  document.getElementById("quantity").value = editVal.quantity;
  //Listen for update button click
  updateBtn.onclick = function () {
    
    let req = {
    pID: row.children[0].innerHTML,
    product_name: `${document.getElementById("product_name").value}`,
    unit_price: `${document.getElementById("unit_price").value}`,
    quantity: ` ${document.getElementById("quantity").value}`,
  };

  req = JSON.stringify(req);
  console.log(req);
  let ourReq4 = new XMLHttpRequest();

  ourReq4.open(
    "POST",
    url+"fetchUpdate.php",
    true
  );
  ourReq4.setRequestHeader("Content-type", "application/json");
  ourReq4.onload = () => {
    //console.log(ourReq2.responseText);
    // let ourData1 = ourReq4.responseText;
    // let data1 = JSON.parse(ourData1);
    //console.log(data);
    //data.map((x) => console.log(x));
    // data1.map((i) => {
    // display2.innerHTML += `<tr><td>${i["productId"]}</td><td>${i["product_name"]}</td><td>${i["unit_price"]}</td><td>${i["quantity"]}</td> </tr>`;
    // });
    addBtn.disabled = false;
    updateBtn.disabled = true;
  };
    ourReq4.send(req);
    // addBtn.disabled = false;
    // updateBtn.disabled = true;
  }

}

//Clear Form
let clearFrom = () => {
  document.getElementById("product_name").value = "";
  document.getElementById("unit_price").value = "";
  document.getElementById("quantity").value = "";
}