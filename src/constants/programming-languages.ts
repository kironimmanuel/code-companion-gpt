export const programmingLanguages = [
    { value: 'python', label: 'Python' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'php', label: 'PHP' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'go', label: 'Go' },
    { value: 'swift', label: 'Swift' },
    { value: 'kotlin', label: 'Kotlin' },
    { value: 'rust', label: 'Rust' },
    { value: 'c', label: 'C' },
    { value: 'c++', label: 'C++' },
    { value: 'dart', label: 'Dart' },
    { value: 'r', label: 'R' },
    { value: 'ocaml', label: 'OCaml' },
    { value: 'lisp', label: 'Lisp' },
    { value: 'lua', label: 'Lua' },
    { value: 'assembly', label: 'Assembly' },
    { value: 'perl', label: 'Perl' },
    { value: 'groovy', label: 'Groovy' },
    { value: 'scala', label: 'Scala' },
    { value: 'clojure', label: 'Clojure' },
    { value: 'elixir', label: 'Elixir' },
    { value: 'erlang', label: 'Erlang' },
    { value: 'julia', label: 'Julia' },
    { value: 'shell', label: 'Shell' },
    { value: 'powershell', label: 'PowerShell' },
    { value: 'sql', label: 'SQL' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'json', label: 'JSON' },
    { value: 'yaml', label: 'YAML' },
    { value: 'xml', label: 'XML' },
    { value: 'markdown', label: 'Markdown' },
    { value: 'plaintext', label: 'Plain Text' },
] as const;

export type ProgrammingLanguage = (typeof programmingLanguages)[number]['value'];
