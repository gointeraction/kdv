import React from 'react';
import type { Benefit, Agent, WhyChooseUsItem, ImplementationStep, ErpBenefit, ErpModule, ErpUseCase, PricingPlan, Testimonial, SecurityFeature, KDHKA20Benefit, FAQItem, KDHKA20Feature, TechSpec, TrainingCourse, WizardOption, BusinessChallenge, DigitalSolution, ConsultantTrainingModule, NavLink, RadarSystemsPlan, WizardStepOption, DeepDiveFeature, PerformanceMetric } from './types';
import { 
  ChartBarIcon, ChatBubbleBottomCenterTextIcon, CodeBracketIcon, CustomKIcon, UserGroupIcon, 
  ShoppingCartIcon, SparklesIcon, CurrencyDollarIcon, PuzzlePieceIcon, 
  ClockIcon, ArrowUpIcon, BoltIcon, CheckCircleIcon, CheckBadgeIcon,
  LineGraphIcon, LinkChainIcon, RocketLaunchIcon, IntegrationIcon, 
  MagnifyingGlassIcon, CogIcon, GraduationCapIcon, ShieldCheckIcon,
  ServerStackIcon, CloudSecureIcon, ScaleIcon, BuildingStorefrontIcon, SlidersHorizontalIcon,
  WifiIcon, CreditCardIcon, DocumentTextIcon, BookOpenIcon, EnvelopeIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, BuildingOffice2Icon, PencilSquareIcon, FingerPrintIcon, ClipboardDocumentCheckIcon
} from './components/icons/Icons';

export const NAV_LINKS: NavLink[] = [
  { name: 'Inicio', href: '#/' },
  {
    name: 'Productos',
    subLinks: [
      { name: 'Agentes IA', href: '#/agents' },
      { name: 'ERP', href: '#/erp' },
      { name: 'KD-HKA20', href: '#/kdhka20' },
      { name: 'Marketing Automation', href: '#/marketing-automation' },
      { name: 'Seguridad Informática', href: '#/seguridad-informatica' },
      { name: 'Entrenamiento', href: '#/entrenamientos' },
      { name: 'Formación de Consultores', href: '#/formacion-consultores' },
    ],
  },
  { name: 'Diagnóstico Personalizado', href: '#/analisis-cliente' },
  { name: 'Contacto', href: '#/agents#contact' },
];

export const BENEFITS_DATA: Benefit[] = [
  {
    icon: <CheckCircleIcon className="h-8 w-8 text-blue-600" />,
    title: 'Reducción de Tareas Repetitivas',
    description: 'Elimina procesos manuales y enfoca a tu equipo en actividades de alto valor estratégico.',
    iconBgClass: 'bg-blue-100',
  },
  {
    icon: <LineGraphIcon className="h-8 w-8 text-green-600" />,
    title: 'Mejora de Productividad',
    description: 'Aumenta la eficiencia operativa de tu equipo con flujos de trabajo inteligentes y automatizados.',
    iconBgClass: 'bg-green-100',
  },
  {
    icon: <UserGroupIcon className="h-8 w-8 text-purple-600" />,
    title: 'Optimización de Experiencia de Cliente',
    description: 'Ofrece respuestas rápidas y personalizadas que mejoran la satisfacción y fomentan la lealtad.',
    iconBgClass: 'bg-purple-100',
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-yellow-600" />,
    title: 'Reportes y Análisis Inteligentes',
    description: 'Toma decisiones estratégicas basadas en datos precisos y análisis en tiempo real.',
     iconBgClass: 'bg-yellow-100',
  },
  {
    icon: <LinkChainIcon className="h-8 w-8 text-gray-600" />,
    title: 'Integración con Sistemas Existentes',
    description: 'Conecta nuestros agentes con tus herramientas actuales (CRM, ERP) sin interrumpir tus operaciones.',
    iconBgClass: 'bg-gray-100',
  },
  {
    icon: <SparklesIcon className="h-8 w-8 text-red-600" />,
    title: 'Innovación y Competitividad',
    description: 'Adopta tecnologías de vanguardia para mantenerte a la delantera en tu sector.',
    iconBgClass: 'bg-red-100',
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    icon: <RocketLaunchIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Tiempo de implementación récord',
    description: 'Integraciones, entrenamiento de la IA, diseño de automatizaciones y puesta en producción en 4 semanas.',
  },
  {
    icon: <SlidersHorizontalIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Diseño de soluciones a tu medida',
    description: 'Te ayudamos a elegir la mejor solución para automatizar tu Servicio de Atención al Cliente y diseñamos una experiencia conversacional a medida.',
  },
  {
    icon: <LinkChainIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Integración con tus herramientas de trabajo',
    description: 'Nuestra tecnología se integra fácilmente con Softwares de Atención al Cliente, CRMs y canales digitales como WhatsApp y Redes Sociales.',
  },
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-brand-blue" />,
    title: 'Compromiso contínuo con el éxito de tu proyecto',
    description: 'Entrenamiento proactivo y supervisión diaria de la IA para garantizar el funcionamiento óptimo y la mejora continua.',
  }
];

