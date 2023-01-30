# Costumer-Register

#### Projeto (Front-End) de cadastro de cliente e produtos, onde é possível realizar associação entre eles.

### Tecnologias utilizadas;

- React.JS
- Typescript
- React-Router-Dom 
    (Para realizar o controle das rotas)
- Context-API 
    (Para fazer o gerenciamento de estados da aplicação, onde foi criado 3 contextos, que são eles: Produtos, Clientes e Associações
- React-Hook-Form 
    (Para os dados do formulário serem tratados como um objeto e facilitar a implementação das tela que possuem formulários)
- Yup 
    (Para validação de formulários, exemplo: Ter a certeza de que o usuário selecionou se o produto/cliente é ativo, se digitou o CPF correto, celular e email;
- Styled-Components 
    (Para ser possível adicionar JS no CSS e separar melhor o código CSS)
- React-Icons 
    (Para os ícones, foram utilizados no menu header e nos componentes do input)
- React-Toastfy 
    (Para informar o usuário das atividades realizadas na aplicação)

### Link para acessar o projeto:

<a href="https://costumer-register.vercel.app" target="_blank">Link do projeto</a>

Para rodar o projeto, basta clicar no link acima, ou fazer clone do repositório, usar o comando "YARN" (Instalação das dependências na máquina local) e depois "YARN DEV" (Para rodar)

O projeto não possui dados mockados nem API, para fazer os testes basta realizar os cadastros tanto de produtos, clientes e fazer as associações. Vale ressaltar que associação só pode ser realizada com produtos/clientes ativos.

Não existe a possibilidade de criar produtos com o mesmo nome, o mesmo se aplica para cliente e não pode associar mais de uma vez o mesmo produto para o mesmo cliente.

Por fim gostaria de ressaltar que utilizei REACT.JS por ainda não ter trabalho com VUE.JS, e pelo tempo que tinha em trabalhar na aplicação optei por seguir com react. Porém ressalto que estou totalmente disposto a trabalhar com VUE.JS e aprender essa tecnologia.



