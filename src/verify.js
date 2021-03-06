const speakeasy = require('speakeasy');

function validToken (secret, token, mode = 'ascii') {
  return speakeasy.totp.verify({
    secret, // Ascii de IsTest
    token, // Token atual no app Google Authenticator para verificação.
    encoding: mode
  })
  ? token + ' Válido' 
  : token + ' Inválido'
} 

module.exports = {validToken}