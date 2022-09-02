import {Request} from 'express'

interface projectCustom extends Request{
    body:{
        project_id:number;
        project_name:string;
        project_desc:string;
        project_timeline:string;
        project_status:string;
        is_deleted:boolean;
        user_id:string;
        email:string;


    }
}
export default projectCustom;


export interface project{
    project_id : number;
    project_name: string,
    project_desc: string,
    project_timeline:string,
    user_id:number
}