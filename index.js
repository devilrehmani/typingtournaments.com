const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
var pnumber, full_name, participation_fees, curr_date;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/Records");
const db = mongoose.connection;

db.on("error", () => console.log("Error in Connecting to Database"));
db.once("open", () => console.log("Connected to Database"));

// Serve static files from the parent directory of the 'public' folder
app.use(express.static(path.join(__dirname, "")));

function compareData(a, b) {
  // Sort by WPM in descending order
  if (a.wpm !== b.wpm) {
    return b.wpm - a.wpm;
  }
  // If WPM is equal, sort by time left in ascending order
  if (a.time_left !== b.time_left) {
    return a.time_left - b.time_left;
  }
  // If WPM and time left are equal, sort by mistakes in ascending order
  return a.mistakes - b.mistakes;
}

app.post("/indexx", (req, res) => {
  const { name, phno, partic_fee } = req.body;
  pnumber = phno;
  full_name = name;
  participation_fees = partic_fee;
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;
  curr_date = formattedDate;
  const paymentdata = {
    name: name,
    phno: phno,
    partic_fee: partic_fee,
    date: formattedDate,
  };
  if (partic_fee == 0) {
    res.redirect("../contest.html");
  }
  res.redirect("../wallet.html");
});

// db.collection("data").insertOne(data, (err, result) => {
//   if (err) {
//     console.error("Error inserting record:", err);
//     res.status(500).send("Error inserting record");
//     return;
//   }
//   console.log("Record Inserted Successfully:", result.insertedId);

// });

app.post("/saveData", (req, res) => {
  const { wpm, mistakes, time } = req.body;
  const alldata = {
    name: full_name,
    phone_num: pnumber,
    participation_fees: participation_fees,
    wpm: wpm,
    mistakes: mistakes,
    time_left: time,
    timestamp: new Date(),
  };
  if (participation_fees == 0) {
    db.collection("0_Rs_Competition").insertOne(alldata, (err, result) => {
      if (err) {
        console.error("Error inserting record:", err);
        res.status(500).send("Error inserting record");
        return;
      }
      console.log("Record Inserted Successfully:", result.insertedId);
      res.redirect("../contest.html");
    });
  }
  if (participation_fees == 30) {
    db.collection("30_Rs_Competition").insertOne(alldata, (err, result) => {
      if (err) {
        console.error("Error inserting record:", err);
        res.status(500).send("Error inserting record");
        return;
      }
      console.log("Record Inserted Successfully:", result.insertedId);
      res.redirect("../wallet.html");
    });
  }
  if (participation_fees == 50) {
    db.collection("50_Rs_Competition").insertOne(alldata, (err, result) => {
      if (err) {
        console.error("Error inserting record:", err);
        res.status(500).send("Error inserting record");
        return;
      }
      console.log("Record Inserted Successfully:", result.insertedId);
      res.redirect("../wallet.html");
    });
  }
  if (participation_fees == 75) {
    db.collection("75_Rs_Competition").insertOne(alldata, (err, result) => {
      if (err) {
        console.error("Error inserting record:", err);
        res.status(500).send("Error inserting record");
        return;
      }
      console.log("Record Inserted Successfully:", result.insertedId);
      res.redirect("../wallet.html");
    });
  }
  if (participation_fees == 100) {
    db.collection("100_Rs_Competition").insertOne(alldata, (err, result) => {
      if (err) {
        console.error("Error inserting record:", err);
        res.status(500).send("Error inserting record");
        return;
      }
      console.log("Record Inserted Successfully:", result.insertedId);
      res.redirect("../wallet.html");
    });
  }
  if (participation_fees == 150) {
    db.collection("150_Rs_Competition").insertOne(alldata, (err, result) => {
      if (err) {
        console.error("Error inserting record:", err);
        res.status(500).send("Error inserting record");
        return;
      }
      console.log("Record Inserted Successfully:", result.insertedId);
      res.redirect("../wallet.html");
    });
  }
  if (participation_fees == 200) {
    db.collection("200_Rs_Competition").insertOne(alldata, (err, result) => {
      if (err) {
        console.error("Error inserting record:", err);
        res.status(500).send("Error inserting record");
        return;
      }
      console.log("Record Inserted Successfully:", result.insertedId);
      res.redirect("../wallet.html");
    });
  }
});

