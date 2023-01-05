import { v4 as uuidV4 } from "uuid";

class User {
  constructor() {
    this.id = uuidV4();
    this.admin = false;
  }

  public id: string;
  public name: string;
  public email: string;
  public admin: boolean;
  public created_at: Date;
  public updated_at: Date;
}

export { User };
