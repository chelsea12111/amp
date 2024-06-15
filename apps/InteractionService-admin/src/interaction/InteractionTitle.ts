import { Interaction as TInteraction } from "../api/interaction/Interaction";

export const INTERACTION_TITLE_FIELD = "userId";

export const InteractionTitle = (record: TInteraction): string => {
  return record.userId?.toString() || String(record.id);
};
