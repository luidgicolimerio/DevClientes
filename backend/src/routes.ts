import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import { CreateCustumerController } from "./controllers/CreateCustumerController";
import { ListCustumerController } from "./controllers/ListCustumerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify:FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/custumer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustumerController().handle(request, reply)
    })

    fastify.get("/custumers", async (request: FastifyRequest, reply: FastifyReply)=>{
        return new ListCustumerController().handle(request, reply)
    })

    fastify.delete("/custumer", async (request: FastifyRequest, reply: FastifyReply)=>{
        return new DeleteCustomerController().handle(request, reply)
    })
}
