import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LearningModelServiceBase } from "./base/learningModel.service.base";

@Injectable()
export class LearningModelService extends LearningModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
