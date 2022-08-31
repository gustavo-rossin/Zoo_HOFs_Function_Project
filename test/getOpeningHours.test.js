const { getOpeningHours, isStringRepresentNumber, validateHour, validateDay, empty, fix12, openOrClosed, dayError } = require('../src/getOpeningHours');

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
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
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
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(teste);
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

  // it('test9: Se a função handlerElephants retorna undefined caso não tenha parâmetros', () => {
  //   expect(handlerElephants()).toEqual(undefined);
  // });

  // it('test10: Parâmetro inválido se não inserir string na handlerElephants ', () => {
  //   expect(handlerElephants(8)).toEqual('Parâmetro inválido, é necessário uma string');
  //   expect(handlerElephants([1, 2, '3'])).toEqual('Parâmetro inválido, é necessário uma string');
  // });

  // it('test11: Se não colocar parâmetro na computeData, deverá retornar null', () => {
  //   expect(computeData()).toEqual(null);
  // });

  // it('test12: Se o parâmetro inputado ID é válido:', () => {
  //   expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  // });

  // it('test13: Se o parâmetro inputado NAME é válido:', () => {
  //   expect(handlerElephants('name')).toEqual('elephants');
  // });

  // it('test14: Se o parâmetro inputado POPULARITY é válido:', () => {
  //   expect(handlerElephants('popularity')).toEqual(5);
  // });

  // it('test15: Se o parâmetro inputado LOCATION é válido:', () => {
  //   expect(handlerElephants('location')).toEqual('NW');
  // });

  // it('test16: Se o parâmetro inputado AVAILABILITY é válido:', () => {
  //   expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  // });

  // it('test17: Se o parâmetro inputado residents é válido:', () => {
  //   expect(handlerElephants('residents')).toEqual([
  //     { name: 'Ilana', sex: 'female', age: 11 },
  //     { name: 'Orval', sex: 'male', age: 15 },
  //     { name: 'Bea', sex: 'female', age: 12 },
  //     { name: 'Jefferson', sex: 'male', age: 4 },
  //   ]);
  // });

  // it('test18: Se o parâmetro inputado for string e não é válido:', () => {
  //   expect(handlerElephants('namE')).toEqual(null);
  // });
});
