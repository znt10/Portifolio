export interface ProjectArchitectureSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  image: string;
  overview: string;
  architecture: ProjectArchitectureSection[];
}

export const projects: Project[] = [
  {
    slug: "matchcarreira",
    number: "01",
    title: "MatchCarreira",
    description:
      "Plataforma de recrutamento que conecta candidatos e empresas. Cadastro de vagas, perfis profissionais e autenticação via NextAuth.",
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "NextAuth.js", "Tailwind CSS"],
    live: "https://nextjs-fullstack-rosy.vercel.app",
    github: "https://github.com/znt10/matchcarreira",
    image: "/projects/matchcarreira.png",
    overview:
      "Plataforma fullstack que conecta candidatos e empresas, permitindo que candidatos montem perfis profissionais e busquem vagas, empresas publiquem oportunidades e administradores gerenciem usuários e vagas da plataforma.",
    architecture: [
      {
        heading: "Fullstack no App Router",
        body: "Next.js (App Router) concentra frontend e backend no mesmo projeto: rotas de API implementam o CRUD de vagas, empresas e perfis, consumidas pelos mesmos componentes React que renderizam a interface.",
      },
      {
        heading: "Dados e persistência",
        body: "MongoDB Atlas como banco NoSQL na nuvem, modelado com Mongoose. A escolha de um schema flexível encaixa bem com perfis de candidato e vaga que variam bastante em campos preenchidos.",
      },
      {
        heading: "Autenticação e papéis",
        body: "NextAuth.js gerencia sessão e login, com senhas hasheadas via BcryptJS. Um sistema de roles (candidato, empresa, admin) controla o acesso a rotas privadas e ao dashboard administrativo.",
      },
      {
        heading: "Estado atual",
        body: "Cadastro, login, CRUD de vagas e perfis de candidato/empresa estão funcionais; o fluxo de recuperação de senha por token ainda está em desenvolvimento.",
      },
    ],
  },
  {
    slug: "unistock",
    number: "02",
    title: "Unistock",
    description:
      "Sistema web de gerenciamento de estoque, produtos e pedidos. Arquitetura separada com frontend e backend independentes.",
    tech: ["Next.js", "React", "TypeScript", "Zustand", "Django REST Framework", "MySQL", "Docker"],
    live: "https://5-periodo.vercel.app",
    github: "https://github.com/znt10/Unistock_Front",
    image: "/projects/unistock.png",
    overview:
      "Sistema de gerenciamento de lojas, produtos, estoque e pedidos, construído como dois projetos independentes que se comunicam por API REST.",
    architecture: [
      {
        heading: "Frontend e backend desacoplados",
        body: "O frontend (Next.js 15 + TypeScript) e o backend (Django REST Framework) são repositórios separados, sem acoplamento de código — apenas um contrato de API REST versionado os conecta.",
      },
      {
        heading: "Estado e dados",
        body: "Zustand gerencia o estado global no frontend. No backend, os dados de lojas, produtos, estoque e pedidos são persistidos em MySQL, com o schema controlado por migrations do Django.",
      },
      {
        heading: "Autenticação e permissões",
        body: "Autenticação via Simple JWT, com o token guardado em cookie HTTP-only definido pelo backend — o frontend nunca manipula o token diretamente. O acesso ao sistema é restrito por grupos de usuário (Admin, Gerente, Responsável).",
      },
      {
        heading: "Infraestrutura",
        body: "O backend roda containerizado via Docker Compose, o que automatiza migrations, criação de grupos e do usuário admin padrão ao subir o ambiente. A API expõe documentação via schema/Swagger.",
      },
    ],
  },
  {
    slug: "croche-atelie-de-luxo",
    number: "03",
    title: "Crochê e Ateliê de Luxo",
    description:
      "Loja virtual para venda de peças em crochê feitas à mão, com catálogo por categorias e pedidos finalizados via WhatsApp.",
    tech: ["Django", "MySQL", "Docker", "Gunicorn", "AWS S3"],
    live: "https://site-de-nenem-production.up.railway.app",
    github: "https://github.com/znt10/Site-de-nenem",
    image: "/projects/site-nenem.png",
    overview:
      "Loja virtual construída sobre um catálogo de produtos genérico em Django, reaproveitável para diferentes nichos de venda por WhatsApp — nesta instância, configurada para peças de crochê feitas à mão.",
    architecture: [
      {
        heading: "Monolito Django com painel próprio",
        body: "Aplicação Django com painel administrativo customizado (django-admin-interface), onde o lojista cadastra produtos, categorias, preços e imagens de destaque sem precisar mexer em código.",
      },
      {
        heading: "Mídia e armazenamento",
        body: "As imagens de produto sobem para um bucket S3 via django-storages/boto3, em vez de ficarem no disco do servidor — importante porque a infraestrutura roda em containers efêmeros.",
      },
      {
        heading: "Checkout via WhatsApp",
        body: "Não existe carrinho ou pagamento no site: ao clicar em \"Pedir no WhatsApp\", o cliente é redirecionado com uma mensagem pré-formatada contendo nome, preço e link do produto, via link wa.me.",
      },
      {
        heading: "Deploy",
        body: "Empacotado com Dockerfile, servido por Gunicorn com WhiteNoise para os estáticos, e implantado no Railway. Nome da loja e número de WhatsApp são configuráveis por variável de ambiente, o que permite reaproveitar o mesmo código para lojas diferentes.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
