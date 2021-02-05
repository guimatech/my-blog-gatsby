---
title: Git para quando dá ruim
description: Sabe aquelas coisas que você não sabe que existe até precisar, ou não sabe que precisa até aprender?
date: 2021-05-02 11:34:00
thumbnail: /assets/img/git.jpg
category: dev
background: "#2DA0C3"
---
<!--StartFragment-->

# Git para quando *dá ruim*

Sabe aquelas coisas que você não sabe que existe até precisar, ou não sabe que precisa até aprender?

Bem, é dessas coisas que eu vou falar nesse artigo, se já passou por enroscos na vida de programador e conseguiu ajuda, sabe o valor que tem o amigo quase anônimo da comunidade ou do **stackoverflow**, ou mesmo o apoio do seu colega do lado, tem no seu crescimento… Enfim estou aqui para tentar ser esse amigo na hora da angustia hoje, fui inspirado por diversos pedidos de ajuda de colegas de trabalho e amigos do mundo da programação a escrever esse artigo, para te ajudar quando *dá ruim no Git*.

## Affs, a solução não é nada disso

```shell
$ git checkout -- .
```

Isso descarta tudo que você fez até o momento e não *commitou*.

## Quero fazer *merge* só disso, não tudo da *branch*!

Use:

```shell
$ git cherry-pick hash_do_commit
```

Quando estiver ***checado*** na branch para onde quer mandar.

Mas **ATENÇÃO** isso vai ser como um novo commit na *branch*, não um merge.

## Enviei até o que não devia…

Começando pelo primeiro erro que geralmente se comete, enviar um arquivo gerado, uma biblioteca, ou coisa do gênero, e dizer "*puts, isso era para ser ignorado*", mas aí você vai todo feliz lá no ***.gitignore*** e coloca uma linha com ***.exe** (supondo que é um executável), então você vai perceber que se ele for gerado novamente o git irá continuar versionando, aí você pode pensar, eu não pedi pra esse *trem* ser ignorado?

Bem, o que acontece é que uma vez adicionado o ***Git*** continuará versionando até que você delete esse arquivo e faça um *push* dessa deleção, resolvendo assim esse problema.

## Esqueci de mandar uma coisa no último *commit*, e agora?

Quando você esquece de adicionar um arquivo ou modificação no último ***commit*** e você não quer sujar o grato com um comentário do tipo "*fix: parada que eu esqueci de mandar*" você pode simplesmente dá o seguinte comando:

```shell
$ git add nome_arquivo_esqucido
```

```shell
$ git commit --amend --no-edit
```

Então ele adicionará o carinha que você esqueceu no último commit sem precisar editar o comentário ou fazer outro ***commit***.

## Dei *commit* no que não devia, e agora? 

Esse é um dos *anuladores de cagadas* que eu mais gosto, porque parece viagem no tempo pra corrigir cagadas do passado, quando você olha seu commit e diz "vixh, não era pra commitar isso", nesse caso você pode reescrever o grafo local usando o comando:

```shell
$ git reset --mixed HEAD~1
```

Esse comando retornará o último commit para a fase de *unstaged*, isso permitirá que você corrija o que precisar e commit novamente como se o commit anterior nunca tivesse acontecido.

Mas **ATENÇÃO**, aqui vai dois pontos que vocês precisam observar há variações desse comando, por exemplo, no lugar de ***--mixed*** é possível usar ***--soft*** para voltar os arquivos para staged ou ***--hard*** para sumir com eles, outra coisa é que quando o problema é um commit um pouco atrás dos outros ou você quer resumir vários commits com um comentário só você pode usar:

```shell
$ git reset --mixed hash_do_commit_anterior_ao_que_voce_quer
```

Isso fará você viajar no tempo no timeline do projeto no momento daquele commit.

## Dei *push* no que não devia, e agora?

