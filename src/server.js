// ESM
import Fastify from 'fastify'
import usersRoutes from './Routes/usersRoute.js'
import authRoutes from './Routes/authRoutes.js'

const fastify = Fastify({
  logger: true
})

await fastify.register(userRoutes,{
  prefix: "/users"
})
await fastify.register( authRoutes )

fastify.get("/", async () => {
  return "Servidor funcionando :)"
})

const start = async () => {
  try {
    await fastify.listen({port: 3000})
  } catch(err){
    fastify.log.error(err)
    process.exit(1)
  }
}

start()

// Declare a route
// fastify.get('/get', async (request, reply) => {
//   return { estatos: 'A nossa requisição está funcionando' }
// })


// let users = [
//         {
//             nome: "Daniel", 
//             idade: 38
//         },
//         {
//             nome: "Deyse", 
//             idade: 36
//         }
// ]

// fastify.get('/get', async (request, reply) => {
//     return users}
// )

// fastify.post('/post', async (request, reply) => {
//     const novoUsuario = {
//         nome: "Joel",
//         idade: 27
//     }
//     users.push(novoUsuario)
//     return {
//         message: "Usuario criado",
//         usuario: novoUsuario
//     }}
// )


/**
 * Run the server!
 */
