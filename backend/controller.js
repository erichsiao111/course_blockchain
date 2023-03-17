const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.post("/registerUser", (req, res) => {
        console.log(req.body);
    }
)




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
