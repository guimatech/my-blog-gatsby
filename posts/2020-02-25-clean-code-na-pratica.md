---
date: 2020-02-25 05:54:23
title: Clean code na prática
description: Veja como aplicar várias técnicas de clean code na PRÁTICA!
category: Misc
background: "#7AAB13"
---

# Clean Code na Prática

Quanto mais se compartilha conhecimento mais se ganha conhecimento e inspirado por isso e por experiências um tanto malucas no mercado de software escrevi este humilde artigo para compartilhar algumas lições que tirei dessas experiências.

## **10 Motivos para você usar técnicas de clean code**

1. Perda de tempo tentando entender o código;
2. Desmotivação para trabalhar;
3. Sentimento de que o código está bagunçado;
4. A maioria dos problemas estão no código;
5. Alto custo para realizar uma manutenção;
6. Não conseguir entregar um sistema com qualidade;
7. A cada atualização mais bugs são inseridos;
8. Confiança do cliente;
9. Código complexos que escondem regras mais simples;
10. Ser mais produtivo.


## **Números absurdos**

Uma vez por outra você põe a mão num código que te dá números que te levam a loucura como esses:

- Arquivos com mais de 20.000 linhas de código;
- Rotinas com mais de 100 caminhos possíveis;
- Classes com mais de 500 métodos;
- Métodos com mais de 80 parâmetros;
- Rotinas com mais de 1.500 linhas de código.

E geralmente esses códigos já fazem parte de um sistema enorme a muitos anos, então você não tem a opção de deletar tudo e fazer de novo, porque você não tem tempo, força, dinheiro, etc… Você tem algumas opções:

**Opção 1**: Sentar e chorar.

**Opção 2**: Se irritar e amaldiçoar os desenvolvedores que fizeram aquilo.

**Opção 3**: Arregaçar as mangas e fazer algo a respeito, ou seja, refatorar meu amigo e que a força esteja com você.

Se você mesmo depois de executar as duas primeiras chegou na **opção 3,** parabéns meu amigo!!! Você é um guerreiro Jedi.

Vou tentar te ajudar um pouco com esse artigo.


## O que pode ser classificado como o famigerado Code Smells (Código fedido)?

Não é muito difícil saber que um código está ruim, você está lendo ou desenvolvendo algo e de repente para e pensa “isso aqui não tá legal”, mas muitas vezes você não sabe direito porque ou não sabe como pode fazer melhor no tempo que você tem, algumas das características desse código geralmente são:

- Código duplicado;
- Classes utilitárias;
- Baixa coesão (Rotinas que faz mais de uma coisa);
- Método muito longo;
- Redundância nos comentários;
- Aerodinâmica ou distância da margem (Ex.: if dentro de if e assim vai… O famoso código Haduken);
- Muito comentário no código;
- Comitar código comentado;
- Classes grandes;
- Alto acoplamento (Para usar uma coisinha carrega um mundo classes);
- Métodos com muitos parâmetros.


## Medindo a qualidade do código

Os dados que medem a qualidade de um código são muitos e é muito interessante que se conheça eles através de leitura, cursos e palestras que falam sobre o assunto, algumas das coisas que devem ser levadas em consideração nessa medição são: quantidade e/ou tamanho de linhas de código, complexidade ciclomática, número de classes, linhas de código por método, número de estruturas de decisão aninhadas, número de métodos por classe.

Contudo existem diversas ferramentas que ajudam não só a medir a qualidade de seu código como também podem ser configuradas para o código nem mesmo compilar ou interpretar se não estiver dentro de determinadas diretivas, como:

- Em Delphi, até mesmo na IDE existem ferramentas que ajudam os desenvolvedores a manter seu código limpo, esta ferramenta são: CodeSite (presente no Delphi XE), QA Audits e QA Metrics (Ambas a partir da versão 2006)
- Em Java, pode ser usada a ferramenta Eclipse Metrics, o Jacoco e o Sonar.
- Em Ruby, o rubocop.

Bem, essas são algumas das ferramentas que conheço, mas cada linguagem tem sua gama de ferramentas para serem usadas para esse e outras finalidades.


## **Técnicas**

Sem mais delongas, vamos as técnicas e exemplos, separei esses por escopo para ficar mais fácil de assimilar.

## **Sobre Métodos**

### **Extração de métodos**

- **Problema**: Existe um fragmento de código que poderia ser agrupado para tornar a lógica mais fácil de ser entendida.
- **Solução**: Transforme o fragmento de código em um método cujo nome explique o propósito do mesmo.

![Extração de métodos](/assets/img/extracao-metodo.png)

**Internalizar métodos**

- **Problema**: O corpo do método é tão claro quanto o seu nome.
- **Solução**: Coloque o corpo do método dentro do que o chama e remova o método.
- **Dica adicional**: Crie métodos de poucas linhas (1 ou 2 +/-) com nome claro para um IF, por exemplo.

![Internalizar métodos](/assets/img/internalizar-metodo.png)

### **Separar a Consulta do Modificador**

