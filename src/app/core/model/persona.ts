export class Persona {
  private _casado: Boolean;

  constructor(private _nombre: String, private _edad: number) {}
  public get nombre() {
    return this._nombre;
  }
  public get edad() {
    return this._edad;
  }
  public get casado() {
    return this._casado;
  }
  public set casado(bandera: Boolean) {
    this._casado = bandera;
  }
}
