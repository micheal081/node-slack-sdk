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
export type TeamPreferencesListResponse = WebAPICallResult & {
  ok?:                     boolean;
  msg_edit_window_mins?:   number;
  allow_message_deletion?: boolean;
  display_real_names?:     boolean;
  disable_file_uploads?:   string;
  who_can_post_general?:   string;
  error?:                  string;
  needed?:                 string;
  provided?:               string;
};
