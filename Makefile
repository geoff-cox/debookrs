# Define variables for commands
PRETEXT = pretext build
POSTPROCESS_SCRIPT = python3 assets/code/custom-parser/post-pretext-html-parser.py

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
	$(POSTPROCESS_SCRIPT)

# Web build + post-processing
web:
	$(PRETEXT) web
	$(POSTPROCESS_SCRIPT)