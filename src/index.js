import '@capacitor/core';
import {
  Device
} from '@capacitor/device';


window.getDeviceInfo = async() => {
  let info = await Device.getInfo();
  return info;
}
