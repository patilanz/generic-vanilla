window.onload = start;


function start() {
  getDeviceInfo().then(info => {
    document.body.innerHTML = JSON.stringify(info, null, 4);
  });
}
