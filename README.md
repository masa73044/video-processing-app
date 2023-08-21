# Media Monkey

 <img src="assets/logo-main.png" alt="logo-main" title="logo-main" align="center" height="180" />

<br>

Welcome to Media Monkey - your media hub for video processing, uploading, and viewing.
Files are all stored securely through the Google Cloud Platform.

# Features

- Cloud Based Video Platform: Harnessing the capabilities of Google Cloud coupled with Firebase's agility, Media Monkey has high quality upload speeds, fortified security, and instantaneous access to your valuable media assets.

- Elegant Playback Interface: A confluence of aesthetic design principles and user-centricity, our playback interface ensures your audiences experience media the way it's meant to be – pristine and immersive.

  <br>

# Installation

Make sure you are in the project's video-processing-service directory

```
cd video-processing-service

npm install
```

## Create a Firebase Project

- Navigate to the Firebase Console.
  Create a new Firebase project. Note that this will also automatically create a Google Cloud project with the same project ID.
  Take note of the project id. This will be used throughout the setup.

  Tip: You can view the associated Google Cloud project using the same project id in the Google Cloud Console.

- Install gcloud and gsutil CLI tools
  Depending on your operating system, follow the installation guide for gcloud and gsutil provided in the official documentation.

<br> 
Once installed, initialize and authenticate gcloud:

<br>

```
gcloud auth login # Copy the output url and paste it into your browser

gcloud config set project <PROJECT_ID>

```

Create an Artifact Registry repository:

```
gcloud artifacts repositories create video-processing-repo \
  --repository-format=docker \
  --location=us-central1 \
  --description="Docker repository for video processing service"

```

## Firebase

## GCP

## Technologies

- <a href="#"><img src="assets/react-logo-color.png" alt="React" title="React" align="center" height='30'  /></a>
- <a href="#"><img src="assets/js-logo-color.png" alt="JavaScript" title="JavaScript" align="center" height='30'  /></a>
- <a href="#"><img src="assets/ts-logo-long-blue.png" alt="TypeScript" title="TypeScript" align="center" height='30'  /></a>
- <a href="#"><img src="assets/node-logo-color.png" alt="Node" title="Node" align="center" height='30'  /></a>
- <a href="#"><img src="assets/express-logo-color.png" alt="Express" title="Express" align="center" height='30'  /></a>
- <a href="#"><img src="assets/docker-logo-color.png" alt="Docker" title="Docker" align="center" height='30'  /></a>
- <a href="#"><img src="assets/gcp-logo-color.svg" alt="GCP" title="GCP" align="center" height='30'  /></a>
- <a href="#"><img src="assets/nextjs-logo-color.png" alt="nextjs" title="nextjs" align="center" height='30'  /></a>
