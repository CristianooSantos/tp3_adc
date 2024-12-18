---
sidebar_position: 2
---

# Livro

A classe `Livro` gere os livros da biblioteca, permitindo que registe, consulte, atualize e exclua informações sobre os livros, além de possibilitar verificar a disponibilidade de cada um.

---

## Índice

- [Atributos Principais](#atributos-principais)
- [Métodos Principais](#métodos-principais)
- [Descrição Detalhada dos Métodos](#descrição-detalhada-dos-métodos)
- [Exemplo de Utilização](#exemplo-de-utilização)

---

## **Atributos Principais**

- `isbn`: ISBN do livro.
- `titulo`: Título do livro.
- `autor`: Autor do livro.
- `categoria`: Categoria do livro.
- `disponibilidade`: Indica se o livro está disponível ou emprestado.

---

## **Métodos Principais**

- `__init__(self, isbn, titulo, autor, categoria, disponibilidade=True)`:  
  Inicializa um novo objeto `Livro`, atribuindo as informações principais sobre o livro.

- `salvar(self)`:  
  Salva o livro no sistema, adicionando-o à coleção de livros.

- `atualizar(self)`:  
  Atualiza as informações de um livro já existente.

- `deletar(self)`:  
  Exclui um livro do sistema.

- `listar_todos()`:  
  Lista todos os livros registados no sistema, mostrando detalhes como ISBN, título, autor e categoria.

- `verificar_disponibilidade(self)`:  
  Verifica se o livro está disponível para empréstimo.

---

## **Descrição Detalhada dos Métodos**

- **`__init__`**:  
  Este método construtor inicializa um novo livro, recebendo como parâmetros o ISBN, título, autor, categoria e, opcionalmente, a disponibilidade (que por padrão é `True`, indicando que o livro está disponível).

- **`salvar()`**:  
  Adiciona o livro ao sistema. O livro é registado na coleção de livros da biblioteca.

- **`atualizar()`**:  
  Atualiza as informações de um livro existente no sistema, como título, autor ou categoria.

- **`deletar()`**:  
  Exclui o livro do sistema. Caso o livro não seja encontrado, exibe uma mensagem de erro.

- **`listar_todos()`**:  
  Exibe uma lista completa de todos os livros registados, incluindo informações como ISBN, título, autor e categoria.

- **`verificar_disponibilidade()`**:  
  Verifica se o livro está disponível para empréstimo, retornando `True` se estiver disponível e `False` caso contrário.

---

## **Exemplo de Utilização**

### Criando um novo livro

```python
livro = Livro("978-3-16-148410-0", "O Hobbit", "J.R.R. Tolkien", "Fantasia")
livro.salvar()
