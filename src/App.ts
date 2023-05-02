/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./swagger.conf"
import express,{Application, Request, Response} from "express"
import { PrismaClient } from "@prisma/client"

/**
 * @author Angie Valentina Moreno
 * @description Clase inicial para aprender a manejar rutas y documentacion
 */
class App{
    //Atributos
    public app:any
    private server:any
    private prismaClient: PrismaClient

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

        this.prismaClient=new PrismaClient()
        this.routes()
    }
    /**
     * Definir y agregar las tutas de la API con express
     */
    
    private routes ():void{
        
        this.app.get(
            "/",
            (req:Request, res:Response)=>{
                res.send("Bienvenidos a la IPS Atenea IPS")
            }
        )

        this.app.post(
            "/crear paciente",
            async (req:Request, res:Response)=>{
              try {  
                 const{
                      cedula,
                      nombre,
                      apellido,
                      fecha,
                      telefono
                    }= req.body

                 const fechaNacimiento= new Date(fecha)
            
                 const paciente=await this.prismaClient.paciente.create(
                    {
                     data: {
                          cedula,
                          nombre,
                          apellido,
                          fechaNacimiento,
                          telefono
                       }
                    }
                 )
                  res.json("paciente")
                }catch (e:any){
                    res.status (400)
                    res.json({error:e.message})
                } 
                
            }
        )
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