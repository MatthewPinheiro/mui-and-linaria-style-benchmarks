# MUI Style Approach Benchmarks

This is a fork of React Native for Web in order to use its benchmarking infrastructure.

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
| inline-styles | 22.78 | No styling engine, just use `style` prop |
| mui_sx_full | 36.89 | MUI Box `sx` prop with 17 CSS properties |
| mui_sx_medium | 24.09 | MUI Box `sx` prop with 9 CSS properties |
| mui_sx_minimal | 18.15 | MUI Box `sx` prop with 4 CSS properties |
| mui_styled_box | 22.38 | MUI `styled` MUI `Box` with 17 CSS properties |
| mui_styled_box_minimal | 17.90 | MUI `styled` MUI `Box` with 4 CSS properties |
| tss_react_makestyles | 17.10 | `makeStyles` from `tss-react` with 17 CSS properties |
| mui_styled | 16.93 | MUI `styled` `div`  with 17 CSS properties |
| mui_styled_minimal | 13.77 | MUI `styled` `div` with 4 CSS properties |
| emotion_styled | 16.69 | Emotion `styled` `div` with 17 CSS properties |
| emotion_styled_minimal | 12.76 | Emotion `styled` `div` with 4 CSS properties |
| emotion_css | 12.58 | Emotion `css` `div` with 17 CSS properties |

### Conclusions

- MUI `styled` (e.g. `import {styled} from '@mui/material/styles'`) only adds a small amount of overhead
to Emotion's `styled`.
- tss-react performs similarly to MUI `styled`.
- Emotion `styled`, Emotion `css`, MUI `styled`, and the MUI `sx` prop are all more expensive when there are 
more CSS properties passed to the styling engine.
- The performance of the `sx` prop degrades more quickly than the `styled` API as more
CSS properties are passed to it. With 17 CSS properties the performance is much worse than the `styled` API (2x).
- The `sx` prop performs just fine for a small number (e.g. < 5) of CSS properties. Particularly, if you
are already using a MUI component in a given situation, there is no meaningful performance difference
between wrapping it with `styled` or using the `sx` prop if you are just using a small number
of CSS properties.
