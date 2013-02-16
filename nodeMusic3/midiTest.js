
var midi = require('midi');

// Set up a new output.
var output = new midi.output();

// Count the available output ports.
console.log('port count: '+output.getPortCount());

//output.openVirtualPort("node-midi Virtual Output");  <-- not from example

// Get the name of a specified output port.
var name=output.getPortName(0);
console.log('port name is: ' + name);
//// Open the first available output port.
output.openPort(0);


// Send a MIDI message.
output.sendMessage([176,22,1]);

var p1 = 1;
var p3 = 1;
var x = 1;
function sendRandom(){
    p1 = p1 % 100;//reset every 200
    p1++;
    ///p3 = p3%100;
    //p3++;
    p3 = modulateSteady100(x++);
    console.log('p3: '+ p3);

    //output.sendMessage([p1,22,1]);

    //first param - (eg After touch, Controller)
    // 176 - Controller    Control Change: 176, 7, 100 (volume)
    // 175 - Aftertouch channel 16
    // 174 - After touch channel 15
    // 173 - aftertouch channel 14
    // 159 - note on channel 16
    // 143 - note off channel 16
    // 127 -  [127,23, 2] - invalid
    // [127,1, 1] invalid
    //second param is the part of data (eg Controller 22, B-1)
    // - when p1 is 176, values mean:
    //   22 - controller 22
    //   23 - controller 23
    //   7 - volume (course). 3rd param is amount
    //   6 - data entry (course). 3rd is amount
    //   5 - portamento time (course)
    //   4 - foot control
    //   3 - controller 3
    //   2 - breath control
    //   1 - modulation
    // - when p1 is 175, 174
    //   23 - B-1 1     -- B-1 without the last 1
    //third param -
    // - not octave ! perhaps velocity?
    // - volume amount when p2 is 7
    output.sendMessage([176, 1, p3]);
}

function modulateSteady100(x){
    //return Math.ceil(50 * Math.sin(x/35)+50);
    return Math.ceil(50 * Math.sin(Math.PI*x/10)+50);
}

function playNote(){
    output.sendMessage([144, 78, 100]);
    output.sendMessage([128, 78, 100]);
}

setInterval(sendRandom, 100);
// Close the port when done.
//output.closePort();

process.stdin.resume();


// Get the name of a specified output port.
//var name=output.getPortName(0);
//console.log('port name is: ' + name);
//// Open the first available output port.
//output.openPort(0);
