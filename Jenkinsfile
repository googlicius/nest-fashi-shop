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
            }
            post {
                success {
                    echo "========Build successfully========"
                }
                failure {
                    echo "========Build failed========"
                }
            }
        }
        stage("Test") {
            steps {
                echo "Testing project..."
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
