### Dashboard dinamico

Nesse projeto o foco não foi a estilização, mas sim a aplicação dos conceitos de solid em um component, nesse caso o componente era um dashboard, um dos requisitos é que ele deveria ser dinamico, podendo tanto conter um grafico de barra com também listagens e contagens como no exemplo abaixo.

Tudo isso deveria ser responsabilidade de um unico componente por isso foi feita uma separação de responsabilidades, no caso foram chamados de templates, esses templates chamavam um tipo de grafico diferente entre eles.

A definição do tipo do grafico era armazenada em um mock dos dados que seriam exibidos, cada conjunto desses dados recebem um objeto onde contem um cahave de configuração com tamanho de tipo do grafico.

imagem

### Como executar o projeto?

Siga os passos abaixo para a instalação do projeto em sua máquina:

1. Instale o [Git](https://git-scm.com/).
3. Clone o repositório do projeto com o comando `git clone https://github.com/Catalendas/Dashboard-dinamico.git`.
4. Abra o terminal na pasta do projeto e execute o comando `npm i` para instalar as dependências do projeto.
5. Rode o comando `npm run dev` para executar o projeto em ambiente de desenvolvimento .

