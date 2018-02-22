var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "",
  database: "bamazon"
});

connection.connect(err => {
  if (err) throw err;
start();
  // beginStore();
  // buyItems();
  connection.end();
});

const beginStore = () => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;
    let productArr = [];
    for (let i = 0; i < results.length; i++) {
      console.log(
        results[i].id,
        results[i].product_name + " Price: $" + results[i].price
      );
    }
  });
};

//THIS IS FROM THE GREATBAYBASIC.JS FILE
function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "rawlist",
      message: "Would you like to [POST] an auction or [BID] on an auction?",
      choices: ["POST", "BID"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.postOrBid.toUpperCase() === "POST") {
        postAuction();
      }
      else {
        bidAuction();
      }
    });
}

// THIS WAS MY CODE
// const buyItems = () => {
//   connection.query("SELECT * FROM products", (err, results) => {
//     if (err) throw err;
//     inquirer
//       .prompt([
//         {
//           name: "choice",
//           type: "list",
//           choices: () => {
//             let choiceArray = [];
//             for (let i = 0; i < results.length; i++) {
//               choiceArray.push(results[i].id);
//             }
//             return choiceArray;
//           },
//           message: "What item would you like to purchase?"
//         }
//         // {
//         //     name: 'quantity',
//         //     type: 'input',
//         //     message: 'How many would you like to purchase?'
//         // }
//       ])
//       .then(function(answer) {
//         console.log(answer);
//       })
//       .catch(() => {
//         console.log("Promise Rejected");
//       });
//   });
// };
