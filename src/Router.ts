import express,{Application, Request, Response} from 'express'

class App{
    //Atributos
    public app:any
    private server:any

    constructor(){
        this.app=express()
        this.app.use(express.json())
        this.routes()
    }
    private routes ():void{
        this.app.get(
            "/",
            (req:Request, res:Response)=>{
                res.send("Bienbenidos a typescript")
            }

        )
        

    }
    
    public start():void{
            this.app.listen(
                3000,
                ()=>{console.log("El servidor esta escuchando en el puerto 3000")}
            )
        }
}

export default App