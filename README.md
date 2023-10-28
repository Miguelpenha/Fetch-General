# Fetch-General-Repositories

### Verifica todos os repositórios de uma pasta, usando o ``git fetch``

## Instalação (não necessário caso use npx)

    npm install fetch-general-repositories -g

## Usando

### Buscar repositórios no local padrão (``DIST_SRC``)

    npx fetch-general-repositories

   ou

    fetch-general-repositories

### Buscar repositórios no local especificado

    npx fetch-general-repositories ./folder

   ou

    fetch-general-repositories ./folder

### Você também pode alterar ``DIST_SRC`` no arquivo ``config.json`` para alterar o local padrão de busca, assim bastando executar

    npx fetch-general-repositories

   ou

    fetch-general-repositories
