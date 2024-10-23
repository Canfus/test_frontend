/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DADATA_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
