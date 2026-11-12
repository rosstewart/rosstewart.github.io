---
title: PICNIC
tagline: Refining AlphaFold2 protein structure predictions with deep 3D residual networks.
order: 4
era: undergrad
status: IEEE BIBM 2024 · Undergraduate work
figure: ../../assets/research/picnic.png
figureAlt: "Diagram of the PICNIC architecture. A target atom is centered in an 81×81×81 Å voxel grid with 10 channels, passed through 10 residual 3D convolutional blocks (Conv3d, BatchNorm3d, LeakyReLU, Dropout with skip connections), and an output layer predicts the atom's refined location in the grid."
figureCaption: "PICNIC's 3D ResNet refines atom positions in a voxelized local environment."
cardImage: ../../assets/research/picnic.png
cardImageAlt: PICNIC 3D residual network architecture diagram
links:
  - { label: Paper, url: "https://doi.org/10.1109/bibm62325.2024.10822235" }
  - { label: Code, url: "https://github.com/zwang-bioinformatics/PICNIC" }
  - { label: CASP15 abstract, url: "https://predictioncenter.org/casp15/doc/CASP15_Abstracts.pdf#page=193" }
---

As an undergraduate in Dr. Zheng Wang's Bioinformatics Lab at the University of Miami,
I developed **PICNIC**, a pair of deep 3D residual neural networks that refine AlphaFold2
tertiary structure predictions:

- **PICNIC2-LOCAL** refines a structure one atom at a time, using voxelized local
  environments with MASS2 and LAW features;
- **PICNIC2-GLOBAL** refines the whole structure at once and works on any input model.

The work was published at IEEE BIBM 2024 (Lisbon, Portugal) and received the University of
Miami Computer Science Top Undergraduate Project Award. I also took part in the
CASP15 structure prediction assessment.
