var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "Snowdog7",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadId);
//display storefront
//present user with options
//depending on user input, run corresponding function 
//create each function with corresponding queries
displayProducts();

});

var displayProducts = function () {

    connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
      }
      console.log("-----------------------------------");
    });
  
  
 
     purchasePrompt();
}

function purchasePrompt() {
  inquirer.prompt([
    {
      name: "ID",
      type: "input",
      message: "Please enter the item ID you would like to purchase.",
      filter: Number
    },
    {
      name: "Quantity",
      type: "input",
      message: "How many items do you wish to purchase?",
      filter: Number
    },
  ]).then(function(answers){
    var quantityNeeded = answers.Quantity;
    var IDrequested = answers.ID;
    purchaseOrder(IDrequested, quantityNeeded);
  });
};

function purchaseOrder(ID, amtNeeded){
  connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
    if(err) {console.log(err)};
    if(amtNeeded<= res[0].stock_quantity){
        var totalCost = res[0].price * amtNeeded;
          console.log("Good news! Your order is in stock!");
          console.log("Your total cost for " + amtNeeded + " " + res[0].product_name + " is " + totalCost + ", Thank you!");

          connection.query("UPDATE products SET stock_quantity - " + amtNeeded + "WHERE item_id = " + ID);

    } else{
        console.log("Insufficient quantity, not enough " + res[0].product_name + "to complete your order.");
    };
    displayProducts();
  });
};