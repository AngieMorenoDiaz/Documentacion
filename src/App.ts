/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./swagger.conf"
import express,{Application, Request, Response} from "express"

import PacienteRouter from "./routes/Paciente.routes"


/**
 * @author Angie Valentina Moreno
 * @description Clase inicial para aprender a manejar rutas y documentacion
 */
class App{
    //Atributos
    public app:any
    private server:any
    

/**
 * @author Angie Valentina Moreno
 */

    constructor(){
        this.app=express()
        this.app.use(express.json())
        this.app.use(
            "/api-docs",
            swaggerUi.serve,
            swaggerUi.setup(swaggerSpec)
        )
        this.routes()
    }
    /**
     * Definir y agregar las tutas de la API con express
     */
    
    private routes():void{
        this.app.use("/", PacienteRouter)     
        
    }
    
    public start():void{
            this.server=this.app.listen(
                3000,
                ()=>{console.log("El servidor esta escuchando en el puerto 3000")}
            )
    }
    public close():void{
		this.server.close()

    }
}
export default App