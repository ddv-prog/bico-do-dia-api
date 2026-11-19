import usersRepository from "../Repositories/usersRepository.js";

const usersController = {
    async get(){
        return await usersRepository.get()
    },
    async post(req){
        const{name, age, email, password} = req.body
        return await usersRepository.post(name, age, email, password)
    },
    async put(req){
        const{id, name, age, email, password} = req.body
        return await usersRepository.put(id, name, age, email, password)
    },
    async delete(req){
        const{id} = req.body
        return await usersRepository.delete(id)
    }
}

export default usersController;