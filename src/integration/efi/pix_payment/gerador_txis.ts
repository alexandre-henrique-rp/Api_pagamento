import crypto from 'crypto';

/**
 * Generates a random string of characters.
 *
 * @return {string} the randomly generated string
 */
function geraStringAleatoria(): string {
  const tamanhoMinimo = 26;
  const tamanhoMaximo = 35;
  const tamanhoAleatorio =
    Math.floor(Math.random() * (tamanhoMaximo - tamanhoMinimo + 1)) +
    tamanhoMinimo;
  const stringAleatoria = crypto
    .randomBytes(tamanhoAleatorio)
    .toString('base64')
    .replace(/[^a-zA-Z0-9]/g, '')
    .substr(0, tamanhoAleatorio);
  return stringAleatoria;
}

function validaString(string: string): boolean {
  const padrao = /^[a-zA-Z0-9]{26,35}$/;
  return padrao.test(string);
}

export default function Txid(): string {
  const stringAleatoria = geraStringAleatoria();
  if (validaString(stringAleatoria)) {
    return stringAleatoria;
  } else {
    console.log('A string gerada não atende ao padrão.');
    return '';
  }
}
