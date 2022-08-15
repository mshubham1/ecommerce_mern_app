const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();

//db connection
require("./config/database").connect();


//define routes
const itemRoute = require("./routes/item.route");
const authRoute = require("./routes/auth.route");
const cartRoute = require("./routes/cart.route");
const orderRoute = require("./routes/order.route");

// Body parser middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


  /***********Routes*********** */

app.use("/api/item",itemRoute);
app.use("/api/user",authRoute);
app.use("/api/cart/",cartRoute);
app.use("/api/order/",orderRoute);

/*******Client file for Production*********/
if(process.env.NODE_ENV === "production"){
  app.use(express.static('Client/public'));
  app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,"Client","public","index.html"));
  })
}


//create server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server is listening on port ${port}`));
