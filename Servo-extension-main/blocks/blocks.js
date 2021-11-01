Blockly.defineBlocksWithJsonArray(
  [{
    "type": "servo",
    "message0": "Servo pin %1 set angle %2 °",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pin",
        "options": [
          [
            "Servo1",
            "14"
          ],
          [
            "Servo2",
            "18"
          ],
          [
            "Servo3",
            "23"
          ],
          [
            "Servo4",
            "19"
          ],
          
  
        ]
      },
      {
        "type": "input_value",
        "name": "angle",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#0271D9",
    "tooltip": "",
    "helpUrl": ""
  }]
  );
  