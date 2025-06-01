pipeline {
  agent any

  environment {
    DOCKER_IMAGE = 'second-hand-backend:latest'
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/YOUR_USERNAME/Second-Hand.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $DOCKER_IMAGE ./Server'
      }
    }

    stage('Run Tests') {
      steps {
        sh '''
          docker run --rm $DOCKER_IMAGE sh -c "
            npm install &&
            npm test
          "
        '''
      }
    }

    stage('Docker Compose Up') {
      steps {
        sh 'docker compose up -d'
      }
    }
  }

  post {
    always {
      sh 'docker compose down'
    }
  }
}
