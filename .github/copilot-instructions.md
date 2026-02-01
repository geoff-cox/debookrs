# Copilot Instructions

## Repo summary
- Repository for “Exploring Differential Equations,” an open-access PreTeXt textbook and modern, student-centered introduction to differential equations.
- Core content is modular PreTeXt XML; outputs configured via publication files and project manifest.
- Supporting tooling lives under `processing-tools/` (TTS audit docs, HTML post-processing, LaTeX-to-PreTeXt helpers).

## High-level info
- Type: PreTeXt XML textbook project.
- Languages: PreTeXt XML (`.ptx`), Python, JavaScript, CSS/SCSS, Markdown.
- Tooling/runtime: PreTeXt CLI (Python), npm used by PreTeXt to build themes, optional LaTeX for PDF builds.

## Layout / architecture
- `project.ptx`: PreTeXt project manifest (targets: `web`, `dev`, `pdf`, `runestone`).
- `source/`: main PreTeXt sources (`main.ptx`, `main-dev.ptx`, chapter folders).
- `publication/`: publication configs (`publication.ptx` for web, `runestone.ptx` for runestone).
- `assets/`: custom styles, JS interactives, data.
- `processing-tools/`: scripts/docs for TTS audits (`processing-tools/tts`) and conversion utilities.
- `requirements.txt`: PreTeXt CLI dependency.

## Root file list
- `README.md`
- `project.ptx`
- `requirements.txt`
- `common-regex-commands.md`
- `assets/`
- `processing-tools/`
- `publication/`
- `source/`

## Build / test / lint / run (validated)
> Run these in order; later steps depend on earlier ones.
- **Install deps:** `python -m pip install -r requirements.txt` (success, ~1–2 min).
- **Check CLI:** `python -m pretext --version` → `2.36.0` (success, <1s).
- **Build web target:** `python -m pretext build -t web` (failed, ~1–2 min).
  - Error: WebWork server URL resolution failed (`https://webwork-ptx.aimath.org`).
  - Expected in offline environments; no repo-local workaround found beyond network access or adjusting WebWork settings in `publication/publication.ptx`.
- **Lint/tests:** none discovered (no lint/test configs, no CI workflows).

## Dependencies
- Python: `pretext==2.36.0` (from `requirements.txt`; file header notes generation with PreTeXt 2.25.1).
- PreTeXt build triggers npm to build CSS themes.

## Key snippet
`project.ptx` target names:
```
		<target	
			name="web"
			format="html"
			publication="publication.ptx"
			output-dir="web"
			deploy-dir="interactive"
		>
		    <stringparams author.deprecations.all="yes"/>
		</target>
		<target
			name="dev"
			format="html"
			publication="publication.ptx"
			source="main-dev.ptx"
		>
			<stringparams author.deprecations.all="yes" author.tools="yes" html.css.extra="external/custom-style/custom-styles.css" />
		</target>
		<target	
			name="pdf"
			format="pdf"
			source="main.ptx"
			publication="publication.ptx"
			output-dir="print"
			output-filename="debookrs.pdf"
			latex-engine="pdflatex"
			deploy-dir="pdf"
			/>
```
Runestone target: `platform="runestone"` with `source="main.ptx"` and `publication="runestone.ptx"` (see `project.ptx`).

## Guidance
- Trust these instructions first; only search the repo if something is missing or unclear.
