const { handlerElephants, computeData, getElephants } = require('../src/handlerElephants');
const { species } = require('../data/zoo_data');

describe('Testes da função HandlerElephants', () => {
  it('test1: função getElephants retorna toda a chave', () => {
    const elephant = {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        { name: 'Ilana', sex: 'female', age: 11 },
        { name: 'Orval', sex: 'male', age: 15 },
        { name: 'Bea', sex: 'female', age: 12 },
        { name: 'Jefferson', sex: 'male', age: 4 },
      ],
    };

    expect(getElephants()).toEqual(elephant);
  });

  it('test2: se a função getElephants é função', () => {
    expect(typeof getElephants).toEqual('function');
  });

  it('test3: se a localização dos elefantes é NW.', () => {
    expect(getElephants().location).toEqual('NW');
  });

  it('test4: Se a popularidade dos elefantes é igual ou superior a 5.', () => {
    expect(getElephants().popularity).toBeGreaterThanOrEqual(5);
  });

  it('test5: se a disponibilidade dos elefantes é sexta, sábado, domingo e terça.', () => {
    expect(getElephants().availability).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('test6: Se os nomes dos elefantes são iguais a Ilana, Orval, Bea e Jefferson.', () => {
    expect(computeData('names', species[7])).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('test7: Se a contagem dos elefantes é igual a 4.', () => {
    expect(computeData('count', species[7])).toEqual(4);
  });

  it('test8: Se a idade média dos elefantes é igual a 10.5.', () => {
    expect(computeData('averageAge', species[7])).toEqual(10.5);
  });

  it('test9: Se a função handlerElephants retorna undefined caso não tenha parâmetros', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('test10: Parâmetro inválido se não inserir string na handlerElephants ', () => {
    expect(handlerElephants(8)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants([1, 2, '3'])).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('test11: Se não colocar parâmetro na computeData, deverá retornar null', () => {
    expect(computeData()).toEqual(null);
  });

  it('test12: Se o parâmetro inputado ID é válido:', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });

  it('test13: Se o parâmetro inputado NAME é válido:', () => {
    expect(handlerElephants('name')).toEqual('elephants');
  });

  it('test14: Se o parâmetro inputado POPULARITY é válido:', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('test15: Se o parâmetro inputado LOCATION é válido:', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('test16: Se o parâmetro inputado AVAILABILITY é válido:', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('test17: Se o parâmetro inputado residents é válido:', () => {
    expect(handlerElephants('residents')).toEqual([
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ]);
  });

  it('test18: Se o parâmetro inputado for string e não é válido:', () => {
    expect(handlerElephants('namE')).toEqual(null);
  });
});
