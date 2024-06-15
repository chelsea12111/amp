import * as graphql from "@nestjs/graphql";
import { PreferenceResolverBase } from "./base/preference.resolver.base";
import { Preference } from "./base/Preference";
import { PreferenceService } from "./preference.service";

@graphql.Resolver(() => Preference)
export class PreferenceResolver extends PreferenceResolverBase {
  constructor(protected readonly service: PreferenceService) {
    super(service);
  }
}
