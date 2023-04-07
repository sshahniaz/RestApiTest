# Rest API with JS requests

This demonstrates a simple REST API and its application through a minimalist front-end UI. The database is a list of products fetched in many ways, such as fetching all that gets all the data in the table. Fetch by product ID that searches the table through a product's product id, and lastly, the keyword search that searches the product name column of the database table for a given product.

The Edit and Delete functions are only available when the user has data in the table or has fetched data beforehand. You can add data anytime, but the update is only allowed when you have edited the fetched data as it queries the database with the product ID of the given product.

For a successful API run, it may be necessary to change the base address to the address the folder is saved in, as mine is:http//localhost:8081 in the app.js at

```javascript
let url = "http://localhost:8081/backend/week9/restAPI/api/";
```
Changing here will reflect on all the functions.

## Usage
The files below accept JSON, and you get JSON responses from them and the data format for requesting data is given below.
```javascript
fetch_all.php

```
```
fetchProd.php
POST

let req = {
    pID: prodID,
  };
req = JSON.stringify(req);
let ourReq2 = new XMLHttpRequest();

  ourReq2.open(
    "POST",
    url+"fetchProd.php",
    true
  );
  ourReq2.setRequestHeader("Content-type", "application/json");
ourReq2.send(req);
```

The request types are similar but the data formats are below.
```
fetchInsert.php

let req = {
    product_name: `${document.getElementById("product_name").value}`,
    unit_price: `${document.getElementById("unit_price").value}`,
    quantity: ` ${document.getElementById("quantity").value}`,
  };

```
```
fetchUpdate.php

let req = {
    pID: row.children[0].innerHTML,
    product_name: `${document.getElementById("product_name").value}`,
    unit_price: `${document.getElementById("unit_price").value}`,
    quantity: ` ${document.getElementById("quantity").value}`,
  };
```
```
fetchSearch.php

let req = {
    search: `${sText}`,
  };
```
```
fetchDelete.php
let req = {
     pID: prodID,
   };

```

## Contributing

Pull requests are welcome. For significant changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