export const AGENTS_DATA: Agent[] = [
  {
    id: 'documind',
    name: 'DocuMind',
    shortDescription: 'Automatiza la lectura, clasificación y extracción de información de todos tus documentos. Ideal para contratos, facturas, reportes y archivos internos.',
    longDescription: 'DocuMind es tu asistente inteligente para el manejo integral de documentos empresariales. Este agente no solo clasifica y organiza archivos, sino que extrae información crítica de contratos, facturas, reportes, correos y documentos internos, convirtiendo datos no estructurados en información utilizable para decisiones estratégicas.',
    icon: <CodeBracketIcon className="text-blue-600" />,
    iconBgClass: 'bg-blue-100',
    features: [
      'Extracción Inteligente de Datos: Analiza documentos en múltiples formatos (PDF, Word, Excel) y extrae campos relevantes automáticamente.',
      'Clasificación y Organización Automática: Ordena documentos por categoría, fecha o proyecto, generando un repositorio inteligente accesible al instante.',
      'Integración ERP/CRM: Sincroniza la información extraída con sistemas existentes como Odoo, Salesforce, HubSpot, u otros CRMs.',
      'Seguridad y Control de Acceso: Define permisos para que solo personal autorizado acceda a documentos sensibles.',
      'Búsqueda Avanzada: Encuentra rápidamente información usando palabras clave, fechas o entidades reconocidas dentro del contenido.'
    ],
    useCases: [
        'Departamentos legales que manejan contratos y acuerdos.',
        'Contabilidad y auditoría que necesitan procesar facturas y reportes.',
        'Equipos de recursos humanos que gestionan documentación de empleados.'
    ],
    benefits: [
        'Ahorro de tiempo y reducción de errores humanos en la gestión documental.',
        'Mejora en la trazabilidad y accesibilidad de información crítica.',
        'Permite tomar decisiones rápidas y basadas en datos.'
    ],
    cta: 'Optimiza la gestión documental con DocuMind'
  },
  {
    id: 'infobot',
    name: 'InfoBot',
    shortDescription: 'Acceso instantáneo a manuales, procedimientos y archivos internos. Responde preguntas de los empleados con precisión y rapidez.',
    longDescription: 'InfoBot es un asistente virtual diseñado para acceder a toda la documentación interna de tu empresa de forma inmediata. Los empleados pueden obtener respuestas precisas sin depender del soporte manual, acelerando procesos y aumentando la eficiencia.',
    icon: <ChatBubbleBottomCenterTextIcon className="text-yellow-600" />,
    iconBgClass: 'bg-yellow-100',
    features: [
      'Acceso Instantáneo a Información Interna: Manuales, políticas, procedimientos, FAQs y bases de conocimiento.',
      'Aprendizaje Continuo: InfoBot aprende de las consultas realizadas, mejorando sus respuestas con el tiempo.',
      'Multi-Canal: Disponible vía web, aplicaciones internas, Slack o Microsoft Teams.',
      'Capacidad de Personalización: Configura niveles de respuesta según departamento o tipo de usuario.',
      'Análisis de Consultas: Genera reportes sobre las preguntas más frecuentes para optimizar procesos internos.'
    ],
    useCases: [
        'Onboarding de nuevos empleados para que accedan rápidamente a la documentación.',
        'Resolución rápida de dudas frecuentes del equipo.',
        'Apoyo a departamentos con alta carga de consultas internas.'
    ],
    benefits: [
        'Reducción significativa del tiempo dedicado a búsqueda de información.',
        'Disminución de la dependencia del personal de soporte interno.',
        'Mejora de la productividad y autonomía del equipo.'
    ],
    cta: 'Implementa InfoBot y agiliza tu información interna'
  },
  {
    id: 'ticketmaster-ai',
    name: 'TicketMaster AI',
    shortDescription: 'Gestiona y prioriza automáticamente las solicitudes de soporte, asignando tickets a los equipos adecuados según urgencia y categoría.',
    longDescription: 'TicketMaster AI es un agente inteligente que gestiona, prioriza y resuelve tickets automáticamente, asegurando que las solicitudes se atiendan rápidamente y sean asignadas al personal correcto.',
    icon: <CustomKIcon className="text-gray-700" />,
    iconBgClass: 'bg-gray-200',
    features: [
      'Clasificación Automática de Tickets: Analiza contenido y determina la categoría y prioridad.',
      'Asignación Inteligente: Envía tickets al equipo o agente más capacitado según el tipo de solicitud.',
      'Seguimiento en Tiempo Real: Permite monitorear el progreso de cada ticket y notificar al usuario.',
      'Reportes Analíticos: Evalúa tiempos de respuesta, resolución y rendimiento del equipo.',
      'Integración Multi-Canal: Soporta tickets generados por correo, formularios web y chat.'
    ],
    useCases: [
        'Equipos de soporte técnico y atención al cliente.',
        'Gestión de incidencias internas en TI y operaciones.',
        'Empresas que requieren seguimiento detallado de solicitudes y problemas.'
    ],
    benefits: [
        'Mejora la satisfacción interna y externa mediante respuestas rápidas.',
        'Aumenta la eficiencia operativa del equipo de soporte.',
        'Permite priorizar de manera inteligente recursos en función de urgencia y impacto.'
    ],
    cta: 'Mejora tu soporte con TicketMaster AI'
  },
  {
    id: 'leadgenius',
    name: 'LeadGenius',
    shortDescription: 'Captura y califica automáticamente prospectos de ventas, analizando emails, bases de datos y notas de voz para identificar oportunidades reales.',
    longDescription: 'LeadGenius es un agente de ventas inteligente que analiza, califica y prioriza prospectos automáticamente, asegurando que tu equipo comercial se enfoque en oportunidades con mayor potencial de conversión.',
    icon: <UserGroupIcon className="text-purple-600" />,
    iconBgClass: 'bg-purple-100',
    features: [
      'Análisis Automático de Emails: Detecta leads importantes y extrae información clave de correos electrónicos.',
      'Integración con Bases de Datos Externas: Conecta con CRMs y plataformas de marketing como Salesforce, HubSpot, Odoo, Mailchimp.',
      'Conversión de Notas de Voz: Transforma grabaciones de ventas o reuniones en leads procesables.',
      'Enriquecimiento de Perfiles: Completa información de prospectos con datos públicos y redes sociales.',
      'Sistema de Prioridad Inteligente: Clasifica leads según potencial de compra, interés y perfil del cliente.'
    ],
    useCases: [
        'Equipos de ventas B2B que manejan altos volúmenes de prospectos.',
        'Agencias de marketing que ofrecen servicios de lead nurturing y scoring.',
        'Negocios que buscan centralizar la información de prospectos en un CRM.'
    ],
    benefits: [
        'Optimiza el tiempo del equipo comercial enfocando esfuerzos en leads valiosos.',
        'Aumenta la tasa de conversión y eficiencia de ventas.',
        'Permite acciones rápidas gracias a información enriquecida y priorizada.'
    ],
    cta: 'Potencia tus ventas con LeadGenius'
  },
  {
    id: 'shopwise',
    name: 'ShopWise',
    shortDescription: 'Optimiza tiendas online mediante descripciones automáticas, traducción y SEO. Mejora la experiencia de compra y aumenta la conversión.',
    longDescription: 'ShopWise es un agente de eCommerce inteligente que mejora la experiencia de compra en línea, automatiza la generación de contenido de productos y optimiza la visibilidad SEO.',
    icon: <ShoppingCartIcon className="text-orange-600" />,
    iconBgClass: 'bg-orange-100',
    features: [
      'Descripciones Automáticas de Productos: Genera contenido atractivo y optimizado para motores de búsqueda.',
      'Traducción Inteligente: Adaptación del contenido a diferentes idiomas y mercados internacionales.',
      'Recomendaciones Personalizadas: Ofrece sugerencias dinámicas basadas en comportamiento de compra.',
      'Búsqueda Avanzada: Filtros y resultados inteligentes que facilitan encontrar productos.',
      'Análisis de Conversión: Reportes de interacción y ventas para ajustar estrategias.'
    ],
    useCases: [
        'Tiendas con catálogos grandes o en crecimiento.',
        'Empresas que buscan expandirse a mercados internacionales.',
        'Negocios que desean personalizar la experiencia de sus clientes online.'
    ],
    benefits: [
        'Incrementa las ventas gracias a recomendaciones personalizadas.',
        'Mejora la retención de clientes y la experiencia de compra.',
        'Reduce tiempo y esfuerzo en la gestión de contenido y SEO.'
    ],
    cta: 'Optimiza tu eCommerce con ShopWise'
  },
  {
    id: 'autoflow-ai',
    name: 'AutoFlow AI',
    shortDescription: 'Automatiza tareas repetitivas como encuestas, agendas, presupuestos y publicaciones en redes. Integración con más de 2,000 aplicaciones.',
    longDescription: 'AutoFlow AI automatiza procesos empresariales repetitivos y tareas de bajo valor, liberando tiempo para que tu equipo se enfoque en actividades estratégicas y de mayor impacto.',
    icon: <BoltIcon className="text-yellow-600" />,
    iconBgClass: 'bg-yellow-100',
    features: [
      'Automatización de Publicaciones: Genera y publica contenido en redes sociales, newsletters y blogs de forma programada.',
      'Gestión de Agendas y Citas: Coordina reuniones y reservas automáticamente, con recordatorios para los participantes.',
      'Creación de Presupuestos y Documentos: Genera estimaciones y reportes internos automáticamente.',
      'Integración Multiplataforma: Compatible con más de 2,000 aplicaciones y herramientas corporativas.',
      'Asistente Inteligente de Consultoría: Ofrece recomendaciones y apoyo para la toma de decisiones en tiempo real.'
    ],
    useCases: [
        'Empresas que requieren automatizar múltiples tareas simultáneamente.',
        'Negocios con alta rotación de actividades repetitivas.',
        'Departamentos de marketing y operaciones que buscan eficiencia máxima.'
    ],
    benefits: [
        'Reducción significativa de tiempo en tareas rutinarias.',
        'Optimización de recursos humanos y tecnológicos.',
        'Mejora la experiencia del cliente interno y externo.',
        'Permite escalar operaciones sin incrementar personal.'
    ],
    cta: 'Automatiza tu empresa con AutoFlow AI'
  },
];

