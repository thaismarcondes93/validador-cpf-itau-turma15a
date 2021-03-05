const Cliente = require('../models/cliente')

test('Dado que eu passe um cpf inválido 00044432243', () => {
  let cliente = new Cliente('Danilo', "00044432243")
  expect(cliente.validarCPF()).toBe(false);
});


test('Dado que eu passe um cpf inválido null', () => {
  let cliente = new Cliente('Danilo', null)
  expect(cliente.validarCPF()).toBe(false);
});


test('Dado que eu passe um cpf inválido undefined', () => {
  let cliente = new Cliente('Danilo', undefined)
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu passe um cpf inválido 1', () => {
  let cliente = new Cliente('Danilo', 1)
  expect(cliente.validarCPF()).toBe(false);
});


test('Dado que eu passe um cpf inválido 11111111111', () => {
  let cliente = new Cliente('Danilo', "11111111111")
  expect(cliente.validarCPF()).toBe(false);
  cliente = new Cliente('Danilo', "111111111111")
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu passe um cpf válido 210.359.700-15', () => {
  cliente = new Cliente('Danilo', "210.359.700-15")
  expect(cliente.validarCPF()).toBe(true);
  cliente = new Cliente('Danilo', "21035970015")
  expect(cliente.validarCPF("")).toBe(true);
});