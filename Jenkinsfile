pipeline {
	agent any
	tools {
		nodejs 'node setup'
	}
	environment {
		FE_REPO = 'https://github.com/Z3DRP/zrp-portfolio.git'
		FS_REPO = 'https://github.com/Z3DRP/z3-server.git'
		FE_DIST = '/var/jenkins_home/workspace/portfolio-frontend-deployment/zrp-portfolio/dist'
		FS_DIST = '/var/jenkins_home/workspace/portfolio-frontend-deployment/z3-server'
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
		stage('Update F Server') {
			steps {
					sh 'rm -rf z3-server/dist'
					sh 'cp -R dist z3-server/ '
			}
		}
		stage('Comit and Push z3') {
			steps {
				dir('z3-server') {
					withCredentials([string(credentialsId: 'gh-tkn-str', variable: 'TKN')]) {
							sh '''
								git config user.name "CI"
								git config user.email "apex1421@outlook.com"
								git add .
								git commit -m "Update from job" || echo "Nothing to commit"
								git push https://CI:${TKN}@github.com/Z3DRP/z3-server.git main
								'''
					}
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
