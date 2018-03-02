var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "gangr33n",
  database: "bamazon"
});

connection.connect(err => {
  if (err) throw err;
  beginStore();
  buyItems();
});

//Displays Items for sale
const beginStore = () => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;

    for (let i = 0; i < results.length; i++) {
      console.log(
        results[i].id,
        results[i].product_name + " Price: $" + results[i].price
      );
    }
  });
};

//Buys items if enough are in stock
var buyItems = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the id of the item you would like to purchase: ",
        name: "itemId"
      },
      {
        type: "input",
        message: "Enter the quantity you would like to purchase: ",
        name: "itemQuantity"
      }
    ])
    .then(usr => {
      var item = usr.itemId;
      var quantity = usr.itemQuantity;
      verifyStock(item, quantity);
    });
};

//verifies that enough of the product is in stock
var verifyStock = (item, quantity) => {
  connection.query(
    "SELECT product_name, stock_quantity, price FROM products WHERE ?",
    [{ product_name: item }], function(err, res) {
      console.log(res);
      if (err) throw err;
      if (quantity > res.stock_quantity) {
        console.log("Sorry, not enough " + res.product_name + " in stock!");
        console.log("We only have " + res.stock_quantity + " left. :( ");
      } else {
        console.log("Congratulations on your purchase!");
        updateStock(item, quantity);
      }
    }
  );
};

//updates the db 
var updateStock = (item, quantity) => {
  connection.query(
    "UPDATE product SET ? WHERE ?",
    [{stock_quantity: quantity},
      {product_name: item}],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
    }
  );
  console.log(res);
};
