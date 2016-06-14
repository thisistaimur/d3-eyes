D3-eyes
=====

D3-eyes is a simple web application that creates impression heatmaps from user eye tracking data. This application uses WebGazer.js from Brown University and D3.js from Mike Bostock and others.

-----------------
![Simple Example of how d3-eyes can be used. See index.html for code](https://raw.githubusercontent.com/ryan-p-larson/d3-eyes/master/examples/proof-of-concept-closer.PNG)


## Installation
Installation is easy. All is requires is a simple clone and go as the JavaScript libraries have already been compiled. 

`git clone https://github.com/ryan-p-larson/d3-eyes.git`

## Usage
Everytime you want to use d3-eyes, you must serve the parent folder up in a local http server.

1. Enter the folder: `cd d3-eyes'
2. Start a Python server or other way to host files locally (a pain otherwise).
    - Python 2: `python -m SimpleHTTPServer 8000 &`
    - Python 3: `python -m http.server 8888`
3. In your browser go to `localhost:8000`
4. Use the `Browse` button to find and select an image
5. Click the `Start` button to initalize the eye tracker. This may take a few moments
6. Give the image corners a click to help the WebGazer eye tracker set up
7. Look at the image, press finish when you're done and would like a heatmap.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## To Do
##### Interactions
- [ ] Working opacity slider 
- [ ] Changeable colorschemes
- [ ] Spacing between hexagons?

##### Interface
- [ ] Cleaner styling
- [ ] Drag 'n drop image entry
- [ ] Actuall CSS libraries

##### General
- [ ] User information entry & data entry
- [ ] Optimize efficiency
- [ ] Explore best module to use with WebGazer.js (Ex.  [js-objectdetect](https://github.com/mtschirs/js-objectdetect)).

## Credits
[The Brown HCI Group](https://github.com/brownhci/) for their JavaScript library [Webgazer.js](https://github.com/brownhci/WebGazer/), without their open source eye tracking this wouldn't be possible.
And finally to [Mike Bostock](https://github.com/mbostock) for making [D3.js](https://github.com/d3/d3). The hexagon pattern is inspired/ripped off from his example on [bl.ocks.org](https://bl.ocks.org/mbostock/5583afd2a0d03b9c94918659fa151cac).

## License

DWTFYW License. Information should be open.