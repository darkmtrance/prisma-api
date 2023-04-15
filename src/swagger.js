const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

//Metadata info about our API
const options = {
    definition: {
        openapi: "3.0.0",
        info: { tittle: "Prisma API", version: "1.0.0"},
        servers: [
            {
                url: "https://prisma.matomaylla.com"
            },
            {
                url: "http://localhost:3000"
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                }
            },
            schemas: {
                post: {
                    type: "object",
                    required: ["title","content"],
                    properties: {
                        title :{
                            type: "string"
                        },
                        content :{
                            type: "string"
                        }
                    }
                },
            }
        }
    },
    apis:['src/routes/posts.js']
}

// docs en JSON format
const swaggerSpec = swaggerJSDoc(options)

// function to setup our docs
const swaggerDocs = (app, port) =>{
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('docs.json', (req, res) => {
        res.setHeader('Content-Type','application/json' );
        res.send(swaggerSpec);
    })

    console.log(`Docs are avaliable at http://localhost:${port}/docs`)
}

module.exports = { swaggerDocs }