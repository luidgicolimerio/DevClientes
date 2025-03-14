import prismaClient from "../prisma";

interface CreateCustumerProps{
    name: string;
    email: string;
}

class CreateCustumerService{
    async execute({ name, email}: CreateCustumerProps){
        if(!name || !email){
            throw new Error("Preencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            }

        })

        return customer
    }
}

export { CreateCustumerService }