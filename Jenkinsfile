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
					sh 'npm ci'
					sh 'npm run build || echo "Build Failed"'
				}
			}
		}
		stage('debug dist') {
			steps {
				dir('zrp-portfolio') {
					sh 'pwd'
					sh 'ls -l ../'
					sh 'ls -l ../dist || echo "No root dist"'
				}
			}
		}
		stage('Update F Server') {
			steps {
				
				dir("${env.WORKSPACE}") {
					sh 'pwd'
					sh 'ls -l'
					sh 'ls -l zrp-portfolio/dist || echo "zrp dist not found"'
					sh 'ls -l z3-server || echo "z3 dir not found"'
					sh 'ls -l z3-server/dist'
					sh 'rm -rf z3-server/dist'
					sh 'cp -R zrp-portfolio/dist z3-server/ echo "Error: dist dir does not exists"'
				}
			}
		}
		stage('Comit and Push z3') {
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
