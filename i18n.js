// ============================================
// INTERNATIONALIZATION (i18n) - PT / EN / ES
// ============================================

const translations = {
    pt: {
        // Nav
        logoSubtitle: "Resistência Antimicrobiana",
        navHome: "Inicio",
        navAbout: "Sobre",
        navObjectives: "Objetivos",
        navTeam: "Equipe",
        navResults: "Resultados",
        navSponsors: "Patrocinadores",
        navContact: "Contato",

        // Hero
        heroTitle: "Monitoramento e Detecção de Padrões de Resistência Antimicrobiana",
        heroSubtitle: "Diversidade Genética entre Isolados Clínicos e Ambientais de Vários Biomas Brasileiros",
        heroMeta: "Chamada CNPq/MCTI/CT-Saúde - Ações em Ciência, Tecnologia e Inovação para o Combate à RAM Nº 52/2022",

        // About
        aboutTitle: "Sobre o Projeto",
        aboutCoordLabel: "Coordenadora",
        aboutCoordInst: "Universidade Federal do Paraná (UFPR)",
        aboutLineLabel: "Linha Temática",
        aboutLineText: "VI. Redes de pesquisa para identificação, monitoramento e sequenciamento genético de cepas resistentes em todo o território nacional",
        aboutDescLabel: "Descrição",
        aboutDescText: "Este projeto estabelece uma rede para monitoramento e detecção de padrões de resistência antimicrobiana (RAM) em agentes causadores de doenças infecto-parasitárias, preservados em repositórios de coleções de referência e em amostras ambientais de vários biomas brasileiros. Utiliza abordagem metagenômica e sequenciamento NGS, visando o desenvolvimento de um painel amplamente acessível, com aplicação de notificação da circulação de genes e espécies RAM em macrorregiões brasileiras.",

        // Objectives
        objTitle: "Objetivos",
        objGeneralLabel: "Objetivo Geral",
        objGeneralText: "Estabelecer uma rede para monitoramento e detecção de padrões de resistência antimicrobiana (RAM) em agentes causadores de doenças infecto-parasitárias, preservados em repositórios de coleções de referência e em amostras ambientais de vários biomas brasileiros, através de abordagem metagenômica e sequenciamento NGS, visando o desenvolvimento de um painel amplamente acessível, com aplicação de notificação da circulação de genes e espécies RAM em macrorregiões brasileiras.",
        objSpecificLabel: "Objetivos Específicos",
        obj1: "Elucidar por meio de marcadores fenotípicos e moleculares o perfil de resistência de cepas clínicas e ambientais depositadas em diferentes repositórios de coleções de referência e de trabalho de instituições públicas e hospitais e laboratórios privados, localizados em diferentes macrorregiões brasileiras.",
        obj2: "Sequenciar o genoma completo de cepas com perfil de resistência de fungos, bactérias e protozoários, visando a criação de bancos de dados de espécies e genes resistentes.",
        obj3: "Construir bibliotecas fosmídicas e realizar triagem funcional para elucidação de novos alvos em cepas resistentes.",
        obj4: "Estabelecer uma linha temporal da RAM em fungos, bactérias e parasitas com base no histórico de depósitos em repositórios.",
        obj5: "Realizar análises metagenômicas e bioprospecção de amostras ambientais, água de hemodiálise e resíduos biológicos de descarte hospitalar, visando o rastreamento ambiental de espécies e genes RAM por abordagens metagenômicas específicas de alvo e totais.",
        obj6: "Comparar dados metagenômicos (específico de alvo, biblioteca total e biblioteca fosmídica) de ambientes conservados (biomas Amazônia, Cerrado, Mata Atlântica, Pantanal) e antropizados (regiões agrícolas e áreas desmatadas) e dos repositórios avaliados e construir novos barcodes.",
        obj7: "Realizar busca in silico de espécies e genes resistentes em bancos metagenômicos de solos cultivados e não cultivados e ecossistemas diversificados, incluindo bancos de microbioma intestinal humano previamente desenvolvidos por membros colaboradores do projeto.",
        obj8: "Correlacionar dados de RAM de diferentes abordagens visando rastrear a ocorrência de RAM cruzada em ambientes clínicos e ambientais.",
        obj9: "Selecionar possíveis genes de RAM como candidatos a novos marcadores por meio de técnicas emergentes de inteligência artificial em bioinformática.",
        obj10: "Criar um painel de registro de dados em tempo real baseado na prospecção de cepas RAM e genes de resistência visando alimentar e expandir os sistemas de notificação existentes.",

        // Team
        teamTitle: "Equipe Executora",
        teamNationalLabel: "Gestores - Grupos Focais Nacionais",
        teamVaneteInst: "UFPR / PR - Coleção Parasitológica",
        teamIntlLabel: "Parceria Internacional",
        teamSybrenInst: "Universidade Radboud, Países Baixos",
        teamNinaInst: "Universidade de Ljubljana, Eslovênia",
        teamLauraInst: "Universidade de Tuscia, Itália",
        teamYinggaiInst: "Universidade de Pequim, China",

        // Results
        resultsTitle: "Resumo de Resultados",
        results1Title: "Monitoramento em Biomas Brasileiros",
        results1Text: "Análise de amostras ambientais de diferentes biomas: Amazônia, Zona de Transição, Caatinga, Mata Atlântica, Pantanal e Cerrado.",
        biome1: "Cavernas",
        biome2: "Manguezais",
        biome3: "Solos de áreas preservadas, agrícolas e urbanas",
        biome4: "Água de rios e hemodiálise",
        biome5: "Resíduos biológicos hospitalares",
        results2Title: "Cepas Avaliadas",
        fungi: "Fungos",
        dermato: "Dermatófitos",
        blackyeasts: "Leveduras Pretas e Raras",
        bacteria: "Bactérias",
        results3Title: "Metodologias Aplicadas",
        meth1Label: "Sequenciamento NGS:",
        meth1Text: "Análise genômica completa de cepas resistentes",
        meth2Label: "Metagenômica:",
        meth2Text: "Prospecção ambiental de espécies e genes RAM",
        meth3Label: "Inteligência Artificial:",
        meth3Text: "Identificação de novos marcadores e padrões biológicos",
        meth4Label: "Bibliotecas Fosmídicas:",
        meth4Text: "Triagem funcional para elucidação de novos alvos",
        meth5Label: "Análise EUCAST:",
        meth5Text: "Avaliação da suscetibilidade antimicrobiana",
        results4Title: "Estatísticas do Projeto",
        stat1: "Metagenomas em Andamento",
        stat2: "Isolados de Aspergillus",
        stat3: "Genes RAM Catalogados",
        stat4: "Sequências de Aminoácidos",

        // Sponsors
        sponsorsTitle: "Apoio Financeiro e Projetos Relacionados",
        sponsorsSubtitle: "Apoio Financeiro e Projetos Relacionados",
        partnersSubtitle: "Parceiros, Instituições e Laboratórios Internacionais e Nacionais",

        // Contact
        contactTitle: "Contato",
        contactCoordLabel: "Coordenadora Principal",
        contactInst: "Universidade Federal do Paraná (UFPR)",
        contactDept: "Departamento de Patologia Básica",
        contactPartLabel: "Instituições Participantes",
        contactPartText: "Este projeto é uma colaboração entre múltiplas instituições brasileiras e internacionais, financiado pelo CNPq/MCTI/CT-Saúde.",

        // Footer
        footerCopy: "© 2026 Projeto RAM - Resistência Antimicrobiana. Todos os direitos reservados.",
        footerDev: "Desenvolvido para fins educacionais e de pesquisa científica."
    },

    en: {
        logoSubtitle: "Antimicrobial Resistance",
        navHome: "Home",
        navAbout: "About",
        navObjectives: "Objectives",
        navTeam: "Team",
        navResults: "Results",
        navSponsors: "Sponsors",
        navContact: "Contact",

        heroTitle: "Monitoring and Detection of Antimicrobial Resistance Patterns",
        heroSubtitle: "Genetic Diversity among Clinical and Environmental Isolates from Various Brazilian Biomes",
        heroMeta: "CNPq/MCTI/CT-Health Call - Actions in Science, Technology and Innovation to Combat AMR No. 52/2022",

        aboutTitle: "About the Project",
        aboutCoordLabel: "Coordinator",
        aboutCoordInst: "Federal University of Paraná (UFPR)",
        aboutLineLabel: "Thematic Line",
        aboutLineText: "VI. Research Networks for identification, monitoring and genetic sequencing of resistant strains throughout the national territory",
        aboutDescLabel: "Description",
        aboutDescText: "This project establishes a network for monitoring and detecting antimicrobial resistance (AMR) patterns in causative agents of infectious-parasitic diseases, preserved in reference collection repositories and in environmental samples from various Brazilian biomes. It uses metagenomic approach and NGS sequencing, aiming at the development of a widely accessible panel, with application of notification of the circulation of AMR genes and species in Brazilian macroregions.",

        objTitle: "Objectives",
        objGeneralLabel: "General Objective",
        objGeneralText: "Establish a network for monitoring and detecting antimicrobial resistance (AMR) patterns in causative agents of infectious-parasitic diseases, preserved in reference collection repositories and in environmental samples from various Brazilian biomes, through metagenomic approach and NGS sequencing, aiming at the development of a widely accessible panel, with application of notification of the circulation of AMR genes and species in Brazilian macroregions.",
        objSpecificLabel: "Specific Objectives",
        obj1: "Elucidate through phenotypic and molecular markers the resistance profile of clinical and environmental strains deposited in different repositories of reference and working collections of public institutions and hospitals and private laboratories, located in different Brazilian macroregions.",
        obj2: "Sequence the complete genome of strains with resistance profile of fungi, bacteria and protozoa, aiming at the creation of databases of resistant species and genes.",
        obj3: "Build fosmid libraries and perform functional screening for elucidation of new targets in resistant strains.",
        obj4: "Establish a temporal line of AMR in fungi, bacteria and parasites based on the history of repository deposits.",
        obj5: "Perform metagenome analyses and bioprospecting of environmental samples, hemodialysis water and biological waste from hospital disposal, aiming at environmental tracking of AMR species and genes through target-specific and total metagenomic approaches.",
        obj6: "Compare metagenomic data (target-specific, total library and fosmid library) from conserved environments (biomes Amazon, Cerrado, Atlantic Forest, Pantanal) and anthropized (agricultural regions and deforested areas) and from evaluated repositories and build new barcodes.",
        obj7: "Perform in silico search of resistant species and genes in metagenomic banks of cultivated and uncultivated soils and diversified ecosystems, including human gut microbiome banks previously developed by project collaborating members.",
        obj8: "Correlate AMR data from different approaches aiming to track cross-AMR occurrence in clinical and environmental settings.",
        obj9: "Select possible AMR genes as candidates for new markers through emerging artificial intelligence techniques in bioinformatics.",
        obj10: "Create a real-time data recording panel based on AMR strain prospecting and resistance genes aiming to feed and expand existing notification systems.",

        teamTitle: "Executing Team",
        teamNationalLabel: "Managers - National Focal Groups",
        teamVaneteInst: "UFPR / PR - Parasitological Collection",
        teamIntlLabel: "International Partnership",
        teamSybrenInst: "Radboud University, Netherlands",
        teamNinaInst: "Ljubljana University, Slovenia",
        teamLauraInst: "Tuscia University, Italy",
        teamYinggaiInst: "Peking University, China",

        resultsTitle: "Results Summary",
        results1Title: "Monitoring in Brazilian Biomes",
        results1Text: "Analysis of environmental samples from different biomes: Amazon, Transition Zone, Caatinga, Atlantic Forest, Pantanal and Cerrado.",
        biome1: "Caves",
        biome2: "Mangroves",
        biome3: "Soils from preserved, agricultural and urban areas",
        biome4: "River water and hemodialysis",
        biome5: "Hospital biological waste",
        results2Title: "Evaluated Strains",
        fungi: "Fungi",
        dermato: "Dermatophytes",
        blackyeasts: "Black and Rare Yeasts",
        bacteria: "Bacteria",
        results3Title: "Applied Methodologies",
        meth1Label: "NGS Sequencing:",
        meth1Text: "Complete genomic analysis of resistant strains",
        meth2Label: "Metagenomics:",
        meth2Text: "Environmental prospecting of AMR species and genes",
        meth3Label: "Artificial Intelligence:",
        meth3Text: "Identification of new markers and biological patterns",
        meth4Label: "Fosmid Libraries:",
        meth4Text: "Functional screening for elucidation of new targets",
        meth5Label: "EUCAST Analysis:",
        meth5Text: "Evaluation of antimicrobial susceptibility",
        results4Title: "Project Statistics",
        stat1: "Metagenomes in Progress",
        stat2: "Aspergillus Isolates",
        stat3: "AMR Genes Catalogued",
        stat4: "Amino Acid Sequences",

        sponsorsTitle: "Financial Support & Related Projects",
        sponsorsSubtitle: "Financial Support & Related Projects",
        partnersSubtitle: "International and National Partners, Institutions and Laboratories",

        contactTitle: "Contact",
        contactCoordLabel: "Principal Coordinator",
        contactInst: "Federal University of Paraná (UFPR)",
        contactDept: "Department of Basic Pathology",
        contactPartLabel: "Participating Institutions",
        contactPartText: "This project is a collaboration between multiple Brazilian and international institutions, funded by CNPq/MCTI/CT-Health.",

        footerCopy: "© 2026 AMR Project - Antimicrobial Resistance. All rights reserved.",
        footerDev: "Developed for educational and scientific research purposes."
    },

    es: {
        logoSubtitle: "Resistencia Antimicrobiana",
        navHome: "Inicio",
        navAbout: "Sobre",
        navObjectives: "Objetivos",
        navTeam: "Equipo",
        navResults: "Resultados",
        navSponsors: "Patrocinadores",
        navContact: "Contacto",

        heroTitle: "Monitoreo y Detección de Patrones de Resistencia Antimicrobiana",
        heroSubtitle: "Diversidad Genética entre Aislamientos Clínicos y Ambientales de Varios Biomas Brasileños",
        heroMeta: "Convocatoria CNPq/MCTI/CT-Salud - Acciones en Ciencia, Tecnología e Innovación para Combatir la RAM Nº 52/2022",

        aboutTitle: "Sobre el Proyecto",
        aboutCoordLabel: "Coordinadora",
        aboutCoordInst: "Universidad Federal de Paraná (UFPR)",
        aboutLineLabel: "Línea Temática",
        aboutLineText: "VI. Redes de investigación para identificación, monitoreo y secuenciación genética de cepas resistentes en todo el territorio nacional",
        aboutDescLabel: "Descripción",
        aboutDescText: "Este proyecto establece una red para el monitoreo y detección de patrones de resistencia antimicrobiana (RAM) en agentes causantes de enfermedades infecto-parasitarias, conservados en repositorios de colecciones de referencia y en muestras ambientales de varios biomas brasileños. Utiliza un enfoque metagenómico y secuenciación NGS, con el objetivo de desarrollar un panel ampliamente accesible, con aplicación de notificación de la circulación de genes y especies RAM en macrorregiones brasileñas.",

        objTitle: "Objetivos",
        objGeneralLabel: "Objetivo General",
        objGeneralText: "Establecer una red para el monitoreo y detección de patrones de resistencia antimicrobiana (RAM) en agentes causantes de enfermedades infecto-parasitarias, conservados en repositorios de colecciones de referencia y en muestras ambientales de varios biomas brasileños, mediante enfoque metagenómico y secuenciación NGS, con el objetivo de desarrollar un panel ampliamente accesible, con aplicación de notificación de la circulación de genes y especies RAM en macrorregiones brasileñas.",
        objSpecificLabel: "Objetivos Específicos",
        obj1: "Dilucidar mediante marcadores fenotípicos y moleculares el perfil de resistencia de cepas clínicas y ambientales depositadas en diferentes repositorios de colecciones de referencia y de trabajo de instituciones públicas y hospitales y laboratorios privados, ubicados en diferentes macrorregiones brasileñas.",
        obj2: "Secuenciar el genoma completo de cepas con perfil de resistencia de hongos, bacterias y protozoos, con el objetivo de crear bases de datos de especies y genes resistentes.",
        obj3: "Construir bibliotecas fosmídicas y realizar cribado funcional para la elucidación de nuevos objetivos en cepas resistentes.",
        obj4: "Establecer una línea temporal de la RAM en hongos, bacterias y parásitos basada en el historial de depósitos en repositorios.",
        obj5: "Realizar análisis metagenómicos y bioprospección de muestras ambientales, agua de hemodiálisis y residuos biológicos de descarte hospitalario, con el objetivo de rastrear ambientalmente especies y genes RAM mediante enfoques metagenómicos específicos de diana y totales.",
        obj6: "Comparar datos metagenómicos (específico de diana, biblioteca total y biblioteca fosmídica) de entornos conservados (biomas Amazonia, Cerrado, Mata Atlántica, Pantanal) y antropizados (regiones agrícolas y áreas deforestadas) y de los repositorios evaluados y construir nuevos barcodes.",
        obj7: "Realizar búsqueda in silico de especies y genes resistentes en bancos metagenómicos de suelos cultivados y no cultivados y ecosistemas diversificados, incluidos bancos de microbioma intestinal humano previamente desarrollados por miembros colaboradores del proyecto.",
        obj8: "Correlacionar datos de RAM de diferentes enfoques con el objetivo de rastrear la ocurrencia de RAM cruzada en entornos clínicos y ambientales.",
        obj9: "Seleccionar posibles genes de RAM como candidatos a nuevos marcadores mediante técnicas emergentes de inteligencia artificial en bioinformática.",
        obj10: "Crear un panel de registro de datos en tiempo real basado en la prospección de cepas RAM y genes de resistencia con el objetivo de alimentar y expandir los sistemas de notificación existentes.",

        teamTitle: "Equipo Ejecutor",
        teamNationalLabel: "Gestores - Grupos Focales Nacionales",
        teamVaneteInst: "UFPR / PR - Colección Parasitológica",
        teamIntlLabel: "Asociación Internacional",
        teamSybrenInst: "Universidad Radboud, Países Bajos",
        teamNinaInst: "Universidad de Ljubljana, Eslovenia",
        teamLauraInst: "Universidad de Tuscia, Italia",
        teamYinggaiInst: "Universidad de Pekín, China",

        resultsTitle: "Resumen de Resultados",
        results1Title: "Monitoreo en Biomas Brasileños",
        results1Text: "Análisis de muestras ambientales de diferentes biomas: Amazonia, Zona de Transición, Caatinga, Mata Atlántica, Pantanal y Cerrado.",
        biome1: "Cuevas",
        biome2: "Manglares",
        biome3: "Suelos de áreas preservadas, agrícolas y urbanas",
        biome4: "Agua de ríos y hemodiálisis",
        biome5: "Residuos biológicos hospitalarios",
        results2Title: "Cepas Evaluadas",
        fungi: "Hongos",
        dermato: "Dermatofitos",
        blackyeasts: "Levaduras Negras y Raras",
        bacteria: "Bacterias",
        results3Title: "Metodologías Aplicadas",
        meth1Label: "Secuenciación NGS:",
        meth1Text: "Análisis genómico completo de cepas resistentes",
        meth2Label: "Metagenómica:",
        meth2Text: "Prospección ambiental de especies y genes RAM",
        meth3Label: "Inteligencia Artificial:",
        meth3Text: "Identificación de nuevos marcadores y patrones biológicos",
        meth4Label: "Bibliotecas Fosmídicas:",
        meth4Text: "Cribado funcional para elucidación de nuevos objetivos",
        meth5Label: "Análisis EUCAST:",
        meth5Text: "Evaluación de la susceptibilidad antimicrobiana",
        results4Title: "Estadísticas del Proyecto",
        stat1: "Metagenomas en Progreso",
        stat2: "Aislamientos de Aspergillus",
        stat3: "Genes RAM Catalogados",
        stat4: "Secuencias de Aminoácidos",

        sponsorsTitle: "Apoyo Financiero y Proyectos Relacionados",
        sponsorsSubtitle: "Apoyo Financiero y Proyectos Relacionados",
        partnersSubtitle: "Socios, Instituciones y Laboratorios Internacionales y Nacionales",

        contactTitle: "Contacto",
        contactCoordLabel: "Coordinadora Principal",
        contactInst: "Universidad Federal de Paraná (UFPR)",
        contactDept: "Departamento de Patología Básica",
        contactPartLabel: "Instituciones Participantes",
        contactPartText: "Este proyecto es una colaboración entre múltiples instituciones brasileñas e internacionales, financiado por CNPq/MCTI/CT-Salud.",

        footerCopy: "© 2026 Proyecto RAM - Resistencia Antimicrobiana. Todos los derechos reservados.",
        footerDev: "Desarrollado con fines educativos y de investigación científica."
    }
};

// ============================================
// LANGUAGE SWITCHER LOGIC
// ============================================

let currentLang = localStorage.getItem('ram-lang') || 'pt';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('ram-lang', lang);
    applyTranslations(lang);
    updateActiveLangButton(lang);
    document.documentElement.lang = lang;
}

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            // Preserve inner HTML for elements with child tags (e.g. <strong>)
            if (el.children.length === 0) {
                el.textContent = t[key];
            } else {
                // Only update textContent for elements that are purely text
                el.textContent = t[key];
            }
        }
    });
}

function updateActiveLangButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('lang-active');
    });
    const activeBtn = document.getElementById('lang-' + lang);
    if (activeBtn) activeBtn.classList.add('lang-active');
}

// Apply on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
    updateActiveLangButton(currentLang);
});
