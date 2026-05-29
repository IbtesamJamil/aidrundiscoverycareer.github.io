export interface JobRole {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  salary: number;
  salaryRange: string;
  category: 'technical' | 'research' | 'leadership';
  skills: string[];
  experience: string;
}

export interface AcademicProgram {
  id: string;
  name: string;
  university: string;
  location: string;
  format: string;
  duration: string;
  focus: string[];
  careerOutcomes: string[];
  url: string;
}

export interface Company {
  id: string;
  name: string;
  type: 'pharma' | 'startup';
  description: string;
  focus: string[];
  notableAchievement?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'programming' | 'ml' | 'domain' | 'tools';
  description: string;
}

export const jobRoles: JobRole[] = [
  {
    id: 'hybrid-scientist',
    title: 'Hybrid Scientist (Computational-Experimental)',
    description: 'Bridge computational predictions and wet lab validation in drug discovery',
    responsibilities: [
      'Design experiments informed by AI predictions',
      'Conduct biochemical and cell-based assays',
      'Validate AI-predicted drug candidates in wet lab',
      'Perform structure-activity relationship (SAR) analysis',
      'Manage iterative cycles between computation and experimentation',
      'Communicate insights between computational and experimental teams',
      'Optimize lead compounds using both approaches',
      'Generate experimental data to improve AI models'
    ],
    salary: 135000,
    salaryRange: '$125K - $165K',
    category: 'research',
    skills: ['Molecular Biology', 'Biochemistry', 'Python', 'Experimental Design', 'Data Analysis', 'Assay Development', 'SAR Analysis', 'Machine Learning Basics'],
    experience: '3-5 years'
  },
  {
    id: 'wet-lab-scientist',
    title: 'Experimental Validation Scientist (Wet Lab)',
    description: 'Validate AI predictions through laboratory experiments and generate data for model improvement',
    responsibilities: [
      'Synthesize and test AI-predicted molecular compounds',
      'Conduct biochemical assays and cell-based assays',
      'Perform animal studies for drug efficacy validation',
      'Generate high-quality experimental data',
      'Identify reasons for AI prediction failures',
      'Provide feedback to improve computational models',
      'Optimize experimental protocols',
      'Ensure data quality and reproducibility',
      'Collaborate with computational teams on validation strategies'
    ],
    salary: 95000,
    salaryRange: '$85K - $130K',
    category: 'research',
    skills: ['Molecular Biology', 'Biochemistry', 'Cell Culture', 'Assay Development', 'Analytical Chemistry', 'Lab Techniques', 'Data Recording', 'Scientific Writing'],
    experience: '2-4 years'
  },
  {
    id: 'ai-scientist',
    title: 'AI Scientist / Machine Learning Engineer',
    description: 'Develop and implement cutting-edge AI/ML models for drug discovery',
    responsibilities: [
      'Develop and implement AI/ML models for target identification',
      'Lead optimization and drug design',
      'Data preprocessing and model training',
      'Model validation and deployment',
      'Collaborate with experimental teams'
    ],
    salary: 149742,
    salaryRange: '$140K - $180K+',
    category: 'technical',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Statistical Analysis'],
    experience: '3-5 years'
  },
  {
    id: 'computational-chemist',
    title: 'Computational Chemist / Bioinformatician',
    description: 'Apply computational methods to analyze biological data and optimize drug candidates',
    responsibilities: [
      'Apply computational methods and molecular modeling',
      'Analyze biological data using bioinformatics tools',
      'Predict drug behavior and optimize candidates',
      'Collaborate with experimental groups',
      'Integrate computational and experimental findings'
    ],
    salary: 107168,
    salaryRange: '$100K - $150K',
    category: 'research',
    skills: ['Molecular Modeling', 'Bioinformatics', 'Python', 'Chemistry Knowledge', 'AlphaFold', 'Rosetta'],
    experience: '2-4 years'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Manage and analyze large datasets to extract insights and build predictive models',
    responsibilities: [
      'Manage large datasets from drug discovery',
      'Extract insights and build predictive models',
      'Statistical analysis and data visualization',
      'Develop data-driven strategies',
      'Build data pipelines and infrastructure'
    ],
    salary: 130000,
    salaryRange: '$120K - $160K',
    category: 'technical',
    skills: ['Python', 'SQL', 'Statistics', 'Data Visualization', 'Machine Learning', 'Big Data Tools'],
    experience: '2-4 years'
  },
  {
    id: 'research-scientist',
    title: 'Research Scientist (AI Compute & DPU)',
    description: 'Focus on advanced computational infrastructure for AI model training',
    responsibilities: [
      'Develop advanced computational infrastructure',
      'Specialize in processing units (DPUs)',
      'Accelerate AI model training and simulation',
      'Optimize high-performance computing',
      'Research emerging computational technologies'
    ],
    salary: 157000,
    salaryRange: '$150K - $200K+',
    category: 'technical',
    skills: ['High-Performance Computing', 'GPU/TPU Optimization', 'C++', 'CUDA', 'System Architecture'],
    experience: '4-6 years'
  },
  {
    id: 'principal-scientist',
    title: 'Principal Computational Scientist',
    description: 'Lead teams in applying computational chemistry and ML to advance drug discovery',
    responsibilities: [
      'Lead computational chemistry teams',
      'Apply machine learning to drug discovery',
      'Strategic decision-making and project management',
      'Mentor junior scientists',
      'Drive innovation in computational methods',
      'Oversee integration of wet lab and computational work'
    ],
    salary: 180000,
    salaryRange: '$170K - $250K+',
    category: 'leadership',
    skills: ['Leadership', 'Computational Chemistry', 'Machine Learning', 'Project Management', 'Strategic Planning', 'Experimental Knowledge'],
    experience: '8+ years'
  },
  {
    id: 'translational-scientist',
    title: 'Translational Research Scientist',
    description: 'Translate AI discoveries from bench to bedside, managing preclinical to clinical transitions',
    responsibilities: [
      'Manage transition from computational predictions to clinical candidates',
      'Design preclinical studies validating AI-predicted compounds',
      'Coordinate between computational, wet lab, and clinical teams',
      'Analyze compound properties for drug-likeness',
      'Manage regulatory and safety assessments',
      'Optimize compounds for clinical development',
      'Document findings for regulatory submissions',
      'Identify development risks and mitigation strategies'
    ],
    salary: 140000,
    salaryRange: '$130K - $180K',
    category: 'research',
    skills: ['Pharmacology', 'Regulatory Knowledge', 'Preclinical Design', 'Data Analysis', 'Project Management', 'Scientific Writing', 'Risk Assessment'],
    experience: '5-8 years'
  },
  {
    id: 'bioinformatics-engineer',
    title: 'Bioinformatics Engineer',
    description: 'Develop software and pipelines for biological data analysis',
    responsibilities: [
      'Develop bioinformatics software and pipelines',
      'Analyze genomic and proteomic data',
      'Build data analysis workflows',
      'Optimize computational performance',
      'Collaborate with research teams'
    ],
    salary: 145573,
    salaryRange: '$130K - $170K',
    category: 'technical',
    skills: ['Python', 'Bioinformatics', 'Linux', 'Database Design', 'Genomics Knowledge'],
    experience: '3-5 years'
  },
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    description: 'Build and deploy ML systems for drug discovery applications',
    responsibilities: [
      'Design and build ML systems',
      'Deploy models to production',
      'Optimize model performance',
      'Build scalable ML infrastructure',
      'Conduct model evaluation and testing'
    ],
    salary: 149742,
    salaryRange: '$140K - $180K',
    category: 'technical',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Software Engineering', 'Cloud Platforms'],
    experience: '3-5 years'
  },
  {
    id: 'computational-neuroscientist',
    title: 'Computational Neuroscientist',
    description: 'Apply computational methods to neuroscience and neurological drug discovery',
    responsibilities: [
      'Model neural systems and brain function',
      'Analyze neuroimaging data',
      'Develop computational neuroscience models',
      'Identify neurological drug targets',
      'Collaborate with neuroscience teams',
      'Validate predictions through experimental collaboration'
    ],
    salary: 158656,
    salaryRange: '$150K - $190K',
    category: 'research',
    skills: ['Neuroscience', 'Python', 'Statistical Modeling', 'Neuroimaging Analysis', 'Mathematics', 'Experimental Biology'],
    experience: '4-6 years'
  },
  {
    id: 'biotech-scientist',
    title: 'Biotech Research Scientist (Hybrid Focus)',
    description: 'Drive innovation in biotech by integrating AI insights with experimental biology',
    responsibilities: [
      'Develop novel biotech assays for compound validation',
      'Integrate AI predictions with experimental workflows',
      'Optimize high-throughput screening processes',
      'Manage biotech platforms and automation',
      'Collaborate on AI model training with experimental data',
      'Lead innovation in experimental methodologies',
      'Mentor wet lab teams on AI-informed approaches',
      'Publish findings and present at conferences'
    ],
    salary: 125000,
    salaryRange: '$115K - $155K',
    category: 'research',
    skills: ['Molecular Biology', 'Biotech Platforms', 'High-Throughput Screening', 'Automation', 'Python', 'Experimental Design', 'Data Analysis'],
    experience: '3-6 years'
  }
];

