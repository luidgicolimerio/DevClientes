import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustumerService } from "../services/DeleteCustumerService";

class DeleteCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string }
        const custumerService = new DeleteCustumerService();

        const customer = await custumerService.execute({ id })
        
        reply.send(customer)

    }
}

export { DeleteCustomerController }