import { Timestamp } from "firebase/firestore";

export enum Collection {
  POSTS_LIST = "postsList",
  POST_DATA = "postsData",
}

// prettier-ignore
export declare function getPostsListCallbackFunction(data: PostListItem[]): void;
export declare function getPostsDataCallbackFunction(data: PostData): void;

export interface PostListItem {
  id?: string;
  createBy: string;
  createAt: Timestamp;
  title: string;
  commentsCount: number;
  lastCommentBy?: string | null;
  lastCommentAt?: Timestamp | null;
}

export interface PostData {
  id?: string;
  createBy: string;
  createAt: Timestamp;
  title: string;
  body: string;
  comments?: CommentData[];
}

export interface CommentData {
  createBy: string;
  createAt: Timestamp;
  body: string;
}
