# opentextsmsREST
This small node.js app calls the opentext SMS REST API to send a single SMS message to a mobile number. It shows how to setup the header correctly and use basicAuth.
The SMS REST API can be found on the opentext developer portal. You'll need node.js installed to run this app. And you'll need an opentext notification account obtained
from the opentext company.

Replace the username and password credentials in this sample with the credentials of your real opentext Notifications account in this format:
  
  username:password converted to Base64.

To run the app on the command line on a machine with node.js installed.

  Usage: node smsnotifyclean
