//Specify HTTPS and create a request object
var http = require('https');

//Build the pay load options, address(mobile number) and message
var data = JSON.stringify({
    "options": {
        "billing_code": "BC_DWP",
        "customer_reference": "DEPARTMENT_OTAP"
        },
    "destinations": [
        {
            "sms": "003161234567"
        },
    ],
    "sms_text": "Hi Mark, this is a SMS using the RESTful API"
});

//Build the header including the path and authorization - this example uses basic in the format USERNAME:PASSWORD converted to base64
var headeroptions = {
  host: 'api.eu.cloudmessaging.opentext.com',
  port: '443',
  path: '/mra/v1/outbound/sms',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Authorization' : "Basic BASE64username:passwordinhere"
  }
};

//Add header to request object - don;t know what the chunking is all about
var req = http.request(headeroptions, function(res) {
  var msg = '';
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    msg += chunk;
  });
  res.on('end', function() {
    console.log(JSON.parse(msg));
  });
});

//Do the business.
req.write(data);
req.end();

//Returned is the JobID
