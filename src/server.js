const app = require("./app");
const {swaggerDocs: V1SwaggerDocs } = require("./swagger");
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});

