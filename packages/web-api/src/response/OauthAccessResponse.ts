/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type OauthAccessResponse = WebAPICallResult & {
  access_token?:     string;
  authorizing_user?: User;
  bot?:              Bot;
  enterprise_id?:    string;
  error?:            string;
  incoming_webhook?: IncomingWebhook;
  installer_user?:   User;
  needed?:           string;
  ok?:               boolean;
  provided?:         string;
  scope?:            string;
  scopes?:           Scopes;
  team_id?:          string;
  team_name?:        string;
  token_type?:       string;
  user_id?:          string;
  warning?:          string;
};

export interface User {
  app_home?: string;
  user_id?:  string;
}

export interface Bot {
  bot_access_token?: string;
  bot_user_id?:      string;
}

export interface IncomingWebhook {
  channel?:           string;
  channel_id?:        string;
  configuration_url?: string;
  url?:               string;
}

export interface Scopes {
  app_home?: string[];
  channel?:  string[];
  group?:    string[];
  im?:       string[];
  mpim?:     string[];
  team?:     string[];
  user?:     string[];
}