- **Problema**: Existe um método que retorna um valor, mas também altera o estado de um objeto.
- **Solução**: Crie dois métodos: um para consulta e um para a modificação.
- **Observação**: Eric Evans, em Domain-Driven Design (2004), se refere a esse tipo de Problema como "Side-Effect free functions".

![Separar a Consulta do Modificador](https://media-exp1.licdn.com/dms/image/C4E12AQGLs_4ZOkbtmQ/article-inline_image-shrink_1500_2232/0?e=1588204800&v=beta&t=Gq4AHkg4elXhAPLubeU0X7wLuMcRRbLMY5oPhVtGaxU)

### **Renomear Método**

- **Problema**: O nome de um método não está revelando seu propósito.
- **Solução**: Altere nome do método.
- **Atenção**: Não é aconselhável que se altere assinaturas de métodos no servidor invocados por n clientes.

![Renomear Método](https://media-exp1.licdn.com/dms/image/C4E12AQFSG-q-A-CQAQ/article-inline_image-shrink_1000_1488/0?e=1588204800&v=beta&t=it7XX4DAN2CofaL3cGD-eQ6SUJ8lQCIyCGeME1YURq4)

## **Sobre Variáveis**

### **Internalizar variável temporária**

- **Problema**: Existe uma variável temporária que recebe uma única atribuição de uma expressão simples.
- **Solução**: Substitua todas as referências a essa variável temporária pela expressão.
- **Observação**: Não mudar se a rotina envolve cálculos, pois as variáveis podem simplificar o entendimento desses cálculos.

![Internalizar variável temporária](https://media-exp1.licdn.com/dms/image/C4E12AQF0vLYHbyJ05g/article-inline_image-shrink_1000_1488/0?e=1588204800&v=beta&t=_saaL8LE41PBdy_9I3IPo935opd4LVWzXIpIXW4dXqs)

### **Substituir variável temporária por consulta**

- **Problema**: Se está usando uma variável temporária para armazenar o resultado de uma expressão.
- **Solução**: Extraia a expressão para um método. Substituir todas as referências à variável temporária pelo método.
- **Observação**: Não fazer isso quando a expressão envolver acesso a banco, por conta da performance.

![Substituir variável temporária por consulta](https://media-exp1.licdn.com/dms/image/C4E12AQGW9uBpQoGjug/article-inline_image-shrink_1500_2232/0?e=1588204800&v=beta&t=fkB7_Ls_ozE-bmyG3MiW7jvwGvGEwh33LdwHD2OcEps)

### **Introduzir variável explicativa**

- **Problema**: Existe uma expressão complicada.
- **Solução**: Coloque a expressão - ou partes dela - em uma variável temporária cujo único objetivo é explicar o seu propósito.

![Introduzir variável explicativa](https://media-exp1.licdn.com/dms/image/C4E12AQGqRiueuPXeUQ/article-inline_image-shrink_1500_2232/0?e=1588204800&v=beta&t=FRuR33ue_4bl9YCMZi1aHQ5u9T8w-wNV_05U7wuShgE)

### **Dividir variável temporária**

- **Problema**: Há uma variável temporária que, mais de uma vez, recebe atribuição.
- **Solução**: Crie uma variável temporária para cada atribuição.
- **Observação**: Essa solução pode ser ainda mais refinada, mas a critério de exemplo vamos deixar assim, para não causar confusão.

![Dividir variável temporária](https://media-exp1.licdn.com/dms/image/C4E12AQGfh7jTAD3XKA/article-inline_image-shrink_1500_2232/0?e=1588204800&v=beta&t=DaF0G3dTe2LlywAYdGNWrra6cICKlJcw39XuHDx68KM)

### **Remover atribuições a parâmetros**

- **Problema**: O código faz atribuições a parâmetros.
- **Solução**: Crie uma variável que recebe o parâmetro, demais atribuições e/ou operações.
- **Observação**: Essa prática é particularmente interessante, porque dá a segurança (caso o parâmetro seja por referência) que o valor do parâmetro não vai ser alterado.

![Remover atribuições a parâmetros](https://media-exp1.licdn.com/dms/image/C4E12AQEO52vHDGOhDQ/article-inline_image-shrink_1000_1488/0?e=1588204800&v=beta&t=TGf3UGg1Lk3pOV6Q3bqqm0dVADhxeq_ympHYxvsngYk)

## **Sobre Condicionais**

### **Decompor condicional**

- **Problema**: Há uma estrutura condicional complicada.
- **Solução**: Crie uma variável que explique a condicional complicada.

![Decompor condicional](https://media-exp1.licdn.com/dms/image/C4E12AQF-UfAm6CEnNQ/article-inline_image-shrink_1000_1488/0?e=1588204800&v=beta&t=1kLRa0aNZqLCTCl21I9VgNEMQff-1IbLSlQ4YHsyXL0)

### **Consolidar expressão condicional**

- **Problema**: Existe uma sequência de testes com o mesmo resultado.
- **Solução**: Consolide-os em uma única expressão e extrai-a.

![Consolidar expressão condicional](https://media-exp1.licdn.com/dms/image/C4E12AQEuwxRZ8d11gQ/article-inline_image-shrink_1500_2232/0?e=1588204800&v=beta&t=yoVAT-pEjNrExJwiYYTR_tTwjwDX5jtnSJR4cyo2slY)

### **Consolidar fragmentos condicionais duplicados**

- **Problema**: O mesmo fragmento de código parece duplicado em todos os termos de uma expressão.
- **Solução**: Mova-os para fora da expressão.

![Consolidar fragmentos condicionais duplicados](https://media-exp1.licdn.com/dms/image/C4E12AQEXfG9nADnipg/article-inline_image-shrink_1000_1488/0?e=1588204800&v=beta&t=CZZXpzOgoXCl6NmFOPg7jvNahIOZsACogrnGCjrC8nU)

### **Polimorfismo**

- **Problema**: Há um comando condicional que seleciona diferentes comportamentos de acordo com o tipo de objeto.
- **Solução**: Mova cada ramificação do comando condicional para um método de sobrescrita em uma subclasse. Torne abstrato o método original.
- **Observação**: O exemplo foi bem abstrato, mas imagine isso para a emissão de relatórios de extrato (diário, semanal, mensal, etc.).

![Polimorfismo](https://media-exp1.licdn.com/dms/image/C4E12AQEo7_dz8o77QA/article-inline_image-shrink_1000_1488/0?e=1588204800&v=beta&t=xNA7qh-aVdClvBiXh0WawO88UJqwTfqwk6zOCInvEkA)

### **Remover condição aninhada por cláusulas guarda**

- **Problema**: Um método tem uma lógica condicional que não deixa claro o fluxo normal da execução.
- **Solução**: Crie rotas de saída do algoritmo de forma rápida, diminuindo o número de códigos aninhados e evitando que o código de processamento complexo (ou código principal) seja atingido quando não necessário.

![Remover condição aninhada por cláusulas guarda](https://media-exp1.licdn.com/dms/image/C4E12AQEohc0HsSwQJg/article-inline_image-shrink_1000_1488/0?e=1588204800&v=beta&t=sZOA5mQCOgcI6QNEmEZcdXFgeaTAH4jtGq6-LAP9lsw)

## **Sobre Parametrização de métodos**

### **Parametrizar Métodos**

- **Problema**: Diversos métodos fazem coisas semelhantes, mas com diferentes valores contidos no corpo do método.
- **Solução**: Crie um método que utilize parâmetro para diferentes valores.

![Parametrizar Métodos](https://media-exp1.licdn.com/dms/image/C4E12AQHQR38eMAQrQA/article-inline_image-shrink_1000_1488/0?e=1588204800&v=beta&t=e-jtSIu52dLsRNIZf6g2Dl_19ayWiP9xbyua1szG3r8)

### **Substituir parâmetro por métodos explícitos**

- **Problema**: Há um método que se executa diferentes códigos de acordo com os valores de um parâmetro.
- **Solução**: Crie um método separado para cada valor do parâmetro.

![Substituir parâmetro por métodos explícitos](https://media-exp1.licdn.com/dms/image/C4E12AQGn7y88rXgKig/article-inline_image-shrink_1000_1488/0?e=1588204800&v=beta&t=ir0hUCSLg0KstgGn6DxI2VbKnJlSEnsMX6XHFDbXlR8)

### **Preservar o objeto inteiro**

- **Problema**: Você está lendo diversos valores de um objeto e passando esses valores como parâmetros em uma chamada de outro método.
- **Solução**: Em vez de fazer isso, envie o objeto inteiro.

![Preservar o objeto inteiro](https://media-exp1.licdn.com/dms/image/C4E12AQGmgw7OVVo3Dg/article-inline_image-shrink_1000_1488/0?e=1588204800&v=beta&t=KdYyDG8Aj6NVCiKK_f18stRzWwWxDMaiqdqoWAQmBiM)

### **Introduzir objeto parâmetro**

- **Problema**: Há um grupo de parâmetros que naturalmente andam juntos.
- **Solução**: Substitua-os por um objeto.

![Introduzir objeto parâmetro](https://media-exp1.licdn.com/dms/image/C4E12AQGHrpduVb8V_w/article-inline_image-shrink_1000_1488/0?e=1588204800&v=beta&t=OmLlS6ZFBEaGp1ekRw4grh42YABiMUoAX7QQITHSxz4)

## **Conclusão**

 Clean code é uma boa prática que significa basicamente se preocupar com os outros e consigo mesmo, uma vez que trás benefícios para todos.

Esse artigo foi tirado de um dos meus mapas mentais esse é o [link](https://coggle.it/diagram/W2mJflzBv87JCe40/t/clean-code/fe03554a8bc74c729ccc67b5ac8b9ad4b7ea2ec701d22a19ba4d06b6ed25f4c0) se quiser conferir deixo ele público e com cada novo aprendizado de técnica o preencho com mais uma técnica de clean code.

Se leu esse artigo aqui, eu agradeço muito o seu tempo e atenção, espero que eu tenha te ajudado de alguma forma. Muito obrigado!