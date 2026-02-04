declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.module.css';
declare module '*.module.scss';

declare module '*.css';

declare module '*.scss';

// allow imports of plain JS/JSX files without declaration files
declare module '*.js';
declare module '*.jsx';
declare const Chatbot: any;
