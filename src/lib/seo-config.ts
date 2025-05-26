// SEO Configuration for DataGen
export const seoConfig = {
  // Base configuration
  baseUrl: 'https://datagen.in',
  siteName: 'DataGen - AI Synthetic Data Solutions',
  defaultTitle: 'DataGen - AI Synthetic Data Solutions | Generative AI Models & Custom Datasets',
  defaultDescription: 'DataGen specializes in AI synthetic data generation, generative AI models, and custom datasets for machine learning. Transform your AI projects with SynthEngyne - the leading synthetic data platform for artificial intelligence training.',
  
  // Primary AI-focused keywords
  primaryKeywords: [
    'artificial intelligence',
    'AI synthetic data',
    'generative AI',
    'machine learning datasets',
    'AI training data',
    'synthetic data generation',
    'AI models',
    'custom datasets',
    'SynthEngyne',
    'AI development',
    'data science',
    'neural networks',
    'deep learning',
    'AI solutions',
    'artificial intelligence services',
    'AI consulting',
    'data privacy',
    'AI deployment',
    'transformer models',
    'diffusion models',
    'AI fine-tuning',
    'model alignment',
    'RAG systems',
    'AI agents',
    'automated AI',
    'AI infrastructure'
  ],

  // Long-tail keywords for specific pages
  longTailKeywords: {
    syntheticData: [
      'AI synthetic data generation platform',
      'custom synthetic datasets for machine learning',
      'privacy-preserving synthetic data',
      'synthetic training data for neural networks',
      'artificial intelligence data generation'
    ],
    generativeAI: [
      'generative AI model development services',
      'custom transformer model training',
      'diffusion model implementation',
      'generative artificial intelligence consulting',
      'AI model fine-tuning and deployment'
    ],
    datasets: [
      'machine learning datasets for AI training',
      'custom AI training data creation',
      'high-quality datasets for deep learning',
      'enterprise AI training datasets',
      'labeled datasets for neural networks'
    ]
  },

  // Social media configuration
  social: {
    twitter: '@DataGenAI',
    linkedin: 'https://linkedin.com/company/datagen-ai',
    github: 'https://github.com/datagen-ai'
  },

  // Organization schema data
  organization: {
    name: 'DataGen',
    alternateName: 'DataGen AI',
    description: 'DataGen specializes in generating synthetic datasets and implementing generative AI models tailored to user-specific needs. We offer both services and a cutting-edge product called SynthEngyne.',
    foundingDate: '2024',
    industry: 'Artificial Intelligence',
    email: 'info@datagen.in',
    telephone: '+91-XXX-XXX-XXXX',
    address: {
      streetAddress: 'Your Street Address',
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: 'Your Postal Code',
      addressCountry: 'IN'
    }
  },

  // Page-specific SEO configurations
  pages: {
    home: {
      title: 'DataGen - Leading AI Synthetic Data & Generative AI Platform',
      description: 'Transform your AI projects with DataGen\'s synthetic data solutions. Generate custom datasets, deploy generative AI models, and accelerate machine learning development with SynthEngyne.',
      keywords: 'AI synthetic data platform, generative AI development, machine learning datasets, artificial intelligence training'
    },
    aiSyntheticData: {
      title: 'AI Synthetic Data Generation | DataGen - Custom Datasets for Machine Learning',
      description: 'Generate high-quality AI synthetic data for machine learning models. DataGen\'s advanced synthetic data generation platform creates custom datasets for neural networks, transformers, and deep learning applications.',
      keywords: 'AI synthetic data, synthetic data generation, machine learning datasets, artificial intelligence training data'
    },
    generativeAI: {
      title: 'Generative AI Models Development & Deployment | DataGen - Custom AI Solutions',
      description: 'Expert generative AI model development, fine-tuning, and deployment services. DataGen specializes in transformer models, diffusion models, and custom generative AI solutions for enterprise applications.',
      keywords: 'generative AI models, AI model development, transformer models, diffusion models, generative AI services'
    },
    datasets: {
      title: 'Machine Learning Datasets | Custom AI Training Data | DataGen',
      description: 'High-quality machine learning datasets for AI training. Custom dataset creation, data labeling, and synthetic data generation for neural networks, deep learning, and AI model development.',
      keywords: 'machine learning datasets, AI training data, custom datasets, data labeling, neural network training'
    }
  },

  // Structured data templates
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'DataGen',
      alternateName: 'DataGen AI',
      url: 'https://datagen.in',
      logo: 'https://datagen.in/logo.png',
      description: 'DataGen specializes in generating synthetic datasets and implementing generative AI models tailored to user-specific needs.',
      foundingDate: '2024',
      industry: 'Artificial Intelligence',
      knowsAbout: [
        'Artificial Intelligence',
        'Synthetic Data Generation',
        'Generative AI',
        'Machine Learning',
        'Data Science',
        'AI Model Training',
        'Custom Datasets',
        'AI Deployment',
        'Neural Networks',
        'Deep Learning'
      ]
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'DataGen - AI Synthetic Data Solutions',
      url: 'https://datagen.in',
      description: 'Leading platform for AI synthetic data generation, generative AI models, and custom datasets for machine learning and artificial intelligence development.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://datagen.in/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    softwareApplication: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'SynthEngyne',
      applicationCategory: 'AI Development Platform',
      operatingSystem: 'Web-based',
      description: 'SynthEngyne is our synthetic data platform designed to help businesses generate custom datasets for AI training.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        description: 'Free tier available with premium plans'
      },
      featureList: [
        'Synthetic Data Generation',
        'Custom Dataset Creation',
        'AI Model Training',
        'Data Privacy Protection',
        'Multiple Data Formats',
        'API Access',
        'Real-time Processing'
      ]
    }
  }
}

// Helper function to generate page-specific metadata
export function generatePageMetadata(pageKey: keyof typeof seoConfig.pages, customData?: Partial<{
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}>) {
  const pageConfig = seoConfig.pages[pageKey]
  const baseConfig = seoConfig

  return {
    title: customData?.title || pageConfig.title,
    description: customData?.description || pageConfig.description,
    keywords: customData?.keywords || pageConfig.keywords,
    openGraph: {
      title: customData?.title || pageConfig.title,
      description: customData?.description || pageConfig.description,
      url: customData?.canonical || `${baseConfig.baseUrl}/${pageKey === 'home' ? '' : pageKey}`,
      siteName: baseConfig.siteName,
      type: 'website' as const,
      images: [
        {
          url: `${baseConfig.baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: baseConfig.siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: customData?.title || pageConfig.title,
      description: customData?.description || pageConfig.description,
      images: [`${baseConfig.baseUrl}/twitter-image.jpg`],
      creator: baseConfig.social.twitter,
    },
    alternates: {
      canonical: customData?.canonical || `${baseConfig.baseUrl}/${pageKey === 'home' ? '' : pageKey}`,
    },
  }
}
