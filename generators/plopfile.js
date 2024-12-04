module.exports = (plop) => {
  plop.setHelper('openDoubleCurlyBraces', () => '{{');
  plop.setHelper('closeDoubleCurlyBraces', () => '}}');
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the component name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('context', {
    description: 'Create a context',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the context name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../context/{{camelCase name}}Context.tsx',
        templateFile: 'templates/context.tsx.hbs',
      },
    ],
  });
};
