/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./swagger.conf"
import express,{Application, Request, Response} from "express"
import passport from "passport"

import dotenv from "dotenv"
dotenv.config()

import PacienteRouter from "./routes/Paciente.routes"
import MedicoRouter from "./routes/medico.routes"
import FormularioRouter from "./routes/formulario.routes"
import cors from "cors"
import miEstrategia from "./config/passport"

import rutas_auth from "./routes/authRoutes"

    
    

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
        passport.use(miEstrategia)
        this.app.use(passport.initialize())
    }
    /**
     * Definir y agregar las rutas de la API con express
     */
    
   

    private routes():void{
        this.app.use("/", PacienteRouter)     
        this.app.use("/", MedicoRouter)  
        this.app.use ("/", FormularioRouter)
        this.app.use("/auth", rutas_auth)
        this.app.use("/",passport.authenticate("jwt"),PacienteRouter, MedicoRouter, FormularioRouter)
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
