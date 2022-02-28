#include <OneButton.h>
#include <MIDI.h>
#include <Adafruit_NeoPixel.h>
#include <NoDelay.h>

void setBlink(int n, int repeat=1);
void updateBlink();
void updateBPM();

/**  Button Config
      ---------
      | 1    2 |
      |        |
      |        |
      | 3    4 |
      ---------
*/

// configure button pins
OneButton button1(4, true, true);
OneButton button2(5, true, true);
OneButton button3(7, true, true);
OneButton button4(9, true, true);

// Create and bind the MIDI interface to the default hardware Serial port
MIDI_CREATE_DEFAULT_INSTANCE();
const int MIDI_Base = 1;

// configure Neopixel LED's
const int PIN = 10;
const int NUMPIXELS = 4;
const int neoBrightness = 15;

/** Mapping for NeoPixels to button
  Mapping below matches the included schematic
  <button number> = <NeoPixel address>;
*/
const int neoButton1 = 2;
const int neoButton2 = 1;
const int neoButton3 = 3;
const int neoButton4 = 4;

//Create pixles object
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

//Var to handle page state
int page = 0;

//Define colours
int page0 [3]      = {100, 0, 100};
int page1 [3]      = {0, 100, 100};
int blinkColour[3] = {255, 255, 255};
int bpmColour[3]   = {100, 0, 0};

//Timimng interval vars
int blinkState[4] = {0, 0, 0, 0};
noDelay blinkTime(250, updateBlink, false);

//BPM interval vars
bool blinkBPM_State = true;
int  bpmLED         = neoButton4;
long lastPress      = millis();

noDelay bpmTime(500, updateBPM, false);

void setup() {
  Serial.begin(9600);
  
  // button 1
  button1.attachClick(button1Press);
  button1.attachLongPressStart(button1LongPressStart);

  // button 2
  button2.attachClick(button2Press);
  button2.attachLongPressStart(button2LongPressStart);

  // button 3
  button3.attachClick(button3Press);
  button3.attachLongPressStart(button3LongPressStart);

  // button 4
  button4.attachClick(button4Press);
  button4.attachLongPressStart(button4LongPressStart);

  // MIDI setup
  MIDI.begin();

  // Pixel Setup
  pixels.begin();
  pixels.setBrightness(neoBrightness);
  colourPage();
  
}

void loop() {
  button1.tick();
  button2.tick();
  button3.tick();
  button4.tick();

  blinkTime.update();
  bpmTime.update();
}


//BUTTON EVENT CONFIGS

// button 1 Events
void button1Press() {
  switch (page) {
    
    //Page 0
    case 0:
      Serial.write("Button 1 Page 0 \n");
      
      // Snapshot 1
      MIDI.sendControlChange(69, 0, MIDI_Base);
      break;

    //Page 1
    case 1:
      Serial.write("Button 1 Page 1 \n");
      
      //Note D2 ON
      MIDI.sendNoteOn(38, 127, MIDI_Base);
      break;
  }
  setBlink(neoButton1);
}

void button1LongPressStart() {
  Serial.write("Button 1 Long \n");
  
  // Switch Page
  if (page == 0) {
    stopBPM();
    page = 1;
  } else {
    page = 0;
  }
  setBlink(neoButton1, 2);
}


// button 2 Events
void button2Press() {
  switch (page) {
    
    //Page 0
    case 0:
      Serial.write("Button 2 Page 0 \n");
      
      // Snapshot 2
      MIDI.sendControlChange(69, 1, MIDI_Base);
      break;

    //Page 1
    case 1:
      Serial.write("Button 2 Page 1 \n");
      
      //Note D#2 ON
      MIDI.sendNoteOn(39, 127, MIDI_Base);
      break;
  }
  setBlink(neoButton2);
}

void button2LongPressStart() {
  switch (page) {
    
    //Page 0
    case 0:
      Serial.write("Button 2 Page 0 Long \n");
      
      // FS5
      MIDI.sendControlChange(72, 127, MIDI_Base);
      break;

    //Page 1
    case 1:
      Serial.write("Button 2 Page 1 Long \n");
      
      // FS5
      MIDI.sendControlChange(72, 127, MIDI_Base);
      break;
  }
  setBlink(neoButton2,2);
}

