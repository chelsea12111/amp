import { InputJsonValue } from "../../types";

export type PreferenceUpdateInput = {
  context?: string | null;
  userId?: string | null;
  value?: InputJsonValue;
};
