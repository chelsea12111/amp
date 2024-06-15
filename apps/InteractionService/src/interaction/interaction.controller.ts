import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InteractionService } from "./interaction.service";
import { InteractionControllerBase } from "./base/interaction.controller.base";

@swagger.ApiTags("interactions")
@common.Controller("interactions")
export class InteractionController extends InteractionControllerBase {
  constructor(protected readonly service: InteractionService) {
    super(service);
  }
}
