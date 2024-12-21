# Funcionários

A classe `Funcionario` gere as informações dos funcionários da biblioteca, permitindo adicionar, consultar, atualizar e excluir funcionários, além de atribuir funções e gerar relatórios de atividades.

## Atributos Principais

- **id_funcionario**: Identificador único do funcionário.
- **nome**: Nome do funcionário.
- **cargo**: Cargo ou função desempenhada pelo funcionário.
- **data_admissao**: Data de admissão do funcionário.
- **livros_emprestados**: Lista de livros que o funcionário gerencia ou acompanha.

## Métodos Principais

### `__init__(self, id_funcionario, nome, cargo, data_admissao)`

Inicializa um novo objeto `Funcionario`, atribuindo um ID único e as informações principais sobre o funcionário.

### `salvar(self)`

Adiciona o funcionário ao sistema, registando suas informações.

### `atualizar(self)`

Atualiza as informações de um funcionário existente.

### `deletar(self)`

Exclui o funcionário do sistema.

### `listar_todos()`

Lista todos os funcionários registados no sistema, mostrando informações como nome, cargo e data de admissão.

### `atribuir_funcoes(self, funcoes)`

Atribui funções ou responsabilidades a um funcionário.

### `gerar_relatorio_atividades(self)`

Gera um relatório detalhado das atividades realizadas por um funcionário, como empréstimos ou atualizações de registros.

## Descrição Detalhada dos Métodos

### `__init__`

Este método construtor inicializa um novo funcionário, recebendo como parâmetros o ID do funcionário, nome, cargo e data de admissão.

### `salvar`

Adiciona o funcionário ao sistema, permitindo sua atribuição a funções e responsabilidades.

### `atualizar`

Atualiza as informações de um funcionário existente, como cargo ou dados pessoais.

### `deletar`

Exclui um funcionário do sistema. Caso o funcionário tenha responsabilidades ativas, como livros emprestados, a ação pode ser impedida.

### `listar_todos`

Exibe uma lista completa de todos os funcionários registados, incluindo nome, cargo e data de admissão.

### `atribuir_funcoes`

Atribui funções ou responsabilidades a um funcionário, como gerenciar empréstimos ou manter registros.

### `gerar_relatorio_atividades`

Gera um relatório detalhado sobre as atividades do funcionário, como empréstimos realizados, livros disponíveis e registros atualizados.

## Exemplo de Utilização

```python
# Criando um novo funcionário
funcionario = Funcionario("98765", "Carlos Souza", "Bibliotecário", "2022-03-01")
funcionario.salvar()

# Listando todos os funcionários
Funcionario.listar_todos()

# Atualizando um funcionário
funcionario.cargo = "Gerente"
funcionario.atualizar()

# Atribuindo funções ao funcionário
funcionario.atribuir_funcoes(["Gestão de livros", "Atendimento ao público"])

# Gerando relatório de atividades
funcionario.gerar_relatorio_atividades()

# Excluindo um funcionário
funcionario.deletar()
