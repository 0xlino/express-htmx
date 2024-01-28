
import { Request, Response } from "express";
import { Store } from "../store";

export const renderMaybeLink = async (req: Request, res: Response) => {
    const maybeLink = await Store.Instance.getLink(req.url.substring(1));

    if (maybeLink) {
      res.redirect(maybeLink);
    } else {
      res.sendStatus(404);
    }
}