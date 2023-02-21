export class Postagem {
    postagens = [
        {   titulo: 'Centros Especializado de Atendimento à Mulher',
            descricao: 'Os Centros de Referência são espaços de acolhimento/atendimento psicológico e social, orientação e encaminhamento jurídico à mulher em situação de violência, que devem proporcionar o atendimento e o acolhimento necessários à superação de situação de violência, contribuindo para o fortalecimento da mulher e o resgate de sua cidadania.'
        },
        {   titulo: 'Casas-Abrigo',
            descricao: 'As Casas-Abrigo são locais seguros que oferecem moradia protegida e atendimento integral a mulheres em risco de morte iminente em razão da violência doméstica. É um serviço de caráter sigiloso e temporário, no qual as usuárias permanecem por um período determinado, durante o qual deverão reunir condições necessárias para retomar o curso de suas vidas.'
        },
        {   titulo: 'Casas de Acolhimento Provisório',
            descricao: 'Constituem serviços de abrigamento temporário de curta duração (até 15 dias), não-sigilosos, para mulheres em situação de violência, acompanhadas ou não de seus filhos, que não correm risco iminente de morte. Vale destacar que as Casas de Acolhimento Provisório não se restringem ao atendimento de mulheres em situação de violência doméstica e familiar, devendo acolher também mulheres que sofrem outros tipos de violência, em especial vítimas do tráfico de mulheres. O abrigamento provisório deve garantir a integridade física e emocional das mulheres, bem como realizar diagnóstico da situação da mulher para encaminhamentos necessários.'
        },
        {   titulo: 'Delegacias Especializadas de Atendimento à Mulher (DEAMs)',
            descricao: 'São unidades especializadas da Polícia Civil para atendimento às mulheres em situação de violência. As atividades das DEAMs têm caráter preventivo e repressivo, devendo realizar ações de prevenção, apuração, investigação e enquadramento legal, as quais dever ser pautadas no respeito pelos direitos humanos e pelos princípios do Estado Democrático de Direito. Com a promulgação da Lei Maria da Penha, as DEAMs passam a desempenhar novas funções que incluem, por exemplo, a expedição de medidas protetivas de urgência ao juiz no prazo máximo de 48 horas.'
        },
        {   titulo: 'Núcleos ou Postos de Atendimento à Mulher nas Delegacias Comuns',
            descricao: 'Constituem espaços de atendimento à mulher em situação de violência (que em geral, contam com equipe própria) nas delegacias comuns.'
        },
        {   titulo: 'Defensorias Públicas e Defensorias da Mulher (Especializadas)',
            descricao: 'As Defensorias da Mulher têm a finalidade de dar assistência jurídica, orientar e encaminhar as mulheres em situação de violência. É órgão do Estado, responsável pela defesa das cidadãs que não possuem condições econômicas de ter advogado contratado por seus próprios meios. Possibilitam a ampliação do acesso à Justiça, bem como, a garantia às mulheres de orientação jurídica adequada e de acompanhamento de seus processos.'
        },
        {   titulo: 'Juizados Especializados de Violência Doméstica e Familiar contra a Mulher',
            descricao: 'Os Juizados de Violência Doméstica e Familiar contra a Mulher são órgãos da Justiça Ordinária com competência cível e criminal que poderão ser criados pela União (no Distrito Federal e nos Territórios) e pelos Estados para o processo, julgamento e a execução das causas decorrentes da prática de violência doméstica e familiar contra a mulher. Segundo a Lei nº 11.340/2006 (Lei Maria da Penha), que prevê a criação dos Juizados, esses poderão contar com uma equipe de atendimento multidisciplinar a ser integrada por profissionais especializados nas áreas psicossocial, jurídica e da saúde.'
        },
        {   titulo: 'Promotorias e Promotorias Especializadas',
            descricao: 'A Promotoria Especializada do Ministério Público promove a ação penal nos crimes de violência contra as mulheres. Atua também na fiscalização dos serviços da rede de atendimento.'
        },
        {   titulo: 'Casa da Mulher Brasileira',
            descricao: 'A Casa da Mulher Brasileira integra no mesmo espaço serviços especializados para os mais diversos tipos de violência contra as mulheres: acolhimento e triagem; apoio psicossocial; delegacia; Juizado; Ministério Público, Defensoria Pública; promoção de autonomia econômica; cuidado das crianças – brinquedoteca; alojamento de passagem e central de transportes. Mais informações disponíveis em http://www.spm.gov.br/assuntos/violencia/cmb.'
        },
        {   titulo: 'Serviços de Saúde Geral e Serviços de Saúde voltados para o atendimento dos casos de violência sexual e doméstica',
            descricao: 'A área da saúde, por meio da Norma Técnica de Prevenção e Tratamento dos Agravos Resultantes da Violência Sexual contra Mulheres e Adolescentes, tem prestado assistência médica, de enfermagem, psicológica e social às mulheres vítimas de violência sexual, inclusive quanto à interrupção da gravidez prevista em lei nos casos de estupro. A saúde também oferece serviços e programas especializados no atendimento dos casos de violência doméstica.'
        }
    ];

    conteudosCard = [
        {
            titulo: 'Encontre ajuda',
            texto: `Para encontrar apoio que você precisa em sua região (Estado e Cidade), acesse a plataforma 
            Mulher Segura e verifique os serviços, telefone de contato e endereço.`,
            url: 'https://www.mulhersegura.org/'
        },
        {
            titulo: 'Plataforma Mulher Segura',
            texto: `O que é a Plataforma Mulher Segura?
            A Plataforma Mulher Segura conecta mulheres em situação de violência aos canais de apoio disponíveis por todo o País. 
            Para que as sobreviventes possam dar os primeiros passos para romper com o ciclo da violência doméstica, reunimos os 
            principais serviços de enfrentamento à violência contra as mulheres desenvolvidos pelos estados brasileiros e 
            organizações locais.
            Muitas mulheres não conseguem terminar um relacionamento, ainda que abusivo, por diversas razões históricas, 
            culturais e socioeconômicas. Em contextos de crise e isolamento social, é ainda mais difícil deixar um lar violento e 
            observamos o aumento dos feminicídios. Por isso, apresentamos caminhos para ruptura do ciclo da violência doméstica, 
            facilitando o acesso a serviços especializados, processos formativos e acolhedores.`,
            url: 'https://www.mulhersegura.org/'
        }
    ];
    
    getCardConteudo(){
        return this.conteudosCard;
    }

    getPostagens(){
        return this.postagens;
    }
}