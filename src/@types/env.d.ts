declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DIST_SRC: string
        NODE_ENV: 'development' | 'production'
      }
    }
}

export {}