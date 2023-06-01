/* eslint-disable indent */
// eslint-disable-next-line semi
import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"API de AteneaIPS",
            version:"1.0.0",
            description:"Esta API soporta la operacion de la IPS Atenea",
        },
        servers:[
			{
				url:"http://localhost:3000",
				description:"Servidor local de documentación"
			}
        ]

    },
    apis:["src/index.ts","./swagger/*.swagger.ts"]

}
export const swaggerSpec=swaggerJSDoc(swaggerOptions)