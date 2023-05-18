# MUI Style Approach Benchmarks

This is a fork of MUI Style Benchmarks (which itself is a fork of React Native for Web) with the addition of the Linaria, build-time CSS-in-JSS solution.

In order to use this, execute the following:
```
yarn
yarn compile
yarn benchmarks
```

Then open `./packages/benchmarks/dist/index.html` and use the browser to execute the different scenarios.

---

### My Results for the "Mount deep tree" Benchmark

This test renders 639 elements with approximately 17 CSS properties each except for the cases ("..._minimal", "..._medium")
which reduce the number of CSS properties to show the performance impact.

| Styling Implementation | Time in ms | Implementation Desc |
|--------------------|:------------------:|-------|
| mui_sx_full | 25.78 ±01.22 ms | MUI Box `sx` prop with 17 CSS properties |
| mui_sx_medium | 17.78 ±00.52 ms | MUI Box `sx` prop with 9 CSS properties |
| mui_styled_box | 16.27 ±00.89 ms | MUI `styled` MUI `Box` with 17 CSS properties |
| inline-styles | 13.30 ±00.76 ms | No styling engine, just use `style` prop |
| mui_sx_minimal | 12.17 ±00.77 ms | MUI Box `sx` prop with 4 CSS properties |
| mui_styled_box_minimal | 11.98 ±00.88 ms | MUI `styled` MUI `Box` with 4 CSS properties |
| mui_styled | 11.00 ±00.88 ms | MUI `styled` `div`  with 17 CSS properties |
| tss_react_makestyles | 11.54 ±01.05 ms | `makeStyles` from `tss-react` with 17 CSS properties |
| emotion_styled | 10.82 ±01.24 ms | Emotion `styled` `div` with 17 CSS properties |
| emotion_css | 08.30 ±01.63 ms | Emotion `css` `div` with 17 CSS properties |
| mui_styled_minimal | 07.81 ±00.61 ms | MUI `styled` `div` with 4 CSS properties |
| emotion_styled_minimal | 06.95 ±00.80 ms | Emotion `styled` `div` with 4 CSS properties |
| linaria | 05.38 ±00.21 ms | Build-time Linaria `css` and `styled` with 17 CSS properties |

### Conclusions

- Linaria is a clear winner in performance, though emotion_css is a good alternative.