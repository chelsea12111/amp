import * as graphql from "@nestjs/graphql";
import { LearningModelResolverBase } from "./base/learningModel.resolver.base";
import { LearningModel } from "./base/LearningModel";
import { LearningModelService } from "./learningModel.service";

@graphql.Resolver(() => LearningModel)
export class LearningModelResolver extends LearningModelResolverBase {
  constructor(protected readonly service: LearningModelService) {
    super(service);
  }
}
