#############################################################################
# This macro library supports WeBWorK problems from the PreTeXt project named
# Exploring Differential Equations
#############################################################################


# Return a string containing the latex-image-preamble contents.
# To be used by LaTeXImage objects as in:
# $image->addToPreamble(latexImagePreamble())

sub latexImagePreamble {
return <<'END_LATEX_IMAGE_PREAMBLE'
\usepackage{tikz}
\usetikzlibrary{backgrounds}
\usetikzlibrary{arrows,arrows.meta,matrix}
\usetikzlibrary{decorations}
\usetikzlibrary{animations}
\usetikzlibrary{tikzmark,calc}
\usetikzlibrary{bending, positioning}
\usetikzlibrary{3d}
\usepackage{pgfplots, pgfplotstable}
\pgfplotsset{compat=1.18}
\usepgfmodule {nonlineartransformations}\usetikzlibrary {curvilinear}
\usepackage{graphicx} % For scalebox
\usepackage{xfrac}
\usepackage{mathtools}
\usepackage{ulem}
\usepackage{transparent}
\usepackage{ifthen}

END_LATEX_IMAGE_PREAMBLE
}
