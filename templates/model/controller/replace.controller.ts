import { Controller, Get, HttpException } from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { errorMapper } from "../errors/mapper.error";
import { ReplaceService } from "../service/replace.service";

@ApiBearerAuth("Autorization")
@ApiTags("Replace")
@Controller("replace")
export class ReplaceController {
  constructor(private readonly replaceService: ReplaceService) {}

  @Get()
  @ApiResponse({ status: 200, description: "Replaces found successfully" })
  @ApiResponse({ status: 404, description: "Replaces not found" })
  async getAll() {
    try {
      const replaces = await this.replaceService.getAll();
      return replaces;
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, errorMapper(error));
    }
  }
}
