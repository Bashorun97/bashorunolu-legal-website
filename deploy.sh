#!/usr/bin/env bash

set -ex

# Get the git commit hash
GIT_COMMIT=$(git rev-parse HEAD)

# Build the docker image
gcloud builds \
   submit \
   --tag=us-central1-docker.pkg.dev/bashorunolu-website-staging/services/website:$GIT_COMMIT

# Deploy the docker image to Cloud Run
gcloud run deploy website \
  --image=us-central1-docker.pkg.dev/bashorunolu-website-staging/services/website:$GIT_COMMIT \
  --platform=managed \
  --region=us-central1 \
  --allow-unauthenticated \
  --memory=512Mi \
  --cpu=1 \
  --port=8080 \
  --min-instances=0 \
  --max-instances=3 \
  --timeout=300 \
  --concurrency=80

# Deploy firebase hosting
firebase deploy --only hosting
