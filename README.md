### Dashboard dinamico

Nesse projeto o foco não foi a estilização, mas sim a aplicação dos conceitos de solid em um component, nesse caso o componente era um dashboard, um dos requisitos é que ele deveria ser dinamico, podendo tanto conter um grafico de barra com também listagens e contagens como no exemplo abaixo.

Tudo isso deveria ser responsabilidade de um unico componente por isso foi feita uma separação de responsabilidades, no caso foram chamados de templates, esses templates chamavam um tipo de grafico diferente entre eles.

A definição do tipo do grafico era armazenada em um mock dos dados que seriam exibidos, cada conjunto desses dados recebem um objeto onde contem um cahave de configuração com tamanho de tipo do grafico.

imagem