export const academicPrograms: AcademicProgram[] = [
  {
    id: 'ucsf-aicd3',
    name: 'MS in Artificial Intelligence and Computational Drug Discovery and Development (AICD3)',
    university: 'University of California, San Francisco (UCSF)',
    location: 'San Francisco, CA, USA',
    format: 'On-campus',
    duration: '1.5 years (5 quarters)',
    focus: [
      'Computer Science',
      'Data Science',
      'Statistical Analysis',
      'Machine Learning',
      'Systems Pharmacology',
      'Bioinformatics',
      'Pharmacogenomics'
    ],
    careerOutcomes: [
      'Drug Discovery Leadership',
      'Drug Development',
      'Bioinformatics',
      'Pharmacovigilance',
      'Translational Medicine'
    ],
    url: 'https://graduate.ucsf.edu/academics/masters-degree/aicd3-ms'
  },
  {
    id: 'umd-aidd',
    name: 'MS in AI for Drug Development (AIDD)',
    university: 'University of Maryland School of Pharmacy',
    location: 'Baltimore, MD, USA',
    format: '100% Online',
    duration: '4-7 semesters (30 credits)',
    focus: [
      'Natural Language Processing',
      'Machine Learning',
      'Drug Development',
      'Clinical Trial Optimization',
      'Pharmacovigilance',
      'Precision Medicine'
    ],
    careerOutcomes: [
      'Data Scientist in Pharma',
      'Biotech Industry',
      'Government Agencies',
      'Strategic Decision-Making'
    ],
    url: 'https://www.pharmacy.umaryland.edu/academics/ai-drug-development/'
  },
  {
    id: 'berkeley-msse',
    name: 'Master of Molecular Science and Software Engineering (MSSE)',
    university: 'University of California, Berkeley',
    location: 'Berkeley, CA, USA',
    format: 'Online (with optional on-campus bootcamp)',
    duration: '9 months (full-time) or 2 years (part-time)',
    focus: [
      'Software Engineering',
      'Machine Learning',
      'Computational Molecular Science',
      'Deep Learning',
      'High-Performance Computing',
      'Data Visualization'
    ],
    careerOutcomes: [
      'Software Engineer',
      'Data Scientist',
      'Machine Learning Engineer',
      'Computational Chemist',
      'Research Scientist'
    ],
    url: 'https://msse.berkeley.edu/'
  },
  {
    id: 'qmul-aidd',
    name: 'MSc in Artificial Intelligence for Drug Discovery',
    university: 'Queen Mary University of London (QMUL)',
    location: 'London, UK',
    format: 'On-campus',
    duration: '1 year',
    focus: [
      'Python Programming',
      'TensorFlow',
      'DeepChem',
      'AlphaFold',
      'Medicinal Chemistry',
      'Structural Biology'
    ],
    careerOutcomes: [
      'AI Drug Discovery Specialist',
      'Computational Chemist',
      'Research Scientist',
      'Industry Roles'
    ],
    url: 'https://www.qmul.ac.uk/postgraduate/taught/coursefinder/courses/artificial-intelligence-for-drug-discovery-msc/'
  },
  {
    id: 'liverpool-dd-ai',
    name: 'MSc in Drug Discovery with Artificial Intelligence',
    university: 'University of Liverpool',
    location: 'Liverpool, UK',
    format: 'On-campus',
    duration: '1 year (full-time)',
    focus: [
      'Medicinal Chemistry',
      'Pharmacology',
      'AI Tools for Molecular Design',
      'Drug Development',
      'Computational Methods'
    ],
    careerOutcomes: [
      'Drug Discovery Scientist',
      'Computational Chemist',
      'Pharma Industry',
      'Research Roles'
    ],
    url: 'https://www.liverpool.ac.uk/courses/drug-discovery-with-artificial-intelligence-msc'
  }
];

