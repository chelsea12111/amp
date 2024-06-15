import * as graphql from "@nestjs/graphql";
import { InteractionResolverBase } from "./base/interaction.resolver.base";
import { Interaction } from "./base/Interaction";
import { InteractionService } from "./interaction.service";

@graphql.Resolver(() => Interaction)
export class InteractionResolver extends InteractionResolverBase {
  constructor(protected readonly service: InteractionService) {
    super(service);
  }
}
