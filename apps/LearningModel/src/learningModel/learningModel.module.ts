import { Module } from "@nestjs/common";
import { LearningModelModuleBase } from "./base/learningModel.module.base";
import { LearningModelService } from "./learningModel.service";
import { LearningModelController } from "./learningModel.controller";
import { LearningModelResolver } from "./learningModel.resolver";

@Module({
  imports: [LearningModelModuleBase],
  controllers: [LearningModelController],
  providers: [LearningModelService, LearningModelResolver],
  exports: [LearningModelService],
})
export class LearningModelModule {}
