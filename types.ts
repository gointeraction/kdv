export interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
  iconBgClass?: string;
}

export interface Agent {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: JSX.Element;
  iconBgClass: string;
  features: string[];
  useCases: string[];
  benefits: string[];
  cta: string;
  buttonVariant?: 'default' | 'green' | 'blue';
}

export interface DeepDiveFeature {
  icon: JSX.Element;
  title: string;
  items: string[];
}

export interface PerformanceMetric {
  icon: JSX.Element;
  value: string;
  label: string;
}

export interface WhyChooseUsItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ImplementationStep {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
}

export interface ErpBenefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ErpModule {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ErpUseCase {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  popular: boolean;
  initialCost: string;
  price: string;
  frequency: string;
  users: string;
  features: string[];
  cta: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface SecurityFeature {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface KDHKA20Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface KDHKA20Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface TechSpec {
  category: string;
  details: {
    spec: string;
    value: string;
  }[];
}

// --- Training Courses Types ---
export interface TrainingCourse {
  id: string;
  category: 'ERP' | 'IA' | 'POS';
  title: string;
  description: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  duration: string;
  topics: string[];
  icon: JSX.Element;
}


// --- Customer Analysis Wizard Types ---

export interface WizardFormData {
  userType: string;
  contactName: string;
  businessName: string;
  industry: string;
  employeeCount: string;
  currentSolutions: string;
  challenges: string[];
  solutionsOfInterest: string[];
  email: string;
  phone: string;
  contactPreference: string;
}

export interface WizardOption {
  id: string;
  label: string;
  icon: JSX.Element;
}

export interface BusinessChallenge {
  id: string;
  label: string;
  icon: JSX.Element;
}

export interface DigitalSolution {
  id: string;
  label: string;
  description: string;
  icon: JSX.Element;
}

// --- Consultant Training Types ---
export interface ConsultantTrainingModule {
  icon: JSX.Element;
  title: string;
  description: string;
  topics: string[];
}

// --- Navigation Types ---
export interface NavSubLink {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href?: string; // Optional for dropdown parent
  subLinks?: NavSubLink[];
}

// --- RadarSystems Wizard & Landing Types ---
export interface RadarSystemsPlan {
  name: string;
  contacts: string;
  users: string;
  landingPagesAI: string;
  freeSMS: string;
  ecommerce: string;
  chatbotAI: string;
  support: string;
}

export interface WizardStepOption {
  id: string;
  label: string;
  description?: string;
  icon: JSX.Element;
}

export interface RadarSystemsWizardData {
  userType: string;
  contactCount: string;
  channels: string[];
  userCount: string;
  integrationLevel: string;
  objective: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
}