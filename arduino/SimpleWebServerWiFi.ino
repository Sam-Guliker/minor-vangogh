#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

void setup()
{
  Serial.begin(115200);
  Serial.println();

  WiFi.begin("VGV7519D947DE", "dbHK6vYJKCVt");

  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println();

  Serial.print("Connected, IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  HTTPClient http;    //Declare object of class HTTPClient

  
  http.begin("192.168.2.4:9999/hello");              //Specify request destination
  http.addHeader("Content-Type", "text/plain");    //Specify content-type header
 
  int httpCode = http.POST("Message");   //Send the request
  String payload = http.getString();    //Get the response payload
 
  Serial.println(httpCode);   //Print HTTP return code
  Serial.println(payload);    //Print request response payload
 
  http.end();  //Close connection
  
  delay(5000);  //Post Data at every 5 seconds
  }
