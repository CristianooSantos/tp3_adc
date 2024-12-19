---
sidebar_position: 4
---

# Requisições

A classe `Emprestimo` gere os empréstimos de livros, permitindo que registe, consulte, atualize e exclua informações relacionadas com os empréstimos, além de possibilitar salvar e carregar os dados a partir de ficheiros binários.

---

## **Atributos Principais**

- **`emprestimos`**: Dicionário que armazena todos os empréstimos registados, com IDs únicos como chave.
- **`contador_emprestimos`**: Contador sequencial que gera IDs únicos para os empréstimos.
- **`isbn_livro`**: ISBN do livro emprestado.
- **`numero_leitor`**: Número identificador do leitor que realizou o empréstimo.
- **`id_funcionario`**: Identificador do funcionário responsável pelo empréstimo.
- **`data_emprestimo`**: Data em que o empréstimo foi realizado.
- **`data_devolucao`**: Data prevista para devolução do livro.

---

## **Métodos Principais**

- **`\_\_init\_\_(self, isbn_livro, numero_leitor, id_funcionario, data_emprestimo=None, data_devolucao=None)`**:  
  Inicializa um novo objeto Emprestimo, atribuindo um ID único e definindo as informações sobre o empréstimo.

- **`salvar(self)`**:  
  Salva o empréstimo atual no dicionário emprestimos.

- **`obter(id_emprestimo)`**:  
  Obtém os dados de um empréstimo pelo seu ID. Retorna o objeto do empréstimo ou None se não encontrado.

- **`deletar(id_emprestimo)`**:  
  Remove um empréstimo do sistema pelo ID fornecido.

- **`listar_todos()`**:  
  Lista todos os empréstimos registados no sistema, exibindo informações detalhadas sobre cada um deles.

- **`salvar_em_arquivo(arquivo)`**:  
  Salva todos os empréstimos num ficheiro binário, permitindo armazenamento persistente.

- **`carregar_de_arquivo(arquivo)`**:  
  Carrega empréstimos de um ficheiro binário previamente salvo, restaurando os dados no sistema.

---

## **Descrição Detalhada dos Métodos**

- **`\_\_init\_\_`**:  
  Este método construtor inicializa um novo empréstimo, recebendo como parâmetros o ISBN do livro, o número do leitor, o ID do funcionário e, opcionalmente, as datas do empréstimo e devolução.

- **`salvar()`**:  
  Adiciona o empréstimo ao dicionário emprestimos, usando um ID único, e exibe uma mensagem de sucesso.

- **`obter(id_emprestimo)`**:  
  Permite recuperar os detalhes de um empréstimo específico pelo ID. Retorna o empréstimo correspondente ou None se o ID não for encontrado.

- **`deletar(id_emprestimo)`**:  
  Exclui um empréstimo do dicionário emprestimos pelo ID. Se o ID não for encontrado, exibe uma mensagem de erro.

- **`listar_todos()`**:  
  Exibe uma lista completa de todos os empréstimos registados no sistema, incluindo informações como o ISBN do livro, o número do leitor e as datas do empréstimo e devolução.

- **`salvar_em_arquivo(arquivo)`**:  
  Grava todos os empréstimos atuais num ficheiro binário. Isto permite armazenar os dados para utilização posterior.

- **`carregar_de_arquivo(arquivo)`**:  
  Lê e carrega os dados dos empréstimos a partir de um ficheiro binário. Se o ficheiro não existir, exibe uma mensagem de erro.

---

## **Exemplo de Utilização**

### Criando um novo empréstimo

```python
emprestimo = Emprestimo("978-3-16-148410-0", "12345", "98765")
emprestimo.salvar()
