import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LearningModelService } from "./learningModel.service";
import { LearningModelControllerBase } from "./base/learningModel.controller.base";

@swagger.ApiTags("learningModels")
@common.Controller("learningModels")
export class LearningModelController extends LearningModelControllerBase {
  constructor(protected readonly service: LearningModelService) {
    super(service);
  }
}
