import { Module } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { ReplaceController } from "./controller/replace.controller";
import { ReplaceRepository } from "./repository/replace.repository";
import { ReplaceService } from "./service/replace.service";

@Module({
  controllers: [ReplaceController],
  providers: [PrismaService, ReplaceService, ReplaceRepository],
  exports: [ReplaceService],
})
export class ReplaceModule {}
