const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const {writeFile} = require('fs');
const path = require('path');

const gen = speakeasy.generateSecret({
  name: "IsTest"
})

console.log(gen)

qrcode.toDataURL(gen.otpauth_url, function (err, data) {
  if(err) throw err;
  const base64Image = data.split(';base64,').pop();
  writeFile(path.resolve(__dirname, 'qrcode.png'), base64Image, {encoding: 'base64'}, err => {
    if(err) throw err
    console.log('Escaneie a imagem em:', path.resolve(__dirname, 'qrcode.png'))
  })
})