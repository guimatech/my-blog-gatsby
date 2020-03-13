---
title: Boas Práticas de Programação em Delphi
description: >-
  "Qualquer tolo consegue escrever um código que o computador entenda, bons
  programadores escrevem código que humanos entendam" - Martin Fowler
date: '2020-03-12 11:59:51'
thumbnail: assets/img/0-2.jpeg
category: dev
background: '#637a91'
---


Compilei aqui algumas boas práticas que acredito tem benefícios para comunidade em geral, e você irá notar que apesar do título muitas das dicas contidas aqui não se aplicam só a programadores Delphi e são de modo geral coisas simples que antes de conhecermos ou mesmo conhecendo deixamos passar desapercebido na hora da codificação.

### **Motivações**

Para estimular a colaboração, aí vão duas frases fantásticas que me fazem pensar melhor antes de escrever qualquer coisa...

> "Qualquer tolo consegue escrever um código que o computador entenda, bons programadores escrevem código que humanos entendam" - Martin Fowler
>
> "Sempre codifique como se o programador que vai dar manutenção no seu código fosse um serial killer maníaco que sabe onde você mora" - Autor desconhecido

### **Nomenclatura**

* Renomeie todo os componente que você fará referência no código e ponha**nomes significativos**que transmitam uma ideia da função dele ali, isso facilita e muito a leitura e compreensão de um código que manipula componentes em tempo de execução.
* Se usar termos em inglês,**mantenha o padrão**em inglês, e se em português, mantenha também o padrão em português
* Nomear os arquivos ou componentes com seus respectivos tipos em**forma mnemônica**(Ex. "frm" para formulário, ou "u" para units, "grd" para grids)
* Compor o nome de tudo que esteja relacionado a uma entidade de domínio com o nome desta (Ex. Uma unit ou formulário que manipule os dados de um cliente ter no seu nome "cliente").
* **Criar contêineres lógicos usando ponto**para que saiba que grupo pertence a classe/arquivo A/B (Ex. Cliente.A/Cliente.B, Dao.Produto).

### **Organização da Estrutura de Diretório Delphi**

**Nunca trabalhar com caminho estático (fixo) de diretório**, pois isso gera muitos problemas quando as coisas vão rodar em um computador com configuração de pastas diferente, por tanto**sempre trabalhe com caminho relativo de diretório**. (Ex.*\*.\**( O "ponto barra" indica o diretório corrente do projeto).

Também é possível usar no caso do Delphi variáveis de ambiente como:

* **$(Config)**- (É a pasta com o nome do Build que foi configurado (Ex. DEBUG ou RELEASE)).
* **$(Plataform)**- (É a pasta com o nome da Plataforma que foi configurado (Ex. Android, Win32, iOS, ...)).

### **Dicas de padrão de organização**

* Colocar executáveis em uma pasta de nome "Bin".
* Criar pasta para DCUs em ".$(Plataform)$(Config)".
* Usar padrão arquitetural como por exemplo:**MVC**ou**MVVM**.
* Criar pasta de nome "Library" (uma pasta de arquivos que é usada em mais de um projeto).
* Adicionar pasta "Library" no Source Path do projeto.
* Quando compilar para a distribuição compilar em Release

### Pacotes (Packages): Refatorando executáveis

Desmarcar opção que compilar pacotes junto com executável**\*build with run packages\***ou em**\*Runtime packages\***na opção**\*Link with runtime packages\***para***True****.* Ao invés disso**enviar somente os pacotes que serão utilizados**e para saber quais são esses basta olhar em***Information for [****nomeDoProjeto]**\* que fica na aba**\*Project\****.*

Alguns dos pacotes estarão na pasta do Delphi e os componentes de terceiros nas pastas que ficam em documentos e os nativos dentro da pasta de instalação.

O benefício disso é só precisar enviar os pacotes uma vez e como consequência acaba tendo como resultado**executáveis muito menores**.

### **Testes unitários**

Teste unitário não é difícil, é trabalhoso, porém importante principalmente em projetos que muitas pessoas estão trabalhando juntas ele tem a finalidade de permitir que uma funcionalidade permaneça intacta mesmo que novas implementações ou correções na aplicação sejam feitas.

Desde o Delphi 2007, há a possibilidade de adicionar um projeto de teste capturando do**projeto real**as classes e métodos que queremos testar (se localiza no pacote*Unit Test*e chama-se*Test Project*em seguida do mesmo pacote devem ser adicionados os casos de teste (*Test Case*).

### Abusar dos mecanismos de ajuda

* O compilador com suas dicas(Hint), avisos/alertas(Warnings) e erros(errors), são apresentados na aba de*messages*e tem sua**leitura obrigatória**.
* **Helps**: É totalmente parametrizado, o que significa que o help pode ser aberto exatamente na propriedade do componente que você quiser basta pressionar F1 para tanto.
* Error insight**erros que aparecem dentro do código.**
* Ler sempre o**Whats new**, para ficar por dentro das novidades.
* **Anotar**o que é mais interessante e estudar por sessões.

### Em conclusão boa prática é:

* Se preocupar com os outros.
* Criar um padrão.
* Documentar o padrão criado.
* Seguir sempre o padrão criado.