import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-southeast-1_qSeD9dlXH",
    ClientId:"61knv0dbt05sk0r28ios0med6v"
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new CognitoUserPool(poolData);