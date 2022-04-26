const { Button, TextView, ui } = require('tabris');


global.atob = require('atob');

let battery = {
  service: '180A',
  level: '2A35'
};

let bloodpressure = {
  service: '1810',
  level: '2A49'
};

let deviceName = {
  service: '1800',
  level: '2A00'
};

let foundDevices = [];


let button = new Button({
  centerX: 0, top: 100,
  text: 'Avvia scansione'
}).appendTo(ui.contentView);

let connectBtn = new Button({
  centerX: 0, top: [button, 15],
  text: 'Connetti!'
}).appendTo(ui.contentView);

let textView = new TextView({
  centerX: 0, top: [connectBtn, 50],
  font: '24px'
}).appendTo(ui.contentView);

connectBtn.on('select', () => {
  global.ble.connect('18:7A:93:12:0E:1E', readBatteryLevel, handleError);
});

button.on('select', () => {
  global.ble.scan([], 5, function (device) {
    console.log(JSON.stringify(device));
  }, function (error) {
    console.log(JSON.stringify(error));
  });
  textView.text = 'Scannning...';
});




function readBatteryLevel(data) {
  console.log('Connected');
  console.log(JSON.stringify(data));
  console.log('.............................');
  console.log('.............................');
  global.ble.read('18:7A:93:12:0E:1E', deviceName.service, deviceName.level, onReadBatteryLevel, handleError);
}

function onReadBatteryLevel(data) {
  console.log('On Read Data');
  console.log(data);
  console.log(JSON.stringify(data));
  textView.text = JSON.stringify(data);
}


function startScanSuccess(result) {
  console.log(result);
}

function handleError(error) {
  console.log(JSON.stringify(error));
  textView.text = error;
}

function handleError2() {
  textView.text = 'Errore connessione!';
}

//function _showMessage() {

textView.text = 'Jumpjack';
//}
