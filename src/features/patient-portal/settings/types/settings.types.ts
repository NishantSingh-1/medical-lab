export type PatientSettings = {
  emailNotifications: boolean;
  smsNotifications: boolean;
  whatsappNotifications: boolean;
  bookingReminders: boolean;
  reportAlerts: boolean;
  promotionalUpdates: boolean;
  language: "English" | "Hindi";
};