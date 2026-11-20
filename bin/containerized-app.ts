#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ContainerizedAppStack } from "../lib/containerized-app-stack";
import { RepositoryStack } from "../lib/repository-stack";

const app = new cdk.App();

const repoStack = new RepositoryStack(app, "repoStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
new ContainerizedAppStack(
  app,
  "ContainerizedAppStack",
  repoStack.repository,
  {}
);