const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('test1: função getOpeningHours não passando argumentos, retorna os dias e os horários de funcionamento.', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('test2: Para os parâmetros Monday/Wednesday e 09:00-AM/09:00-PM deve retornar a string (The zoo is closed), já que o Zoo está sempre fechado na segunda', () => {
    const dayError = 'The zoo is closed';
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(dayError);
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(dayError);
  });

  it('test3: se a função getOpeningHours é função', () => {
    expect(typeof getOpeningHours).toEqual('function');
  });

  it('test4: Para os argumentos Tuesday e 09:00-AM deve retornar a string (The zoo is open)', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });

  it('test5: Para os argumentos Thu e 09:00-AM deve retornar error (The day must be valid. Example: Monday).', () => {
    const teste = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Gustavo', '09:00-AM')).toThrow(teste);
  });

  it('test6: Para os argumentos Friday e  09:00-ZM, a função getOpeningHours deve retornar erro por não estar representado em AM ou PM .', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('test7: Para os argumentos Saturday e C9:00-AM, a função deve retornar erro por causa da Hora não ser número. ', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('test8: Para os argumentos Sunday e 09:C0-AM, a função deverá retornar erro por não possuir números nos minutos.', () => {
    expect(() => getOpeningHours('Sunday', '09:C0-AM')).toThrow('The minutes should represent a number');
  });

  it('test9: Para os argumentos Sunday e 09:63-AM, a função deverá retornar erro pelos minutos não estarem entre 0 e 59.', () => {
    expect(() => getOpeningHours('Sunday', '09:63-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('test8: Para os argumentos Sunday e 16:00-AM, a função deverá retornar erro pelas horas não estarem entre 0 e 12.', () => {
    expect(() => getOpeningHours('Sunday', '16:00-AM')).toThrow('The hour must be between 0 and 12');
  });
});
