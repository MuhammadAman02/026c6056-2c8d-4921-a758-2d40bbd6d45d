import { FastifyRequest, FastifyReply } from 'fastify';
import { getAllFruits, getFruitById } from '../services/fruit.service';

export async function getFruitsHandler(
  req: FastifyRequest<{ Querystring: { color?: string; limit?: number } }>,
  res: FastifyReply
) {
  const fruits = getAllFruits(req.query);
  res.status(200).send(fruits);
}

export async function getFruitByIdHandler(
  req: FastifyRequest<{ Params: { id: number } }>,
  res: FastifyReply
) {
  const fruit = getFruitById(req.params.id);
  
  if (!fruit) {
    return res.status(404).send({ error: "Fruit not found" });
  }
  
  res.status(200).send(fruit);
}