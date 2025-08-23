# Accessibility Development Checklist

**For Developers:** Use this checklist during component development and code review to ensure accessibility compliance.

## 🚀 Pre-Development Checklist

### Before Starting:
- [ ] **Component Type Identified:** Is this a form control, navigation, content, or interactive component?
- [ ] **Accessibility Requirements:** What WCAG criteria apply to this component?
- [ ] **User Interaction:** How will users interact (keyboard, mouse, touch, screen reader)?
- [ ] **State Management:** What states does this component have (expanded, selected, disabled)?

## 🏗️ Development Phase Checklist

### 1. Semantic HTML Structure
- [ ] **Proper Elements:** Using semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.)?
- [ ] **Heading Hierarchy:** Proper heading levels (h1 → h2 → h3)?
- [ ] **Landmarks:** Appropriate ARIA landmarks (`<main>`, `<nav>`, `<aside>`, etc.)?
- [ ] **Lists:** Using `<ul>`, `<ol>`, `<dl>` for list content?

### 2. ARIA Attributes & Roles
- [ ] **Role Definition:** Appropriate `role` attribute if needed?
- [ ] **State Attributes:** `aria-expanded`, `aria-pressed`, `aria-selected`?
- [ ] **Relationship Attributes:** `aria-controls`, `aria-describedby`, `aria-labelledby`?
- [ ] **Live Regions:** `aria-live` for dynamic content updates?
- [ ] **Hidden Content:** `aria-hidden` for decorative elements?

### 3. Labels & Descriptions
- [ ] **Visible Labels:** Clear, descriptive labels for all interactive elements?
- [ ] **Associations:** Proper `htmlFor` and `id` associations?
- [ ] **Screen Reader Labels:** `aria-label` for elements without visible text?
- [ ] **Required Indicators:** Visual and programmatic indication of required fields?
- [ ] **Error Messages:** Clear error descriptions with `aria-invalid`?

### 4. Keyboard Navigation
- [ ] **Tab Order:** Logical tab sequence through interactive elements?
- [ ] **Keyboard Activation:** Enter, Space, Arrow keys work as expected?
- [ ] **Focus Management:** Focus moves logically through component states?
- [ ] **Focus Indicators:** Visible focus indicators with sufficient contrast?
- [ ] **Skip Links:** Skip to main content for complex pages?

### 5. Form Accessibility
- [ ] **Field Groups:** `<fieldset>` and `<legend>` for related fields?
- [ ] **Input Types:** Appropriate `input` types and `inputMode`?
- [ ] **Validation:** Real-time validation with `aria-describedby`?
- [ ] **Auto-complete:** `autocomplete` attributes for form fields?
- [ ] **Error Summary:** Error list for complex forms?

## 🔍 Testing Phase Checklist

### 6. Manual Testing
- [ ] **Keyboard Only:** Component works without mouse?
- [ ] **Tab Navigation:** Tab order is logical and intuitive?
- [ ] **Screen Reader:** Tested with NVDA, VoiceOver, or JAWS?
- [ ] **High Contrast:** Component visible in high contrast mode?
- [ ] **Zoom Testing:** Component usable at 200% zoom?

### 7. Automated Testing
- [ ] **Storybook Accessibility:** Accessibility addon shows no violations?
- [ ] **Lighthouse Audit:** Accessibility score above 90?
- [ ] **axe-core:** No critical accessibility violations?
- [ ] **ESLint Rules:** Accessibility linting rules pass?
- [ ] **TypeScript:** No accessibility-related type errors?

### 8. Browser Testing
- [ ] **Chrome:** Tested with screen reader extension?
- [ ] **Firefox:** Tested with screen reader extension?
- [ ] **Safari:** Tested with VoiceOver?
- [ ] **Edge:** Tested with screen reader?
- [ ] **Mobile:** Tested on mobile devices?

## 📱 Mobile & Touch Accessibility

### 9. Touch Considerations
- [ ] **Touch Targets:** Minimum 44px × 44px touch targets?
- [ ] **Spacing:** Adequate spacing between interactive elements?
- [ ] **Gestures:** Touch alternatives for complex interactions?
- [ ] **Orientation:** Works in both portrait and landscape?
- [ ] **Zoom:** Usable at different zoom levels?

### 10. Mobile Screen Readers
- [ ] **VoiceOver (iOS):** Component announces correctly?
- [ ] **TalkBack (Android):** Component announces correctly?
- [ ] **Touch Navigation:** Touch navigation patterns work?
- [ ] **Focus Management:** Focus moves appropriately on touch?

## 🎨 Visual & Design Accessibility

