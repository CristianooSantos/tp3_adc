# Leitores

## Módulos e Classes (**Voltar para a Home**)

### Leitor

A classe `Leitor` gere as informações dos leitores da biblioteca, permitindo adicionar, consultar, atualizar e excluir leitores.

---

### **Atributos Principais**:

- `numero_leitor`: Número identificador único do leitor.  
- `nome`: Nome do leitor.  
- `email`: Email do leitor.  
- `telefone`: Número de telefone do leitor.  
- `livros_emprestados`: Lista de livros emprestados ao leitor.  

---

### **Métodos Principais**:

- `__init__(self, numero_leitor, nome, email, telefone)`  
  Inicializa um novo objeto `Leitor`, atribuindo um número identificador e as informações principais sobre o leitor.  

- `salvar(self)`  
  Adiciona o leitor ao sistema, registando seus dados.  

- `atualizar(self)`  
  Atualiza as informações de um leitor existente.  

- `deletar(self)`  
  Exclui o leitor do sistema.  

- `listar_todos()`  
  Lista todos os leitores registados no sistema, mostrando informações como nome, email e telefone.  

- `emprestar_livro(self, livro)`  
  Registra um empréstimo de livro para o leitor.  

---

### **Descrição Detalhada dos Métodos**

- `__init__`:  
  Este método construtor inicializa um novo leitor, recebendo como parâmetros o número do leitor, nome, email e telefone.  

- `salvar()`:  
  Adiciona o leitor ao sistema, permitindo que ele possa ser associado a empréstimos de livros.  

- `atualizar()`:  
  Atualiza as informações de um leitor existente, como nome, email ou telefone.  

- `deletar()`:  
  Exclui um leitor do sistema. Caso o leitor tenha livros emprestados, a ação pode ser impedida ou gerar um aviso.  

- `listar_todos()`:  
  Exibe uma lista completa de todos os leitores registados, incluindo o nome e as informações de contacto.  

- `emprestar_livro(livro)`:  
  Registra o empréstimo de um livro para o leitor, associando o livro ao leitor e registrando o empréstimo no sistema.  

---

### **Exemplo de Utilização**

```python
# Criando um novo leitor
leitor = Leitor("12345", "Maria Silva", "maria@email.com", "912345678")
leitor.salvar()

# Listando todos os leitores
Leitor.listar_todos()

# Atualizando um leitor
leitor.nome = "Maria Oliveira"
leitor.atualizar()

# Excluindo um leitor
leitor.deletar()
