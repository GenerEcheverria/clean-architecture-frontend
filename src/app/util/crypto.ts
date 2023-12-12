import * as CryptoJS from 'crypto-js';

export class Crypto {

  private key = CryptoJS.enc.Hex.parse('23Sr3YuUc4ttANnSsIs3g');

  private iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');

  public encrypted(text: string): string {
    return (CryptoJS.AES.encrypt(text, this.key, { iv: this.iv })).toString();
  }

  public decrypted(text: string): string {
    return (CryptoJS.AES.decrypt(text, this.key)).toString(CryptoJS.enc.Utf8);;

  }
}
