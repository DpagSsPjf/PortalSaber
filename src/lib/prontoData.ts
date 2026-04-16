export interface Profissao {
  id: string;
  nome: string;
  slug: string; // Usado na URL, ex: "recepcionista"
  imagemSrc: string; // Caminho para a imagem/ícone da profissão na pasta public
  // outros campos se necessário
}

export interface Tutorial {
  id: string;
  titulo: string;
  slug: string; // Usado na URL, ex: "pesquisar-usuario"
  profissaoSlug: string; // Para linkar com a profissão
  imagemSrc: string;
  url?: string;
}

export const profissoesPronto: Profissao[] = [
  {
    //check
    id: "rec",
    nome: "Recepcionista",
    slug: "recepcionista",
    imagemSrc: "/assets/icons/pronto/Recepção.png",
  },
  {
    //check
    id: "med",
    nome: "Médico",
    slug: "medico",
    imagemSrc: "/assets/icons/pronto/Médico.png",
  },
  {
    id: "enf",
    nome: "Enfermeiro",
    slug: "enfermeiro",
    imagemSrc: "/assets/icons/pronto/Enfermeira.png",
  },
  {
    id: "den",
    nome: "Dentista",
    slug: "dentista",
    imagemSrc: "/assets/icons/pronto/dentista.webp",
  },
  {
    id: "farm",
    nome: "Farmacêutico",
    slug: "farmaceutico",
    imagemSrc: "/assets/icons/pronto/Farmaceutico.png",
  },
  {
    id: "vig",
    nome: "Vigilância Sanitária",
    slug: "vigilanciaSanitaria",
    imagemSrc: "/assets/icons/pronto/Vigilancia Sanitaria.png",
  },
  {
    id: "as",
    nome: "Assistente Social",
    slug: "assistenteSocial",
    imagemSrc: "/assets/icons/pronto/Assistente Social.png",
  },
  {
    id: "acs",
    nome: "Agente Comunitário de Saúde",
    slug: "agenteComunitarioSaude",
    imagemSrc: "/assets/icons/pronto/Agente Comunitário de Saúde.png",
  },
  {
    id: "auxenf",
    nome: "Aux./Técnico em Enfermagem",
    slug: "auxTecnicoEnfermagem",
    imagemSrc: "/assets/icons/pronto/enfermeira.webp",
  },
];

