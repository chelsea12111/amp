import { Module } from "@nestjs/common";
import { InteractionModuleBase } from "./base/interaction.module.base";
import { InteractionService } from "./interaction.service";
import { InteractionController } from "./interaction.controller";
import { InteractionResolver } from "./interaction.resolver";

@Module({
  imports: [InteractionModuleBase],
  controllers: [InteractionController],
  providers: [InteractionService, InteractionResolver],
  exports: [InteractionService],
})
export class InteractionModule {}
