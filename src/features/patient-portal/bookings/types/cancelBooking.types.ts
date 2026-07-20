export const cancellationReasons = [
  "Booked by mistake",
  "Want to reschedule",
  "Doctor cancelled",
  "Found another lab",
  "Price issue",
  "Other",
] as const;

export type CancellationReason =
  (typeof cancellationReasons)[number];