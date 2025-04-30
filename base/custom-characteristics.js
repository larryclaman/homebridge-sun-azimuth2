// custom-characteristics.js
'use strict';
const inherits = require('util').inherits;
const { Characteristic } = require('hap-nodejs');

// Use a unique UUID – you can generate a new one if desired.
const SUN_AZIMUTH_UUID = '196ee94f-f660-4f15-a1c5-e1062a420ae4';

function SunAzimuthCharacteristic() {
  Characteristic.call(this, 'Sun Azimuth', SUN_AZIMUTH_UUID);
  this.setProps({
    format: Characteristic.Formats.FLOAT,
    unit: '°',
    minValue: 0,
    maxValue: 360,
    minStep: 0.1,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
  });
  this.value = this.getDefaultValue();
}
inherits(SunAzimuthCharacteristic, Characteristic);

SunAzimuthCharacteristic.UUID = SUN_AZIMUTH_UUID;

module.exports = {
  SunAzimuthCharacteristic
};
