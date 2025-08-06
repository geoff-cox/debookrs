# Define variables for commands
PRETEXT = pretext build
POSTPROCESS_SCRIPT = python3 postprocessing/postprocess_html.py postprocessing/replacements.json /output

.PHONY: focus web clean

# Default target: same as "focus"
all: focus

# Clean target (optional, if needed): removes output, logs, and generated-assets (excluding dynamic_subs/)
clean:
	rm -rf output/ logs/
	find generated-assets/ -mindepth 1 -type d -not -path "generated-assets/dynamic_subs*" -exec rm -rf {} +

# Focus build + post-processing
focus:
	$(PRETEXT) focus
	$(POSTPROCESS_SCRIPT)/focus/

# Web build + post-processing
web:
	$(PRETEXT) web
	$(POSTPROCESS_SCRIPT)/web/