// CPGIO Knowledge Base Data Structure
// Organized by capabilities, service KPIs, and case studies

const knowledgeBase = {
  capabilities: [
    {
      id: 'integrated-operations',
      title: 'Integrated Operations',
      category: 'Core Philosophy',
      description: 'Systems-first approach uniting forecasting, purchasing, fulfillment, content, media, and customer operations',
      keyPoints: [
        'Performance reflects system completeness and connectivity',
        'Real-time data flows across all functions',
        'HyperQue system for workflow automation',
        'Eliminates friction between isolated vendor functions'
      ],
      kpis: [
        { metric: 'System Integration', value: '100%', description: 'All functions connected in real-time' },
        { metric: 'Task Automation', value: '85%+', description: 'Automated workflow prioritization' },
        { metric: 'Data Accuracy', value: '99.9%', description: 'Cross-functional data consistency' }
      ],
      relatedCaseStudies: ['baby-food-crisis', 'household-brand-expansion']
    },
    {
      id: 'financial-flexibility',
      title: 'Financial Flexibility',
      category: 'Business Models',
      description: 'Both 3PL and Distribution models using the same operational engine',
      keyPoints: [
        '3PL: Brand retains ownership, transparent service billing, strategic control',
        'Distribution: Operator owns inventory, manages pricing/compliance, margin-based model',
        'Same operational capabilities regardless of financial model',
        'Choice based on brand maturity, not capability'
      ],
      kpis: [
        { metric: 'Model Flexibility', value: '2 Options', description: '3PL or Distribution with same ops engine' },
        { metric: 'Transition Time', value: '<30 days', description: 'Switch between models if needed' },
        { metric: 'Cost Transparency', value: '100%', description: 'Fully itemized billing' }
      ],
      relatedCaseStudies: ['consumer-goods-8b', 'holdings-93b']
    },
    {
      id: 'asin-prioritization',
      title: 'Data-Driven ASIN Prioritization',
      category: 'Strategic Framework',
      description: 'ASIN Scorecard System evaluating 7 weighted criteria for resource allocation',
      keyPoints: [
        'Page Score: SEO keywords, images, bullets, A+ Content',
        'Competition: Transparency, MAP enforcement, Buy Box control',
        'Rating & Reviews: Content optimization, Vine enrollment',
        'Variation Strategy: Multipacks, shopper-friendly variations',
        'Growth Velocity: Sales trends, market share, pricing',
        'Opportunity scoring guides investment decisions',
        'High-opportunity ASINs get immediate attention'
      ],
      kpis: [
        { metric: 'ASIN Evaluation', value: '7 Criteria', description: 'Weighted scorecard system' },
        { metric: 'Prioritization Speed', value: '<48 hours', description: 'From audit to action plan' },
        { metric: 'Resource Efficiency', value: '3x ROI', description: 'vs. equal allocation approach' }
      ],
      relatedCaseStudies: ['sola-scaling', 'bobs-red-mill', 'bfy-snack-portfolio']
    },
    {
      id: 'marketplace-cleanup',
      title: 'Marketplace Cleanup & GS1 Compliance',
      category: 'Amazon Execution',
      description: 'Full audit and compliance restoration for marketplace control',
      keyPoints: [
        'Separate authentic, GS1-compliant UPCs from rogue listings',
        'Establish compliant listings under Brand Registry',
        'One-to-one catalog match with brand products',
        'Foundation for 1P migration when appropriate',
        'GTIN validation and management'
      ],
      kpis: [
        { metric: 'Catalog Accuracy', value: '100%', description: 'GS1-compliant UPC matching' },
        { metric: 'Compliance Success', value: '50+ ASINs', description: 'Restored in baby food case' },
        { metric: 'Audit Completion', value: '5-10 days', description: 'Full catalog review' }
      ],
      relatedCaseStudies: ['baby-food-crisis', 'mason-jar-protection']
    },
    {
      id: 'orphan-asin-takeover',
      title: 'Orphan ASIN Takeover Strategy',
      category: 'Amazon Execution',
      description: 'Capture well-ranked orphan listings for immediate volume',
      keyPoints: [
        'Absorb orphan listings detached from proper attribution',
        'Dual-track: immediate volume + compliant catalog development',
        'Drive early cash flow and build purchasing cadence',
        'Establish credibility with Amazon',
        'Transition to compliant catalog over time'
      ],
      kpis: [
        { metric: 'Orphan Recovery', value: '85%+', description: 'Success rate on eligible ASINs' },
        { metric: 'Revenue Acceleration', value: '30-60 days', description: 'Time to first revenue' },
        { metric: 'Ranking Retention', value: '90%+', description: 'Maintained after takeover' }
      ],
      relatedCaseStudies: ['mason-jar-protection']
    },
    {
      id: 'brand-protection',
      title: 'Rogue Seller Containment',
      category: 'Brand Protection',
      description: 'Systematic removal of unauthorized sellers and IP violations',
      keyPoints: [
        'IP Infringements: trademark, copyright, patent, counterfeit',
        'Policy Violations: unauthorized ASINs, materially different complaints',
        'Amazon Transparency program implementation',
        'MAP-Aligned Pricing and EDLP strategies',
        'Continuous monitoring and enforcement'
      ],
      kpis: [
        { metric: 'Seller Removal', value: '56 sellers', description: 'Removed in Mason Jar case' },
        { metric: 'Revenue Recovery', value: '$526K/month', description: 'Mason Jar brand recovery' },
        { metric: 'Units Recovered', value: '28,608', description: 'Inventory protected' },
        { metric: 'Response Time', value: '<24 hours', description: 'To new violations' }
      ],
      relatedCaseStudies: ['mason-jar-protection']
    },
    {
      id: 'media-framework',
      title: 'Media & Commercialization',
      category: 'Growth Acceleration',
      description: 'Data-driven media strategy for ranking acceleration and insights',
      keyPoints: [
        'Dual purpose: accelerate ranking + generate insights',
        'Targeted at new-to-brand shoppers and new listings',
        'Amazon Marketing Cloud (AMC) and Pacvue integration',
        'Dynamic plans adapt by SKU and life stage',
        'Budget automation as listings mature',
        'Media efficiency compounds over time'
      ],
      kpis: [
        { metric: 'ROAS Range', value: '5-8x', description: 'Return on ad spend' },
        { metric: 'New-to-Brand', value: '29-41%', description: 'Customer acquisition rate' },
        { metric: 'ACoS Optimization', value: '38% → 21%', description: 'Grocery brand improvement' },
        { metric: 'Organic Transition', value: '60%+', description: 'Organic sales after maturity (SOLA)' }
      ],
      relatedCaseStudies: ['sola-scaling', 'bobs-red-mill', 'grocery-brand-media']
    },
    {
      id: 'fulfillment-excellence',
      title: 'Fulfillment & Operations',
      category: 'Operational Excellence',
      description: 'High-volume precision with operational flexibility',
      keyPoints: [
        'Peak surge capacity: 200,000 units/month',
        'High-velocity launches: 48,000 units/hour',
        'Quality control: <0.01% defect rate',
        'FBA, FBM, hybrid 3P/1P coordination',
        'Co-packing, kitting, SIOC bundle creation',
        'Custom labeling and GS1/GTIN management'
      ],
      kpis: [
        { metric: 'Peak Velocity', value: '48K units/hour', description: 'Influencer spice launch' },
        { metric: 'Defect Rate', value: '<0.01%', description: 'At peak volume' },
        { metric: 'Surge Capacity', value: '200K units/month', description: 'Household cleaning backstop' },
        { metric: 'Launch Success', value: '800+ ASINs', description: 'With 45% time reduction' }
      ],
      relatedCaseStudies: ['influencer-spice-launch', 'household-cleaning-backstop', 'sku-launch-program']
    },
    {
      id: 'omnichannel-expansion',
      title: 'Omnichannel Orchestration',
      category: 'Platform Expansion',
      description: 'Multi-marketplace management with unified operations',
      keyPoints: [
        'Amazon 3P, 1P, Walmart, TikTok Shop, 10+ DTC sites',
        'Channel-specific optimization strategies',
        'Unified operations and data management',
        'Rapid expansion execution',
        'Cross-platform inventory coordination'
      ],
      kpis: [
        { metric: 'Platform Range', value: '10+ channels', description: 'Unified management' },
        { metric: 'Expansion Speed', value: '18 months', description: '<$50K → $1M monthly' },
        { metric: 'TikTok Shop', value: '$100K', description: 'First year revenue (beverage brand)' },
        { metric: 'Annual Run Rate', value: '$20M+', description: 'Household brand positioning' }
      ],
      relatedCaseStudies: ['household-brand-expansion', 'beverage-tiktok-launch']
    },
    {
      id: 'product-innovation',
      title: 'Product Innovation & Merchandising',
      category: 'Catalog Development',
      description: 'AI-powered bundling and strategic product development',
      keyPoints: [
        'AI-designed bundle variations and testing',
        'Custom product development (advent calendars, seasonal)',
        'SIOC bundle optimization for cost and sustainability',
        'Variety pack and multipack strategies',
        'Data-driven product configuration'
      ],
      kpis: [
        { metric: 'Bundle Variations', value: '100+ tested', description: 'AI-powered water flavor' },
        { metric: 'Seasonal Revenue', value: '$300K+ Q4', description: 'Candle advent calendar' },
        { metric: 'Shipping Savings', value: '20%+', description: 'SIOC optimization (Energizer)' },
        { metric: 'Rating Improvement', value: '+12 points', description: 'SIOC customer satisfaction' }
      ],
      relatedCaseStudies: ['water-flavor-ai', 'candle-advent', 'energizer-sioc']
    },
    {
      id: 'catalog-optimization',
      title: 'Catalog Development & Optimization',
      category: 'Catalog Management',
      description: 'Large-scale ASIN building and content optimization',
      keyPoints: [
        'Portfolio-level content standardization',
        'A+ Content development at scale',
        'SEO-driven keyword strategy',
        'Launch-to-sale time reduction methodology',
        'GTINs, A+ content, AMS support integration'
      ],
      kpis: [
        { metric: 'Catalog Scale', value: '800+ ASINs', description: 'SKU launch program' },
        { metric: 'Launch Efficiency', value: '45% faster', description: 'Time reduction' },
        { metric: 'Portfolio Growth', value: '+267% sales', description: 'BFY snack brands ($71K → $261K)' },
        { metric: 'Content Quality', value: '400+ ASINs', description: 'OTC health & wellness optimization' }
      ],
      relatedCaseStudies: ['sku-launch-program', 'bfy-snack-portfolio', 'otc-health-wellness']
    },
    {
      id: '3p-foundation',
      title: '3P First Philosophy',
      category: 'Strategic Approach',
      description: 'Start with 3P for control, expand to 1P when appropriate',
      keyPoints: [
        'Rapid entry with precise pricing control',
        'Catalog cleanup and data-rich feedback',
        'Informs long-term retail strategy',
        'Expand to 1P for top 10-20% of SKUs',
        'CPGIO as connective tissue between 3P and 1P',
        'Unified data and media strategy across channels'
      ],
      kpis: [
        { metric: 'Market Entry', value: '30-45 days', description: 'Time to first sale' },
        { metric: '1P Readiness', value: 'Top 10-20%', description: 'SKUs eligible for Vendor Central' },
        { metric: 'Buy Box Control', value: '>95%', description: 'Typical achievement rate' },
        { metric: 'Cost Optimization', value: '25-40%', description: 'Reduction over time vs. siloed ops' }
      ],
      relatedCaseStudies: ['holdings-93b', 'consumer-goods-8b']
    }
  ],

  caseStudies: [
    {
      id: 'influencer-spice-launch',
      title: 'Influencer Spice Launch: High-Volume Precision',
      category: 'Fulfillment & Operational Excellence',
      brand: 'Confidential Influencer Brand',
      challenge: 'Coordinate massive product launch with influencer-driven demand surge',
      execution: [
        'Sold 48,000 units in under 1 hour',
        'Maintained <0.01% defect rate under extreme volume',
        'Real-time inventory coordination',
        'Crisis-level quality control'
      ],
      results: {
        unitsShipped: 48000,
        timeframe: '<1 hour',
        defectRate: '0.01%',
        achievement: 'Highest online revenue day in brand history'
      },
      capabilities: ['fulfillment-excellence'],
      kpis: ['Peak Velocity', 'Defect Rate', 'Quality Control']
    },
    {
      id: 'mason-jar-protection',
      title: 'Mason Jar Brand: Brand Protection & Revenue Recovery',
      category: 'Brand Protection & Compliance',
      brand: 'Leading Mason Jar Manufacturer',
      challenge: 'Unauthorized sellers cannibalizing brand equity and revenue',
      execution: [
        'Implemented Amazon Transparency program',
        'Systematic IP and policy violation enforcement',
        'Unauthorized seller removal campaign',
        'Revenue recovery strategies'
      ],
      results: {
        sellersRemoved: 56,
        unitsRecovered: 28608,
        monthlyRevenue: '$526,192',
        timeline: '6 months'
      },
      capabilities: ['brand-protection', 'orphan-asin-takeover'],
      kpis: ['Seller Removal', 'Revenue Recovery', 'Units Recovered']
    },
    {
      id: 'baby-food-crisis',
      title: '#1 Baby Food Brand: Crisis Management & Compliance',
      category: 'Fulfillment & Operational Excellence',
      brand: '#1 US Baby Food Brand',
      challenge: '50+ ASINs delisted due to Amazon policy changes',
      execution: [
        'Emergency GS1 re-verification process',
        'Amazon Seller Support escalation coordination',
        'Catalog integrity restoration',
        'Revenue loss prevention'
      ],
      results: {
        asinsRestored: '50+',
        downtime: 'Minimized',
        catalogIntegrity: '100%',
        achievement: 'Full sales restoration'
      },
      capabilities: ['marketplace-cleanup'],
      kpis: ['Compliance Success', 'Catalog Accuracy', 'Crisis Response']
    },
    {
      id: 'consumer-goods-8b',
      title: '$8B Consumer Goods Company: Multi-Category Growth',
      category: 'Portfolio Growth & Scaling',
      brand: '$8B Consumer Goods Company',
      portfolio: 'Baby, Outdoor & Lifestyle',
      challenge: 'Scale multi-category portfolio with MAP enforcement',
      execution: [
        'Data-driven ASIN prioritization',
        'MAP enforcement and pricing discipline',
        'Tight channel control across marketplaces',
        'Incremental assortment expansion'
      ],
      results: {
        monthlyRevenue: '$1M',
        timeline: '18 months',
        categories: 3,
        achievement: 'Enterprise-level multi-category success'
      },
      capabilities: ['financial-flexibility', 'asin-prioritization', '3p-foundation'],
      kpis: ['Revenue Scale', 'Portfolio Management', 'Brand Protection']
    },
    {
      id: 'holdings-93b',
      title: '$93B Holdings Company: FBA Acceleration',
      category: 'Portfolio Growth & Scaling',
      brand: '$93B Holdings Company',
      challenge: 'Accelerate FBA revenue and launch bundle program',
      execution: [
        '1P/3P hybrid optimization',
        'Systematic bundle development',
        'High-velocity SKU launches (30+ UPCs/month)',
        'Complementary channel strategy'
      ],
      results: {
        fbaGrowth: '+68%',
        monthlyRevenue: '$1.04M',
        bundleProgram: '$8M/year',
        timeline: '6 quarters'
      },
      capabilities: ['financial-flexibility', '3p-foundation', 'product-innovation'],
      kpis: ['Growth Rate', 'Bundle Revenue', 'SKU Launch Velocity']
    },
    {
      id: 'bfy-snack-portfolio',
      title: 'Leading BFY Snack Brand Portfolio: Content-Driven Growth',
      category: 'Portfolio Growth & Scaling',
      brand: 'Better-For-You Snack Portfolio',
      portfolio: '5 brands, 196 listings',
      challenge: 'Optimize multi-brand portfolio through content excellence',
      execution: [
        'Comprehensive listing optimization',
        'Portfolio-wide A+ content development',
        'SEO-driven keyword strategy',
        'Merchandising standardization'
      ],
      results: {
        salesGrowth: '+267%',
        fromRevenue: '$71K',
        toRevenue: '$261K',
        period: 'Monthly'
      },
      capabilities: ['catalog-optimization', 'asin-prioritization'],
      kpis: ['Portfolio Growth', 'Content Quality', 'SEO Performance']
    },
    {
      id: 'candle-advent',
      title: '#1 US Candle Brand: Custom Product Launch',
      category: 'Product Innovation & Merchandising',
      brand: '#1 US Candle Brand',
      challenge: 'Develop custom seasonal product for Q4 revenue maximization',
      execution: [
        'Custom advent calendar ASIN development',
        'Seasonal opportunity identification',
        'Q4 merchandising strategy',
        'Omnichannel expansion to brick-and-mortar'
      ],
      results: {
        q4Revenue: '$300,000+',
        expansion: 'Brick-and-mortar in 2025',
        achievement: 'New seasonal SKU category established'
      },
      capabilities: ['product-innovation'],
      kpis: ['Seasonal Revenue', 'Product Development']
    },
    {
      id: 'water-flavor-ai',
      title: 'Water Flavor Brand: AI-Powered Bundling',
      category: 'Product Innovation & Merchandising',
      brand: 'Water Flavor Manufacturer',
      challenge: 'Optimize bundle strategy for maximum revenue',
      execution: [
        'AI-designed bundle variations (100+ configurations)',
        'Performance testing and validation',
        'Deployed top 20 performing bundles',
        'Enhanced PDP engagement metrics'
      ],
      results: {
        variationsTested: '100+',
        deployed: 'Top 20',
        revenueLift: 'Significant',
        achievement: 'AI-driven merchandising optimization'
      },
      capabilities: ['product-innovation'],
      kpis: ['Bundle Variations', 'Revenue Optimization', 'AI Innovation']
    },
    {
      id: 'energizer-sioc',
      title: 'Energizer Lighting: SIOC Bundle Innovation',
      category: 'Product Innovation & Merchandising',
      brand: 'Energizer Lighting',
      challenge: 'Reduce shipping costs while improving customer satisfaction',
      execution: [
        'Created 24 SIOC-ready ASINs',
        'Packaging optimization for sustainability',
        'Cost efficiency analysis',
        'Customer experience enhancement'
      ],
      results: {
        shippingSavings: '20%+',
        ratingImprovement: '+12 points',
        asinsCreated: 24,
        achievement: 'Sustainability + cost efficiency'
      },
      capabilities: ['product-innovation'],
      kpis: ['Shipping Savings', 'Rating Improvement', 'Sustainability']
    },
    {
      id: 'sola-scaling',
      title: 'SOLA: Zero-to-Scale Success',
      category: 'Media & Customer Acquisition',
      brand: 'SOLA (DTC Health Food Brand)',
      challenge: 'Scale DTC brand from minimal Amazon presence to retail-ready volume',
      execution: [
        'Customer acquisition efficiency optimization',
        'AMS media strategy (7-8x ROAS)',
        'Organic ranking acceleration',
        'Retail-readiness positioning'
      ],
      results: {
        fromRevenue: '$20K/month',
        toRevenue: '$800K/month',
        timeline: '18 months',
        roas: '7-8x',
        organicSales: '60%',
        retailExpansion: 'Walmart, Kroger, HEB'
      },
      capabilities: ['media-framework', 'asin-prioritization'],
      kpis: ['ROAS', 'Revenue Scale', 'Organic Transition']
    },
    {
      id: 'bobs-red-mill',
      title: "Bob's Red Mill: Media Excellence",
      category: 'Media & Customer Acquisition',
      brand: "Bob's Red Mill",
      challenge: 'Establish strong Amazon presence for natural baking leader',
      execution: [
        'Targeted media strategy for natural foods category',
        'New-to-brand customer acquisition focus',
        'Promotional optimization',
        'Sustained scaling methodology'
      ],
      results: {
        sales: '$241K',
        spend: '$43K',
        roas: '5.53x',
        newToBrand: '29%',
        scaledTo: '$500K+/month',
        timeline: 'First year'
      },
      capabilities: ['media-framework'],
      kpis: ['ROAS', 'New-to-Brand', 'Media Efficiency']
    },
    {
      id: 'grocery-brand-media',
      title: 'Amazon Media Test: Performance Optimization',
      category: 'Media & Customer Acquisition',
      brand: 'Grocery Brand',
      challenge: 'Optimize media efficiency and customer acquisition',
      execution: [
        'Campaign restructuring',
        'ACoS optimization',
        'New-to-brand targeting enhancement',
        'Performance analytics and iteration'
      ],
      results: {
        acosFrom: '38%',
        acosTo: '21%',
        ntbFrom: '26%',
        ntbTo: '41%',
        roas: '4.8x (maintained)'
      },
      capabilities: ['media-framework'],
      kpis: ['ACoS Optimization', 'New-to-Brand', 'ROAS']
    },
    {
      id: 'household-cleaning-backstop',
      title: 'Household Cleaning Tools: 1P Backstop',
      category: 'Operational Flexibility & Support',
      brand: 'Household Cleaning Brand',
      challenge: 'Provide 3P backup during 1P stockouts',
      execution: [
        'Rapid 3P fulfillment activation',
        'Surge capacity deployment (200K units/month)',
        'Demand spike management',
        'Revenue continuity maintenance'
      ],
      results: {
        surgeCapacity: '200,000 units/month',
        incrementalRevenue: '$1M+',
        achievement: 'Channel flexibility and risk mitigation'
      },
      capabilities: ['fulfillment-excellence', 'financial-flexibility'],
      kpis: ['Surge Capacity', 'Revenue Protection', 'Channel Flexibility']
    },
    {
      id: 'household-brand-expansion',
      title: 'Leading Household Brand: Multi-Platform Growth',
      category: 'Omnichannel Expansion',
      brand: 'Leading Household Brand',
      challenge: 'Rapid omnichannel expansion from single platform',
      execution: [
        'Amazon 3P + FBA optimization',
        'Walmart Marketplace launch',
        '10+ DTC sites (TikTok Shop, Macy\'s Marketplace)',
        'Unified operations across platforms'
      ],
      results: {
        fromRevenue: '<$50K',
        toRevenue: '$1M monthly',
        timeline: '18 months',
        annualRunRate: '$20M+',
        platforms: '10+'
      },
      capabilities: ['omnichannel-expansion', 'integrated-operations'],
      kpis: ['Platform Range', 'Expansion Speed', 'Revenue Scale']
    },
    {
      id: 'beverage-tiktok-launch',
      title: 'Leading Beverage Mix: TikTok Shop Launch',
      category: 'Omnichannel Expansion',
      brand: 'Leading Beverage Mix Manufacturer',
      challenge: 'Launch new TikTok Shop channel',
      execution: [
        'TikTok Shop setup and optimization',
        'DTC execution strategy',
        'Influencer campaign coordination',
        'Platform-specific merchandising'
      ],
      results: {
        timeline: 'May - December 2024',
        revenue: '$100K by year-end',
        achievement: 'Successful new platform entry'
      },
      capabilities: ['omnichannel-expansion'],
      kpis: ['TikTok Shop Revenue', 'Platform Launch Speed']
    },
    {
      id: 'sku-launch-program',
      title: 'Amazon SKU Launch Program',
      category: 'Catalog Development & Optimization',
      brand: 'Multiple CPG Brands',
      challenge: 'Systematize and accelerate ASIN launch process',
      execution: [
        'Standardized launch methodology',
        'GTINs, A+ content, AMS integration',
        'Launch-to-sale time reduction',
        'Quality control protocols'
      ],
      results: {
        asinsLaunched: '800+',
        timeReduction: '45%',
        achievement: 'Scalable launch system across brands'
      },
      capabilities: ['catalog-optimization', 'fulfillment-excellence'],
      kpis: ['Catalog Scale', 'Launch Efficiency']
    },
    {
      id: 'otc-health-wellness',
      title: 'Top OTC Health & Wellness Portfolio',
      category: 'Catalog Development & Optimization',
      brand: 'OTC Health & Wellness Brand',
      challenge: 'Build and optimize large-scale ASIN portfolio',
      execution: [
        'Built and optimized 400+ ASINs',
        'Content and merchandising improvements',
        'Unlocked new revenue channels',
        'Enhanced catalog-wide performance'
      ],
      results: {
        asinsOptimized: '400+',
        achievement: 'Large-scale catalog excellence'
      },
      capabilities: ['catalog-optimization'],
      kpis: ['Content Quality', 'Portfolio Scale']
    }
  ],

  serviceKPIs: {
    fulfillment: {
      peakVelocity: { value: '48,000 units/hour', source: 'influencer-spice-launch' },
      defectRate: { value: '<0.01%', condition: 'at peak volume', source: 'influencer-spice-launch' },
      surgeCapacity: { value: '200,000 units/month', source: 'household-cleaning-backstop' },
      launchSuccess: { value: '800+ ASINs', detail: '45% time reduction', source: 'sku-launch-program' }
    },
    brandProtection: {
      sellerRemoval: { value: '56 sellers', detail: 'single campaign', source: 'mason-jar-protection' },
      revenueRecovery: { value: '$526K/month', source: 'mason-jar-protection' },
      unitsRecovered: { value: '28,608 units', source: 'mason-jar-protection' },
      responseTime: { value: '<24 hours', detail: 'to new violations' }
    },
    media: {
      roasRange: { value: '5-8x', detail: 'typical performance', sources: ['sola-scaling', 'bobs-red-mill'] },
      newToBrand: { value: '29-41%', detail: 'customer acquisition', sources: ['bobs-red-mill', 'grocery-brand-media'] },
      acosOptimization: { value: '38% → 21%', source: 'grocery-brand-media' },
      organicTransition: { value: '60%+', detail: 'after maturity', source: 'sola-scaling' }
    },
    growth: {
      scaleSpeed: { value: '$20K → $800K/month', timeline: '18 months', source: 'sola-scaling' },
      portfolioGrowth: { value: '+267%', detail: '$71K → $261K', source: 'bfy-snack-portfolio' },
      fbaAcceleration: { value: '+68%', detail: '$1.04M/month', source: 'holdings-93b' }
    },
    compliance: {
      catalogAccuracy: { value: '100%', detail: 'GS1-compliant UPC matching' },
      asinsRestored: { value: '50+', source: 'baby-food-crisis' },
      auditCompletion: { value: '5-10 days', detail: 'full catalog review' }
    },
    omnichannel: {
      platformRange: { value: '10+ channels', detail: 'unified management' },
      expansionSpeed: { value: '<$50K → $1M', timeline: '18 months', source: 'household-brand-expansion' },
      annualRunRate: { value: '$20M+', source: 'household-brand-expansion' }
    }
  },

  team: [
    {
      name: 'Jack Ross',
      role: 'Founder & CEO',
      bio: 'Ecommerce strategist with deep expertise in Amazon marketplace operations, brand protection, and omnichannel growth.',
      photoUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Operations Team',
      role: 'Fulfillment & Logistics',
      bio: 'High-volume fulfillment specialists managing 200K+ units/month with <0.01% defect rates.',
      photoUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Media Team',
      role: 'Amazon Advertising & Growth',
      bio: 'Data-driven media strategists achieving 5-8x ROAS and driving organic ranking acceleration.',
      photoUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Compliance Team',
      role: 'Brand Protection & GS1',
      bio: 'Marketplace compliance experts specializing in GS1 validation, catalog cleanup, and rogue seller removal.',
      photoUrl: 'https://via.placeholder.com/150'
    }
  ],

  process: [
    {
      step: 1,
      title: 'Audit',
      description: 'Comprehensive marketplace audit identifying compliance issues, unauthorized sellers, catalog gaps, and growth opportunities. Delivered in 5-10 days.',
      icon: 'search'
    },
    {
      step: 2,
      title: 'Cleanup',
      description: 'Systematic marketplace cleanup: GS1 compliance restoration, rogue seller removal, catalog optimization, and brand protection implementation.',
      icon: 'shield'
    },
    {
      step: 3,
      title: 'Growth',
      description: 'Revenue acceleration through media optimization, catalog expansion, omnichannel launch, and data-driven ASIN prioritization.',
      icon: 'trending-up'
    },
    {
      step: 4,
      title: 'Scale',
      description: 'Sustained growth with continuous optimization, new platform expansion, product innovation, and operational excellence at volume.',
      icon: 'rocket'
    }
  ],

  frameworks: {
    financialModels: {
      title: 'Financial Models & Operational Systems',
      description: 'Systems First, Structure Second',
      philosophy: 'The most successful eCommerce organizations don\'t start with financial models—they start with operational completeness.',
      models: [
        {
          name: '3PL (Performance-Based Service)',
          description: 'Brand retains inventory ownership',
          benefits: [
            'Strategic control over pricing architecture',
            'Transparent service billing with optional performance incentives',
            'Best for mature internal teams',
            'Complex 3P ecosystems',
            'Operational transparency'
          ]
        },
        {
          name: 'Distribution (Vendor-of-Record)',
          description: 'Operator purchases and owns inventory',
          benefits: [
            'Manages pricing, compliance, and replenishment',
            'Margin-based model',
            'Distributor earns through sell-through',
            'Maximum speed and risk transfer',
            'Complex 3P ecosystem management'
          ]
        }
      ],
      keyInsight: 'The choice between them is simply a matter of adaptability, accountability, ownership, and simplicity—not capability.'
    },
    gtmApproach: {
      title: 'Go-To-Market Approach',
      description: 'Data-driven marketplace control',
      components: [
        {
          name: 'ASIN Scorecard System',
          criteria: [
            'Page Score (SEO keywords, images, bullets, A+ Content)',
            'Competition (Transparency, MAP, Buy Box)',
            'Rating (Listings, A+ Content, packaging, support)',
            'Customer Reviews (Vine, Bazaarvoice, seller quality)',
            'Variation Strategy (Multipacks, variations)',
            'A+ Content (Visuals, comparison charts, storytelling)',
            'Growth Velocity (Sales trends, market share, pricing)'
          ]
        },
        {
          name: 'Marketplace Cleanup & GS1 Compliance',
          steps: [
            'Full audit: authentic vs. rogue/hijacked listings',
            'Establish compliant listings under Brand Registry',
            'One-to-one catalog match',
            'Foundation for 1P migration'
          ]
        },
        {
          name: 'Orphan ASIN Takeover',
          approach: [
            'Absorb well-ranked orphan listings',
            'Dual-track: immediate volume + compliant catalog',
            'Drive early cash flow',
            'Build purchasing cadence'
          ]
        },
        {
          name: 'Rogue Seller Containment',
          methods: [
            'IP Infringements (trademark, copyright, patent)',
            'Policy Violations (unauthorized ASINs)',
            'Amazon Transparency program',
            'MAP-Aligned Pricing',
            'EDLP Strategies'
          ]
        }
      ]
    }
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = knowledgeBase;
}
