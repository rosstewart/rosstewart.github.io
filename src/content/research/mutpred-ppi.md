---
title: MutPred-PPI
tagline: Predicting which protein–protein interactions a missense variant disrupts.
order: 1
era: phd
status: RECOMB 2026
logo: ../../assets/logos/mutpred-ppi.png
logoAlt: MutPred-PPI logo
figure: ../../assets/research/mutpred-ppi-fig1.png
figureAlt: "Pipeline diagram. Interactor and partner sequences go to AlphaFold 3 to predict the complex structure, which becomes a residue contact graph with node features. ProtT5 embeddings of the wild-type and mutant sequences form a mutation encoding. Both feed the MutPred-PPI model, which outputs the probability of interaction loss, from preserved to disrupted."
figureCaption: "The MutPred-PPI pipeline: a graph attention network over the AlphaFold 3–predicted complex, combined with protein language model embeddings of the substitution."
cardImage: ../../assets/research/mutpred-ppi-card.png
cardImageAlt: AlphaFold 3-predicted protein complex converted into a residue contact graph with node features
links:
  - { label: Web server, url: "https://mutpred.mutdb.org/mutpredppi" }
  - { label: Paper, url: "https://doi.org/10.64898/2025.12.20.695738" }
  - { label: Code, url: "https://github.com/rosstewart/MutPred-PPI" }
---

Many disease-causing missense variants don't destroy a protein outright. Instead they
break some of its interactions and leave others intact. This "edgetic" view of disease
needs predictions at the level of individual interactions, not whole proteins.

**MutPred-PPI** scores how likely a missense variant is to disrupt a *specific*
protein–protein interaction. For each (protein, variant, partner) triple, it:

- predicts the structure of the complex with AlphaFold 3 and builds a residue contact graph;
- encodes the substitution with ProtT5 protein language model embeddings (mutant minus wild-type);
- propagates information over the interface with a graph attention network and returns
  a probability that the interaction is lost.

MutPred-PPI outperforms prior state-of-the-art methods for interaction-specific
perturbation prediction. The work was published as a proceedings paper at
**RECOMB 2026** (Thessaloniki, Greece). A public web server lets anyone score variants
without installing anything.