export const IMPLEMENTATION_STEPS_DATA: ImplementationStep[] = [
  {
    icon: <MagnifyingGlassIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Semana 1',
    subtitle: 'Descubrimiento y Estrategia',
    description: 'Analizamos tus procesos actuales y definimos los objetivos clave para la implementación de la IA.',
  },
  {
    icon: <CogIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Semana 2',
    subtitle: 'Configuración y Personalización',
    description: 'Configuramos los agentes de IA, los integramos con tus sistemas y los personalizamos según tus necesidades.',
  },
  {
    icon: <GraduationCapIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Semana 3',
    subtitle: 'Entrenamiento y Pruebas',
    description: 'Capacitamos a tu equipo para el uso de las nuevas herramientas y realizamos pruebas exhaustivas para asegurar la calidad.',
  },
  {
    icon: <RocketLaunchIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Semana 4',
    subtitle: 'Lanzamiento y Soporte',
    description: 'Ponemos en marcha la solución y brindamos soporte continuo para garantizar una transición exitosa y optimizar el rendimiento.',
  },
];

// --- MCP DEEP DIVE DATA ---
export const MCP_DEEP_DIVE_DATA: DeepDiveFeature[] = [
    {
        icon: <LinkChainIcon className="h-8 w-8 text-brand-green" />,
        title: 'Integración Universal',
        items: [
            'Conexión nativa con Odoo, SAP, Salesforce y más.',
            'API RESTful para integraciones personalizadas.',
            'Soporte para bases de datos SQL y NoSQL.'
        ]
    },
    {
        icon: <ShieldCheckIcon className="h-8 w-8 text-brand-green" />,
        title: 'Seguridad de Nivel Empresarial',
        items: [
            'Cifrado de datos en tránsito y en reposo (AES-256).',
            'Gestión de accesos basada en roles (RBAC).',
            'Auditorías de seguridad y cumplimiento normativo.'
        ]
    },
    {
        icon: <BoltIcon className="h-8 w-8 text-brand-green" />,
        title: 'Procesamiento en Tiempo Real',
        items: [
            'Arquitectura escalable para manejar altos volúmenes.',
            'Análisis y transformación de datos sobre la marcha.',
            'Sincronización de baja latencia entre sistemas.'
        ]
    }
];

export const PERFORMANCE_METRICS_DATA: PerformanceMetric[] = [
    { icon: <ClockIcon className="h-10 w-10 text-brand-blue" />, value: "80", label: "Latencia" },
    { icon: <CheckCircleIcon className="h-10 w-10 text-brand-blue" />, value: "99.9", label: "Uptime" },
    { icon: <ServerStackIcon className="h-10 w-10 text-brand-blue" />, value: "1.5", label: "Req/seg" },
    { icon: <PuzzlePieceIcon className="h-10 w-10 text-brand-blue" />, value: "50+", label: "Integraciones Nativas" }
];
  
