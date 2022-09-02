import { Response } from "express";
import { projectSchema } from "../Helpers/projectvalidator";
import projectCustom from "../Interfaces/projectCustom";
import mssql from 'mssql'
import { sqlConfig } from "../Config/Config";




export const createProject = async(req:projectCustom,res:Response)=>{
    try {

        const{project_name,project_desc,project_timeline,email} = req.body
        // const {error, value} = projectSchema.validate(req.body)
        // if(error){
        //     return res.status(400).json({
        //         message: error.details[0].message
        //     })
        // }
        const pool = await mssql.connect(sqlConfig); 
        
        if(pool.connected){
            console.log("connected successfully");
            
        }
        await pool.request()
        .input('project_name',mssql.VarChar,project_name)
        .input('project_desc',mssql.VarChar,project_desc)
        .input('project_timeline',mssql.VarChar,project_timeline)
        // .input('email',mssql.VarChar,email)
        .execute("createProject")

        return res.json({
            message:'project created successfully...'
        })


    } catch (error) {
        return res.status(400).json({
            message:error
        })
    }
}

export const getAllProjects = async(req:projectCustom,res:Response)=>{
    try {
        
        const pool = await mssql.connect(sqlConfig);
        const results = (await pool.request().query("select * from Projects")).recordset;
        if (results.length == 0) {
          return res.status(406).send("No Entries Found");
        }


        return res.status(201).json(results);
      } catch (error:any) {
        return res.status(401).send(error.message);
      }
  
}

export const deleteProject = async(req:projectCustom,res:Response)=>{
    try {
        const project_id = parseInt(req.params.project_id);

        const pool = await mssql.connect(sqlConfig);
        if(pool.connected){
            console.log("connected...");
            
        }

        await pool.request()
        .input('project_id', mssql.Int,project_id)

        .execute('deleteProject' )

        return res.json({
            message: "project deleted successfully"
        })
        
        
    } catch (error) {
        // console.log(error);
        
        return res.json({
            message: error
        })
        
    }
}

export const assignProject = async(req:projectCustom,res:Response)=>{
    try {
        const {email} = req.body
        // const {error, value} = projectSchema2.validate(req.body)
        // if(error){
        //     return res.status(400).json({
        //         message: error.details[0].message
        //     })
        // }
        

        const pool = await mssql.connect(sqlConfig)
        if (!email) {
            return res
              .status(400)
              .send({ message: "email cannot be empty" });
         }

         pool
         .request()
         .input("email", mssql.VarChar, email)
        //  .input("user_id", mssql.Int, user_id)
         .execute("assignProject", (error, results) => {
           if (error) {
             return res.status(500).send({ message: "Error" });
           }
           return res
             .status(201)
             .send({ message: `Project  Assigned Successfully to user ${email}` });
         });

    } catch (error) {
        console.log(error);
        
        
    }
}