import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustumerService } from "../services/CreateCustumerService";

class CreateCustumerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const { name, email } = request.body as { name: string, email: string};

        const costumerService = new CreateCustumerService()

        const costumer = await costumerService.execute({ name, email });

        reply.send(costumer)
    }
}

export { CreateCustumerController }
