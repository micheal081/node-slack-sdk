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
export type CallsUpdateResponse = WebAPICallResult & {
  call?:     Call;
  error?:    string;
  needed?:   string;
  ok?:       boolean;
  provided?: string;
};

export interface Call {
  channels?:             string[];
  date_start?:           number;
  desktop_app_join_url?: string;
  external_display_id?:  string;
  external_unique_id?:   string;
  id?:                   string;
  join_url?:             string;
  title?:                string;
  users?:                User[];
}

export interface User {
  avatar_url?:   string;
  display_name?: string;
  external_id?:  string;
  slack_id?:     string;
}