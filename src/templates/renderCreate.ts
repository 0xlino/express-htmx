import { Request, Response } from "express";
import { Store } from "../store";


export async function renderCreate(req: Request, res: Response) {
  const id = await Store.Instance.addLink(req.body.link);

  return res.send(`<section class="card w-96 bg-accent text-accent-content mx-auto">
  <div class="card-body">
    <strong>http://localhost:3000/${id}</strong>

    <p class="truncate">${req.body.link}</p>
  </div>
</section>
`);
}
