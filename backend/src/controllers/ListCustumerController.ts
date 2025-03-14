import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustumerService } from "../services/ListCustumerService";

class ListCustumerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustumerService = new ListCustumerService();

        const customers = await listCustumerService.execute();
        
        reply.send(customers);

    }
}

export { ListCustumerController }