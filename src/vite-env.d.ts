/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_FOXY_STORE_DOMAIN: string;
    readonly VITE_APP_FOXY_API_KEY: string;
    readonly VITE_APP_TEST_VARIABLE: string;
  
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  