### 11. Color & Contrast
- [ ] **Text Contrast:** 4.5:1 minimum for normal text?
- [ ] **Large Text Contrast:** 3:1 minimum for large text (18pt+)?
- [ ] **Interactive Contrast:** 3:1 minimum for interactive elements?
- [ ] **Focus Indicators:** High contrast focus rings?
- [ ] **Color Independence:** Information not conveyed by color alone?

### 12. Typography & Spacing
- [ ] **Font Sizes:** Minimum 16px for body text?
- [ ] **Line Height:** 1.5 minimum line height?
- [ ] **Letter Spacing:** Adequate letter spacing for readability?
- [ ] **Font Weight:** Sufficient contrast for all weights?
- [ ] **Responsive Text:** Text scales appropriately?

## 🔧 Code Quality Checklist

### 13. Implementation Quality
- [ ] **Semantic HTML:** Using appropriate HTML elements?
- [ ] **ARIA Usage:** ARIA attributes used correctly and sparingly?
- [ ] **State Management:** Component states properly managed?
- [ ] **Event Handling:** Keyboard and mouse events handled consistently?
- [ ] **Performance:** No accessibility-related performance issues?

### 14. Documentation
- [ ] **Props Documented:** All accessibility props documented?
- [ ] **Usage Examples:** Accessibility-focused usage examples?
- [ ] **Testing Notes:** Accessibility testing instructions?
- [ ] **Known Issues:** Any accessibility limitations documented?
- [ ] **Best Practices:** Accessibility best practices documented?

## 📋 Component-Specific Checklists

### Button Component
- [ ] **Role:** `role="button"` if not native button?
- [ ] **States:** `aria-pressed`, `aria-expanded` if applicable?
- [ ] **Keyboard:** Enter and Space key activation?
- [ ] **Focus:** Visible focus indicator?
- [ ] **Label:** Descriptive text or `aria-label`?

### Form Input Component
- [ ] **Label:** Associated `<label>` element?
- [ ] **Required:** `aria-required` and visual indicator?
- [ ] **Error:** `aria-invalid` and error message?
- [ ] **Help:** `aria-describedby` for help text?
- [ ] **Auto-complete:** `autocomplete` attribute?

### Navigation Component
- [ ] **Landmark:** `role="navigation"` or `<nav>`?
- [ ] **Current Page:** `aria-current="page"`?
- [ ] **Skip Link:** Skip to main content link?
- [ ] **Heading:** Descriptive heading for navigation?
- [ ] **Mobile:** Mobile-friendly navigation patterns?

### Modal/Dialog Component
- [ ] **Role:** `role="dialog"` or `role="alertdialog"`?
- [ ] **Modal:** `aria-modal="true"`?
- [ ] **Focus Trap:** Focus trapped within modal?
- [ ] **Escape Key:** Escape key closes modal?
- [ ] **Announcement:** Screen reader announces modal?

### Table Component
- [ ] **Role:** `role="table"`?
- [ ] **Headers:** `role="columnheader"` and `role="rowheader"`?
- [ ] **Scope:** `scope="col"` and `scope="row"`?
- [ ] **Caption:** `<caption>` or `aria-label`?
- [ ] **Sort:** `aria-sort` for sortable columns?

## 🚨 Common Accessibility Issues

### Avoid These Patterns:
- [ ] **Div as Button:** Using `<div>` instead of `<button>`?
- [ ] **Missing Labels:** Form controls without labels?
- [ ] **Color Only:** Information conveyed only by color?
- [ ] **No Focus:** Missing focus indicators?
- [ ] **Poor Contrast:** Insufficient color contrast?
- [ ] **Missing Alt Text:** Images without alt text?
- [ ] **Keyboard Traps:** Focus cannot escape component?
- [ ] **No Skip Links:** No way to skip navigation?

## ✅ Final Review Checklist

### Before Merging:
- [ ] **All Checklists:** All relevant checklists completed?
- [ ] **Testing Complete:** Manual and automated testing done?
- [ ] **Documentation:** Accessibility features documented?
- [ ] **Code Review:** Accessibility-focused code review completed?
- [ ] **Storybook:** Accessibility stories created and tested?
- [ ] **No Violations:** No accessibility violations found?

## 📚 Resources & References

### Quick References:
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/)

### Testing Tools:
- [axe-core](https://github.com/dequelabs/axe-core)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE](https://wave.webaim.org/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

### Screen Readers:
- **Windows:** [NVDA](https://www.nvaccess.org/) (free)
- **macOS:** VoiceOver (built-in)
- **Linux:** [Orca](https://help.gnome.org/users/orca/) (free)
- **Mobile:** TalkBack (Android), VoiceOver (iOS)

---

**Remember:** Accessibility is not a feature to add later - it's a fundamental requirement that should be built into every component from the start.

**Need Help?** Check the main [ACCESSIBILITY_REPORT.md](./ACCESSIBILITY_REPORT.md) or contact the accessibility team.
