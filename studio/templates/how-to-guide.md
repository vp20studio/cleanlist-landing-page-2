# How-To Guide Template

Use this template for step-by-step tutorials and practical guides.

## Frontmatter

```yaml
---
title: "How to [Achieve Specific Outcome] in [Timeframe/Steps]"
description: "[150-160 chars: Learn how to + outcome + method hint]"
date: "YYYY-MM-DD"
category: "guides"
tags: ["guide", "tutorial", "how-to", "relevant-topic"]
author:
  name: "Cleanlist Team"
  role: "Content Team"
featuredImage:
  src: "/images/blog/guide-topic.png"
  alt: "Step-by-step guide illustration"
keywords: ["how to primary keyword", "secondary keyword", "tutorial keyword"]
---
```

## Structure

### 1. Introduction (100-150 words)
- What they'll learn
- Why it matters
- What they'll need (prerequisites)
- Estimated time to complete

Example:
> "In this guide, you'll learn how to set up waterfall enrichment for your CRM in under 30 minutes. By the end, you'll have automated data enrichment that pulls from 15+ sources—no manual work required."

### 2. What You'll Need (50-100 words)
- Bullet list of prerequisites
- Tools, access levels, data needed
- Time estimate

```
<Callout type="info" title="Before You Start">
Make sure you have:
- Admin access to your CRM
- A Cleanlist account (free tier works)
- A test list of 100 contacts
</Callout>
```

### 3. Step-by-Step Instructions (800-1,200 words)
- 5-10 clear steps
- Each step is its own H2 or H3
- Include screenshots at key moments
- Add tips and warnings where relevant

#### Step Format:
```
### Step [N]: [Action Title]

[1-2 sentences on what this step accomplishes]

1. [First action]
2. [Second action]
3. [Third action]

![Screenshot description](/images/blog/step-n-screenshot.png)

<Callout type="warning" title="Watch Out">
[Common mistake to avoid at this step]
</Callout>

**Expected result**: [What they should see after this step]
```

### 4. Verification (100-150 words)
- How to confirm it worked
- What success looks like
- Troubleshooting common issues

### 5. Next Steps (100-150 words)
- What to do after completing the guide
- Related features to explore
- Link to advanced guide

### 6. FAQ Section (150-200 words)
- 3-5 common questions
- Brief, direct answers
- Link to docs for details

```
## Frequently Asked Questions

### Q: How long does enrichment take?
A: Most records enrich within 30 seconds. Large batches (10,000+) may take up to 5 minutes.

### Q: What if a record doesn't enrich?
A: The waterfall tries all 15+ sources. If no data is found, you're not charged for that credit.
```

---

## Word Count Target: 1,500-2,500 words

## Internal Links to Include:
- Link to relevant product page
- Link to documentation
- Link to related how-to guide
- Link to pricing (if relevant to credits/usage)

## SEO Checklist:
- [ ] "How to" in H1
- [ ] Primary keyword in H1 and first 100 words
- [ ] Step numbers in H2s/H3s
- [ ] FAQ schema at end
- [ ] Screenshots with descriptive alt text
- [ ] HowTo schema in JSON-LD

## Callout Usage:
- `<Callout type="info">` - Prerequisites, context
- `<Callout type="warning">` - Common mistakes, gotchas
- `<Callout type="success">` - Expected results, confirmations
- `<Callout type="error">` - Critical warnings, things that break

## Tone Reminders:
- Clear and direct instructions
- Assume basic technical competence
- Don't over-explain obvious steps
- Be encouraging but not patronizing
