import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {clicks, logins, github} = req.query;
    const document = await prisma.stats.findFirst();

    if(clicks) {
        await prisma.stats.update({where: {id: document.id}, data: {clicks: {increment: 1}}})
    }
    
    if(logins) {
        await prisma.stats.update({where: {id: document.id}, data: {logins: {increment: 1}}})
    }
    
    if(github) {
        await prisma.stats.update({where: {id: document.id}, data: {github: {increment: 1}}})
    }
    
    res.status(200).end();
}