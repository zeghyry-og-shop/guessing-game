
.PHONY: all

all:
	@echo "# Guessing Game" > README.md
	@echo "" >> README.md
	@echo "Date and time: $$(date)" >> README.md
	@echo "" >> README.md
	@echo "Number of lines in guessinggame.sh: $$(wc -l < guessinggame.sh)" >> README.md