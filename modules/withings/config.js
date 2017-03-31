 
 
/**
 * Configuration file that defines parameters used to communicate with Withings
 */

// replace with your Withings developer client id
var client_id = "7f634bef48f2bee334876ee64dbffb29b6d441c450dd995ed1e70e90295"; // sample

// replace with your Withings developer client secret
var client_secret = "032c5c5cde6218107b427685e1389901b24d489cf72533e3be78118f0e"; // sample

// the default callback URL to use in the OAuth process
var redirect_uri = "https://api.scriptrapps.io/modules/withings/authorization/getAccessToken.js?auth_token=TUMzQzBGNjRDOQ==";

var host = "oauth.withings.com";
var measuresHost = "wbsapi.withings.net";
var requestTokenPath = "account/request_token";
var userAuthorizationPath = "account/authorize"; 
var userAccessTokenPath = "account/access_token";
   				   				   				
