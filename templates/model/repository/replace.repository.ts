import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { ReplaceRepositoryInterface } from "./replace.repository.interface";

@Injectable()
export class ReplaceRepository implements ReplaceRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<string> {
    return "Replaces found successfully";
  }
}
