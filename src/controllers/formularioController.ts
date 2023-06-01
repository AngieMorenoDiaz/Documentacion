import { Request, Response } from "express"
import * as jsonSchema from "../json-schema.json"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonSchema = Record< string, any>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class FormularioController {
    obtenerDefinicion(req: Request, res: Response){
      const {formulario}=req.params
      const miEsquema: JsonSchema=jsonSchema  

      if (miEsquema.definitions[formulario]){
        res.json (miEsquema.definitions[formulario])
        }else{
            res.status (400)
            res.json ({error:"No se encontró el formulario ${formulario}"})
        }
    }
    
}

export default FormularioController 