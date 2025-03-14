import prismaClient from "../prisma";

class ListCustumerService{
    async execute(){
        const customers = await prismaClient.customer.findMany()

        return customers;
    }
}

export {ListCustumerService}