import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-southeast-1_SM348oqqs",
    ClientId:"6lhokj4jnuaonhl6vsbadu1e7n"
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new CognitoUserPool(poolData);