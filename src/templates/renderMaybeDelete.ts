
import { Request, Response } from "express";
import { Store } from "../store";

export const renderMaybeDelete = async (req: Request, res: Response) => {
  try {
    await Store.Instance.remove(req.url.substring(1));
    res.status(200).send("");
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}