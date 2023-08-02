/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import { onRequest } from "firebase-functions/v2/https";
import * as functions from "firebase-functions";
import * as logger from "firebase-functions/logger";
import {initializeApp} from "firebase-admin/app";
import {Firestore} from "firebase-admin/firestore";
import {Storage} from "@google-cloud/storage";
import {onCall} from "firebase-functions/v2/https";


initializeApp();

const fireStore = new Firestore();
const storage = new Storage()


const rawVideoBucketName = "mk2-yt-raw-videos";

export const createUser = functions.auth.user().onCreate((user) => {
  const userInfo = {
    uid: user.uid,
    email: user.email,
    photoUrl: user.photoURL,
  };

  fireStore.collection("users").doc(user.uid).set(userInfo);

  logger.info(`User Created: ${JSON.stringify(userInfo)}`);

  return;
});


export const generateUploadUrl = onCall(
 {maxInstances: 1}, async (request) => {

  // Check if user is authenticated 

  if (!request.auth) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "The function mus be called while authenticated."
    )
  }

  const auth = request.auth
  const data = request.data
  const bucket = storage.bucket(rawVideoBucketName)

  const fileName = `${auth.uid}-${Date.now()}.${data.fileExtension}`;

  // Get a v4 signed URL for uploading file
  const [url] = await bucket.file(fileName).getSignedUrl({
    version: "v4",
    action: "write",
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  });

  return {url, fileName};
 }
)