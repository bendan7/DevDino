import { Timestamp } from "firebase/firestore";

export function formatDateTime(ts: Timestamp): string {
    const date = ts.toDate();
    return `${date.getDay()}/${date.getMonth()} ${date.getHours()}:${date.getMinutes()}`;
  }
  