export const SYSTEM_PROMPT = `
🎯 Rol del Agente

Eres un Agente Virtual de Atención al Cliente basado en Inteligencia Artificial para una empresa que ofrece soluciones empresariales impulsadas por IA.
Tu propósito es atender, asesorar y guiar a clientes potenciales y actuales, resolviendo dudas sobre los servicios, funcionalidades y beneficios de cada agente IA.
Debes mantener un tono profesional, claro, cercano y confiable, evitando tecnicismos innecesarios, pero mostrando experticia en IA aplicada a negocios.

📌 Objetivos del Agente

- Brindar información clara y detallada sobre los Agentes de IA disponibles.
- Guiar al usuario hacia el servicio que mejor se adapte a sus necesidades.
- Resolver dudas frecuentes sobre funcionalidades, integración y beneficios.
- Incentivar la conversión: agendar una demo, contactar a un asesor humano o dejar sus datos.
- Actuar como primer filtro de soporte y derivar casos complejos a un humano.

🤖 Catálogo de Agentes IA y Servicios

DocuMind – Procesamiento Inteligente de Documentos
- Automatiza la lectura, clasificación y extracción de datos de documentos (facturas, contratos, formularios).
- Reduce el trabajo manual y errores humanos.
- Beneficios: velocidad, precisión, reducción de costos operativos.

InfoBot – Chatbot de Documentación Interna
- Actúa como un asistente virtual que responde preguntas sobre manuales, políticas, procesos internos y FAQs.
- Permite que los empleados consulten información de forma rápida sin buscar en archivos extensos.
- Beneficios: mejora productividad, elimina dudas repetitivas, soporte 24/7.

TicketMaster AI – Resolución Automática de Tickets
- Atiende solicitudes de soporte, identifica el problema y ofrece soluciones inmediatas o escala a un humano.
- Compatible con plataformas de Help Desk.
- Beneficios: mayor satisfacción del cliente, reducción de tiempos de espera, soporte continuo.

LeadGenius – Cualificación Automática de Leads
- Evalúa leads en tiempo real, asigna puntajes y prioriza contactos de mayor conversión.
- Se integra con CRM y embudos de ventas.
- Beneficios: aumenta tasa de cierre, optimiza tiempo de los vendedores.

ShopWise – Ecommerce Inteligente
- Asistente de compras que guía al usuario dentro del ecommerce.
- Recomienda productos, responde dudas sobre stock, envíos y políticas.
- Beneficios: incremento en ventas, carrito optimizado, experiencia personalizada.

AutoFlow AI – Automatizaciones Empresariales con IA
- Automatiza tareas repetitivas de marketing, ventas y operaciones.
- Ejemplos: envío de emails, recordatorios, generación de reportes, integración entre plataformas.
- Beneficios: ahorro de tiempo, reducción de errores, mayor eficiencia.

🎭 Personalidad del Agente

- Tono: Cercano, amigable y profesional.
- Lenguaje: Claro, sin exceso de tecnicismos. Explicaciones con ejemplos prácticos.
- Actitud: Siempre dispuesto a ayudar, paciente, proactivo.
- Meta: Inspirar confianza y mostrar el valor de la IA como solución empresarial real y accesible.

🛠️ Instrucciones de Interacción

- Saludar de manera cordial y preguntar al usuario qué necesita.
- Identificar si el usuario busca información, soporte o asesoría comercial.
- Explicar los Agentes IA en función de la necesidad detectada.
- Proponer una acción siguiente: agendar demo, dejar datos, contactar un humano.
- Mantener siempre respuestas breves al inicio y luego ofrecer más detalles si el usuario quiere profundizar.
- Evitar respuestas cerradas; siempre dar la opción de continuar la conversación.

🧾 Ejemplos de Respuesta

Consulta general:
Usuario: “¿Qué hacen ustedes?”
Agente: “Hola 👋, somos especialistas en soluciones de Inteligencia Artificial para empresas. Contamos con agentes virtuales que automatizan procesos como gestión de documentos, soporte de tickets, cualificación de leads, ecommerce inteligente y más. ¿Quieres que te muestre cuál se adapta mejor a tu empresa?”

Consulta específica:
Usuario: “¿Cómo funciona el agente de documentos?”
Agente: “Nuestro agente DocuMind procesa documentos como facturas, contratos y formularios automáticamente. Extrae la información clave y la organiza en segundos, reduciendo errores humanos y ahorrando horas de trabajo manual. ¿Quieres que te dé ejemplos de aplicación en tu sector?”

Conversión:
Usuario: “Me interesa el de leads”
Agente: “Excelente 👌. Nuestro LeadGenius califica prospectos en tiempo real, asigna un puntaje de conversión y los conecta directo a tu equipo de ventas. Esto aumenta tus cierres y reduce el tiempo perdido en leads fríos. ¿Quieres que agendemos una demo gratuita para verlo en acción?”

🚀 Objetivo Final

Convertirse en el primer punto de contacto inteligente que:
- Capte la atención del usuario.
- Lo guíe hacia el servicio ideal.
- Lo motive a dejar sus datos o agendar una demo.
`;

// --- ERP PAGE DATA ---

export const ERP_BENEFITS: ErpBenefit[] = [
    { icon: <CurrencyDollarIcon className="h-10 w-10 text-brand-blue" />, title: "Bajo Costo de Entrada", description: "Desde $450 inicial, una solución poderosa al alcance de tu presupuesto." },
    { icon: <PuzzlePieceIcon className="h-10 w-10 text-brand-blue" />, title: "Todo en Uno", description: "Integra CRM, Ventas, Facturación, Inventario y más en una sola plataforma." },
    { icon: <CloudSecureIcon className="h-10 w-10 text-brand-blue" />, title: "En la Nube y Seguro", description: "Accede desde cualquier lugar sin preocuparte por servidores o mantenimiento técnico." },
    { icon: <ArrowUpIcon className="h-10 w-10 text-brand-blue" />, title: "Escalable", description: "Una solución que crece con tu empresa, desde PyMEs hasta grandes operaciones de retail." },
];

export const ERP_MODULES: ErpModule[] = [
    { icon: <UserGroupIcon className="h-8 w-8 text-brand-blue" />, title: "CRM", description: "Gestiona prospectos y clientes" },
    { icon: <ChartBarIcon className="h-8 w-8 text-brand-blue" />, title: "Ventas", description: "Cotiza y factura en minutos" },
    { icon: <CurrencyDollarIcon className="h-8 w-8 text-brand-blue" />, title: "Facturación", description: "Facturas electrónicas y contables" },
    { icon: <ShoppingCartIcon className="h-8 w-8 text-brand-blue" />, title: "Compras", description: "Órdenes de compra centralizadas" },
    { icon: <ServerStackIcon className="h-8 w-8 text-brand-blue" />, title: "Inventario", description: "Stock en tiempo real" },
    { icon: <IntegrationIcon className="h-8 w-8 text-brand-blue" />, title: "Contactos", description: "Base única y conectada" },
    { icon: <LineGraphIcon className="h-8 w-8 text-brand-blue" />, title: "Dashboards", description: "Decisiones con datos claros" },
    { icon: <CodeBracketIcon className="h-8 w-8 text-brand-blue" />, title: "Página Web", description: "Tu sitio corporativo integrado al ERP" },
];

export const ERP_USE_CASES: ErpUseCase[] = [
    { icon: <RocketLaunchIcon className="h-10 w-10 text-brand-blue" />, title: "Emprendedores Digitales", description: "Facturación online ágil y profesional, ideal para ventas desde redes sociales." },
    { icon: <BuildingStorefrontIcon className="h-10 w-10 text-brand-blue" />, title: "Pequeños Negocios", description: "Controla tus operaciones de oficina con facturación en forma libre y gestión de clientes." },
    { icon: <CogIcon className="h-10 w-10 text-brand-blue" />, title: "Retail Físico", description: "Integra tus equipos fiscales, controla el inventario y gestiona tu punto de venta." },
    { icon: <ScaleIcon className="h-10 w-10 text-brand-blue" />, title: "Empresas Medianas", description: "Una solución robusta que escala contigo, con opciones de mayor personalización." },
];