app.get("/0Rs", (req, res) => {
  const collectionName = `0_Rs_Competition`;

  db.collection(collectionName)
    .find({})
    .toArray()
    .then((data) => {
      if (data.length === 0) {
        console.log("No data found in the collection.");
        res.send("<h2>No data found in the collection.</h2>");
        return;
      }

      // Sort the data
      data.sort(compareData);

      // Construct HTML to display the retrieved and sorted data
      let html = "<h2>Retrieved and Sorted Data:</h2><ul>";
      data.forEach((entry, index) => {
        html += `<li>Entry ${index + 1}:<br>
                 Name: ${entry.name}<br>
                 Phone Number: ${entry.phone_num}<br>
                 Participation Fees: ${entry.participation_fees}<br>
                 WPM: ${entry.wpm}<br>
                 Mistakes: ${entry.mistakes}<br>
                 Time Left: ${entry.time_left}<br>
                 Timestamp: ${entry.timestamp}<br></li><br>`;
      });
      html += "</ul>";

      // Send the HTML to the client for rendering
      res.send(html);
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
      res.status(500).send("Error retrieving data");
    });
});

app.get("/30Rs", (req, res) => {
  const collectionName = `30_Rs_Competition`;

  db.collection(collectionName)
    .find({})
    .toArray()
    .then((data) => {
      if (data.length === 0) {
        console.log("No data found in the collection.");
        res.send("<h2>No data found in the collection.</h2>");
        return;
      }

      // Sort the data
      data.sort(compareData);

      // Construct HTML to display the retrieved and sorted data
      let html = "<h2>Retrieved and Sorted Data:</h2><ul>";
      data.forEach((entry, index) => {
        html += `<li>Entry ${index + 1}:<br>
                 Name: ${entry.name}<br>
                 Phone Number: ${entry.phone_num}<br>
                 Participation Fees: ${entry.participation_fees}<br>
                 WPM: ${entry.wpm}<br>
                 Mistakes: ${entry.mistakes}<br>
                 Time Left: ${entry.time_left}<br>
                 Timestamp: ${entry.timestamp}<br></li><br>`;
      });
      html += "</ul>";

      // Send the HTML to the client for rendering
      res.send(html);
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
      res.status(500).send("Error retrieving data");
    });
});

app.get("/50Rs", (req, res) => {
  const collectionName = `50_Rs_Competition`;

  db.collection(collectionName)
    .find({})
    .toArray()
    .then((data) => {
      if (data.length === 0) {
        console.log("No data found in the collection.");
        res.send("<h2>No data found in the collection.</h2>");
        return;
      }

      // Sort the data
      data.sort(compareData);

      // Construct HTML to display the retrieved and sorted data
      let html = "<h2>Retrieved and Sorted Data:</h2><ul>";
      data.forEach((entry, index) => {
        html += `<li>Entry ${index + 1}:<br>
                 Name: ${entry.name}<br>
                 Phone Number: ${entry.phone_num}<br>
                 Participation Fees: ${entry.participation_fees}<br>
                 WPM: ${entry.wpm}<br>
                 Mistakes: ${entry.mistakes}<br>
                 Time Left: ${entry.time_left}<br>
                 Timestamp: ${entry.timestamp}<br></li><br>`;
      });
      html += "</ul>";

      // Send the HTML to the client for rendering
      res.send(html);
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
      res.status(500).send("Error retrieving data");
    });
});

app.get("/75Rs", (req, res) => {
  const collectionName = `75_Rs_Competition`;

  db.collection(collectionName)
    .find({})
    .toArray()
    .then((data) => {
      if (data.length === 0) {
        console.log("No data found in the collection.");
        res.send("<h2>No data found in the collection.</h2>");
        return;
      }

      // Sort the data
      data.sort(compareData);

      // Construct HTML to display the retrieved and sorted data
      let html = "<h2>Retrieved and Sorted Data:</h2><ul>";
      data.forEach((entry, index) => {
        html += `<li>Entry ${index + 1}:<br>
                 Name: ${entry.name}<br>
                 Phone Number: ${entry.phone_num}<br>
                 Participation Fees: ${entry.participation_fees}<br>
                 WPM: ${entry.wpm}<br>
                 Mistakes: ${entry.mistakes}<br>
                 Time Left: ${entry.time_left}<br>
                 Timestamp: ${entry.timestamp}<br></li><br>`;
      });
      html += "</ul>";

      // Send the HTML to the client for rendering
      res.send(html);
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
      res.status(500).send("Error retrieving data");
    });
});

