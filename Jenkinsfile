pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        echo "Fetching code..."
        checkout scm
      }
    }

    stage('Build Docker Images') {
      steps {
        sh 'docker-compose build'
      }
    }

    stage('Deploy Containers') {
      steps {
        // stop old containers (ignore if none running)
        sh 'docker-compose down || true'

        // start updated containers
        sh 'docker-compose up -d'
      }
    }
  }

  post {
    always {
      echo "Pipeline finished!"
    }
    success {
      echo "✔ Deployment successful"
    }
    failure {
      echo "❌ Deployment failed — check logs"
    }
  }
}

