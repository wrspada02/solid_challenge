import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.body;

      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(user);
    } catch (e) {
      return response.status(404).json({ error: e });
    }
  }
}

export { ShowUserProfileController };
