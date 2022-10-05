## O que contém neste repositório ##

Aqui nesses arquivos eu criei um CRUD baseado em uma Lista Telefônica/contatos com as principais funcionalidades: 

- Adicionar (no botão `Novo contato` você poderá adicionar nome, telefone e cidade);

- Editar (caso deseja alterar nome, número..);

- Apagar (como o nome já diz, você pode apagar o contato caso queira, basta clicar no botão excluir e confirmar digitando a palavra `sim` no alert que irá aparecer);

- Buscar (utilize o buscar para encontrar um contato já adicionado).

## Tutorial de como utilizar a Lista de Contatos ##

Para executar a lista é importante que você tenha instalado o NodeJS no seu computador, caso não tenha acesse o `https://nodejs.org/` faça o download e instale!

Depois de instalar o NodeJS, abra seu editor de código (Ex: VSCODE) e utilize o terminal, digite o comando `npm install -g json-server` para então instalar o servidor JSON;

Abra a pasta e digite novamente no terminal o comando `npx json-server db.json --port 3000`

No endereço http://localhost:3000 o servidor ira ser rodado.

Caso queria mudar a porta, abra o arquivo `index.js`, logo na linha 1 terá uma variante chamada API_URL mude para a porta que deseja;

Feito isso, agora basta abrir o arquivo `index.html` com seu navegador e voilà!