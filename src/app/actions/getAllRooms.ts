'use server';

import { createadminclient, createSessionClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const data =  process.env.NEXT_PUBLIC_APPWRITE_DATABASE || "";
const collectionid = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS || "";

export default async function getAllRooms() {
    try{
        const {databases} = await createadminclient();

        //fetch rooms
     
     const {documents: rooms} = await databases.listDocuments( data, collectionid ) ;  

         //revalidate
         revalidatePath('/', 'layout');
         return rooms;
         
    } catch(error: unknown) {
        if(error instanceof Error) {
            console.log(error.message);
            redirect('/error');
        } 
    }
}
