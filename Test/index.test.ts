/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable indent */

//Importar bibliotecas

import Request from "supertest"
import App from "../src/App"

describe (
    "GET /",
    ()=>{
        let app: App
        
        beforeAll (
            ()=>{
                app=new App()
                app.start ()
            }
        )

        afterAll(
            ()=>{
             app.close ()   
            }
        )

        test(
            "Debe devolver un mensaje",
            async ()=>{
                const res = await Request(app.app).get("/")
                expect (res.statusCode).toEqual(200)
                expect (res.text).toEqual("Bienvenidos a typescript")

            }
        )


    }
)

