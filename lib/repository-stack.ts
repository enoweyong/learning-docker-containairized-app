import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecr from 'aws-cdk-lib/aws-ecr';

export class RepositoryStack extends cdk.Stack {
  public readonly repository: ecr.Repository;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const repository = new ecr.Repository(this, 'Repository', {
      repositoryName: 'nodejs-app-repository',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    this.repository = repository;

    new cdk.CfnOutput(this, 'RepositoryUri', {
      value: repository.repositoryUri,
      description: 'ECR repository URI for pushing Docker images',
      exportName: `${this.stackName}-RepositoryUri`,
    });
  }
}