export const ERP_PRICING_PLANS: PricingPlan[] = [
    { name: "Plan PyME (Standard)", popular: false, initialCost: "$450", price: "$50", frequency: "/mes", users: "Hasta 5 usuarios", features: [], cta: "Quiero mi ERP Ahora" },
    { name: "Plan Retail / Mediana Empresa", popular: true, initialCost: "$750", price: "$100", frequency: "/mes", users: "Hasta 10 usuarios", features: [], cta: "Quiero mi ERP Ahora" },
];

export const ERP_TESTIMONIALS: Testimonial[] = [
    { quote: "Con RadarSystems ERP dejamos atrás las hojas de Excel. Ahora tenemos facturación y ventas integradas en un mismo lugar. ¡Una inversión que valió la pena!", author: "María López", company: "Retail Caracas" },
    { quote: "El proceso de facturación solía tomarnos días. Con este ERP, lo hacemos en horas. El soporte técnico siempre ha sido rápido y eficiente.", author: "Carlos Rodríguez", company: "Gerente de Finanzas en Servicios Creativos" },
    { quote: "Como startup, necesitábamos una herramienta que creciera con nosotros. RadarSystems ERP nos dio la flexibilidad y el poder que buscábamos sin un costo prohibitivo.", author: "Sofía Gómez", company: "Fundadora de Tech Innovators" },
];

export const ERP_IMPLEMENTATION_STEPS: ImplementationStep[] = [
  {
    icon: <CloudSecureIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Paso 1',
    subtitle: 'Instalación en la Nube',
    description: 'Activamos tu instancia de ERP en nuestros servidores seguros. No necesitas hardware ni conocimientos técnicos.',
  },
  {
    icon: <CogIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Paso 2',
    subtitle: 'Configuración y Personalización',
    description: 'Adaptamos los módulos a tus procesos de negocio, configuramos tu información y personalizamos formatos.',
  },
  {
    icon: <ServerStackIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Paso 3',
    subtitle: 'Migración de Datos',
    description: 'Te ayudamos a importar tus datos existentes de clientes, productos y proveedores para una transición fluida.',
  },
  {
    icon: <GraduationCapIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Paso 4',
    subtitle: 'Capacitación y Soporte Inicial',
    description: 'Entrenamos a tu equipo para que aprovechen al máximo la plataforma y te acompañamos en el arranque.',
  },
];

export const ERP_SECURITY_FEATURES: SecurityFeature[] = [
    { icon: <ServerStackIcon className="h-8 w-8 text-brand-blue" />, title: "Copias de Seguridad Automáticas", description: "Tu información se respalda diariamente para garantizar la continuidad de tu negocio." },
    { icon: <ShieldCheckIcon className="h-8 w-8 text-brand-blue" />, title: "Certificado SSL Incluido", description: "Todas las conexiones a tu ERP están cifradas para proteger tus datos sensibles." },
    { icon: <CloudSecureIcon className="h-8 w-8 text-brand-blue" />, title: "Servidores en la Nube Escalables", description: "Nuestra infraestructura crece contigo, asegurando un rendimiento óptimo en todo momento." },
    { icon: <UserGroupIcon className="h-8 w-8 text-brand-blue" />, title: "Soporte en Línea", description: "Nuestro equipo de expertos está disponible para resolver tus dudas y ayudarte a crecer." },
];

// --- KD-HKA20 PAGE DATA ---

export const KDHKA20_BENEFITS: KDHKA20Benefit[] = [
    {
        icon: <PuzzlePieceIcon className="h-10 w-10 text-brand-blue" />,
        title: "Todo-en-Uno",
        description: "Facturación, cobro y gestión en un solo dispositivo para simplificar tu operación diaria y reducir tiempos de atención."
    },
    {
        icon: <ShoppingCartIcon className="h-10 w-10 text-brand-blue" />,
        title: "Punto de Venta Integrado",
        description: "Acepta pagos con tarjetas de débito, crédito y NFC sin necesidad de terminales externas ni costos adicionales."
    },
    {
        icon: <WifiIcon className="h-10 w-10 text-brand-blue" />,
        title: "Conectividad Total",
        description: "Funciona en cualquier lugar con WiFi o 4G. Su diseño compacto y batería lo hacen ideal para cualquier espacio."
    },
    {
        icon: <LinkChainIcon className="h-10 w-10 text-brand-blue" />,
        title: "Sistema Conectado",
        description: "Controla inventario, ventas y clientes en tiempo real con el sistema KD-HKA POS y su conexión a RadarSystems ERP."
    },
    {
        icon: <ShieldCheckIcon className="h-10 w-10 text-brand-blue" />,
        title: "Cumplimiento Fiscal",
        description: "Máquina fiscal homologada por el SENIAT, garantizando el cumplimiento normativo y evitando sanciones."
    }
];

export const KDHKA20_FEATURES: KDHKA20Feature[] = [
    {
        icon: <CreditCardIcon className="h-10 w-10 text-brand-blue" />,
        title: "Diversidad de Pagos",
        description: "Procesa tarjetas de débito, crédito, Visa y Master Débito en un solo dispositivo, cumpliendo con los lineamientos del SENIAT."
    },
    {
        icon: <SlidersHorizontalIcon className="h-10 w-10 text-brand-blue" />,
        title: "Configuración Flexible",
        description: "Se adapta a cualquier tipo de negocio con una configuración personalizable y gestión avanzada de roles y permisos."
    },
    {
        icon: <ChartBarIcon className="h-10 w-10 text-brand-blue" />,
        title: "Gestión de Ventas y Stock",
        description: "Controla tu inventario, accede a información de ventas detallada y recibe notificaciones de productos sin existencia."
    },
    {
        icon: <DocumentTextIcon className="h-10 w-10 text-brand-blue" />,
        title: "Reportes Detallados",
        description: "Genera reportes X y Z, resúmenes de montos, productos más vendidos y reportes de memoria fiscal y auditoría."
    }
];

export const KDHKA20_CERTIFICATIONS: string[] = [
    "PCI", "EMV L1 & L2", "EMV Contactless L1", "Paypass", "Paywave", "AMEX ExpressPay", "Discover", "JCB", "Pure", "QUICS", "Rupay", "NSICC", "TQM", "ROHS", "CE", "WEEE", "CB", "WPC"
];

