/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express,{ Router, Request, Response } from "express"
import jwt from "jsonwebtoken"

const router: Router= Router()

router.get(
    "/login",
    
    (req:Request, res: Response)=>{
        
        const payload={
            id:"user_id",
            username:"Angie"
        }

        const options={
            expiresIn:"2h"
        }

        const secretKey= process.env.SECRET_KEY
        if(typeof secretKey=="string"){
        const token= jwt.sign(payload, secretKey, options)
        res.json([token])
        }
        }
)

export default router