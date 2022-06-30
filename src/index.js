// In src/index.js
const express = require("express");
// *** ADD ***
const championsRoutes = require('./v1/routes/championsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// *** ADD ***
app.use("/api/v1/champions", championsRoutes);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});