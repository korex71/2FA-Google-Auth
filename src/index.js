const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const {resolve} = require('path');
const {writeFile} = require('fs');
const {validToken} = require('./verify')

function generate (name) {
  const Secret = speakeasy.generateSecret({name})

  console.log(Secret)
  
  qrcode.toDataURL(Secret.otpauth_url, function (err, data) {
    if(err) throw err;
    const base64Image = data.split(';base64,').pop();
    writeFile(resolve(__dirname, 'qrcode.png'), base64Image, {encoding: 'base64'}, err => {
      if(err) throw err;
      console.log('Escaneie a imagem em:', resolve(__dirname, 'qrcode.png'));
    });
  });
};

// generate(name)

// validToken(secret, token, mode)
// Ex: validToken('u.QU<g>uzDnmmusS%0!5>uu7{vLV$cl$', '143677')  


/*
  ## Exemplo de Secret Gerado
{
  ascii: 'u.QU<g>uzDnmmusS%0!5>uu7{vLV$cl$',
  hex: '752e51553c673e757a446e6d6d757353253021353e7575377b764c5624636c24',
  base32: 'OUXFCVJ4M47HK6SENZWW25LTKMSTAIJVHZ2XKN33OZGFMJDDNQSA',
  otpauth_url: 'otpauth://totp/IsTest?secret=OUXFCVJ4M47HK6SENZWW25LTKMSTAIJVHZ2XKN33OZGFMJDDNQSA'
}
*/