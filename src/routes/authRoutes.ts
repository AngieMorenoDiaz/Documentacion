// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express,{ Router, Request, Response } from "express"
const router: Router= Router()

router.get(
    "/login",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (req:Request, res: Response)=>{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const payload={
            id:"User_Id",
            username:"Angie"
        }

        const options={
            expiresIn:"2h"
        }

        const secretKey="Gato negro"


    }
)