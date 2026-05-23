const express = require("express");
const dotenv = require('dotenv');
const path = require("path");
const project = require("./routers/project")
const certificate = require("./routers/certificate")
const connectdatabase = require("./config/connectdatabase")
const cors = require("cors");

const app = express();
app.use(cors());
dotenv.config({ path: path.join(__dirname, "./.env") });

connectdatabase();

app.use('/api/v1', project);
app.use('/api/v1', certificate);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`porst listen ${PORT}`);
});