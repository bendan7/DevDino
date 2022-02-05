import { async } from "@firebase/util";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Collection, getPostsListCallbackFunction, Post } from "./interfaces";





export const getPostsList = async (callback: typeof getPostsListCallbackFunction): Promise<void> =>{

    const postsColRef = collection(db, Collection.POSTS);
    const snapshot = await getDocs(postsColRef);

    const data: Post[] = []
    snapshot.forEach((doc: any) => {
        data.push({...doc.data(), id: doc.id})
    })

    if(callback) callback(data);  
}