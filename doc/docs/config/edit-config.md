---
sidebar_position: 2
---

# Editing the Config

Each button is capable of a short and long presses on each page.

To customize the MIDI note or control change transmitted, the `midi-stomptroller.ino` file must be edited and flashed to the Arduino.

To change the function edit the `MIDI.sendControlChange();` or `MIDI.sendNoteOn();` lines for each button and page.

MIDI CC's for the Helix Stomp are listed [here](https://line6.com/data/6/0a020a4010c935bb66a4c0c44f/application/pdf/HX%20Stomp%20Manual%20-%20English%20.pdf) on page 49.

---

## Example

Below we change the long press for Page 1 Button 2 so that it recalls Snapshot 3.

### Diff
```diff
//Page 1
    case 1:
      Serial.write("Button 2 Page 1 Long \n");
-     // FS5
-     MIDI.sendControlChange(72, 127, MIDI_Base);
+     // Snapshot 3
+     MIDI.sendControlChange(69, 2, MIDI_Base);
      break;
```

### Before
```cpp
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
```

### After
```cpp
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
      
      // Snapshot 3
      MIDI.sendControlChange(69, 2, MIDI_Base);
      break;
  }
  setBlink(neoButton2,2);
}
```
