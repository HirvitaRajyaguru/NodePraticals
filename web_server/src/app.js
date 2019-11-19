const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
//Define paths for Express config
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialpath);

// Setup static directory to serve
 app.use(express.static(publicDirectory));





// ----------------- express & html_json start -------------------
// app.get("", (req, res) => {
//   res.send("<h1>Hello Express!!!!!!!!!!! </h1>");
// });

// app.get("/help", (req, res) => {
//   res.send({
//     name: "Hirvita",
//     Address: "Ahmedabad"
//   });
// });
// app.get("/about", (req, res) => {
//   res.send("About  Page...........!!!!!!!!!");
// });
// app.get("/weather", (req, res) => {
//   if (!req.query.address) {
//     return res.send({
//       error: "Address is not available"
//     });
//   }
//   geocode(
//     req.query.address,
//     (error, { latitude, longitude, location } = {}) => {
//       if (error) {
//         return res.send({ error });
//       }
//       forecast(latitude, longitude, (error, forecastData) => {
//         if (error) {
//           return res.send({ error });
//         }
//         res.send({
//           forecast: forecastData,
//           location,
//           address: req.query.address
//         });
//       });
//     }
//   );

//   res.send({
//       focast: 'It is winter here',
//       location: 'Mumbai',
//       address: req.query.address
//   })
// });

// app.get("/products", (req, res) => {
//   if (!req.query.search) {
//     return res.send({
//       error: "You must provide a search term"
//     });
//   }

//   console.log(req.query.ratings);
//   res.send({
//     products: []
//   });
// });

// app.get("/help/*", (req, res) => {
//   res.send("Help article not found");
// });

// app.listen(5000, () => {
//   console.log("Server is up on port 5000");
// });

// ------------------------- express end -------------------

// ----------------- hbs starts ------------------
app.get("", (req, res) => {
  // res.send({
  //         focast: 'It is winter here',
  //         location: 'Mumbai',
  //         address: req.query.address
  //     })
  res.render("index", {
    title: "Weather App",
    name: "Hirvita Rajyaguru"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About App",
    name: "Hirvita Rajyaguru"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help App",
    helpText: "Help page is there",
    name: "Hirvita Rajyaguru"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Hirvita Rajyaguru",
    errormessage: "Help article not found"
  });
});

// app.get("*", (req, res) => {
//   res.render("404", {
//     title: "404",
//     name: "Hirvita Rajyaguru",
//     errormessage: " Page not Found"
//   });
// });

app.listen(5000, () => {
  console.log("Server is up on port 5000");
});



// --------------- hbs ends here ----------------