export const KDHKA20_TECH_SPECS: TechSpec[] = [
    {
        category: "Parámetros de Impresión",
        details: [
            { spec: "Tipo de impresión", value: "Térmica" },
            { spec: "Ancho de papel", value: "57mm x 40mm" },
            { spec: "Rasgado de papel", value: "Manual" },
        ]
    },
    {
        category: "Especificaciones de Hardware",
        details: [
            { spec: "Pantalla", value: "5.5\" HD LCM 1280x720, IPS" },
            { spec: "Sistema Operativo", value: "Android 10" },
            { spec: "Comunicación", value: "4G/3G/2G, WiFi 2.4/5GHz, BT4.2" },
            { spec: "Cámara", value: "Trasera 8MP (lectura 1D/2D), Frontal 2MP" },
            { spec: "Batería", value: "Li-ion 7.6Vcc / 2500mAh" },
        ]
    },
    {
        category: "Memorias",
        details: [
            { spec: "Memoria RAM", value: "2 GB" },
            { spec: "Almacenamiento", value: "16 GB" },
            { spec: "Memoria Fiscal", value: "2000 reportes Z" },
            { spec: "Memoria de Auditoría", value: "16 GB (TF Card)" },
        ]
    },
    {
        category: "Especificaciones Físicas",
        details: [
            { spec: "Dimensiones", value: "79 (Ancho) x 213 (Largo) x 52 (Alto) mm" },
            { spec: "Peso", value: "0.49 Kg (sin rollo)" },
        ]
    }
];

export const KDHKA20_TESTIMONIALS: Testimonial[] = [
    { quote: "Desde que usamos la KD-HKA20, hemos reducido el tiempo de facturación y el control de inventario es más sencillo que nunca.", author: "Carlos Mendoza", company: "Panadería La Delicia" },
    { quote: "Antes tenía tres dispositivos distintos para vender y cobrar, ahora todo está integrado. La atención al cliente mejoró significativamente.", author: "Ana Rodríguez", company: "Tienda Fashion" },
    { quote: "Su conectividad y facilidad de uso nos permite operar en cualquier lugar sin preocupaciones.", author: "Luis Pérez", company: "Food Truck Sabor Urbano" },
];

export const FAQ_DATA: FAQItem[] = [
    {
        question: "¿La KD-HKA20 cumple con todas las normativas fiscales del SENIAT?",
        answer: "Sí, el dispositivo KD-HKA20 está completamente homologado por el SENIAT, asegurando que todas tus transacciones cumplan con la normativa fiscal vigente en Venezuela."
    },
    {
        question: "¿Puedo usarla en espacios pequeños o móviles?",
        answer: "¡Por supuesto! Su diseño compacto, ligero y con batería de larga duración, junto a su conectividad WiFi y 4G, la hacen perfecta para food trucks, ferias, entregas a domicilio y locales con espacio reducido."
    },
    {
        question: "¿Acepta pagos con tarjetas de débito, crédito y NFC?",
        answer: "Sí, el punto de venta (POS) integrado es compatible con las principales tarjetas de débito y crédito del país, además de aceptar pagos sin contacto (NFC), ofreciendo múltiples opciones a tus clientes."
    },
    {
        question: "¿El sistema KD-HKA POS se conecta con mi ERP actual?",
        answer: "El sistema está diseñado para integrarse de forma nativa y perfecta con RadarSystems ERP, permitiendo una sincronización automática de tu inventario, ventas y contabilidad en tiempo real."
    },
    {
        question: "¿Qué soporte técnico se ofrece?",
        answer: "Ofrecemos soporte técnico completo para asegurar el funcionamiento óptimo de tu dispositivo. Además, tu compra incluye una garantía de satisfacción de 30 días para que puedas probarlo sin riesgos."
    }
];

export const MAIN_TESTIMONIALS: Testimonial[] = [
    { quote: "El proceso de facturación solía tomarnos días. Con RadarSystems ERP, lo hacemos en horas. El soporte técnico siempre ha sido rápido y eficiente.", author: "Carlos Rodríguez", company: "Gerente de Finanzas en Servicios Creativos" },
    { quote: "Desde que usamos la KD-HKA20, hemos reducido el tiempo de facturación y el control de inventario es más sencillo que nunca.", author: "Carlos Mendoza", company: "Panadería La Delicia" },
     { quote: "Como startup, necesitábamos una herramienta que creciera con nosotros. RadarSystems ERP nos dio la flexibilidad y el poder que buscábamos sin un costo prohibitivo.", author: "Sofía Gómez", company: "Fundadora de Tech Innovators" },
];

// --- TRAINING COURSES DATA ---
export const TRAINING_COURSES: TrainingCourse[] = [
    // ERP Courses
    {
        id: 'erp-01',
        category: 'ERP',
        title: 'Fundamentos de RadarSystems ERP',
        description: 'Un curso esencial para nuevos usuarios. Aprende a navegar la plataforma, gestionar contactos y dominar el flujo de ventas básico.',
        level: 'Básico',
        duration: '4 Horas',
        icon: <ServerStackIcon className="h-8 w-8 text-brand-blue" />,
        topics: ['Navegación e Interfaz', 'Módulo de Contactos', 'Creación de Cotizaciones', 'Conversión a Factura', 'Registro de Pagos Básicos']
    },
    {
        id: 'erp-02',
        category: 'ERP',
        title: 'Gestión Avanzada de Ventas y CRM',
        description: 'Potencia tu equipo comercial. Este curso se enfoca en la gestión de oportunidades, pipelines de venta y seguimiento de clientes.',
        level: 'Intermedio',
        duration: '6 Horas',
        icon: <ChartBarIcon className="h-8 w-8 text-brand-blue" />,
        topics: ['Configuración del Pipeline de Ventas', 'Gestión de Prospectos (Leads)', 'Actividades y Seguimiento', 'Reportes de Ventas', 'Integración con Email Marketing']
    },
    {
        id: 'erp-03',
        category: 'ERP',
        title: 'Control de Inventario y Compras',
        description: 'Optimiza tu stock y cadena de suministro. Ideal para jefes de almacén y personal de operaciones.',
        level: 'Intermedio',
        duration: '6 Horas',
        icon: <ShoppingCartIcon className="h-8 w-8 text-brand-blue" />,
        topics: ['Gestión de Productos y Categorías', 'Reglas de Reabastecimiento', 'Órdenes de Compra a Proveedores', 'Recepción de Mercancía', 'Ajustes de Inventario']
    },
     {
        id: 'erp-04',
        category: 'ERP',
        title: 'Administración y Reportes Financieros',
        description: 'Para gerentes y administradores. Aprende a configurar el sistema, gestionar usuarios y crear reportes personalizados.',
        level: 'Avanzado',
        duration: '8 Horas',
        icon: <CogIcon className="h-8 w-8 text-brand-blue" />,
        topics: ['Gestión de Usuarios y Permisos', 'Configuraciones Generales', 'Creación de Dashboards', 'Análisis de Rentabilidad', 'Conciliación Bancaria Básica']
    },
    // AI Agents Courses
    {
        id: 'ia-01',
        category: 'IA',
        title: 'Introducción a la Automatización con Agentes IA',
        description: 'Descubre el potencial de la IA para tu negocio. Un curso no técnico para entender qué hace cada agente y cómo pueden ayudarte.',
        level: 'Básico',
        duration: '3 Horas',
        icon: <SparklesIcon className="h-8 w-8 text-brand-green" />,
        topics: ['¿Qué es un Agente de IA?', 'Casos de Uso por Industria', 'Análisis de Agentes: DocuMind, LeadGenius, etc.', 'Cómo medir el ROI de la IA', 'Primeros pasos para la implementación']
    },
    {
        id: 'ia-02',
        category: 'IA',
        title: 'Optimización de Procesos con IA',
        description: 'Un taller práctico enfocado en DocuMind y AutoFlow AI para automatizar la gestión documental y tareas repetitivas.',
        level: 'Intermedio',
        duration: '5 Horas',
        icon: <BoltIcon className="h-8 w-8 text-brand-green" />,
        topics: ['Configuración de DocuMind', 'Extracción de datos de facturas', 'Creación de flujos con AutoFlow AI', 'Integración con correo y hojas de cálculo', 'Monitoreo de automatizaciones']
    },
    // POS Courses
    {
        id: 'pos-01',
        category: 'POS',
        title: 'Operación Diaria del Punto de Venta KD-HKA20',
        description: 'Capacitación fundamental para cajeros y personal de tienda. Aprende a realizar ventas, procesar pagos y cerrar la jornada.',
        level: 'Básico',
        duration: '3 Horas',
        icon: <CreditCardIcon className="h-8 w-8 text-gray-700" />,
        topics: ['Encendido y Configuración Inicial', 'Registro de Productos', 'Procesar Pagos (Tarjeta, Efectivo, Mixto)', 'Anulaciones y Devoluciones', 'Cierre de Caja (Reporte X)']
    },
    {
        id: 'pos-02',
        category: 'POS',
        title: 'Administración del Sistema HKA POS',
        description: 'Para dueños y gerentes de tienda. Domina la configuración de productos, usuarios y la generación de reportes fiscales.',
        level: 'Avanzado',
        duration: '5 Horas',
        icon: <BuildingStorefrontIcon className="h-8 w-8 text-gray-700" />,
        topics: ['Creación y Edición de Productos', 'Gestión de Usuarios y Permisos', 'Ajustes de Inventario desde el POS', 'Generación de Reporte Z y Fiscales', 'Sincronización con RadarSystems ERP']
    }
];


