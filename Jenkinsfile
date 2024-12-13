pipeline {
	agent any
	tools {
		nodejs 'node setup'
	}
	environment {
		FE_REPO = 'https://github.com/Z3DRP/zrp-portfolio.git'
		FS_REPO = 'https://github.com/Z3DRP/z3-server.git'
	}
	stages {
		stage('Clone z3 server') {
			steps {
				script {
					echo "zrp-portfolio cloned automatically from SCM"
				}
				dir('z3-server') {
					git branch: 'main', url: "${env.FS_REPO}", credentialsId: 'gh-tkn'
				}
			}
		}
		stage('Build Front End') {
			steps {
				dir('zrp-portfolio') {
					sh 'npm install'
					sh 'npm run build'
				}
			}
		}
		stage('Update F Server') {
			steps {
				dir('z3-server') {
					sh 'rm -rf dist'
					sh 'cp -R ../zrp-portfolio/dist ./'
				}
			}
		}
		stage('Comit and Push') {
			steps {
				dir('z3-server') {
					sh '''
					git config user.name "Jenkins-CI"
					git config user.email "apex1421@outlook.com"
					git add .
					git commit -m "Update from job"
					git push origin main
					'''
				}
			}
		}
	}
	post {
		always {
			cleanWs()
		}
	}
}