export const tutoriaisPronto: Tutorial[] = [
  {
    id: "1",
    titulo: "Cadastrar Usuário",
    slug: "cadastrarUsuario",
    profissaoSlug: "recepcionista",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1Zj00F8AOdcyY8HFiBMhWoec78dzshFFG/view?usp=sharing",
  },
  {
    id: "2",
    titulo: "Pesquisar / Alterar Usuário",
    slug: "pesquisarUsuario",
    profissaoSlug: "recepcionista",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1nuLya4U2bDDbzq31qIuPUUgNuLrvjozI/view?usp=drive_link",
  },
  {
    id: "3",
    titulo: "Importar Usuário",
    slug: "importarUsuario",
    profissaoSlug: "recepcionista",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: undefined,
  },
  {
    id: "5",
    titulo: "Fila de Atendimento",
    slug: "filaDeAtendimento",
    profissaoSlug: "recepcionista",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/drive/folders/1NxHhw_KI97ETWd9cTQ8ayIqJrKkIDSqG?usp=sharing",
  },
  {
    id: "6",
    titulo: "Agendamento ",
    slug: "agendamento",
    profissaoSlug: "recepcionista",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: undefined,
  },
  {
    id: "9",
    titulo: "Cadastrar Cidadão",
    slug: "cadastrarCidadao",
    profissaoSlug: "agenteComunitarioSaude",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1lTgHGH6iwyKdg7vDeSsyRXjjsKb6Fd12/view?usp=sharing&t",
  },
  {
    id: "10",
    titulo: "Cadastrar Domicílio",
    slug: "cadastrarDomicilio",
    profissaoSlug: "agenteComunitarioSaude",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1teQxuAvglxUOGGyVCMIn8qWyEQDzea2S/view?usp=sharing",
  },
  {
    id: "11",
    titulo: "Adicionar Membro da Família",
    slug: "adicionarMembro",
    profissaoSlug: "agenteComunitarioSaude",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1ogJW_9opWJ5DZi-EDqxg3e3H3GAasBrS/view?usp=sharing&t",
  },
  {
    id: "12",
    titulo: "Enviar Dados",
    slug: "enviarDados",
    profissaoSlug: "agenteComunitarioSaude",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1YirgP-gppQYkgWYlsgGB_2EBVW_XAZZY/view?usp=sharing",
  },
  {
    id: "13",
    titulo: "Triagem de Paciente",
    slug: "triagemPaciente",
    profissaoSlug: "enfermeiro",
    imagemSrc: "/assets/icons/pronto/enfermeira.webp",
    url: undefined,
  },
  {
    id: "14",
    titulo: "Solicitar Procedimento / Serviço",
    slug: "solicitarProcedimentoServico",
    profissaoSlug: "enfermeiro",
    imagemSrc: "/assets/icons/pronto/enfermeira.webp",
    url: "https://drive.google.com/file/d/1gpaWNXDUF9o7GHE7sHmJQFsH-YqaYpR_/view?usp=drive_link",
  },
  {
    id: "15",
    titulo: "Cancelar Agendamento",
    slug: "cancelarAgendamento",
    profissaoSlug: "enfermeiro",
    imagemSrc: "/assets/icons/pronto/enfermeira.webp",
    url: "https://drive.google.com/file/d/1ASwxURbNx9JkVYq3EZmTP5Yhtylt4UT6/view?usp=drive_link",
  },
  {
    id: "16",
    titulo: "Classificação da Fila de Espera",
    slug: "classificacaoFilaEspera",
    profissaoSlug: "enfermeiro",
    imagemSrc: "/assets/icons/pronto/enfermeira.webp",
    url: "https://drive.google.com/file/d/1XWjN87eNzK1w061mFDMHE8bGAFkLiYpn/view?usp=drive_link",
  },
  {
    id: "17",
    titulo: "Acompanhamento de Solicitações",
    slug: "acompanhamentoSolicitacoes",
    profissaoSlug: "enfermeiro",
    imagemSrc: "/assets/icons/pronto/enfermeira.webp",
    url: "https://drive.google.com/file/d/1eFxUeMgi7aLqwmIbn5ID55Obx_57MM1h/view?usp=drive_link",
  },
  {
    id: "18",
    titulo: "Atendimento de Enfermagem",
    slug: "atendimentoEnfermagem",
    profissaoSlug: "enfermeiro",
    imagemSrc: "/assets/icons/pronto/enfermeira.webp",
    url: "https://geo.dailymotion.com/player.html?video=k6urQYuUBCFj8uDk0cw",

  },
  {
    id: "19",
    titulo: "Atendimento Médico",
    slug: "AtendimentoMedico",
    profissaoSlug: "medico",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://geo.dailymotion.com/player.html?video=k6urQYuUBCFj8uDk0cw",
  },
  {
    id: "20",
    titulo:"Criar Agenda",
    slug: "criarAgenda",
    profissaoSlug: "medico",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1QX46U4OyBGa8nME4c7S5jN25WaHJ1JFW/view?usp=sharing&t=3.181",
  },
  {
    id: "21",
    titulo: "Marcar Consulta",
    slug: "marcarConsulta",
    profissaoSlug: "medico",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1UZEsBep0RqVP9iADKELEp6wKeKV5bnsK/view?usp=sharing&t=17.474",
  },
  {
    id: "22",
    titulo: "Solicitar Procedimento / Serviço",
    slug: "solicitarProcedimentoServico",
    profissaoSlug: "medico",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1gpaWNXDUF9o7GHE7sHmJQFsH-YqaYpR_/view?usp=drive_link",
  },
  {
    id: "23",
    titulo: "Cancelar Agendamento",
    slug: "cancelarAgendamento",
    profissaoSlug: "medico",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1ASwxURbNx9JkVYq3EZmTP5Yhtylt4UT6/view?usp=drive_link",
  },
  {
    id: "24",
    titulo: "Classificação da Fila de Espera",
    slug: "classificacaoFilaEspera",
    profissaoSlug: "medico",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1XWjN87eNzK1w061mFDMHE8bGAFkLiYpn/view?usp=drive_link",
  },
  {
    id: "25",
    titulo: "Acompanhamento de Solicitações",
    slug: "acompanhamentoSolicitacoes",
    profissaoSlug: "medico",
    imagemSrc: "/assets/icons/pronto/Recepicionista.webp",
    url: "https://drive.google.com/file/d/1eFxUeMgi7aLqwmIbn5ID55Obx_57MM1h/view?usp=drive_link",
  },
];


// Funções helper para buscar dados (simulação)
export const getProfissaoBySlug = async (
  slug: string
): Promise<Profissao | undefined> => {
  return profissoesPronto.find((p) => p.slug === slug);
};

export const getTutoriaisByProfissaoSlug = async (
  profissaoSlug: string
): Promise<Tutorial[]> => {
  return tutoriaisPronto.filter(
    (t) => t.profissaoSlug === profissaoSlug
  );
};

export const getTutorialBySlugs = async (
  profissaoSlug: string,
  tutorialSlug: string
): Promise<Tutorial | undefined> => {
  return tutoriaisPronto.find(
    (t) => t.profissaoSlug === profissaoSlug && t.slug === tutorialSlug
  );
};

export const filterTutoriais = (
  profissaoSlug: string,
  searchTerm: string
): Tutorial[] => {
  return tutoriaisPronto.filter((tutorial) =>
    tutorial.profissaoSlug === profissaoSlug &&
    tutorial.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
