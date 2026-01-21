# CLAUDE.md - Cleanlist Content Studio

## Project Context

This is a Next.js 16 marketing site for Cleanlist, a B2B data enrichment platform.

- **Stack**: React 19, TailwindCSS 4, Framer Motion, Phosphor Icons
- **Theme**: Dark-first design with #030303 backgrounds, #3e8aff primary blue
- **Content focus**: B2B sales/marketing professionals seeking data quality solutions
- **Blog location**: `/studio/content/blog/`
- **Drafts location**: `/studio/drafts/`

---

## Brand Voice & Tone Guidelines

### Core Voice Attributes

- **Confident but not cocky**: We know our product works, backed by data (95%+ accuracy, 15+ data sources)
- **Technical yet accessible**: Explain complex concepts (waterfall enrichment, ICP scoring) simply
- **Results-oriented**: Lead with outcomes ("Turn messy data into growth") not features
- **Direct and scannable**: Short sentences, bullet points, clear headers

### Tone by Content Type

| Type            | Tone                      | Example                                                              |
| --------------- | ------------------------- | -------------------------------------------------------------------- |
| Blog posts      | Conversational expert     | "Here's what most SDRs get wrong about email verification..."        |
| Product updates | Excited but professional  | "We've added 3 new data sources to the waterfall..."                 |
| Sales content   | Benefit-focused, urgent   | "Every bounced email costs you. Here's how to stop the bleeding..." |
| Marketing       | Educational, value-driven | "Data quality isn't sexy, but it's the foundation of every win."     |

### Words We Use / Avoid

**Use**: accurate, verified, enriched, clean, actionable, waterfall, golden record, confidence score, growth, revenue, deliverability

**Avoid**: guaranteed, best, revolutionary, synergy, leverage (as verb), cutting-edge, game-changer, disrupt

### Sentence Structure Rules

- Lead sentences: 8-12 words max
- Supporting sentences: 15-20 words
- Paragraphs: 2-4 sentences max
- Always end sections with a bridge to next section or CTA

---

## Target Audience Personas

### Primary: "Growth-Stage Sarah" (SDR/BDR Manager)

- **Role**: SDR Manager at 50-200 person SaaS company
- **Pain**: 30%+ email bounce rates killing deliverability, wasting rep time
- **Trigger**: Just got warned by email provider about domain reputation
- **Searches**: "email verification tool", "clean email list", "reduce bounce rate"
- **Content needs**: How-to guides, ROI calculators, comparison content

### Secondary: "RevOps Ryan" (Revenue Operations)

- **Role**: RevOps at growth-stage B2B company
- **Pain**: Multiple data tools, inconsistent records, manual enrichment
- **Trigger**: New CRM implementation or data migration project
- **Searches**: "data enrichment API", "CRM data quality", "waterfall enrichment"
- **Content needs**: Technical docs, integration guides, architecture diagrams

### Tertiary: "Agency Alex" (Marketing Agency Owner)

- **Role**: Runs lead gen agency, needs to clean client lists
- **Pain**: Client data quality varies wildly, needs scalable solution
- **Trigger**: Lost a client due to poor deliverability on their campaign
- **Searches**: "bulk email verification", "white label verification", "API pricing"
- **Content needs**: Case studies, pricing comparison, white-label info

---

## SEO Playbook

### H1/H2 Patterns

**H1 Formula**: [Action Verb] + [Core Benefit] + [Qualifier]

- Examples: "Turn Messy Data Into Your Greatest Growth Lever"
- Pattern: 50-60 characters, include primary keyword naturally

**H2 Formula**: [Question/Promise] or [Number] + [Benefit]

- Examples: "How the Waterfall Works", "15+ Data Sources in One API"
- Pattern: 30-50 characters, secondary keywords

### Meta Description Rules

- **Length**: 150-160 characters (not pixels)
- **Structure**: [Benefit statement]. [Feature mention]. [CTA or social proof]
- **Example**: "Clean, verify, and enrich leads with 95%+ accuracy. 15+ data sources in one API. Trusted by 500+ growth teams."
- **Always include**: one number, one benefit, company differentiator

