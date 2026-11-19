import usersController from "../Controllers/userController.js";

export default async function userRoutes(fastify){
   fastify.get("/get", async () =>{
    return await usersController.get()
   })
   fastify.post("/post", async (req) =>{
        return await usersController.post(req)
   })
   fastify.put("/put", async (req) =>{
        return await usersController.put(req)
   })
   fastify.delete("/delete", async (req) =>{
        return await usersController.delete(req)
   })
}