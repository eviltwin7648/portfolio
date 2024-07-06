'use server'

import { connectToDatabase } from "./database";
import Form from "./modal";


export async function submitForm(data: FormData) {
 
    try {
        await connectToDatabase();
        await Form.create(data);
    
      } catch (error:any) {
        throw new error(error);
        
      }
    
}