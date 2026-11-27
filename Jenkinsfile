pipeline {
    agent any

    stages {
        stage('1. Clonación del repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/AkF0x1/proyecto_tecnicas_despliegue.git'
            }
        }

        stage('2. Instalación de dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('3. Ejecución de pruebas básicas') {
            steps {
                sh 'npm test'
            }
        }

        stage('4. Construcción del proyecto') {
            steps {
                sh 'npm run build'
            }
        }

        stage('5. Simulación de despliegue') {
            steps {
                sh 'echo "Despliegue realizado correctamente en ambiente de pruebas"'
            }
        }
    }
}