export const companies: Company[] = [
  // Big Pharma
  {
    id: 'pfizer',
    name: 'Pfizer',
    type: 'pharma',
    description: 'Global pharmaceutical leader investing heavily in AI for drug discovery and development',
    focus: ['AI-driven Drug Discovery', 'Clinical Trial Optimization', 'Target Identification'],
    notableAchievement: 'Multiple AI partnerships for accelerated R&D'
  },
  {
    id: 'novartis',
    name: 'Novartis',
    type: 'pharma',
    description: 'Swiss pharmaceutical company integrating AI into their innovation pipeline',
    focus: ['Computational Drug Design', 'Precision Medicine', 'AI Infrastructure'],
    notableAchievement: 'Leading AI-pharma collaborations'
  },
  {
    id: 'sanofi',
    name: 'Sanofi',
    type: 'pharma',
    description: 'French multinational pharma company leveraging AI for drug discovery',
    focus: ['Generative AI', 'Drug Design', 'Data Analytics'],
    notableAchievement: 'Strategic partnerships with AI vendors'
  },
  {
    id: 'bms',
    name: 'Bristol-Myers Squibb',
    type: 'pharma',
    description: 'Biopharmaceutical company using AI to accelerate drug development',
    focus: ['AI Drug Discovery', 'Clinical Trials', 'Target Validation'],
    notableAchievement: 'Data pooling initiatives with competitors'
  },
  {
    id: 'astrazeneca',
    name: 'AstraZeneca',
    type: 'pharma',
    description: 'Global biopharmaceutical company investing in AI-driven innovation',
    focus: ['Machine Learning', 'Drug Design', 'Predictive Analytics'],
    notableAchievement: 'Advanced AI research programs'
  },
  // AI-First Startups
  {
    id: 'insilico',
    name: 'Insilico Medicine',
    type: 'startup',
    description: 'End-to-end AI-driven drug discovery platform',
    focus: ['Generative AI', 'Target Identification', 'Drug Design', 'Molecular Generation'],
    notableAchievement: 'Successfully identified novel drug targets and designed candidates'
  },
  {
    id: 'recursion',
    name: 'Recursion Pharmaceuticals',
    type: 'startup',
    description: 'AI and automation platform for biological and chemical systems mapping',
    focus: ['AI Automation', 'Biological Mapping', 'Drug Discovery', 'High-Throughput Screening'],
    notableAchievement: 'Accelerated discovery of new medicines through AI'
  },
  {
    id: 'exscientia',
    name: 'Exscientia',
    type: 'startup',
    description: 'AI platform for novel molecule design and drug optimization',
    focus: ['Generative AI', 'Molecular Design', 'Lead Optimization', 'Drug Candidates'],
    notableAchievement: 'Significantly reduced time and cost of drug discovery'
  },
  {
    id: 'atomwise',
    name: 'Atomwise',
    type: 'startup',
    description: 'AI-powered small molecule drug discovery using deep learning',
    focus: ['Deep Learning', 'Binding Affinity Prediction', 'Molecular Screening', 'Drug Design'],
    notableAchievement: 'Advanced neural networks for drug discovery'
  },
  {
    id: 'iktos',
    name: 'Iktos',
    type: 'startup',
    description: 'Generative AI platform for de novo drug design',
    focus: ['Generative AI', 'Molecular Design', 'Novel Structures', 'Drug Properties'],
    notableAchievement: 'Creating novel molecular structures with desired properties'
  },
  {
    id: 'benevolentai',
    name: 'BenevolentAI',
    type: 'startup',
    description: 'AI platform for identifying drug targets and accelerating development',
    focus: ['Drug Target Identification', 'AI Analysis', 'Disease Understanding', 'Therapeutics'],
    notableAchievement: 'Identified COVID-19 therapy using AI'
  },
  {
    id: 'insitro',
    name: 'Insitro',
    type: 'startup',
    description: 'Machine learning and human genetics for drug discovery transformation',
    focus: ['Machine Learning', 'Genetics', 'Drug Discovery', 'Precision Medicine'],
    notableAchievement: 'Transforming drug discovery with ML and genetics'
  }
];

