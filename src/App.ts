/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./swagger.conf"
import express,{Application, Request, Response} from "express"

import PacienteRouter from "./routes/Paciente.routes"
import MedicoRouter from "./routes/medico.routes"
import FormularioRouter from "./routes/formulario.routes"
import cors from "cors"

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
        this.app.use(cors())
        this.routes()
    }
    /**
     * Definir y agregar las rutas de la API con express
     */
    
    private routes():void{
        this.app.use("/", PacienteRouter)     
        this.app.use("/", MedicoRouter)  
        this.app.use ("/", FormularioRouter)
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