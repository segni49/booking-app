import {Client, Databases, Account, Storage } from 'node-appwrite';

//ADMIN CLIENT
const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '';
const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT  || '';
const key = process.env.NEXT_APPWRITE_API_KEY || '';





 export const createadminclient = async() => {
    
    const client = new Client()
    .setEndpoint(endpoint) // Your API Endpoint
    .setProject(project)             // Your project ID
    .setKey(key); 

    return {
        get account() {
               return new Account(client); 
        },
        get databases() {
            return new Databases(client);
        },
        get storage() {
            return new Storage(client);
        },
    };
};

export const createSessionClient = async (
    session: string
  ): Promise<{
    account: Account;
    databases: Databases;
  }> => { 
    const client = new Client()
    .setEndpoint(endpoint) // Your API Endpoint
    .setProject(project) 
    
    if (session) {
        client.setSession(session)
    }
   
   return {
        get account() {
               return new Account(client); 
        },
        get databases() {
            return new Databases(client);
        },
       
    };

}  

