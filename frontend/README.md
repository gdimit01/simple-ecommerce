# React + TypeScript + Vite

cd frontend
yarn dev
yarn build

cd backend
yarn dev
yarn build

server.ts runs on localhost:3000

# TO DO

- [x] Add ESLint rules for React and TypeScript
- [ ] Correct the purchases and userdashboard so that you have a list of purchased items as opposed to overwritting it on the same one
- [ ] Add Prettier config
- [ ] Add Jest for testing
- [ ] Add Cypress for end-to-end testing
- [ ] Add Tailwind CSS for styling
- [ ] Add React Router for navigation
- [ ] Add Redux for state management
- [ ] Add MongoDB for database integration
- [ ] Add authentication and authorization functionality
- [ ] Add Docker for containerization
- [ ] Add CI/CD pipeline for deployment

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
