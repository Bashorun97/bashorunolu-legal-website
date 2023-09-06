terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.79.0"
    }
  }

  backend "gcs" {
    bucket = "bashorunolu-website-staging-tfstate"
    prefix = "terraform/services/search/state"
  }
}

provider "google" {
  project = "bashorunolu-website-staging"
  region  = "us-central1"
  zone    = "us-central1-a"
}

