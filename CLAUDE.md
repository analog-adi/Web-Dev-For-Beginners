# 🎯 Learning Journey Tracker

**Purpose**: Track progress across Web-Dev, Cybersecurity, and Portfolio while converting crude Obsidian ideas into polished notes with linked resources.

---

## 📋 System Commands

### `/start`
**Triggers on**: Project open or manual invocation
**Outputs**:
1. **Daily Quote**: Paraphrased wisdom from "48 Laws of Power" (rotating through laws)
2. **Task Suggestion**: Scans local files to recommend one actionable task/lesson to focus on today
3. **Session Start**: Begins tracking today's session

**Example Flow**:
```
Quote: "Law 12 - Use Selective Honesty: Discretion builds trust faster than constant transparency"
Suggested Task: "Continue 2-js-basics/4-arrays-loops assignment - you've completed the first 3 sections"
```

---

### `/end`
**Triggers on**: Manual invocation at end of session
**Outputs**:
1. **Session Summary**: Brief overview of what you accomplished today
2. **Daily Note**: Saves to `.claude/notes/daily/YYYY-MM-DD.md`
3. **Next Day Planning**: Asks what you want to achieve tomorrow
4. **Progress Update**: Updates session tracker

**Auto-Trigger on Sundays/Week End**:
When `/end` is called on a Sunday, automatically includes:
- **Weekly Review Questions**:
  - What was your biggest learning this week?
  - Which concept still needs more work?
  - How many days did you actively learn/work?
  - What's one thing you'd do differently next week?
- **Visual Progress Tracker**: Shows days worked vs off (calendar/checklist format)
- **Weekly Summary**: Saves to `.claude/notes/weekly/WEEK-2026-W##.md`

---

## 🧠 Obsidian Idea Processing

**Your workflow**:
1. Write crude ideas in Obsidian (any format, no cleanup needed)
2. I automatically detect new Obsidian files in your vault
3. Convert ideas into polished note format
4. Link related resources (local curriculum, GitHub repos, Obsidian vault references)
5. Save as `.claude/notes/processed/[category]-[title].md`
6. Update memory file with processed data

**No review needed** — I'll format and link without asking permission.

**Tracked Categories**:
- 📚 Web-Dev (JavaScript, HTML/CSS, DOM, Projects)
- 🔒 Cybersecurity (security concepts, tools, vulnerabilities)
- 💼 Portfolio (projects, demonstrations, case studies)

---

## 📁 File Structure

```
.claude/
├── notes/
│   ├── daily/           # Daily summaries (YYYY-MM-DD.md)
│   ├── weekly/          # Weekly reviews (WEEK-2026-W##.md)
│   ├── processed/       # Formatted Obsidian ideas
│   └── resources.md     # Linked reference library
├── memory/
│   ├── learning-sessions.md    # Session metadata
│   ├── weekly-progress.md      # Week-to-week tracking
│   ├── obsidian-processed.md   # What's been processed
│   └── resource-index.md       # All discovered resources
└── obsidian-vault/     # Link to your Obsidian (configure path)
```

---

## ⚙️ Configuration

**Set your Obsidian vault path** in first `/start`:
- Default checked: `~/Documents/Obsidian` or `~/Desktop/Obsidian`
- Custom: Specify your actual vault location

**Categories to track**:
- Web-Dev progress (lessons completed, projects built)
- Cybersecurity learning (concepts, tools, labs)
- Portfolio progress (projects showcased, skills demonstrated)

---

## 📊 What Gets Tracked

Each `/end` session captures:
- Time spent on each category
- Topics covered
- Resources consulted
- Blockers encountered
- Next immediate task

Each Sunday `/end` captures:
- Days active vs inactive
- Weekly focus areas
- Learning velocity
- Questions for reflection

---

## 🔗 Resource Linking

When processing Obsidian ideas, I automatically link:
- **Local Files**: Web-Dev curriculum lessons, assignment files
- **GitHub Repos**: Relevant code examples or projects
- **Obsidian Vault**: Cross-references to your other notes
- **External**: (Optional) Educational resources like MDN, tutorials

---

## 🚀 Quick Start

1. **First time**: Use `/start` to initialize
2. **During work**: Just work normally
3. **End of session**: Use `/end` to log what you did
4. **Write ideas**: Add to Obsidian, they'll auto-process
5. **Each Sunday**: `/end` will auto-generate weekly review

---

## 💾 Memory System

Claude maintains separate memory files for:
- **Session tracking**: What you've worked on each day
- **Weekly metrics**: Patterns across weeks
- **Processed ideas**: What Obsidian notes have been formatted
- **Resource index**: All discovered links and materials

These update automatically — no manual tracking needed.

---

## 📌 Notes

- ✅ No need to ask for permission on Obsidian processing — just execute
- ✅ Resource linking is automatic (local, GitHub, Obsidian)
- ✅ Daily/Weekly notes auto-save to `.claude/notes/`
- ✅ Categories: Web-Dev | Cybersecurity | Portfolio
- ✅ Sunday `/end` auto-triggers weekly review with visual progress

---

**Start your learning journey**: Type `/start` to begin!