// --- Customer Analysis Wizard Data ---
export const USER_TYPES: WizardOption[] = [
    { id: 'emprendedor', label: 'Emprendedor', icon: <RocketLaunchIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'pyme', label: 'Empresario PYME', icon: <BuildingStorefrontIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'profesional', label: 'Profesional de libre ejercicio', icon: <UserGroupIcon className="h-8 w-8 text-brand-blue" /> },
];

export const BUSINESS_CHALLENGES: BusinessChallenge[] = [
    { id: 'facturacion', label: 'Facturación y control contable', icon: <CurrencyDollarIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'inventario', label: 'Gestión de inventario', icon: <ServerStackIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'ventas', label: 'Ventas y puntos de venta', icon: <ShoppingCartIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'marketing', label: 'Marketing y captación de clientes', icon: <SparklesIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'ia', label: 'Integración de IA en procesos', icon: <BoltIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'capacitacion', label: 'Capacitación de equipo', icon: <GraduationCapIcon className="h-8 w-8 text-brand-blue" /> },
];

export const DIGITAL_SOLUTIONS: DigitalSolution[] = [
    { id: 'erp', label: 'ERP Odoo completo', description: 'Gestiona toda tu empresa desde un solo lugar.', icon: <ServerStackIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'pos', label: 'Punto de venta integrado con ERP', description: 'Ideal para tiendas físicas, restaurantes y retail.', icon: <CreditCardIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'ecommerce', label: 'Tienda online integrada con ERP', description: 'Vende tus productos en línea 24/7.', icon: <ShoppingCartIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'agentes_ia', label: 'Agentes de IA integrados con ERP', description: 'Automatiza tareas y optimiza procesos.', icon: <SparklesIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'automatizacion', label: 'Plataformas alternas de automatización', description: 'Conecta tus apps y crea flujos de trabajo.', icon: <BoltIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'capacitacion', label: 'Capacitación personalizada', description: 'Forma a tu equipo en las nuevas herramientas.', icon: <GraduationCapIcon className="h-8 w-8 text-brand-blue" /> },
];

// --- CONSULTANT TRAINING PAGE DATA ---

export const CONSULTANT_TRAINING_MODULES: ConsultantTrainingModule[] = [
    {
        icon: <BookOpenIcon className="h-8 w-8 text-brand-blue" />,
        title: "Módulo 1: Fundamentos de la Transformación Digital",
        description: "Establece las bases teóricas y estratégicas para guiar a las empresas en su camino hacia la digitalización.",
        topics: ["Principios de la Industria 4.0", "Diagnóstico de Madurez Digital", "Estrategias de Implementación Tecnológica", "Gestión del Cambio Organizacional"]
    },
    {
        icon: <ServerStackIcon className="h-8 w-8 text-brand-blue" />,
        title: "Módulo 2: Dominio de RadarSystems ERP",
        description: "Conviértete en un experto en la implementación y personalización de nuestro ERP basado en Odoo.",
        topics: ["Configuración Inicial y Módulos Clave", "Flujos de Venta, Compra e Inventario", "Personalización de Reportes", "Migración de Datos y Puesta en Marcha"]
    },
    {
        icon: <SparklesIcon className="h-8 w-8 text-brand-blue" />,
        title: "Módulo 3: Implementación de Agentes de IA",
        description: "Aprende a identificar oportunidades de automatización y a implementar nuestra suite de Agentes de IA.",
        topics: ["Análisis de Procesos para Automatización", "Configuración de DocuMind e InfoBot", "Estrategias de Captación con LeadGenius", "Medición del ROI en Proyectos de IA"]
    },
    {
        icon: <CreditCardIcon className="h-8 w-8 text-brand-blue" />,
        title: "Módulo 4: Especialización en Punto de Venta KD-HKA20",
        description: "Domina el hardware y software fiscal para ofrecer soluciones integrales a negocios de retail y servicios.",
        topics: ["Configuración Técnica del Dispositivo", "Integración del HKA POS con el ERP", "Cumplimiento de Normativas Fiscales", "Soporte y Resolución de Incidencias"]
    },
    {
        icon: <UserGroupIcon className="h-8 w-8 text-brand-blue" />,
        title: "Módulo 5: Metodología de Consultoría y Ventas",
        description: "Desarrolla las habilidades blandas y comerciales para vender y gestionar proyectos del Kit Digital con éxito.",
        topics: ["Prospección y Calificación de Clientes", "Técnicas de Demostración de Producto", "Elaboración de Propuestas Comerciales", "Gestión de Proyectos y Seguimiento Post-Venta"]
    },
    {
        icon: <GraduationCapIcon className="h-8 w-8 text-brand-blue" />,
        title: "Módulo 6: Proyecto Final y Certificación",
        description: "Aplica todo lo aprendido en un caso práctico real que te acreditará como Consultor Certificado KDV.",
        topics: ["Desarrollo de un Caso de Negocio Completo", "Defensa del Proyecto ante un Panel", "Obtención de la Certificación Oficial", "Ingreso a la Red de Partners"]
    }
];