app.get("/100Rs", (req, res) => {
  const collectionName = `100_Rs_Competition`;

  db.collection(collectionName)
    .find({})
    .toArray()
    .then((data) => {
      if (data.length === 0) {
        console.log("No data found in the collection.");
        res.send("<h2>No data found in the collection.</h2>");
        return;
      }

      // Sort the data
      data.sort(compareData);

      // Construct HTML to display the retrieved and sorted data
      let html = "<h2>Retrieved and Sorted Data:</h2><ul>";
      data.forEach((entry, index) => {
        html += `<li>Entry ${index + 1}:<br>
                 Name: ${entry.name}<br>
                 Phone Number: ${entry.phone_num}<br>
                 Participation Fees: ${entry.participation_fees}<br>
                 WPM: ${entry.wpm}<br>
                 Mistakes: ${entry.mistakes}<br>
                 Time Left: ${entry.time_left}<br>
                 Timestamp: ${entry.timestamp}<br></li><br>`;
      });
      html += "</ul>";

      // Send the HTML to the client for rendering
      res.send(html);
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
      res.status(500).send("Error retrieving data");
    });
});

app.get("/150Rs", (req, res) => {
  const collectionName = `150_Rs_Competition`;

  db.collection(collectionName)
    .find({})
    .toArray()
    .then((data) => {
      if (data.length === 0) {
        console.log("No data found in the collection.");
        res.send("<h2>No data found in the collection.</h2>");
        return;
      }

      // Sort the data
      data.sort(compareData);

      // Construct HTML to display the retrieved and sorted data
      let html = "<h2>Retrieved and Sorted Data:</h2><ul>";
      data.forEach((entry, index) => {
        html += `<li>Entry ${index + 1}:<br>
                 Name: ${entry.name}<br>
                 Phone Number: ${entry.phone_num}<br>
                 Participation Fees: ${entry.participation_fees}<br>
                 WPM: ${entry.wpm}<br>
                 Mistakes: ${entry.mistakes}<br>
                 Time Left: ${entry.time_left}<br>
                 Timestamp: ${entry.timestamp}<br></li><br>`;
      });
      html += "</ul>";

      // Send the HTML to the client for rendering
      res.send(html);
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
      res.status(500).send("Error retrieving data");
    });
});

app.get("/200Rs", (req, res) => {
  const collectionName = `200_Rs_Competition`;

  db.collection(collectionName)
    .find({})
    .toArray()
    .then((data) => {
      if (data.length === 0) {
        console.log("No data found in the collection.");
        res.send("<h2>No data found in the collection.</h2>");
        return;
      }

      // Sort the data
      data.sort(compareData);

      // Construct HTML to display the retrieved and sorted data
      let html = "<h2>Retrieved and Sorted Data:</h2><ul>";
      data.forEach((entry, index) => {
        html += `<li>Entry ${index + 1}:<br>
                 Name: ${entry.name}<br>
                 Phone Number: ${entry.phone_num}<br>
                 Participation Fees: ${entry.participation_fees}<br>
                 WPM: ${entry.wpm}<br>
                 Mistakes: ${entry.mistakes}<br>
                 Time Left: ${entry.time_left}<br>
                 Timestamp: ${entry.timestamp}<br></li><br>`;
      });
      html += "</ul>";

      // Send the HTML to the client for rendering
      res.send(html);
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
      res.status(500).send("Error retrieving data");
    });
});

// app.get("/retrieveData", (req, res) => {
//   const collectionName = `30_Rs_Competition`;
//   db.collection(collectionName)
//     .find({})
//     .toArray()
//     .then((data) => {
//       if (data.length === 0) {
//         console.log("No data found ");
//         res.send("<h2>No data found in collection.</h2>");
//         return;
//       }
//       let html = "<h2>Retrieved Data:</h2><ul>";
//       data.forEach((entry, index) => {
//         html += `<li>Entry ${index + 1}:<br>
//                  Name: ${entry.name}<br>
//                  Phone Number: ${entry.phone_num}<br>
//                  Participation Fees: ${entry.participation_fees}<br>
//                  WPM: ${entry.wpm}<br>
//                  Mistakes: ${entry.mistakes}<br>
//                  Timestamp: ${entry.timestamp}<br></li><br>`;
//       });
//       html += "</ul>";

//       // Send the HTML to the client for rendering
//       res.send(html);
//     })
//     .catch((error) => {
//       console.error("Error retrieving data:", error);
//       res.status(500).send("Error retrieving data");
//     });
// });

// Route to serve index.html

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/printData", (req, res) => {
  db.collection("data")
    .find({})
    .toArray()
    .then((data) => {
      if (data.length === 0) {
        console.log("No data found in the collection.");
        res.send("No data found in the collection.");
        return;
      }

      // Print the retrieved data
      console.log("Retrieved Data:");
      data.forEach((entry, index) => {
        console.log(`Entry ${index + 1}:`);
        console.log(`Name: ${entry.name}`);
        console.log(`Number: ${entry.number}`);
        console.log(`Amount: ${entry.amount}`);
        console.log(`Payment Method: ${entry.paymentMethod}`);
        console.log("-------------------------");
      });
      res.send("Check terminal for data");
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
      res.status(500).send("Error retrieving data");
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
