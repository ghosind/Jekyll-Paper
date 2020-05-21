const loadMermaid = () => {
  mermaid.init(
    {
      startOnLoad: true,
      theme: 'default',
    },
    'pre code.language-mermaid',
  );
};
