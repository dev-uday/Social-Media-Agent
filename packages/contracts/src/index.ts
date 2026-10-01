import { z } from "zod";

export const PlatformSchema = z.enum(["facebook", "instagram", "linkedin", "x"]);
export type Platform = z.infer<typeof PlatformSchema>;

export const CapabilityStateSchema = z.enum([
  "available",
  "missing_permission",
  "approval_required",
  "unsupported",
  "policy_disabled"
]);
export type CapabilityState = z.infer<typeof CapabilityStateSchema>;

export const CredentialStatusSchema = z.enum([
  "not_configured",
  "validating",
  "active",
  "limited",
  "expiring",
  "expired",
  "invalid",
  "revoked",
  "disabled"
]);
export type CredentialStatus = z.infer<typeof CredentialStatusSchema>;

export const CredentialMetadataSchema = z.object({
  id: z.string().uuid(),
  provider: z.string(),
  authType: z.enum([
    "page_token",
    "instagram_user_token",
    "oauth2_user_token",
    "oauth1_user_credentials",
    "api_key"
  ]),
  originMode: z.string().optional(),
  currentVersion: z.number().int().positive(),
  secretConfigured: z.boolean(),
  maskedFingerprint: z.string().optional(),
  verifiedAccountId: z.string().optional(),
  status: CredentialStatusSchema,
  expiresAt: z.string().datetime().nullable(),
  lastValidatedAt: z.string().datetime().nullable(),
  refreshMode: z.enum(["manual_replace", "provider_supported"])
});
export type CredentialMetadata = z.infer<typeof CredentialMetadataSchema>;
