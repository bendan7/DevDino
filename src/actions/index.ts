import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../firebase/config";
import {
  Collection,
  getPostsDataCallbackFunction,
  getPostsListCallbackFunction,
  CommentData,
  PostData,
  PostListItem,
} from "./interfaces";

const postsListCollectionRef = collection(firestore, Collection.POSTS_LIST);
const postsDataCollectionRef = collection(firestore, Collection.POST_DATA);

// prettier-ignore
export async function getPostsList(callback: typeof getPostsListCallbackFunction): Promise<void> {

    const snapshot = await getDocs(postsListCollectionRef);
    const data: PostListItem[] = []

    snapshot.forEach((doc: any) => {
        data.push({...doc.data(), id: doc.id})
    })

    if(callback) callback(data);  
}

// prettier-ignore
export async function getPostsData(postId: string, callback: typeof getPostsDataCallbackFunction): Promise<void> {
    
    const docRef = doc(firestore, Collection.POST_DATA, postId)
    const docSnapShot = await getDoc(docRef)

    if(docSnapShot.exists()){
        const data: any = docSnapShot.data();
        callback({
            ...data, id: postId
        })
    }

}

// prettier-ignore
export async function addNewPost(postData: PostData, callback: Function): Promise<void> {

    try {
        // Adding new post to PostData collection
        const newDoc = await addDoc(postsDataCollectionRef, postData)

        // Adding new post info to post List collection
        const post: PostListItem = {
            createBy: postData.createBy,
            createAt: postData.createAt,
            title: postData.title,
            commentsCount: 0,
            lastCommentBy: null,
            lastCommentAt: null
        }
        const docRef = doc(firestore, Collection.POSTS_LIST, newDoc.id)
        await setDoc(docRef, post);
    }
    catch(e: any){
        console.error(e);
        return;
    }

    if(callback) callback();
}

// prettier-ignore
export async function addNewComment(postId: string, values: CommentData, callback?: Function): Promise<void> {
  try {

    // Adding new comment to PostData collection
    const postDataRef = doc(firestore, Collection.POST_DATA, postId);
    await updateDoc(postDataRef, {
      comments: arrayUnion(values)
    });

    // Updating last comment info in PostList collection
    const postRef = doc(firestore, Collection.POSTS_LIST, postId);
    const snapShot = await getDoc(postRef)
    if(snapShot.exists()){
      const data = snapShot.data();
      await updateDoc(postRef, {lastCommentAt: Timestamp.now(), lastCommentBy: values.createBy, commentsCount: data.commentsCount + 1 });
    }
    
  } catch (e: any) {
    console.error(e);
    return;
  }

  if (callback) callback();
}
