pipeline {
    agent any
    parameters {
        choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'])
        booleanParam(name: 'executeTests', defaultValue: true, description: 'Do you want to run test?')
    }
    stages{
        stage("Build") {
            steps {
                echo "Building project..."
                nodejs('Node_10.19.0') {
                    sh 'yarn'
                    sh 'yarn build'
                }
            }
            post {
                success {
                    echo "========Build successfully 123========"
                }
                failure {
                    echo "========Build failed successfully========"
                }
            }
        }
        stage("Test") {
            when {
                expression {
                    params.executeTests
                }
            }
            steps {
                echo "Testing project..."
                nodejs('Node_10.19.0') {
                    sh 'yarn test'
                }
            }
            post {
                success {
                    echo "========Test successfully========"
                }
                failure {
                    echo "========Test failed========"
                }
            }
        }
        stage("Run") {
            steps {
                echo "Running project..."
            }
            post {
                success {
                    echo "========Run successfully========"
                }
                failure {
                    echo "========Run failed========"
                }
            }
        }
    }
    post {
        always {
            echo "========always========"
        }
        success {
            echo "========pipeline executed successfully ========"
        }
        failure {
            echo "========pipeline execution failed========"
        }
    }
}