export const skills: Skill[] = [
  // Programming
  {
    id: 'python',
    name: 'Python',
    category: 'programming',
    description: 'Primary programming language for AI/ML in drug discovery'
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'programming',
    description: 'High-performance computing and optimization'
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'programming',
    description: 'Database management and data querying'
  },
  {
    id: 'r',
    name: 'R',
    category: 'programming',
    description: 'Statistical computing and data analysis'
  },
  // ML Frameworks
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'ml',
    description: 'Deep learning framework for model development'
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'ml',
    description: 'Flexible deep learning framework'
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    category: 'ml',
    description: 'Machine learning library for classical algorithms'
  },
  {
    id: 'deepchem',
    name: 'DeepChem',
    category: 'ml',
    description: 'Deep learning library for drug discovery'
  },
  // Domain Knowledge
  {
    id: 'chemistry',
    name: 'Chemistry',
    category: 'domain',
    description: 'Understanding of molecular chemistry and drug design'
  },
  {
    id: 'biology',
    name: 'Biology',
    category: 'domain',
    description: 'Knowledge of biological systems and processes'
  },
  {
    id: 'pharmacology',
    name: 'Pharmacology',
    category: 'domain',
    description: 'Understanding of drug interactions and effects'
  },
  {
    id: 'bioinformatics',
    name: 'Bioinformatics',
    category: 'domain',
    description: 'Analysis of biological data and sequences'
  },
  // Tools
  {
    id: 'alphafold',
    name: 'AlphaFold',
    category: 'tools',
    description: 'Protein structure prediction tool'
  },
  {
    id: 'rosetta',
    name: 'Rosetta',
    category: 'tools',
    description: 'Molecular modeling and simulation software'
  },
  {
    id: 'pymol',
    name: 'PyMOL',
    category: 'tools',
    description: 'Molecular visualization tool'
  },
  {
    id: 'rdkit',
    name: 'RDKit',
    category: 'tools',
    description: 'Cheminformatics software'
  }
];

