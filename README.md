# CPGIO Knowledge Base

An interactive, AI-powered knowledge base platform showcasing CPGIO's capabilities, service-level KPIs, case studies, and RFP intelligence tools.

## Features

### Comprehensive Knowledge Base
- **12 Core Capabilities** with detailed service-level KPIs
- **20+ Case Studies** across 8 categories
- **60+ Performance Metrics** with verified data
- **Strategic Frameworks** (Financial Models, GTM Approach)
- **Team Profiles** showcasing expertise across operations, media, and compliance

### AI-Powered Q&A
- Natural language question answering
- Intelligent knowledge base search
- Context-aware responses
- Related capabilities and case studies surfacing

### RFP Analyzer
- Excel RFP upload and parsing
- Automatic question extraction
- Question categorization (Pricing, Media, Fulfillment, etc.)
- Suggested knowledge base references
- Formatted response templates
- Export to Excel functionality

### Modern Interface
- Clean, intuitive design with shadcn-inspired aesthetics
- Responsive layout optimized for all devices
- Smooth animations and transitions
- Collapsible sidebar navigation
- Grouped search with real-time results
- Interactive financial model comparison
- 4-step engagement process timeline

## Technology Stack

- **Frontend**: React 18 (via CDN)
- **Styling**: Custom CSS with CSS Variables
- **Excel Processing**: SheetJS (xlsx)
- **Hosting**: GitHub Pages compatible
- **No build process required** - runs directly in browser

## Project Structure

```
cpgio-knowledge-base/
├── index.html                 # Main HTML file with React components
├── styles-modern.css          # shadcn-inspired CSS styling
├── knowledge-base-data.js     # Structured knowledge base content
├── README.md                  # This file
└── .gitignore                # Git ignore file
```

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/jackyjross/cpgio-knowledge-base.git
cd cpgio-knowledge-base
```

2. Open `index.html` in your browser:
```bash
open index.html
```

Or use a local server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deploy to GitHub Pages

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: CPGIO Knowledge Base"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cpgio-knowledge-base.git
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Under "Source", select `main` branch
   - Select `/ (root)` folder
   - Click Save

3. Your site will be live at: `https://YOUR_USERNAME.github.io/cpgio-knowledge-base/`

## Usage

### Navigating the Knowledge Base

- **Home**: Overview with process timeline, performance highlights and quick access cards
- **Capabilities**: Browse 12 core capabilities organized by category
- **Case Studies**: Explore client success stories with quantified results
- **Service KPIs**: View performance benchmarks across all service categories
- **Frameworks**: Interactive financial model comparison and strategic approaches
- **Team**: Meet the experts behind CPGIO's proven track record
- **AI Q&A (BETA)**: Ask questions and get intelligent answers
- **RFP Analyzer (BETA)**: Upload and analyze RFP Excel files

### Using the AI Q&A

1. Navigate to "AI Q&A" in the sidebar
2. Type your question in the text area
3. Click "Ask Question" to search the knowledge base
4. View the generated answer with related capabilities and case studies
5. Try suggested questions for common inquiries

### Using the RFP Analyzer

1. Navigate to "RFP Analyzer" in the sidebar
2. Click to upload or drag-and-drop an Excel RFP file
3. The tool will automatically:
   - Extract questions from the spreadsheet
   - Categorize each question
   - Suggest relevant knowledge base references
4. Add your responses in the text areas
5. Click "Download Response Template" to export completed responses

### Using the Search

1. Type in the header search bar
2. See grouped results across Capabilities, Case Studies, and KPIs
3. Results update in real-time as you type
4. Click outside the dropdown to close

## Customization

### Updating Knowledge Base Content

Edit `knowledge-base-data.js` to add or modify:
- Capabilities
- Case studies
- Service KPIs
- Frameworks
- Team members
- Process timeline

### Styling

Modify CSS variables in `styles-modern.css` to customize:
- Colors
- Typography
- Spacing
- Shadows
- Border radius

```css
:root {
    --color-primary: #0f172a;
    --color-accent-blue: #3b82f6;
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    /* ... */
}
```

## Knowledge Base Structure

### Capabilities
Each capability includes:
- Title, category, and description
- Key points (strategic approach)
- Service-level KPIs (metrics with values)
- Related case studies

### Case Studies
Each case study includes:
- Brand, category, and challenge
- Execution steps
- Quantified results
- Related capabilities

### Service KPIs
Organized by category:
- Fulfillment
- Brand Protection
- Media
- Growth
- Compliance
- Omnichannel

### Team
Each team member includes:
- Name and role
- Bio and expertise
- Photo

### Process Timeline
4-step engagement process:
1. Audit - Comprehensive marketplace assessment
2. Cleanup - GS1 compliance and brand protection
3. Growth - Revenue acceleration strategies
4. Scale - Sustained optimization and expansion

## Technical Details

### React Components

- `App` - Main application container
- `Sidebar` - Navigation sidebar with CTA button
- `Header` - Top header with grouped search
- `HomePage` - Landing page with process timeline
- `CapabilitiesPage` - Capabilities listing
- `CapabilityDetail` - Individual capability detail view
- `CaseStudiesPage` - Case studies listing
- `CaseStudyDetail` - Individual case study detail view
- `KPIsPage` - Service KPIs overview with enhanced visuals
- `AboutPage` - Team member profiles
- `AIQAPage` - AI-powered Q&A interface (BETA)
- `RFPAnalyzerPage` - RFP upload and analysis (BETA)
- `FrameworksPage` - Strategic frameworks with interactive toggle

### AI Q&A Algorithm

The AI Q&A feature uses a simple but effective relevance-based search:
1. Tokenizes the user's query
2. Searches across capabilities and case studies
3. Calculates relevance scores based on keyword matching
4. Generates contextual answers based on query patterns
5. Returns top related content

### RFP Analyzer Algorithm

The RFP Analyzer:
1. Parses Excel files using SheetJS
2. Scans all sheets and cells for questions
3. Detects questions using pattern matching (?, "describe", "explain", etc.)
4. Categorizes questions based on keywords
5. Suggests relevant knowledge base references
6. Exports formatted response template

### Search Algorithm

The enhanced search feature:
1. Searches across all content types simultaneously
2. Groups results by category (Capabilities, Case Studies, KPIs)
3. Displays top 3 results per category
4. Updates in real-time as user types
5. Provides visual hierarchy with category headers

## Contributing

This is a private knowledge base for CPGIO. For updates or improvements, contact:

- **Email**: sales@cpgio.com
- **Phone**: (866) 764-4605 ext 712
- **Website**: [cpg.io](https://cpg.io)

## License

Proprietary - CPGIO Internal Use Only

## Acknowledgments

- Built with React and modern web technologies
- Inspired by Notion and shadcn's clean, intuitive interfaces
- Powered by CPGIO's proven methodologies and results

---

**Last Updated**: November 2025
**Version**: 2.0.0
**Maintainer**: CPGIO Business Development Team
