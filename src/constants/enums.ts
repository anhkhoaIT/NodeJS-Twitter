export enum verifyStatus {
  Unverified, //chưa verify email
  Verified, //đã verify email
  Banned //bị ban
}

export enum TokenType {
  AccessToken,
  RefreshToken,
  ResetPasswordToken,
  VerifyEmailToken
}
