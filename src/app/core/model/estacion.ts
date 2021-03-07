export class Estacion {
  //POJO
  constructor(private _nombre: String) {}

  public get nombre() {
    return this._nombre;
  }
  hacerAlgo() {
    return this._nombre + '- 2021';
  }
}
