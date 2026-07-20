export type AvailableSlot = {
  id: string;
  date: string;
  time: string;
  available: boolean;
};

export const demoSlots: AvailableSlot[] = [
  {
    id: "1",
    date: "2026-07-28",
    time: "09:00 AM",
    available: true,
  },
  {
    id: "2",
    date: "2026-07-28",
    time: "10:00 AM",
    available: false,
  },
  {
    id: "3",
    date: "2026-07-28",
    time: "11:00 AM",
    available: true,
  },
  {
    id: "4",
    date: "2026-07-29",
    time: "09:00 AM",
    available: true,
  },
];