const speakeasy = require('speakeasy');

const validToken = speakeasy.totp.verify({
  secret: 'Secret em ascii gerado na hora da criação', // Ascii de IsTest
  token: 'Token no app para validação', // Token atual no app Google Authenticator para verificação.
//encoding: 'ascii', // Por padrão é ascii, declarar outra forma por opção.
})

console.log(validToken ? 'Token válido.' : 'Token inválido.')

/*
  ## Exemplo de console.log(gen)
{
  ascii: 'u.QU<g>uzDnmmusS%0!5>uu7{vLV$cl$',
  hex: '752e51553c673e757a446e6d6d757353253021353e7575377b764c5624636c24',
  base32: 'OUXFCVJ4M47HK6SENZWW25LTKMSTAIJVHZ2XKN33OZGFMJDDNQSA',
  otpauth_url: 'otpauth://totp/IsTest?secret=OUXFCVJ4M47HK6SENZWW25LTKMSTAIJVHZ2XKN33OZGFMJDDNQSA'
}

*/