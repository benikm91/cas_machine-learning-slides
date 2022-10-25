#!/bin/bash

for f in ./*.tex; do
  pdflatex -file-line-error -interaction=nonstopmode -synctex=1 -output-format=pdf -output-directory=./out ${f%.*}.tex
  convert -density 300 out/${f%.*}.pdf -quality 100 out/${f%.*}.png
; done