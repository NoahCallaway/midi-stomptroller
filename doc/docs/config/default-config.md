---
sidebar_position: 1
---

# Default Config

The code included in this project sends control changes (CC's) to the Helix adding functionality such as Snapshot selection, Tuner ON/OFF and Tap Tempo. The code also sends MIDI notes that can be passed through the Helix to an upstream device such as a laptop.

---

## Usage
### Switching Pages
The default config has two pages. To switch between pages long press Button 1. The LED for Button 1 will blink twice and all LED colours will change.

### Button Presses
The buttons LED will flash once for a short press and twice for a long press (push and hold).

### Tap Tempo
On page 0, button 4 is used for tap tempo. The LED will flash in time to the tapped tempo.

---

## Config

### Page 0
>LED Colour = Magenta

| **Button No.** | **Short Press **  | **Long Press**         |
| -------------- | ----------------- | ---------------------- |
| **1**          | Recall Snapshot 1 | Go to Page 1           |
| **2**          | Recall Snapshot 2 | FS5                    |
| **3**          | Recall Snapshot 3 | Change Footswitch Mode |
| **4**          | Tap Tempo BPM     | Tuner                  |

### Page 1

>LED Colour = Cyan

| **Button No.** | **Short Press ** | **Long Press** |
| -------------- | ---------------- | -------------- |
| **1**          | MIDI Note D2     | Go to Page 0   |
| **2**          | MIDI Note D#2    | FS5            |
| **3**          | MIDI Note E2     | MIDI Note C3   |
| **4**          | MIDI Note C#3    | Tuner          |

![Button Numbers](/img/config/button_numbers.png)