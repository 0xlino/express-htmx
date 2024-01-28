import { Request, Response } from 'express';
import { head } from './head';
import { body } from './body';

export const renderFrontpage = async (req: Request, res: Response) => {
    return res.send(`
    ${head()}
    ${body()}
    `);
}