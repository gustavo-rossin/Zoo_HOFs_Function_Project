const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('test1: Se a função handlerElephants retorna undefined caso não tenha parâmetros', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('test2: Parâmetro inválido se não inserir string na handlerElephants ', () => {
    expect(handlerElephants(8)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants([1, 2, '3'])).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('test3: Se o parâmetro inputado ID é válido:', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });

  it('test4: Se o parâmetro inputado NAME é válido:', () => {
    expect(handlerElephants('name')).toEqual('elephants');
  });

  it('test5: Se o parâmetro inputado POPULARITY é válido:', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('test6: Se o parâmetro inputado LOCATION é válido:', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('test7: Se o parâmetro inputado AVAILABILITY é válido:', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('test8: Se o parâmetro inputado residents é válido:', () => {
    expect(handlerElephants('residents')).toEqual([
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ]);
  });

  it('test9: Se o parâmetro inputado for string e não é válido:', () => {
    expect(handlerElephants('namE')).toEqual(null);
  });

  it('test10: Se a idade média dos elefantes é 10.5', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('test11: Se a quantidade de elefante é 4.', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('test12: Se o argumento names é correto.', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
});
