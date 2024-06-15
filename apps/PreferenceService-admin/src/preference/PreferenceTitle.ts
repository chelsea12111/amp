import { Preference as TPreference } from "../api/preference/Preference";

export const PREFERENCE_TITLE_FIELD = "context";

export const PreferenceTitle = (record: TPreference): string => {
  return record.context?.toString() || String(record.id);
};
