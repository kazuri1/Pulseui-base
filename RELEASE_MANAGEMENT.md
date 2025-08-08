# Release Management Strategy

## Branching Strategy

### Main Branches

- **`main`**: Production-ready code with all tests passing
- **`testing`**: Integration branch for test fixes and quality assurance
- **`feature/*`**: Feature development branches

### Workflow

1. All test-related changes go to `testing` branch first
2. Only merge `testing` → `main` when ALL tests pass
3. Tag releases with semantic versioning
4. Create rollback points for safe deployments

## Versioning Strategy

We follow [Semantic Versioning (SemVer)](https://semver.org/):

### Format: `MAJOR.MINOR.PATCH[-PRERELEASE]`

- **MAJOR**: Breaking changes to public API
- **MINOR**: New features, backwards compatible
- **PATCH**: Bug fixes, backwards compatible
- **PRERELEASE**: Testing releases (e.g., `-testing.1`, `-alpha.1`, `-beta.2`)

### Examples

- `v1.1.11` - Current stable release
- `v1.1.11-testing.1` - Testing pre-release
- `v1.2.0` - Next minor release with new features
- `v2.0.0` - Next major release with breaking changes

## Release Process

### 1. Development Phase

```bash
git checkout -b feature/my-feature
# ... make changes ...
git commit -m "feat: add new component"
git push origin feature/my-feature
```

### 2. Testing Phase

```bash
git checkout testing
git merge feature/my-feature
npm test  # Must pass ALL tests
git tag v1.1.12-testing.1 -m "Testing release description"
git push origin testing --tags
```

### 3. Production Release

```bash
# Only when ALL tests pass in testing branch
git checkout main
git merge testing
npm test  # Final verification
git tag v1.1.12 -m "Production release description"
git push origin main --tags
```

### 4. Rollback (if needed)

```bash
# Find previous stable tag
git tag -l
# Rollback to previous stable version
git checkout v1.1.11
git checkout -b hotfix/rollback
git push origin hotfix/rollback
```

## Current Status

### `testing` Branch: v1.1.11-testing.1

- ✅ Jest configuration setup
- ✅ Vitest → Jest migration
- ✅ SCSS module type declarations
- ✅ Component test structure
- ❌ Jest DOM matchers (TypeScript errors)
- ❌ Styles API TypeScript errors
- ❌ Component prop mismatches

### Next Steps

1. Fix jest-dom matcher TypeScript recognition
2. Resolve styles API errors
3. Fix component interface mismatches
4. Achieve 100% test pass rate
5. Merge to `main` and release v1.2.0

## Quality Gates

### Before Merging to Main

- [ ] All unit tests pass (100%)
- [ ] All integration tests pass
- [ ] All E2E tests pass
- [ ] TypeScript compilation successful
- [ ] Linting passes
- [ ] No security vulnerabilities
- [ ] Performance benchmarks met

### Release Checklist

- [ ] Version bump in package.json
- [ ] Update CHANGELOG.md
- [ ] Tag release with semantic version
- [ ] Create GitHub release with notes
- [ ] Deploy to staging environment
- [ ] Verify deployment
- [ ] Deploy to production
- [ ] Monitor for issues

## Emergency Procedures

### Quick Rollback

```bash
# Emergency rollback to last known good version
git checkout main
git reset --hard v1.1.11  # Last stable tag
git push origin main --force-with-lease
```

### Hotfix Process

```bash
git checkout main
git checkout -b hotfix/urgent-fix
# ... fix critical issue ...
git commit -m "fix: critical security issue"
git tag v1.1.12 -m "Hotfix release"
git checkout main
git merge hotfix/urgent-fix
git push origin main --tags
```