### Internal Link Rules

- Every blog post links to: 1 product page, 1 related blog, 1 use case page
- Product pages link to: 2-3 related products, pricing, relevant blog
- Anchor text: Use keyword variations, not "click here" or raw URLs
- Link density: 1 internal link per 200-300 words minimum

**Internal Link Targets**:

- `/product/waterfall-enrichment` - for enrichment topics
- `/product/email-verification` - for email validation topics
- `/product/icp-scoring` - for lead scoring topics
- `/pricing` - for ROI/cost discussions
- `/use-cases/sales-teams` - for sales-focused content
- `/use-cases/agencies` - for agency-focused content

### Readability Targets

- Flesch Reading Ease: 60-70 (8th-9th grade level)
- Flesch-Kincaid Grade: 7-9
- Passive voice: Under 10%
- Sentence variety: Mix 10-15 word sentences with 5-8 word punchy ones

### Keyword Integration

- Primary keyword: In H1, first paragraph, one H2, meta description
- Secondary keywords: In H2s, naturally throughout body
- LSI keywords: Sprinkle throughout, especially in FAQ sections
- Keyword density: 1-2% for primary (not higher)

---

## Content Templates

Templates are stored in `/studio/templates/`:

### Template Selection Matrix

| Search Intent               | Template           | Word Count  |
| --------------------------- | ------------------ | ----------- |
| How-to queries              | how-to-guide.md    | 1,500-2,500 |
| "vs" or "alternative"       | comparison.md      | 2,000-3,000 |
| Product announcements       | product-update.md  | 800-1,200   |
| Sales-focused               | sales-blog.md      | 1,200-1,800 |
| Marketing/educational       | marketing-blog.md  | 1,500-2,000 |

---

## Schema/Structured Data Patterns

### Blog Posts (Article Schema)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[H1]",
  "description": "[Meta description]",
  "author": {
    "@type": "Organization",
    "name": "Cleanlist"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cleanlist",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cleanlist.com/images/logo-dark.png"
    }
  },
  "datePublished": "[ISO date]",
  "dateModified": "[ISO date]",
  "image": "[Featured image URL]"
}
```

### How-To Posts (HowTo Schema)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "[Title]",
  "description": "[Meta description]",
  "step": [
    {
      "@type": "HowToStep",
      "name": "[Step title]",
      "text": "[Step description]"
    }
  ]
}
```

### FAQ Sections (FAQPage Schema)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text]"
      }
    }
  ]
}
```

---

## Daily Workflow Commands

### New Post Creation

```
"Read CLAUDE.md and /studio/research/keywords/ files.
Create a content brief for [keyword] in /studio/research/briefs/.
Select appropriate template from /studio/templates/.
Output outline to /studio/drafts/."
```

### Draft Generation

```
"Read the brief at /studio/research/briefs/brief-[keyword].md.
Read CLAUDE.md voice guidelines.
Write first draft following the brief and template structure.
Output to /studio/drafts/draft-[keyword].md"
```

### SEO Optimization Pass

```
"Read [file] and the SEO Playbook section of CLAUDE.md.
Run SEO optimization preserving voice.
Report changes made and readability metrics.
Output optimized version to same location."
```

### Content Repurposing

```
"Read /studio/content/blog/[slug].mdx.
Generate: 5 Reddit angles, 10 hooks, 1 newsletter, 2 LinkedIn posts.
Output to appropriate /studio/repurposed/ subdirectories."
```

---

## Quality Gates

Before marking any content "ready for publish":

1. H1 includes primary keyword
2. Meta description is 150-160 chars
3. At least 3 internal links present
4. All images have alt text
5. FAQ section with 3-5 questions (if applicable)
6. Schema markup generated
7. Featured image selected
8. Canonical URL set

---

## File Naming Conventions

- Blog posts: `YYYY-MM-DD-slug-with-dashes.mdx`
- Drafts: `draft-[keyword-slug].md`
- Social snippets: `[post-slug]-[platform].md`
- Briefs: `brief-[keyword-slug].md`
