# PYQ analysis: what MJPRU actually asks

Six MJPRU DIP papers analysed: end-sem 2017, 2018, 2019 and 2025-26, plus Mid-1 and Mid-2 2025. Compression, wavelets and DCT questions from the old EC syllabus are left out because they are not in CS-403T.

::: tip The one-line summary
MJPRU repeats itself. About **70% of the 2025-26 paper** was a topic that had already appeared in an earlier paper, often with the same wording ("Discuss image degradation model and explain different noise models" appears in 2017, 2018 and 2025-26). Master the 12 topics in the table below and you can pick 5 out of 8 questions comfortably.
:::

## Topic frequency (how many of the 6 papers asked it)

| Rank | Topic | Unit | Asked in | Count | Chance this year |
|---|---|---|---|---|---|
| 1 | **Histogram equalization** (theory + numerical) | 1 | 2017, 2018 (num), 2019, 2025-26 (num) | 4 / 4 end-sems | Very high |
| 2 | **Restoration: degradation model + noise models** | 2 | 2017, 2018, 2025-26 (twice), Mid-2 | 5 | Very high |
| 3 | **Morphology: dilation, erosion, opening, closing** | 3 | 2017 (twice + num), 2018, 2019, 2025-26, Mid-2 | 6 | Very high |
| 4 | **Segmentation: techniques, thresholding, region split-merge** | 4 | 2017, 2018, 2025-26 (twice), Mid-2 | 5 | Very high |
| 5 | **Edge and line detection, gradient operators, masks** | 4 | 2018, 2019, 2025-26, Mid-2 | 4 | Very high |
| 6 | **Grey-level transforms: piecewise, contrast stretching, bit-plane, intensity slicing** | 1 | 2018, 2019, 2025-26 (3 parts) | 3 | Very high |
| 7 | **Colour models: RGB, HSI, conversion, chromaticity** | 3 | 2018 (twice), 2019, 2025-26 (twice) | 4 | High |
| 8 | **Fundamental steps / components / image model** | 1 | 2017, 2018, 2019 | 3 | High |
| 9 | **Sampling and quantization** | 1 | 2017, 2018, 2019, Mid-1 | 4 | High |
| 10 | **Visual perception, eye, brightness adaptation** | 1 | 2025-26 (both parts), Mid-1 | 2 | Medium-high |
| 11 | **Frequency filters: LPF (ideal, Butterworth, Gaussian), homomorphic, periodic noise** | 2 | 2018, 2019 (twice), Mid-1 (twice) | 4 | High |
| 12 | **Wiener / inverse filter, MMSE** | 2 | 2017, 2018 | 2 | Medium |
| 13 | Spatial filters: mean / median / max numerical, sharpening | 1 | 2019, 2025-26 | 2 | Medium-high |
| 14 | Medical imaging applications | 1 | 2017, 2018, 2019 | 3 | Medium (old EC flavour) |
| 15 | Thinning, skeleton, hit-or-miss | 3 | 2017, 2019 | 2 | Medium |
| 16 | Feature representation, description, object recognition | 5 | 2017 | 1 | Low-medium |
| 17 | Registration, stereo imaging | 4 | never | 0 | Low (but in syllabus) |

```mermaid
flowchart LR
  A[Unit 1<br/>~35% of marks] --- B[Unit 2<br/>~20%]
  B --- C[Unit 3<br/>~20%]
  C --- D[Unit 4<br/>~20%]
  D --- E[Unit 5<br/>~5%]
```

## Unit-wise weight (2025-26 paper, 16 parts)

| Unit | Parts asked | Marks (of 112 on paper) |
|---|---|---|
| Unit 1 · Fundamentals & spatial enhancement | 8 | 56 |
| Unit 2 · Frequency domain & restoration | 2 | 14 |
| Unit 3 · Colour & morphology | 3 | 21 |
| Unit 4 · Registration & segmentation | 3 | 21 |
| Unit 5 · Features & recognition | 0 | 0 |

Unit 1 alone gave half the paper. You need only 5 questions out of 8, so **Units 1, 2, 3 and 4 done well are enough**; Unit 5 is a safety net.

## Numericals MJPRU likes

1. **Histogram equalization** on an 8×8 or 5×5 image (2018, 2025-26). Always: table of r<sub>k</sub>, n<sub>k</sub>, p<sub>r</sub>, CDF, s<sub>k</sub> = (L−1)·CDF, round, new histogram, plot before/after.
2. **Mean / median / max filter** on the centre pixel of a 5×5 image (2025-26).
3. **Global threshold** iteration on a 3×3 image (2025-26).
4. **Grey-scale or binary dilation / erosion** with a 3×3 structuring element (2017).
5. **Arithmetic operations** A+B, A−B, A×B, A/B on 4×4 images (2017).
6. **Shortest 4-, 8-, m-path** between two pixels (Mid-1 2025).

## Repeat-question patterns

- "**What do you mean by X? Discuss/Explain Y**" is the standard template. Part one = definition (half a page), part two = the main body (3–4 pages).
- The same restoration question appeared word for word in 2017 and 2018, and again in 2025-26 and Mid-2.
- Every 2025-26 end-sem question on morphology, segmentation and restoration had already appeared in that year's Mid-2. **The Mid-2 paper is a preview of the end-sem.**
- The 2025-26 paper put both a theory part and a numerical part on histogram equalization in the same question (3a + 3b). Expect that again.

## Predicted end-sem 2026-27 (most likely 8 questions)

| Q | (a) | (b) |
|---|---|---|
| 1 | Fundamental steps / components of DIP (diagram) | Sampling & quantization OR visual perception |
| 2 | Histogram equalization theory | Histogram equalization numerical |
| 3 | Piecewise linear: contrast stretching, bit-plane, intensity slicing | Spatial filters: mean/median numerical, Laplacian sharpening |
| 4 | Frequency-domain filtering: ideal/Butterworth/Gaussian LPF & HPF | Homomorphic filtering |
| 5 | Degradation/restoration model + noise models | Wiener filter / mean & order-statistic restoration filters |
| 6 | Colour models RGB/HSI + conversion | Colour smoothing/sharpening or colour segmentation |
| 7 | Dilation, erosion, opening, closing | Boundary extraction / hit-or-miss / thinning |
| 8 | Edge & line detection (masks) | Thresholding (global/multilevel) or region split & merge |

**Mock Paper 1** on this site is built exactly on this prediction.
