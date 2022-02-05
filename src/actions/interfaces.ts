
export enum Collection {
    POSTS ="posts"
}

export declare function getPostsListCallbackFunction(data: any[]): void;


export interface Post {
    id: string;
    createBy: string;
    createAt: any;
    title: string;
    commentsCount: number;
    lastCommentBy: string;
    lastCommentAt: any;
}