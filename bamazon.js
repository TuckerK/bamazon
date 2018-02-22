var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "gangr33n",
  database: "bamazon"
});

connection.connect(err => {
  if (err) throw err;

  beginStore();
  buyItems();
  connection.end();
});

const beginStore = () => {
  connection.query("SELECT * FROM products", (err, results) => {
    let productArr = [];
    for (let i = 0; i < results.length; i++) {
      console.log(
        results[i].id,
        results[i].product_name + " Price: $" + results[i].price
      );
    }
  });
};

const buyItems = () => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "list",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].id);
            }
            return choiceArray;
          },
          message: "What item would you like to purchase?"
        },
        {
            name: 'quantity',
            type: 'input',
            message: 'How many would you like to purchase?'
        }
      ])
      .then(usr => {
        connection.query("SELECT * FROM products WHERE ?",[
            {
                id: usr.choice
            }
        ],(err, results) => {
            if (err) throw err;
            console.log(results);
        });
      });
  });
};
