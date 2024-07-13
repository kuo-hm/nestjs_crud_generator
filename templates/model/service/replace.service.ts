import { Injectable } from "@nestjs/common";
import { ReplaceRepository } from "../repository/replace.repository";

@Injectable()
export class ReplaceService {
  constructor(private repository: ReplaceRepository) {}

  async getAll() {
    return this.repository.findAll();
  }
}
