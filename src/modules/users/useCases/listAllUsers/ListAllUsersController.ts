import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      let id: string;

      if (Array.isArray(user_id)) {
        [id] = user_id;
      } else {
        id = user_id;
      }

      const users = this.listAllUsersUseCase.execute({ user_id: id });

      return response.status(200).json(users);
    } catch (e) {
      return response.status(400).json({ error: e });
    }
  }
}

export { ListAllUsersController };
