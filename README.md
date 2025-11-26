# CPGIO Knowledge Base

An interactive, AI-powered knowledge base platform showcasing CPGIO's capabilities, service-level KPIs, case studies, and RFP intelligence tools.

## 🚀 Features

### 📚 Comprehensive Knowledge Base
- **12 Core Capabilities** with detailed service-level KPIs
- **20+ Case Studies** across 8 categories
- **60+ Performance Metrics** with verified data
- **Strategic Frameworks** (Financial Models, GTM Approach)

### 🤖 AI-Powered Q&A
- Natural language question answering
- Intelligent knowledge base search
- Context-aware responses
- Related capabilities and case studies surfacing

### 📄 RFP Analyzer
- Excel RFP upload and parsing
- Automatic question extraction
- Question categorization (Pricing, Media, Fulfillment, etc.)
- Suggested knowledge base references
- Formatted response templates
- Export to Excel functionality

### 💎 Notion-like Interface
- Clean, intuitive design
- Responsive layout
- Smooth animations and transitions
- Collapsible sidebar navigation
- Search functionality

## 🛠 Technology Stack

- **Frontend**: React 18 (via CDN)
- **Styling**: Custom CSS with CSS Variables
- **Excel Processing**: SheetJS (xlsx)
- **Hosting**: GitHub Pages compatible
- **No build process required** - runs directly in browser

## 📦 Project Structure

```
cpgio-knowledge-base/
├── index.html                 # Main HTML file with React components
├── styles.css                 # Notion-like CSS styling
├── knowledge-base-data.js     # Structured knowledge base content
├── README.md                  # This file
└── .gitignore                # Git ignore file
```

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/cpgio-knowledge-base.git
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

## 📖 Usage

### Navigating the Knowledge Base

- **Home**: Overview with performance highlights and quick access cards
- **Capabilities**: Browse 12 core capabilities organized by category
- **Case Studies**: Explore client success stories with quantified results
- **Service KPIs**: View performance benchmarks across all service categories
- **Frameworks**: Learn about strategic approaches (Financial Models, GTM)
- **AI Q&A**: Ask questions and get intelligent answers
- **RFP Analyzer**: Upload and analyze RFP Excel files

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

## 🎨 Customization

### Updating Knowledge Base Content

Edit `knowledge-base-data.js` to add or modify:
- Capabilities
- Case studies
- Service KPIs
- Frameworks

### Styling

Modify CSS variables in `styles.css` to customize:
- Colors
- Typography
- Spacing
- Shadows
- Border radius

```css
:root {
    --color-primary: #2563eb;
    --font-family: 'Inter', sans-serif;
    /* ... */
}
```

## 📊 Knowledge Base Structure

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

## 🔧 Technical Details

### React Components

- `App` - Main application container
- `Sidebar` - Navigation sidebar
- `Header` - Top header with search
- `HomePage` - Landing page with overview
- `CapabilitiesPage` - Capabilities listing
- `CapabilityDetail` - Individual capability detail view
- `CaseStudiesPage` - Case studies listing
- `CaseStudyDetail` - Individual case study detail view
- `KPIsPage` - Service KPIs overview
- `AIQAPage` - AI-powered Q&A interface
- `RFPAnalyzerPage` - RFP upload and analysis
- `FrameworksPage` - Strategic frameworks

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

## 🤝 Contributing

This is a private knowledge base for CPGIO. For updates or improvements, contact:

- **Email**: ronny.sage@cpgio.com
- **Phone**: (847) 340-2939
- **Website**: [cpg.io](https://cpg.io)

## 📝 License

Proprietary - CPGIO Internal Use Only

## 🙏 Acknowledgments

- Built with React and modern web technologies
- Inspired by Notion's clean, intuitive interface
- Powered by CPGIO's proven methodologies and results

---

**Last Updated**: November 2025
**Version**: 1.0.0
**Maintainer**: CPGIO Business Development Team
