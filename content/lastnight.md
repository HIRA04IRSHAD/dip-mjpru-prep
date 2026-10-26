# Last-night sheet

Everything to revise the night before, on one page. Each line links back to the full notes.

## Must-write definitions

| Term | One-line definition |
|---|---|
| Digital image | 2-D function f(x,y) with finite, discrete x, y and intensity values |
| Sampling / quantization | digitising coordinates / digitising amplitude |
| Image model | f(x,y) = i(x,y)·r(x,y); 0 < i < ∞, 0 < r < 1 |
| Enhancement vs restoration | subjective improvement vs objective recovery using a degradation model |
| Histogram equalization | s<sub>k</sub> = (L−1)·CDF(r<sub>k</sub>), makes the histogram roughly uniform |
| Degradation model | g = h ⋆ f + η ; G = HF + N |
| Dilation / erosion | A ⊕ B = {z \| (B̂)<sub>z</sub> ∩ A ≠ ∅} / A ⊖ B = {z \| (B)<sub>z</sub> ⊆ A} |
| Opening / closing | (A ⊖ B) ⊕ B / (A ⊕ B) ⊖ B |
| Segmentation | subdividing an image into its constituent regions or objects |
| Registration | aligning a sensed image with a reference image by a geometric transform |

## Formulas

| Topic | Formula |
|---|---|
| Storage | b = M × N × k bits |
| Negative / log / gamma | s = L−1−r ; s = c log(1+r) ; s = c r<sup>γ</sup> |
| Contrast stretching (min-max) | s = (r − r<sub>min</sub>)(L−1)/(r<sub>max</sub> − r<sub>min</sub>) |
| Image averaging | σ²<sub>ḡ</sub> = σ²<sub>η</sub>/K |
| Laplacian | ∇²f = f(x+1,y) + f(x−1,y) + f(x,y+1) + f(x,y−1) − 4f(x,y); g = f − ∇²f |
| Unsharp / high-boost | g = f + k(f − f̄), k = 1 / k > 1 |
| Gradient | M ≈ \|G<sub>x</sub>\| + \|G<sub>y</sub>\| ; α = tan<sup>−1</sup>(G<sub>y</sub>/G<sub>x</sub>) |
| 2-D DFT | F(u,v) = ΣΣ f(x,y) e<sup>−j2π(ux/M + vy/N)</sup> ; F(0,0) = MN·mean |
| ILPF / BLPF / GLPF | 1 or 0 at D<sub>0</sub> ; 1/[1+(D/D<sub>0</sub>)<sup>2n</sup>] ; e<sup>−D²/2D<sub>0</sub>²</sup> |
| HPF | H<sub>HP</sub> = 1 − H<sub>LP</sub> ; GHPF = 1 − e<sup>−D²/2D<sub>0</sub>²</sup> |
| Homomorphic | ln → DFT → H (γ<sub>L</sub> < 1, γ<sub>H</sub> > 1) → IDFT → exp |
| Gaussian noise | p(z) = (1/√(2π)σ) e<sup>−(z−z̄)²/2σ²</sup> |
| Contraharmonic | Σg<sup>Q+1</sup>/Σg<sup>Q</sup> ; Q > 0 pepper, Q < 0 salt |
| Inverse filter | F̂ = G/H |
| Wiener | F̂ = [H*/(\|H\|² + S<sub>η</sub>/S<sub>f</sub>)] G ≈ [(1/H)\|H\|²/(\|H\|² + K)] G |
| RGB → HSI | I = (R+G+B)/3 ; S = 1 − 3min/(R+G+B) ; H = θ or 360° − θ |
| CMY | [C M Y] = 1 − [R G B] |
| Boundary | β(A) = A − (A ⊖ B) |
| Hit-or-miss | A ⊛ B = (A ⊖ B<sub>1</sub>) ∩ (Aᶜ ⊖ B<sub>2</sub>) |
| Region filling | X<sub>k</sub> = (X<sub>k−1</sub> ⊕ B) ∩ Aᶜ |
| Connected components | X<sub>k</sub> = (X<sub>k−1</sub> ⊕ B) ∩ A |
| Thinning / thickening | A − (A ⊛ B) / A ∪ (A ⊛ B) |
| Iterative threshold | T = ½(m<sub>1</sub> + m<sub>2</sub>), repeat until stable |
| Stereo depth | Z = f·B/d |
| Harris | R = det M − k(trace M)² |
| Euler number | E = C − H |

## Masks to draw

```
Averaging      Weighted       Laplacian      Laplacian(8)   Composite
1/9 x          1/16 x
1 1 1          1 2 1          0  1  0        1  1  1        0 -1  0
1 1 1          2 4 2          1 -4  1        1 -8  1       -1  5 -1
1 1 1          1 2 1          0  1  0        1  1  1        0 -1  0

Point          Line: Horiz    +45°           Vertical       −45°
-1 -1 -1       -1 -1 -1        2 -1 -1       -1  2 -1       -1 -1  2
-1  8 -1        2  2  2       -1  2 -1       -1  2 -1       -1  2 -1
-1 -1 -1       -1 -1 -1       -1 -1  2       -1  2 -1        2 -1 -1

Sobel Gx       Sobel Gy       Prewitt Gx     Prewitt Gy     Roberts
-1 -2 -1       -1  0  1       -1 -1 -1       -1  0  1       -1 0   0 -1
 0  0  0       -2  0  2        0  0  0       -1  0  1        0 1   1  0
 1  2  1       -1  0  1        1  1  1       -1  0  1
```

## Diagrams you must be able to draw

1. Fundamental steps of DIP (10 boxes + knowledge base) — [Unit 1](#unit1)
2. Components of an image processing system — [Unit 1](#unit1)
3. Eye cross-section / light path — [Unit 1](#unit1)
4. Sampling & quantization pipeline + false contouring — [Unit 1](#unit1)
5. Contrast-stretching curve with (r<sub>1</sub>,s<sub>1</sub>), (r<sub>2</sub>,s<sub>2</sub>) — [Unit 1](#unit1)
6. Before/after histograms — [Unit 1](#unit1)
7. Frequency filtering pipeline; ILPF/BLPF/GLPF cross-sections — [Unit 2](#unit2)
8. Homomorphic filtering chain — [Unit 2](#unit2)
9. **Degradation/restoration model** (most asked) — [Unit 2](#unit2)
10. RGB cube; HSI triangle/cone; chromaticity tongue — [Unit 3](#unit3)
11. Dilation/erosion grids; opening/closing chains — [Unit 3](#unit3)
12. Segmentation classification tree; quadtree — [Unit 4](#unit4)
13. Stereo geometry — [Unit 4](#unit4)

## Numerical checklist

- **Histogram equalization:** n<sub>k</sub> → p<sub>r</sub> → CDF → ×(L−1) → round → merge counts → draw both histograms.
- **Filters:** take the 3×3 neighbourhood of the centre (count rows/columns from 0), sort, then mean (round), median (5th), max, min.
- **Threshold:** T₀ = mean → G₁ > T, G₂ ≤ T → T = (m₁ + m₂)/2 → repeat until the groups stop changing.
- **Grey-scale morphology:** flat SE → max/min of the window; non-flat → add/subtract SE then max/min.
- **Paths:** list the pixels in V; check every diagonal step for m-adjacency (common 4-neighbours must not be in V).

::: tip Exam-hall strategy
Pick the numericals first. For every theory answer: introduction → underlined definition → diagram → 8–12 numbered points → formula/example → advantages/applications → conclusion. Label (a) and (b) clearly, and start each question on a new page.
:::
