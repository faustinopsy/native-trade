## O que é React Native?
O React Native é um framework criado pelo Facebook (atual Meta) que permite desenvolver aplicativos nativos utilizando JavaScript (e React, claro). Diferente de outras soluções híbridas, o React Native compila para código nativo, garantindo uma performance muito próxima de aplicativos desenvolvidos especificamente para Android ou iOS.

- Filosofia: “Aprenda uma vez, escreva em qualquer lugar”
Você utiliza o mesmo conhecimento em React para construir interfaces nativas, mas pode reaproveitar parte do código e da arquitetura tanto para Android quanto para iOS.

### Benefícios:

Alta produtividade (Hot Reload para agilizar desenvolvimento).
Comunidade ativa e vasto ecossistema de bibliotecas.
Uso do JavaScript, que já é familiar para muitos desenvolvedores web.
2. Diferenças entre React.js e React Native
DOM vs. Componentes Nativos: No React.js, você trabalha com elementos do HTML (DOM). No React Native, você trabalha com componentes nativos (como View, Text, Image), que são traduzidos para componentes de interface do sistema operacional (UIViews no iOS, Views no Android, etc.).
Estilização: Em React.js, você utiliza CSS para estilizar. Em React Native, você utiliza objetos de estilo no JavaScript, simulando a sintaxe do CSS, mas com algumas diferenças (por exemplo, não há herança de estilo como no CSS tradicional).
Navegação: No React.js, normalmente usamos bibliotecas como React Router. No React Native, existem várias opções (React Navigation, React Native Navigation, etc.).
### Configuração do ambiente de desenvolvimento
- Opção 1: Expo
O que é: Uma ferramenta que facilita a criação e o desenvolvimento de aplicações React Native sem precisar configurar todo o ambiente Android/iOS nativo.
- Vantagens:
Menos configurações iniciais.
Tem um client app (Expo Go) para testar no próprio celular facilmente.
Ideal para iniciantes e para desenvolvimento rápido de protótipos.
- Opção 2: React Native CLI
O que é: Instalação direta do React Native via CLI oficial (npx react-native init).
- Vantagens:
Maior liberdade para integrar bibliotecas nativas (algumas dependências podem não funcionar nativamente no Expo, ou exigem configuração extra).
Ideal para projetos que exigem customização mais profunda.


### Iniciando um projeto

1. Instale o Expo CLI
```
npm install --global expo-cli

```
2. Crie o projeto:
```
expo init native-trade
```
ao selecionar o template blank a estrutura do projeto (Expo) inicial

```
native-trade
┣━ .expo
 ┣━ .git
 ┣━ assets
 ┣━ node_modules
 ┣━ App.js
 ┣━ app.json
 ┣━ index.js
 ┣━ package.json
 ┗━ ...
```
### sobre este projeto

Este repositório serve como um modelo de aplicação voltado para aulas e estudos de React Native. A ideia é demonstrar, de forma incremental, como construir e evoluir um aplicativo, abordando diferentes conceitos em cada etapa. Para isso, cada fase do desenvolvimento será disponibilizada em uma branch específica, facilitando o acompanhamento passo a passo e a comparação entre as diferentes versões.

```
git checkout -b main
git checkout -b fase2-navegacao
git checkout -b fase2.5-props
git checkout -b fase3-estado
git checkout -b fase4-apis
git checkout -b fase5-CRUD-apis
          
          (instalar bibliotecas
            npm install @react-navigation/native
            npm install @react-navigation/drawer @react-navigation/bottom-tabs
            # Dependências adicionais requeridas pelo React Navigation
            expo install react-native-gesture-handler react-native-reanimated
            react-native-screens )
            
            /---- fase2-navegacao 
           /         \
         /            \-----fase2-5-props
        /              \
main ---                \-----fase3-estado
                         \
                          \-----fase3-usereffect
                           \
                            \------fase4-apis
                             \
                              \----fase5-CRUD-apis
                               \
                                \----fase6-Jwt-client-serve

```

em breve posiveis alterações.