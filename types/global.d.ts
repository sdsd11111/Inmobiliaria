// Global type declarations for the application

// Type definitions for CSS modules
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Type definitions for image files
type ImageSource = string;

declare module '*.png' {
  const content: ImageSource;
  export default content;
}

declare module '*.jpg' {
  const content: ImageSource;
  export default content;
}

declare module '*.jpeg' {
  const content: ImageSource;
  export default content;
}

declare module '*.gif' {
  const content: ImageSource;
  export default content;
}

declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react';
  
  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
  
  const content: ImageSource;
  export { ReactComponent };
  export default content;
}

// Global utility types
type Nullable<T> = T | null;
type Undefinable<T> = T | undefined;
type Maybe<T> = T | null | undefined;

// Extend the NodeJS namespace for environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly NEXT_PUBLIC_APP_ENV?: string;
    // Add other environment variables as needed
  }
}
