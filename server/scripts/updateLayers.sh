# Use this file to update the lambda layers for each lambda.

# First create the new lambda layer, or lambda layer version, in aws by uploading the new lambda layer code.
# Then copy the arn for the lambda layer from aws to the .server LAMBDALAYER_ARN variable.
# Then run this script.

source .server

# Use the AWS CLI to upload the zip file to the S3 bucket
echo Uploading lambda layer to S3 bucket...
aws s3 cp lambdasDependencies.zip s3://$BUCKET/lambdasDependencies.zip
echo Lambda layer uploaded to S3 bucket.

# Create a new lambda layer version by uploading the new lambda layer code from S3
echo Creating new lambda layer version...
layer_version_arn=$(aws lambda publish-layer-version --layer-name lambdasDependencies --content S3Bucket=$BUCKET,S3Key=lambdasDependencies.zip --compatible-runtimes nodejs12.x --output text --query 'LayerVersionArn')
echo New lambda layer version created: $layer_version_arn

# Update the LAMBDALAYER_ARN variable in .server with the new lambda layer ARN
sed -i.bak "s/LAMBDALAYER_ARN=.*/LAMBDALAYER_ARN=$layer_version_arn/" .server

# Update the lambda layers for each lambda in the EDIT_LAMBDALIST
i=1
PID=0
pids=()
for lambda in $EDIT_LAMBDALIST
do
    aws lambda update-function-configuration --function-name  $lambda --layer $layer_version_arn 1>>/dev/null & 
    echo lambda $i, $lambda, updating lambda layer...
    pids[${i-1}]=$!
    ((i=i+1))
done
for pid in ${pids[*]}; do
    wait $pid
done
echo Lambda layers updated for all lambdas in .server