Esse é basicamente o mesmo problema do tópico anterior, só que mais crítico porque você enviou e quebrou o pipeline, nesse caso você só adiciona aos comando ensinados anteriormente o:

```shell
$ git push -f
```

Isso forçará o envio do novo grafo. 

Aqui você tem outros **pontos de atenção**, como isso vai fazer com que você force a reconstrução dos últimos fatos passados no grafo você precisa se atentar para algumas coisas:

1. Certifique-se de que ninguém fez um ***commit*** na frente do seu, se fez, mude sua estratégia.
2. Certifique-se que isso não foi liberado, ou seja, não tenha uma ***tag*** de versão nesse momento, porque esse procedimento vai fazer você perder essa ***tag*** de modo que não possa mais usá-la a não ser que apague-a.

## Gráfico sem bagunça!

Sempre dê ***pull*** antes do ***commit***, isso é para quando tem mais de uma pessoa trabalhando na mesma branch, isso fará com que você resolva possíveis conflitos e garante seu ***commit*** esteja atualizado. Se não fizer isso, o git tentará fazer e o resultado é meio estranho de se ver.

Sempre faça um *rebase* na branch para onde vai mandar antes do ***merge***, se não fizer isso possivelmente terá conflitos no ***merge*** ou ele ficará repartido entre 2 o de ***merge*** na ponta do grafo e suas modificações perdida em algum lugar no meio dele.

## Separando repositórios monolíticos, sem perder histórico 

Esse é muito legal, mas eu acho que é o mais difícil por isso deixei pra o final. 

Funciona assim, supondo que esteja num repositório que tenha: 

- **Servidor**: Contendo apenas código de back-end;
- **ClienteDesktop**: Contendo o código do app para pc;
- **ClienteWeb**: Contendo o código do app web; 
- **ClienteMobile**: Contendo o código do app mobile; 

Tudo no mesmo *bolo doido*, mas você quer separar isso, porque essa bagunça causa muitos conflitos, erros em produção, dificuldade de achar uma mudança feita, entre outras coisas, então o chefe diz "*já está assim desde tempos imemoriais e funciona, então deixa quieto, senão...*", pois bem mostre para ele que você é fera!

1. Faça uma cópia do repositório localmente antes de começar (só para garantir).

2. No seu terminal, clone o repositório que será dividido (Por exemplo, o Servidor): 

   ```shell
   $ git clone --no-hardlinks C:/Git/Servidor C:/Git/ServidorClone
   ```

3. Execute o comando filter-branch do git com o nome da pasta que você deseja transformar em outro repositório (Por exemplo, ClienteWeb): 

   ```shell
   $ git filter-branch --prune-empty --subdirectory-filter ClienteWeb
   ```

4. Crie no seu Github ou no gerenciador de reposítórios da sua preferência um repositório com o nome que desejar, então altere a URL remota de seu repositório (no meu caso ClienteWeb): 

   ```shell
   $ git remote set-url origin http://github.com/ClienteWeb.git
   ```

5. Dê push em seu novo repositório: 

   ```shell
   $ git push
   ```

Obs.: Note que se você acessar o repositório clonado (ServidorClone) que o repositório ClienteWeb foi filtrado e agora está na raiz e que todo histórico do git foi mantido só para ele.

Agora repita esse processo para todos os outros repositórios que desejar!

## Conclusão

Por fim, mas não menos importante, dê preferencia por trabalhar com um padrão que funciona e já foi testado pelo mercado, isso geralmente te poupará tempo e alguns fios de cabelo, não tente reinventar a roda, para aprender mais sobre um desses padrões que estou falando dá uma olhada nesse artigo sobre [**Gitflow**](http://missaodevops.com.br/docs/scm_efetivo.html).

Se você tiver ainda mais alguma dificuldade que superou ou que ainda não encontrou solução fale aqui nos comentários e vamos tentar resolver juntos.

Se você chegou até aqui, parabéns! Não pare vá para os comentários e/ou próximo artigo e divirta-se.
