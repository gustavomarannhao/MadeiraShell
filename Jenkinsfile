stages{
      stage('deploy to S3'){
          steps{
              sh 'aws s3 cp public/index.html s3://gustavo-madeiramadeira'
              sh 'aws s3api put-object-acl --bucket gustavo-madeiramadeira --key index.html --acl public-read'
              sh 'aws s3 cp public/error.html s3://gustavo-madeiramadeira'
              sh 'aws s3api put-object-acl --bucket gustavo-madeiramadeira --key error.html --acl public-read'
          }
      }
  }