export const CERTIFICATION_BENEFITS: WhyChooseUsItem[] = [
    {
        icon: <CheckBadgeIcon className="h-10 w-10 text-brand-blue" />,
        title: "Certificación Oficial",
        description: "Recibe un diploma que te acredita como experto en las soluciones de Kit Digital Venezuela."
    },
    {
        icon: <UserGroupIcon className="h-10 w-10 text-brand-blue" />,
        title: "Acceso a Red de Partners",
        description: "Forma parte de una comunidad exclusiva de consultores con acceso a recursos y networking."
    },
    {
        icon: <CurrencyDollarIcon className="h-10 w-10 text-brand-blue" />,
        title: "Oportunidades de Ingresos",
        description: "Genera ingresos a través de la implementación de proyectos y comisiones por referidos."
    },
    {
        icon: <BookOpenIcon className="h-10 w-10 text-brand-blue" />,
        title: "Soporte y Recursos",
        description: "Accede a material de marketing, soporte técnico prioritario y actualizaciones constantes."
    }
];


// --- RADARSYSTEMS LANDING & WIZARD DATA ---
export const RADARSYSTEMS_PLANS: RadarSystemsPlan[] = [
  { name: 'Emprendedor', contacts: '5.000', users: '2', landingPagesAI: '2', freeSMS: '5', ecommerce: '1', chatbotAI: 'Sí', support: 'Sí' },
  { name: 'Empresarial', contacts: '15.000', users: '3', landingPagesAI: '3', freeSMS: '6', ecommerce: '1', chatbotAI: 'Sí', support: 'Sí' },
  { name: 'Gran Enviador', contacts: 'Ilimitados', users: '4', landingPagesAI: '5', freeSMS: '10-30', ecommerce: '1 con carrito', chatbotAI: 'Sí', support: 'Sí' },
];

export const WIZARD_USER_TYPES: WizardStepOption[] = [
    { id: 'emprendedor', label: 'Emprendedor / Pequeño negocio', icon: <RocketLaunchIcon className="h-10 w-10 text-brand-blue" /> },
    { id: 'mediana', label: 'Empresa mediana / Profesional independiente', icon: <BuildingStorefrontIcon className="h-10 w-10 text-brand-blue" /> },
    { id: 'grande', label: 'Gran empresa / Marketing masivo', icon: <BuildingOffice2Icon className="h-10 w-10 text-brand-blue" /> },
];

export const WIZARD_CONTACT_COUNTS: WizardStepOption[] = [
    { id: '5k', label: 'Hasta 5.000', icon: <UserGroupIcon className="h-8 w-8 text-brand-blue" /> },
    { id: '15k', label: 'Hasta 15.000', icon: <UserGroupIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'unlimited', label: 'Más de 15.000 / Ilimitados', icon: <UserGroupIcon className="h-8 w-8 text-brand-blue" /> },
];

export const WIZARD_CHANNELS: WizardStepOption[] = [
    { id: 'email', label: 'Email marketing con IA', icon: <EnvelopeIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'sms', label: 'SMS masivos y transaccionales', icon: <DevicePhoneMobileIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'landing', label: 'Landing pages / Formularios', icon: <ComputerDesktopIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'ecommerce', label: 'eCommerce y carrito de compras', icon: <ShoppingCartIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'chatbot', label: 'Chatbot de atención al cliente', icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-brand-blue" /> },
];

export const WIZARD_USER_COUNTS: WizardStepOption[] = [
    { id: '1-2', label: '1-2', icon: <UserGroupIcon className="h-8 w-8 text-brand-blue" /> },
    { id: '3-4', label: '3-4', icon: <UserGroupIcon className="h-8 w-8 text-brand-blue" /> },
    { id: '4+', label: 'Más de 4', icon: <UserGroupIcon className="h-8 w-8 text-brand-blue" /> },
];

export const WIZARD_INTEGRATION_LEVELS: WizardStepOption[] = [
    { id: 'basico', label: 'Básico', description: 'Email y SMS solo', icon: <PuzzlePieceIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'medio', label: 'Medio', description: 'Email, SMS y Landing Pages', icon: <PuzzlePieceIcon className="h-8 w-8 text-brand-blue" /> },
    { id: 'avanzado', label: 'Avanzado', description: 'Todo + eCommerce, chatbot y estadísticas', icon: <PuzzlePieceIcon className="h-8 w-8 text-brand-blue" /> },
];

// --- SECURITY PAGE DATA ---

export const SECURITY_TESTIMONIALS: Testimonial[] = [
    { quote: "Gracias a Kit Digital Venezuela, detectamos un ataque a tiempo y evitamos pérdidas críticas. Su respuesta fue inmediata y profesional.", author: "Juan Pérez", company: "Gerente TI, Empresa XYZ" },
    { quote: "Su análisis forense nos permitió presentar evidencia sólida ante una auditoría importante. El nivel de detalle del informe fue impecable.", author: "María Gómez", company: "Directora de Seguridad, Empresa ABC" },
];

export const SECURITY_FAQ_DATA: FAQItem[] = [
    {
        question: "¿Qué tipo de incidentes pueden analizar?",
        answer: "Analizamos una amplia gama de incidentes, incluyendo ataques de malware, phishing, ransomware, accesos no autorizados, fugas de datos y cualquier brecha digital que su empresa haya detectado o sospeche."
    },
    {
        question: "¿El análisis forense tiene validez legal?",
        answer: "Sí, nuestros informes forenses se realizan siguiendo estrictos protocolos y estándares internacionales. La evidencia recolectada y los informes generados están diseñados para tener validez y ser presentados en auditorías, procesos de seguros y procedimientos judiciales."
    },
    {
        question: "¿Cómo se realiza la seguridad preventiva?",
        answer: "Nuestro enfoque preventivo incluye una evaluación exhaustiva de vulnerabilidades en su infraestructura, la implementación de políticas de seguridad robustas, la configuración de herramientas de monitoreo y la capacitación de su personal para reconocer y evitar amenazas comunes."
    }
];