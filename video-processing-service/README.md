Run docker image
docker run -p 3000:3000 -d video-processing-service

View docker containers
docker ps -a

Copy processed video from docker to local
docker cp 425b49e9e2de:/app/processed-testVid.mov ./

project id: video-cloud-393412
docker build -t us-central1-docker.pkg.dev/video-cloud-393412/video-processing-repo/video-processing-service .

docker push us-central1-docker.pkg.dev/video-cloud-393412/video-processing-repo/video-processing-service

docker build -t us-central1-docker.pkg.dev/video-cloud-393412/video-processing-repo/video-processing-service .

repository in the artifact registry
video-processing-repo

gcloud run deploy video-processing-service --image us-central1-docker.pkg.dev/video-cloud-393412/video-processing-repo/video-processing-service \
 --region=us-central1 \
 --platform managed \
 --timeout=3600 \
 --memory=2Gi \
 --cpu=1 \
 --min-instances=0 \
 --max-instances=1 \
 --ingress=internal

docker rm 425b49e9e2de

docker pull

docker image: 6399416e1d51

# Clean Up

To list the running containers run:

docker ps
To stop a running container run:

docker stop <container-id-or-name>
To list all containers, even those that have been stopped, run:

docker ps -a
To remove a container run:

docker rm <container-id-or-name>

const rawVideoBucketName = "mk2-yt-raw-videos";
const processedVideoBucketName = "mk2-yt-processed-videos";

# Create raw videos bucket

gsutil mb -l us-central1 --pap=enforced gs://mk2-yt-raw-videos
gsutil mb -l us-central1 --pap=enforced gs://mk2-yt-processed-videos

# Configure bucket to send file upload notifications to Pub/Sub topic

gsutil notification create -t video-uploads-topic -f json -e OBJECT_FINALIZE gs://mk2-yt-raw-videos

mk2-yt-processed-videos
