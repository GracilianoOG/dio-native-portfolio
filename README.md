# ✨ Portfolio (Desafio da DIO)

## 📖 Descrição

Projeto de portfolio desenvolvido com React Native e TypeScript. Utiliza o pacote de `bottom-tabs` para implementação da navegação. O design e escolha das cores foi inspirado na temática do jogo Half-Life com um tom em modo dark por padrão. Aprendi muito sobre navegação entre diferentes páginas e reforcei bastante sobre os conceitos de TypeScript e a importância da tipagem de variáveis e funções para desenvolver um código mais manutenível.

## 📦 Instalação local

1. Clone este repositório:

```bash
git clone https://github.com/GracilianoOG/dio-native-portfolio.git
```

2. Abra o projeto em sua IDE preferida, exemplo no VSCode:

```bash
cd dio-native-portfolio/
```

3. Após navegar para dentro do diretório, inicie o VSCode:

```bash
code .
```

4. Instale as dependências:

```bash
npm install
```

5. Rode o projeto com o script (padrão):

```bash
npm start
```

## 📜 Scripts disponíveis

| Script     | Comando                 | Descrição                             |
| ---------- | ----------------------- | ------------------------------------- |
| `start`    | `expo start`            | Inicia o projeto no modo padrão       |
| `android`  | `expo start --android`  | Inicia o projeto no emulador Android  |
| `ios`      | `expo start --ios`      | Inicia o projeto no simulador iOS     |
| `web`      | `expo start --web`      | Inicia o projeto no navegador web     |

## 🗂️ Estrutura do projeto

```
📁 assets/ -> assets (imagens) do projeto.
📁 src/
  📁 components/ -> componentes separados em pastas.
  📁 screens/ -> telas que serão compostas com os componentes.
  📁 utils/ -> arquivos utilitários do projeto.
  📄 app.json -> configurações do app.
  📄 App.tsx -> entry point do app (componente principal).
```

Os componentes foram organizados em subpastas, de acordo com seu respectivo nome. A estrutura funciona da seguinte maneira:

```
📁 components/
  📁 SkillCard/
    📄 SkillCard.tsx -> componente principal
    📄 style.ts -> arquivo de estilos do componente local
    📄 index.ts -> entry point ao carregar a pasta do componente
```

## 📲 Telas

### Tela `Home`

Essa tela inicial contém a foto do desenvolvedor (eu 🤓), uma frase de efeito (uau 🎉) e algumas tags das tecnologias que eu conheço.

### Tela `Skills`

Aqui eu demonstro o nível de cada skill descrita através de estrelas (0 a 5 estrelas para cada habilidade). Eu consegui mostrar as estrelas de acordo com o fornecido, mostrando as estrelas cheias, vazias, e pela metade caso seja uma "meia estrela". Além disso, pratiquei um pouco mais com `ScrollView` e também experimentei (mas não mantive) com `FlatList` para ver a diferença.

### Tela `Education`

Nessa seção eu mostro alguns cards estilizados com informações sobre cursos técnicos e superiores que já realizei ou que estou realizando no momento.

### Tela `Contact`

Na tela de contatos eu monstro minha foto, uma breve descrição sobre meus hobbies e alguns links. Me inspirei no linktree para desenvolver essa página. Aqui eu experimentei pela primeira vez a API `Linking` para abrir links externos a partir de um botão customizado por mim.

## 🛠️ Ferramentas e tecnologias

[![Ferramentas](https://skillicons.dev/icons?i=react,ts,nodejs,npm,vscode,bash)](https://skillicons.dev)

- Desenvolvido com `React Native`.
- Utiliza `Expo` para facilitar o desenvolvimento e a gestão do projeto.
- Desenvolvido com `TypeScript` para garantir tipagem forte e maior segurança.
- Ferramentas de desenvolvimento com suporte a tipagens do React.
- Navegação entre as telas desenvolvida com o pacote `bottom-tabs`, que permite adicionar abas na parte inferior da tela.

## 🔗 Links

- [Digital Innovation One](https://www.dio.me/)
- [React Native Components](https://reactnative.dev/docs/components-and-apis)
- [Expo Docs](https://docs.expo.dev/)
- [Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)
- [Linking](https://reactnative.dev/docs/linking?language=typescript)
- [ScrollView](https://reactnative.dev/docs/scrollview)

## 🧑🏻‍💻 Autor

| [<img src="https://avatars.githubusercontent.com/u/72778164?s=96&v=4"><br><sub>GracilianoOG</sub>](https://github.com/GracilianoOG) |
| :---------------------------------------------------------------------------------------------------------------------------------: |
|                                       [Linkedin](https://www.linkedin.com/in/gabrielgmbarros)                                       |

## 📝 Licença

O código fonte está sob a licença [MIT](./LICENSE).
