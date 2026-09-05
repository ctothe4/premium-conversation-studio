import { en, type Dictionary } from "./en";
import { fr } from "./fr";
import type { LanguageCode } from "@/config/markets";

export const dictionaries: Record<LanguageCode, Dictionary> = { en, fr };

export type { Dictionary };
