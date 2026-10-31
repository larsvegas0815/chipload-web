# chipload-web

Website and public downloads for **Chipload** – CAD/CAM and GRBL machine control for hobby CNC.

🌐 **https://chiploadcnc.com** · 🇩🇪 https://chiploadcnc.de

- **Downloads:** [Releases](https://github.com/larsvegas0815/chipload-web/releases/latest)
- **Bug reports & ideas:** [Issues](https://github.com/larsvegas0815/chipload-web/issues/new/choose)

---

## How this repository works

The site is plain Jekyll, built by GitHub Pages directly from `main` (no Actions workflow needed).

| Path | Content |
|---|---|
| `_data/i18n/en.yml`, `de.yml` | All texts of the home page, download section and footer |
| `_layouts/home.html` | Home page structure (shared by `/` and `/de/`) |
| `_releases/*.md` | One file per release (front matter `version`, `date`; body = release notes). The newest one is shown as current version. |
| `assets/img/screens/` | Screenshots (`hero.png` 2400×1500, others 1600×1000) |
| `de/impressum/`, `de/datenschutz/` | Legal pages (German only) |

### Releases

Releases are published automatically by the build workflow of the (private) app repository when a tag `v*` is pushed:

1. Windows, macOS and Linux builds run.
2. Release notes are generated from the commit subjects since the previous tag.
3. A GitHub release with `Chipload-Setup.exe`, `Chipload.exe`, `Chipload-macos-universal.dmg` and `Chipload-x86_64.AppImage` is created **in this repository**.
4. `_releases/vX.Y.Z.md` is committed here, which triggers the Pages rebuild – version, date and changelog on the site update by themselves.

The download buttons always point to `releases/latest/download/<file>`, so the asset names must stay the same.

### Local preview

```sh
bundle install
bundle exec jekyll serve
```
