const express = require("express")
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
    return res.json({msg : "hello from docker nodejs"})
});

app.listen(PORT, () => {
    console.log(`Port is Listening on`,PORT);
})