export const salaryData = [
  { role: 'Computational Neuroscientist', salary: 158656 },
  { role: 'Computational Scientist', salary: 157000 },
  { role: 'Principal Computational Scientist', salary: 180000 },
  { role: 'Machine Learning Engineer', salary: 149742 },
  { role: 'Bioinformatics Engineer', salary: 145573 },
  { role: 'Translational Scientist', salary: 140000 },
  { role: 'Hybrid Scientist', salary: 135000 },
  { role: 'Software Engineer', salary: 144144 },
  { role: 'Simulation & Modeling Engineer', salary: 142900 },
  { role: 'Biotech Research Scientist', salary: 125000 },
  { role: 'AI Engineer', salary: 119930 },
  { role: 'Computational Chemist', salary: 107168 },
  { role: 'Experimental Validation Scientist', salary: 95000 }
];

export const careerPathways = [
  {
    id: 'pure-computational',
    title: 'Pure Computational Path',
    description: 'Focus entirely on AI/ML model development',
    roles: ['AI Scientist', 'Machine Learning Engineer', 'Data Scientist', 'Principal Computational Scientist'],
    skills: ['Python', 'TensorFlow', 'Deep Learning', 'Statistics'],
    timeline: 'Entry (2-3 yrs) → Senior (5-8 yrs) → Principal (8+ yrs)'
  },
  {
    id: 'hybrid-path',
    title: 'Hybrid Scientist Path',
    description: 'Balance computational and experimental expertise',
    roles: ['Hybrid Scientist', 'Biotech Research Scientist', 'Translational Scientist', 'Principal Scientist'],
    skills: ['Molecular Biology', 'Python', 'Experimental Design', 'Data Analysis'],
    timeline: 'Entry (2-3 yrs) → Mid-level (4-6 yrs) → Senior (7+ yrs)'
  },
  {
    id: 'wet-lab-path',
    title: 'Wet Lab to Hybrid Path',
    description: 'Start in wet lab, transition to hybrid roles',
    roles: ['Experimental Validation Scientist', 'Hybrid Scientist', 'Biotech Research Scientist', 'Translational Scientist'],
    skills: ['Molecular Biology', 'Biochemistry', 'Python', 'Machine Learning Basics'],
    timeline: 'Entry (2-3 yrs) → Hybrid (4-6 yrs) → Senior (7+ yrs)'
  },
  {
    id: 'leadership-path',
    title: 'Leadership Path',
    description: 'Progress to team leadership and strategic roles',
    roles: ['Research Scientist', 'Translational Scientist', 'Principal Scientist', 'Director of R&D'],
    skills: ['Leadership', 'Project Management', 'Strategic Planning', 'Domain Expertise'],
    timeline: 'Entry (2-3 yrs) → Team Lead (5-7 yrs) → Director (8+ yrs)'
  }
];

export const futuresTrends = [
  {
    id: 'generative-ai',
    title: 'Generative AI for Molecular Design',
    description: 'Advanced generative models designing novel molecules with specific therapeutic properties',
    impact: 'Accelerates lead optimization and reduces development time'
  },
  {
    id: 'digital-twins',
    title: 'Digital Twins in Clinical Trials',
    description: 'Virtual patient cohorts simulating clinical trial outcomes',
    impact: 'Reduces need for extensive human trials and speeds drug approval'
  },
  {
    id: 'quantum',
    title: 'Quantum Computing Applications',
    description: 'Quantum computing for complex molecular simulations',
    impact: 'Offers unprecedented computational power for drug design'
  },
  {
    id: 'multimodal',
    title: 'Multi-modal AI',
    description: 'Integration of genomic, proteomic, imaging, and clinical data',
    impact: 'Creates more comprehensive and accurate AI models'
  },
  {
    id: 'automation',
    title: 'AI-driven Automation',
    description: 'Automation across drug discovery pipeline from screening to synthesis',
    impact: 'Increases efficiency and reduces manual labor'
  }
];
