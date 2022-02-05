import { collection, getDoc, getDocs, doc, query } from "firebase/firestore";
import { db } from "../firebase/config";
import { Collection, getPostsDataCallbackFunction, getPostsListCallbackFunction, PostListItem } from "./interfaces";


export async function getPostsList (callback: typeof getPostsListCallbackFunction): Promise<void> {

    const postsColRef = collection(db, Collection.POSTS);
    const snapshot = await getDocs(postsColRef);

    const data: PostListItem[] = []
    snapshot.forEach((doc: any) => {
        data.push({...doc.data(), id: doc.id})
    })

    if(callback) callback(data);  
}


export async function getPostsData(postId: string, callback: typeof getPostsDataCallbackFunction): Promise<void> {

    const postsColRef = collection(db, Collection.POST_DATA);
    const snapshot = await getDocs(postsColRef);

    snapshot.forEach((doc: any) => {
        if( doc.id.trim() ===  postId) {
            console.log("Document data:", doc.data(),);
            callback({
                ...doc.data(), id: doc.id
            })
        }
        
    })
     
}

