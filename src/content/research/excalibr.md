---
title: ExCALIBR
tagline: Calibrating high-throughput functional assays for clinical variant classification.
order: 2
era: phd
status: Preprints · excalibr.org
logo: ../../assets/logos/excalibr.png
logoAlt: ExCALIBR logo
figure: ../../assets/research/excalibr-fig2.png
figureAlt: "Four panels (BRCA1, G6PD, PTEN, DDX3X), each showing assay score histograms for pathogenic, benign, gnomAD and synonymous variants with fitted mixture densities, and a bar below mapping score ranges to evidence strengths from +8 (pathogenic) to −5 (benign)."
figureCaption: "Example ExCALIBR model fits and evidence thresholds for four multiplexed assays of variant effect."
cardImage: ../../assets/research/excalibr-fig2a.png
cardImageAlt: BRCA1 assay score histograms with fitted skew-normal mixture densities and an evidence-strength bar
links:
  - { label: excalibr.org, url: "https://excalibr.org" }
  - { label: Preprint, url: "https://doi.org/10.1101/2025.04.29.651326" }
  - { label: Code, url: "https://github.com/rosstewart/exCALIBR" }
---

Multiplexed assays of variant effect can measure the function of thousands of variants
in a gene at once. Before clinicians can use those measurements, though, they need to know
how strongly a given score supports a pathogenic or benign classification.

**ExCALIBR** calibrates functional assay scores to the ACMG/AMP evidence scale. It
fits bootstrapped skew-normal mixture models to scores of reference pathogenic, benign,
population (gnomAD), and synonymous variants, then derives gene-specific score thresholds
for each evidence strength.

Applied at scale, this approach reclassified **75% of
16,115 variants of uncertain significance** as pathogenic or benign with less than 1%
error. ExCALIBR development is supported by an NSF ACCESS allocation (MED260059), and the
team work on scalable VUS resolution received the IGVF Best Team Contribution Award (2026).
