import { Eixo } from '../types/post';

export const EIXOS: Eixo[] = [
    {
        id: 'eixo1',
        numero: 1,
        titulo: 'Mercado de Trabalho e Oportunidades Regionais',
        diretriz: 'Onde posso trabalhar na minha região e qual é a expectativa salarial?',
        cor: '#0077b6',
        topicos: [
            {
                id: 'mapeamento-agroindustrial',
                titulo: 'Mapeamento Agroindustrial',
                descricao: 'Monitoramento periódico do Mercado de Trabalho (CAGED/MTE) segmentado para Jaboticabal, Bebedouro, Monte Alto, Taquaritinga, Guariba, Barrinha, Sertãozinho, Ribeirão Preto e Araraquara nas áreas agropecuária, industrial e de serviços.',
                icone: '🏭',
                posts: [
                    {
                        id: 'e1t1-001',
                        titulo: 'Panorama CAGED 2026: Emprego Formal em Jaboticabal e Região',
                        categoria: 'Pesquisa',
                        data: '2026-05-10',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Levantamento dos dados do CAGED para as cidades do eixo agroindustrial paulista, com análise setorial de admissões e desligamentos no primeiro trimestre de 2026.'
                    },
                    {
                        id: 'e1t1-002',
                        titulo: 'Indústria Sucroenergética em Sertãozinho: Vagas e Salários',
                        categoria: 'Notícia',
                        data: '2026-04-22',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Análise das oportunidades no polo sucroenergético de Sertãozinho, destacando faixas salariais para técnicos operacionais e profissionais de manutenção industrial.'
                    },
                    {
                        id: 'e1t1-003',
                        titulo: 'Serviços em Ribeirão Preto: O Setor que Mais Cresce',
                        categoria: 'Destaque',
                        data: '2026-03-15',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Ribeirão Preto consolida-se como polo de serviços e tecnologia, com crescimento de 12% nas contratações formais no setor terciário em relação ao mesmo período do ano anterior.'
                    }
                ]
            },
            {
                id: 'profissoes-em-alta',
                titulo: 'Profissões do Agro e da TI em Alta',
                descricao: 'Identificação de cargos técnicos em expansão: administração, operadores de tecnologia de precisão no campo, técnicos em gestão agrícola, desenvolvedores de softwares agrícolas, especialistas em controle de qualidade.',
                icone: '📈',
                posts: [
                    {
                        id: 'e1t2-001',
                        titulo: 'Operadores de Tecnologia de Precisão: A Profissão do Agro 4.0',
                        categoria: 'Destaque',
                        data: '2026-06-01',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Perfil profissional do operador de tecnologia de precisão no campo: formação necessária, faixa salarial e demanda crescente nas usinas da região.'
                    },
                    {
                        id: 'e1t2-002',
                        titulo: 'Desenvolvedor de Software Agrícola: Carreira em Expansão',
                        categoria: 'Pesquisa',
                        data: '2026-05-18',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Como a demanda por sistemas de gestão rural, aplicativos de monitoramento de lavouras e plataformas de e-commerce agro está criando oportunidades para programadores na região.'
                    },
                    {
                        id: 'e1t2-003',
                        titulo: 'Técnico em Gestão Agrícola: Onde Atuar e Quanto Ganhar',
                        categoria: 'Notícia',
                        data: '2026-04-05',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Mapeamento das empresas da região que contratam técnicos em gestão agrícola, com dados salariais e requisitos de formação para cada nível de experiência.'
                    }
                ]
            }
        ]
    },
    {
        id: 'eixo2',
        numero: 2,
        titulo: 'Empreendedorismo, Custo de Vida e Economia Pessoal',
        diretriz: 'Como a economia afeta o meu bolso e como posso criar meu próprio negócio?',
        cor: '#e85d04',
        topicos: [
            {
                id: 'cesta-basica',
                titulo: 'Monitor da Cesta Básica de Jaboticabal',
                descricao: 'Acompanhamento periódico do custo dos alimentos essenciais no comércio local, estruturado como projeto de extensão e coleta direta em campo realizada pelos alunos.',
                icone: '🛒',
                posts: [
                    {
                        id: 'e2t1-001',
                        titulo: 'Cesta Básica de Jaboticabal: Relatório Maio/2026',
                        categoria: 'Pesquisa',
                        data: '2026-05-30',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Coleta de preços realizada pelos alunos do CTA em 12 supermercados de Jaboticabal. A cesta básica atingiu R$ 742,50, alta de 3,2% em relação a abril.'
                    },
                    {
                        id: 'e2t1-002',
                        titulo: 'Metodologia de Coleta: Como os Alunos Pesquisam Preços',
                        categoria: 'Notícia',
                        data: '2026-04-15',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Detalhamento da metodologia de extensão utilizada pelos estudantes para coletar e tabular preços de alimentos essenciais no comércio local de Jaboticabal.'
                    },
                    {
                        id: 'e2t1-003',
                        titulo: 'Comparativo Regional: Cesta Básica em 5 Cidades',
                        categoria: 'Pesquisa',
                        data: '2026-03-28',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Comparação do custo da cesta básica entre Jaboticabal, Bebedouro, Monte Alto, Taquaritinga e Guariba no primeiro trimestre de 2026.'
                    }
                ]
            },
            {
                id: 'poder-de-compra',
                titulo: 'Índice de Poder de Compra e Inflação Local',
                descricao: 'Gráficos comparativos que relacionam a renda média do jovem trabalhador técnico com a variação do custo de vida regional.',
                icone: '💰',
                posts: [
                    {
                        id: 'e2t2-001',
                        titulo: 'Poder de Compra do Jovem Técnico: Quanto Sobra no Fim do Mês?',
                        categoria: 'Pesquisa',
                        data: '2026-06-05',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Análise comparativa entre o salário médio de entrada de um técnico recém-formado e o custo de vida em Jaboticabal: aluguel, transporte, alimentação e lazer.'
                    },
                    {
                        id: 'e2t2-002',
                        titulo: 'Inflação Local vs. Nacional: Jaboticabal em Perspectiva',
                        categoria: 'Destaque',
                        data: '2026-05-12',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Como a inflação dos alimentos e serviços em Jaboticabal se compara ao IPCA nacional e ao custo de vida em capitais como Ribeirão Preto e São Paulo.'
                    },
                    {
                        id: 'e2t2-003',
                        titulo: 'Empreender com Pouco: Ideias de Negócio para o Jovem do Interior',
                        categoria: 'Notícia',
                        data: '2026-04-20',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Guia prático com 10 ideias de negócios de baixo investimento voltadas ao perfil do jovem técnico das cidades do interior paulista.'
                    }
                ]
            }
        ]
    },
    {
        id: 'eixo3',
        numero: 3,
        titulo: 'Inclusão, Gênero e Diversidade no Mercado',
        diretriz: 'Qual é a realidade social do trabalho e como promover a equidade?',
        cor: '#7b2cbf',
        topicos: [
            {
                id: 'primeiro-emprego',
                titulo: 'Incentivo ao Primeiro Emprego',
                descricao: 'Análise das taxas de absorção da juventude (16 a 24 anos) pelo mercado formal local, identificando barreiras e oportunidades de inclusão social.',
                icone: '🎯',
                posts: [
                    {
                        id: 'e3t1-001',
                        titulo: 'Juventude e Mercado Formal: Taxa de Absorção em Jaboticabal',
                        categoria: 'Pesquisa',
                        data: '2026-05-20',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Dados do CAGED mostram que apenas 38% dos jovens de 16 a 24 anos de Jaboticabal estão no mercado formal. Identificamos as principais barreiras de entrada.'
                    },
                    {
                        id: 'e3t1-002',
                        titulo: 'Programa Jovem Aprendiz na Região: Empresas que Contratam',
                        categoria: 'Notícia',
                        data: '2026-04-10',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Levantamento das empresas de Jaboticabal e região que participam do programa Jovem Aprendiz, com orientações sobre como se candidatar.'
                    },
                    {
                        id: 'e3t1-003',
                        titulo: 'Barreiras Invisíveis: Por que o Jovem do Interior Demora a se Empregar',
                        categoria: 'Pesquisa',
                        data: '2026-03-05',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Estudo sobre os fatores socioeconômicos que dificultam a inserção profissional de jovens no interior paulista: transporte, qualificação e redes de contato.'
                    }
                ]
            },
            {
                id: 'mulheres-agro-ti',
                titulo: 'Mulheres no Agro e na Tecnologia',
                descricao: 'Indicadores sobre a evolução da participação e equidade salarial feminina no setor agrícola e no mercado de TI regional e nacional.',
                icone: '👩‍💻',
                posts: [
                    {
                        id: 'e3t2-001',
                        titulo: 'Mulheres no Agro: Participação Feminina nas Usinas da Região',
                        categoria: 'Pesquisa',
                        data: '2026-06-08',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Indicadores de participação feminina nas usinas sucroenergéticas da região de Sertãozinho e Ribeirão Preto: evolução, cargos ocupados e gap salarial.'
                    },
                    {
                        id: 'e3t2-002',
                        titulo: 'TI no Feminino: Alunas do CTA que Viraram Desenvolvedoras',
                        categoria: 'Destaque',
                        data: '2026-05-15',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Depoimentos de ex-alunas do curso de Informática do CTA que hoje atuam como desenvolvedoras, analistas de dados e engenheiras de software.'
                    },
                    {
                        id: 'e3t2-003',
                        titulo: 'Equidade Salarial: A Realidade nas Empresas de Jaboticabal',
                        categoria: 'Pesquisa',
                        data: '2026-04-02',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Análise dos dados da RAIS sobre a diferença salarial entre homens e mulheres nos setores agropecuário, industrial e de serviços em Jaboticabal.'
                    }
                ]
            }
        ]
    },
    {
        id: 'eixo4',
        numero: 4,
        titulo: 'Tecnologia e Inovação nas Profissões',
        diretriz: 'Como as ferramentas digitais e a matemática estão transformando o trabalho?',
        cor: '#2d6a4f',
        topicos: [
            {
                id: 'agro-40-profissional-hibrido',
                titulo: 'Agro 4.0 e o Profissional Híbrido',
                descricao: 'Cases e dados sobre IA, sensores IoT, drones, geoprocessamento, Big Data e programação Python/R na gestão de lavouras. A convergência entre o conhecimento agropecuário e a tecnologia da informação.',
                icone: '🤖',
                posts: [
                    {
                        id: 'e4t1-001',
                        titulo: 'IA na Rotação de Culturas: Case da Região de Jaboticabal',
                        categoria: 'Pesquisa',
                        data: '2026-06-12',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Como algoritmos de aprendizado de máquina estão sendo usados para prever pragas e otimizar a rotação de culturas nas fazendas da região.'
                    },
                    {
                        id: 'e4t1-002',
                        titulo: 'Drones e Geoprocessamento: Precisão no Mapeamento de Lavouras',
                        categoria: 'Destaque',
                        data: '2026-05-25',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Protótipos desenvolvidos por estudantes do CTA alcançam 98% de precisão na análise de pH do solo usando drones equipados com sensores multiespectrais.'
                    },
                    {
                        id: 'e4t1-003',
                        titulo: 'O Profissional Híbrido: Quando o Técnico em Agro Programa',
                        categoria: 'Notícia',
                        data: '2026-04-18',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Como o aluno de Informática pode atuar no Agro e como o técnico agropecuário se beneficia do letramento digital: casos reais de egressos do CTA.'
                    }
                ]
            },
            {
                id: 'matematica-aplicada',
                titulo: 'Matemática Aplicada na Prática',
                descricao: 'Simuladores interativos (calculadoras web) demonstrando a aplicação da estatística, matemática financeira, otimização e modelagem gráfica em problemas reais do mercado de trabalho.',
                icone: '📐',
                posts: [
                    {
                        id: 'e4t2-001',
                        titulo: 'Calculadora de Pareto: Identificando os 20% que Geram 80% do Resultado',
                        categoria: 'Destaque',
                        data: '2026-06-15',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Simulador interativo que aplica o Princípio de Pareto a dados reais do agronegócio, identificando os fatores críticos de produtividade em uma lavoura.'
                    },
                    {
                        id: 'e4t2-002',
                        titulo: 'Matemática Financeira na Prática: Financiamento Rural Simulado',
                        categoria: 'Pesquisa',
                        data: '2026-05-08',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Calculadora web que simula financiamentos do Pronaf e Pronamp, demonstrando juros compostos, amortização e análise de viabilidade econômica.'
                    },
                    {
                        id: 'e4t2-003',
                        titulo: 'Estatística para o Campo: Interpretando Dados de Solo e Clima',
                        categoria: 'Pesquisa',
                        data: '2026-04-12',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Como usar média, desvio padrão e regressão linear para tomar decisões sobre irrigação, adubação e época de plantio com base em dados climáticos.'
                    }
                ]
            }
        ]
    },
    {
        id: 'eixo5',
        numero: 5,
        titulo: 'Vestibular, Cursos Superiores e Continuidade dos Estudos',
        diretriz: 'Qual universidade escolher e como me preparar para o ensino superior público?',
        cor: '#c9184a',
        topicos: [
            {
                id: 'guia-campus-ingressos',
                titulo: 'Guia dos Câmpus e Formas de Ingresso',
                descricao: 'Mapeamento das opções de graduação gratuita na região (FCAV/UNESP, USP Ribeirão Preto, UFSCar, FATECs e IFs) e informações sobre editais, isenção de taxas, ENEM/Sisu, provões paulistas e cotas.',
                icone: '🎓',
                posts: [
                    {
                        id: 'e5t1-001',
                        titulo: 'FCAV/UNESP Jaboticabal: Todos os Cursos e Como Entrar',
                        categoria: 'Destaque',
                        data: '2026-06-20',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Guia completo dos cursos de graduação da FCAV/UNESP Jaboticabal: Agronomia, Medicina Veterinária, Zootecnia, Engenharia de Biossistemas e Administração.'
                    },
                    {
                        id: 'e5t1-002',
                        titulo: 'ENEM/Sisu 2027: Calendário, Isenções e Dicas de Preparação',
                        categoria: 'Notícia',
                        data: '2026-06-01',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Tudo sobre o calendário do ENEM 2027, como solicitar isenção de taxa, e estratégias de estudo recomendadas pelos professores do CTA.'
                    },
                    {
                        id: 'e5t1-003',
                        titulo: 'FATECs e IFs da Região: Cursos Gratuitos de Tecnologia',
                        categoria: 'Notícia',
                        data: '2026-05-05',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Mapeamento dos cursos superiores gratuitos oferecidos pelas FATECs e Institutos Federais de Jaboticabal, Bebedouro, Taquaritinga e Araraquara.'
                    }
                ]
            },
            {
                id: 'trajetoria-egressos',
                titulo: 'Trajetória de Egressos',
                descricao: 'Depoimentos e dados sobre ex-alunos do CTA que ingressaram na graduação ou pós-graduação, conectando a formação técnica à carreira acadêmica e científica.',
                icone: '🚀',
                posts: [
                    {
                        id: 'e5t2-001',
                        titulo: 'Do CTA à Pós-Graduação: Histórias de Sucesso Acadêmico',
                        categoria: 'Destaque',
                        data: '2026-06-18',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Depoimentos de ex-alunos do CTA que cursaram graduação e pós-graduação em universidades públicas, contando como a formação técnica foi diferencial.'
                    },
                    {
                        id: 'e5t2-002',
                        titulo: 'Pesquisa Científica: Egressos do CTA na UNESP e USP',
                        categoria: 'Pesquisa',
                        data: '2026-05-22',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Levantamento dos egressos do CTA que hoje são pesquisadores, mestrandos e doutorandos nas universidades públicas da região.'
                    },
                    {
                        id: 'e5t2-003',
                        titulo: 'Formação Técnica como Trampolim: Dados de Ingresso no Ensino Superior',
                        categoria: 'Pesquisa',
                        data: '2026-04-28',
                        thumbnail: '',
                        link: '#',
                        resumo: 'Estatísticas sobre a taxa de aprovação de ex-alunos do CTA em vestibulares de universidades públicas nos últimos 5 anos.'
                    }
                ]
            }
        ]
    }
];
