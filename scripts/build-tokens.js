import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";
register(StyleDictionary);

register(StyleDictionary, {
  expand: { composition: true, typography: true, border: true, shadow: false },
  excludeParentKeys: true,
});

const sd = StyleDictionary.extend({
  source: ["../src/tokens/tokens.json"],
  platforms: {
    js: {
      transformGroup: "tokens-studio",
      buildPath: "../src/tokens/build/js/",
      files: [
        {
          destination: "variables.js",
          format: "javascript/es6",
        },
      ],
    },
    css: {
      transforms: [
        "ts/opacity",
        "ts/size/lineheight",
        "ts/typography/fontWeight",
        "ts/resolveMath",
        "ts/size/css/letterspacing",
        "ts/typography/css/fontFamily",
        "ts/typography/css/shorthand",
        "ts/border/css/shorthand",
        "ts/shadow/css/shorthand",
        "ts/descriptionToComment",
        "ts/color/css/hexrgba",
        "ts/color/modifiers",
        "name/cti/kebab",
        "size/rem",
        "color/hsl",
      ],
      buildPath: "../src/tokens/build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
    scss: {
      transforms: [
        "ts/opacity",
        "ts/size/lineheight",
        "ts/typography/fontWeight",
        "ts/resolveMath",
        "ts/size/css/letterspacing",
        "ts/typography/css/fontFamily",
        "ts/typography/css/shorthand",
        "ts/descriptionToComment",
        "ts/border/css/shorthand",
        "ts/shadow/css/shorthand",
        "ts/color/css/hexrgba",
        "ts/color/modifiers",
        "name/cti/kebab",
        "size/rem",
        "color/hsl",
      ],
      buildPath: "../src/tokens/build/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
