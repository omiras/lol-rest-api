// In src/index.js
const express = require("express");
// *** ADD ***
const championsRoutes = require('./v1/routes/championsRoutes');
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// *** ADD ***
app.use("/api/v1/champions", championsRoutes);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);

});