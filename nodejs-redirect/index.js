const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get('/*', (req, res) => {
    res.redirect("https://ratdotraw.github.io")
})

app.listen(port, () => {
    console.log(`nodejs listening on port ${port}`)
})