// button 3 Events
void button3Press() {
  switch (page) {
    
    //Page 0
    case 0:
      Serial.write("Button 3 Page 0 \n");
      
      // Snapshot 3
      MIDI.sendControlChange(69, 2, MIDI_Base);
      break;

    //Page 1
    case 1:
      Serial.write("Button 3 Page 1 \n");
      
      //Note E2 ON
      MIDI.sendNoteOn(40, 127, MIDI_Base);
      break;
  }
  setBlink(neoButton3);
}

void button3LongPressStart() {
  switch (page) {
    
    //Page 0
    case 0:
      Serial.write("Button 3 Page 0 Long\n");
      
      // Next Footswitch Mode
      MIDI.sendControlChange(71, 4, MIDI_Base);
      break;

    //Page 1
    case 1:
      Serial.write("Button 3 Page 1 Long\n");
      
      //Note C3 ON
      MIDI.sendNoteOn(48, 127, MIDI_Base);
      break;
  }
  setBlink(neoButton3,2);
}


// button 4 Events
void button4Press() {
  switch (page) {

    //Page 0
    case 0:
      Serial.write("Button 4 Page 0 \n");
      
      // Tap tempo
      MIDI.sendControlChange(64, 127, MIDI_Base);
      pressBPM();
      break;

    //Page 1
    case 1:
      Serial.write("Button 4 Page 1 \n");
      
      //Note C#3 ON
      MIDI.sendNoteOn(49, 127, MIDI_Base);
      setBlink(neoButton4);
      break;
  }
}

void button4LongPressStart() {
  switch (page) {

    //Page 0
    case 0:
      Serial.write("Button 4 Page 0 Long \n");
      
      stopBPM();
      // show tuner
      MIDI.sendControlChange(68, 0, MIDI_Base);
      break;

    //Page 1
    case 1:
      Serial.write("Button 4 Page 0 Long \n");
      
      // show tuner
      MIDI.sendControlChange(68, 0, MIDI_Base);
      break;
  }
  setBlink(neoButton4,2);
}


//FUNCTIONS FOR INTERNALS
 
//Set colour for page
void colourPage() {
  Serial.write("Colour Page \n");
  uint32_t colour;
  
  if (page == 1) {
    
    colour = pixels.Color(page1[0], page1[1], page1[2]);
    pixels.fill(colour);
    
  } else {
    
    colour = pixels.Color(page0[0], page0[1], page0[2]);
    pixels.fill(colour);
  }
  pixels.show();
}

//Set blink value in blinkState array
void setBlink(int n, int repeat) {
  blinkState[n-1] = repeat * 2;
  updateBlink();
}

//Use blinkState to update page
void updateBlink() {
  
  bool blinkActive = false;
  
  for (int i = 0; i < (sizeof(blinkState) / sizeof(blinkState[0])); i++){
    
    //If off state
    if (blinkState[i] == 0) {
      continue;
    }
    //On State 
    else if (blinkState[i] % 2 == 0) {
      
      blinkActive = true;
      pixels.setPixelColor(i, pixels.Color(blinkColour[0], blinkColour[1], blinkColour[2]));
      pixels.show();
    }
    //Blink is off but more to come (repeated) 
    else {
      
      blinkActive = true;
      colourPage();
    }
    //Decrease count
    blinkState[i] = blinkState[i] -1;
  }

  //Restart timer if a blink left
  if (blinkActive == true) {
    
    blinkTime.start();
  } 
  else {
    blinkTime.stop();
  }
}

//Flash BPM Led based on state
void updateBPM() {
  
  //On page 0 only
  if (page == 0){
    
    if (blinkBPM_State == true) {
      blinkBPM_State = false;
      pixels.setPixelColor(bpmLED - 1, page0[0], page0[1], page0[2]);
    }
    else if (blinkBPM_State == false) {
      blinkBPM_State = true;
      pixels.setPixelColor(bpmLED - 1, bpmColour[0], bpmColour[1], bpmColour[2]);
    }
    pixels.show();
  }
}

//Handle press of bpm switch
void pressBPM() {
  long now = millis();
  long diff = now - lastPress;
  
  if (diff < 3000) {
    bpmTime.setdelay(diff/2);
    bpmTime.start();
  }
  
  lastPress = now;
}

//End bpm timer and update page
void stopBPM(){
  bpmTime.stop();
  colourPage();
}
