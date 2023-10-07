# :partly_sunny: Ashley's Smart Window UI Documentation :partly_sunny:

- You will need to install: React, bootstrap, deepmerge, rc-slider, and bootstrap packages with the npm install command on your terminal.
- To run, clone this repo in visual studio code and open up a new terminal, and run the command "npm run dev". (I used the run instructions from the module on the class canvas page when we first started setting up to run this myself, so it should follow that procedure aside from needing to install rc-slider, deepmerge, and bootstrap packages which can be found with npm install (insert package name with no parenthesis). )
- Follow the link provided to you by the terminal and start to access the smart window UI and you should be good to go! 

## The C level implementation enables a user to:
- Adjust the tint of their window using either the slider, the text input, the buttons on the text input, or the preset buttons for "None", "Half", and "Full." Any adjustments to either of these will update the other connected ones.The minimum value is 0% and the maximum is 100%. 
- Adjust the bug screen of their window using either the slider, the text input, the buttons on the text input, or the preset buttons for "None", "Half", and "Full." Any adjustments to either of these will update the other connected ones. The minimum value is 0% and the maximum is 100%. 
- Adjust how much their window is open sing either the slider, the text input, the buttons on the text input, or the preset buttons for "None", "Half", and "Full." Any adjustments to either of these will update the other connected ones. The minimum value is 0% and the maximum is 100%. 
- Adjust how much they would like their window to be blurred for privacy ing either the slider, the text input, the buttons on the text input, or the preset buttons for "None", "Half", and "Full." Any adjustments to either of these will update the other connected ones. The minimum value is 0% and the maximum is 100%. 
- All settings listed above can be adjusted independently of each other as the user pleases, and the variety of options for input allow users new and old to select settings they please quickly -- be it through the preset options on the larger buttons, or the ability to type their favorite setting values.

## The B level implementation enables a user to:
  - Save current settings under a custom name
  - Click saved settings to apply them and use them. This will update the buttons, sliders, and text inputs accordingly.
  - Delete saved settings to make room for new settings.
  - As settings are saved, they will be added as a choice on the list with their own delete button and button to apply them, labeled by the setting name.
