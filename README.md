### Hi there! 👋

## What is inside?
- [Next](https://nextjs.org/docs)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Styled Components](https://styled-components.com)
- [Phosphor React](https://phosphoricons.com/)
- [Eslint](https://eslint.org)
- [Docker](https://www.docker.com)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Getting Started

```bash
git clone https://github.com/RafaelRRhocha/wefit-teste
```

```bash
cd wefit-teste
```

### Install dependencies:

#### With Docker:

```bash
docker build -t wefit .
```

```bash
docker container run --name wefitContainer -p 3000:3000 wefit
```

#### Without Docker:

```bash
yarn install
```

or

```bash
npm install
```

### Run development server

```bash
yarn run dev
```

or 

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

```
└── src
  ├── components
  ├── localStorage
  ├── pages
  ├── styles
```

| Folder           | Description                                          |
| ----------       | -------------------------------------------          |
| **components**   | Folder with application components                   |
| **localStorage** | Folder with local storage methods                    |
| **pages**        | Pages Routes                                         |
| **styles**       | Application styles                                   |

## Commands

- `dev`: run development server
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages