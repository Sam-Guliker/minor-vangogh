// defines pins numbers

const int trigPin = D4;  //D4
const int echoPin = D3;  //D3
long duration;
int distance;

void setup() {
    Serial.begin (115200);
    pinMode(trigPin, OUTPUT); // trigger
    pinMode(echoPin, INPUT); //echopin
}

/* Bron voor ultrasone afstandsensor
http://www.instructables.com/id/Arduino-Distance-Detector-with-a-Buzzer-and-LEDs/step7/The-Code/
*/


void loop() {

// Clears the trigPin
digitalWrite(trigPin, LOW);
delayMicroseconds(2);

// Sets the trigPin on HIGH state for 10 micro seconds
digitalWrite(trigPin, HIGH);
delayMicroseconds(10);
digitalWrite(trigPin, LOW);

// Reads the echoPin, returns the sound wave travel time in microseconds
duration = pulseIn(echoPin, HIGH);

// Calculating the distance
distance= duration*0.034/2;
// Prints the distance on the Serial Monitor
Serial.print("Distance: ");
Serial.println(distance);
delay(2000);
}
