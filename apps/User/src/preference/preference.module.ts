import { Module } from "@nestjs/common";
import { PreferenceModuleBase } from "./base/preference.module.base";
import { PreferenceService } from "./preference.service";
import { PreferenceController } from "./preference.controller";
import { PreferenceResolver } from "./preference.resolver";

@Module({
  imports: [PreferenceModuleBase],
  controllers: [PreferenceController],
  providers: [PreferenceService, PreferenceResolver],
  exports: [PreferenceService],
})
export class PreferenceModule {}
