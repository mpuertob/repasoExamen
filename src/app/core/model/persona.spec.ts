import { Persona } from './persona';

describe('Pruebas Persona Carlos', () => {
  let persona: Persona = new Persona('Carlos', 25);
  let array: Persona[] = [
    new Persona('Julio', 20),
    new Persona('Jare', 20),
    new Persona('Fernando', 20),
  ];
  it('Prueba Nombre Persona', () => {
    expect(persona.nombre).toBe('Carlos');
  });

  it('Prueba getAgeInYear', () => {
    expect(persona.getAgeInYears(20)).toEqual(46);
  });

  it('Prueba Edad Persona', () => {
    expect(persona.edad).toEqual(25);
    persona.cumplirAnno();
    expect(persona.edad).toEqual(26);
  });

  it('Prueba calcularMayoriaEdad Persona', () => {
    expect(persona.calcularMayoriaEdad(18)).toBeTruthy();
  });
  it('Prueba array Personas', () => {
    array.forEach((persona: Persona) => {
      expect(persona.calcularMayoriaEdad(18)).toBeTruthy();
    });
  });
});
