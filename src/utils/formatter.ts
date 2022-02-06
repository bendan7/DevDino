import { Timestamp } from "firebase/firestore";

export function formatDateTime(ts?: Timestamp | null): string {
  const date = ts?.toDate();

  return date
    ? `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
    : "";
}
