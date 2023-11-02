const app = require("./app");   
const http = require('http');
const { loadPlanetData } = require("./models/planetsModel");


const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

const startServer = async () => {
    await loadPlanetData(); 
    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`);
    });

}

startServer();