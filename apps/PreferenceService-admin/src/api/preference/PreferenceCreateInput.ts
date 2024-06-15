import { InputJsonValue } from "../../types";

export type PreferenceCreateInput = {
  context?: string | null;
  userId?: string | null;
  value?: InputJsonValue;
};
