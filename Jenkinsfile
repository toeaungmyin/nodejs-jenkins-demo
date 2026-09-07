pipeline {
    agent {
        docker {
            image 'node:24-alpine'
            args '-u root:root'
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Artifact') {
            steps {
                sh 'npm prune --production'
                echo 'Ready for deployment packaging'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        failure {
            echo 'Node.js test pipeline failed.'
        }
    }
}
