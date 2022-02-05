import { Timestamp } from "firebase/firestore";

export enum Collection {
  POSTS = "posts",
}

export declare function getPostsListCallbackFunction(data: any[]): void;

export interface Post {
  id: string;
  createBy: string;
  createAt: Timestamp;
  title: string;
  commentsCount: number;
  lastCommentBy: string;
  lastCommentAt: Timestamp;
}
