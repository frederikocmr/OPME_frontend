# Frontend do desafio OPME

## **Detalhes da Solução**

Alguns detalhes sobre a implementação:

- App construído conforme especificado, não saindo do escopo e mantendo coerência nos retornos definidos;
- Como deixei a tratativa dos dados (quais serão retornados) no backend, o frontend quase não teve lógica de aplicação, somente as partes básicas definidas com duas páginas - detalhes e usuarios;
- Foi utilizado a biblioteca Styled Components, e o estilo definido foi bem minimalista e clean, fazendo todos os componentes responsivos;
- Foi feita a configuração do ESLint junto com o prettier para forçar a estilização e as boas práticas de implemetação;
- Utilizado a paginação com "infinity scroll", na medida que o usuário desce no fim da página, mais requisições são feitas.

## Execução

Os passos após ter clonado e baixado todos os arquivos pelo Git são:

- Certifique-se de que tenha o NodeJS instalado;
- Dentro da pasta do projeto, instalar todas as dependencias com: `yarn` ou `npm install` dependendo do gerenciador de pacotes instalados (recomendo o yarn);
- Para inicializar o servidor, basta utilizar o comando `yarn start`;
- Para realizar o teste (básico), utilizar o comando `yarn test`.

* Observação: como a API do Github está limitando o acesso, criei uma mensagem caso a quantidade de acessos ultrapasse o limite.
