const axios = require("axios");

// const AddData = async () => {
//   for (let i = 296; i <= 1000; i++) {
//     try {
//       const response = await axios.get(`http://localhost:8080/${i}`);
//       console.log(`statusCode: ${response.status}, ${i}`);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// };

const UpdateData = async () => {
  let updateID = 11958;
  for (let i = 0; i < 2000; i++) {
    // console.log(updateID);
    try {
      const result = await axios.get(`http://localhost:8080/${updateID}`);
      console.log(`statusCode: ${result.status}, ${updateID}`);
    } catch (err) {
      console.log("\n\n", err);
    }

    updateID++;
  }
};

// AddData();

setInterval(async () => {
  console.log("\n\nInterval");
  UpdateData();
}, 500);
