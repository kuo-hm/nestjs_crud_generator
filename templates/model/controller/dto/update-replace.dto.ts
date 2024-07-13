import { PartialType } from "@nestjs/swagger";
import { CreateReplaceDto } from "./create-replace.dto";

export class UpdateReplaceDto extends PartialType(CreateReplaceDto) {}
