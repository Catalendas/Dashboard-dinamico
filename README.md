### Dashboard dinamico

Neste projeto, o foco não foi a estilização, mas sim a aplicação dos princípios SOLID em um componente. O componente em questão era um dashboard, e um dos requisitos era que ele fosse dinâmico, podendo exibir tanto um gráfico de barras quanto listagens e contagens, como no exemplo abaixo.

Toda essa responsabilidade deveria ser gerida por um único componente, por isso houve a separação das responsabilidades. Nesse caso, foram utilizados templates, que chamavam diferentes tipos de gráficos.

A definição do tipo de gráfico era armazenada em um mock dos dados a serem exibidos. Cada conjunto de dados recebia um objeto contendo uma chave de configuração com o tamanho e o tipo do gráfico.

![image](https://github.com/user-attachments/assets/09148dcb-a45a-4d1c-bcef-5483b7727e8a)

### Como executar o projeto?

Siga os passos abaixo para a instalação do projeto em sua máquina:

1. Instale o [Git](https://git-scm.com/).
3. Clone o repositório do projeto com o comando `git clone https://github.com/Catalendas/Dashboard-dinamico.git`.
4. Abra o terminal na pasta do projeto e execute o comando `npm i` para instalar as dependências do projeto.
5. Rode o comando `npm run dev` para executar o projeto em ambiente de desenvolvimento .

