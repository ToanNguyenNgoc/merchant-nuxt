export interface IResponse<Data> {
  data: Data;
}
export interface IRefreshToken {
  token: string;
  token_expired_at: string;
  refresh_token: string;
}