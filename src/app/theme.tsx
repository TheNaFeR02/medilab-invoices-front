// MUI THEME
// --------------------------------------------------------
"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
    coreColors: {
      primary: string;
    };
    schemes: {
      light: {
        primary: string;
        surfaceTint: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        secondary: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        background: string;
        onBackground: string;
        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
        outline: string;
        outlineVariant: string;
        shadow: string;
        scrim: string;
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
        primaryFixed: string;
        onPrimaryFixed: string;
        primaryFixedDim: string;
        onPrimaryFixedVariant: string;
        secondaryFixed: string;
        onSecondaryFixed: string;
        secondaryFixedDim: string;
        onSecondaryFixedVariant: string;
        tertiaryFixed: string;
        onTertiaryFixed: string;
        tertiaryFixedDim: string;
        onTertiaryFixedVariant: string;
        surfaceDim: string;
        surfaceBright: string;
        surfaceContainerLowest: string;
        surfaceContainerLow: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
      };
      lightMediumContrast: {
        primary: string;
        surfaceTint: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        secondary: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        background: string;
        onBackground: string;
        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
        outline: string;
        outlineVariant: string;
        shadow: string;
        scrim: string;
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
        primaryFixed: string;
        onPrimaryFixed: string;
        primaryFixedDim: string;
        onPrimaryFixedVariant: string;
        secondaryFixed: string;
        onSecondaryFixed: string;
        secondaryFixedDim: string;
        onSecondaryFixedVariant: string;
        tertiaryFixed: string;
        onTertiaryFixed: string;
        tertiaryFixedDim: string;
        onTertiaryFixedVariant: string;
        surfaceDim: string;
        surfaceBright: string;
        surfaceContainerLowest: string;
        surfaceContainerLow: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
      };
      lightHighContrast: {
        primary: string;
        surfaceTint: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        secondary: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        background: string;
        onBackground: string;
        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
        outline: string;
        outlineVariant: string;
        shadow: string;
        scrim: string;
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
        primaryFixed: string;
        onPrimaryFixed: string;
        primaryFixedDim: string;
        onPrimaryFixedVariant: string;
        secondaryFixed: string;
        onSecondaryFixed: string;
        secondaryFixedDim: string;
        onSecondaryFixedVariant: string;
        tertiaryFixed: string;
        onTertiaryFixed: string;
        tertiaryFixedDim: string;
        onTertiaryFixedVariant: string;
        surfaceDim: string;
        surfaceBright: string;
        surfaceContainerLowest: string;
        surfaceContainerLow: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
      };
      dark: {
        primary: string;
        surfaceTint: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        secondary: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        background: string;
        onBackground: string;
        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
        outline: string;
        outlineVariant: string;
        shadow: string;
        scrim: string;
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
        primaryFixed: string;
        onPrimaryFixed: string;
        primaryFixedDim: string;
        onPrimaryFixedVariant: string;
        secondaryFixed: string;
        onSecondaryFixed: string;
        secondaryFixedDim: string;
        onSecondaryFixedVariant: string;
        tertiaryFixed: string;
        onTertiaryFixed: string;
        tertiaryFixedDim: string;
        onTertiaryFixedVariant: string;
        surfaceDim: string;
        surfaceBright: string;
        surfaceContainerLowest: string;
        surfaceContainerLow: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
      };
      darkMediumContrast: {
        primary: string;
        surfaceTint: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        secondary: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        background: string;
        onBackground: string;
        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
        outline: string;
        outlineVariant: string;
        shadow: string;
        scrim: string;
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
        primaryFixed: string;
        onPrimaryFixed: string;
        primaryFixedDim: string;
        onPrimaryFixedVariant: string;
        secondaryFixed: string;
        onSecondaryFixed: string;
        secondaryFixedDim: string;
        onSecondaryFixedVariant: string;
        tertiaryFixed: string;
        onTertiaryFixed: string;
        tertiaryFixedDim: string;
        onTertiaryFixedVariant: string;
        surfaceDim: string;
        surfaceBright: string;
        surfaceContainerLowest: string;
        surfaceContainerLow: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
      };
      darkHighContrast: {
        primary: string;
        surfaceTint: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        secondary: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        background: string;
        onBackground: string;
        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
        outline: string;
        outlineVariant: string;
        shadow: string;
        scrim: string;
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
        primaryFixed: string;
        onPrimaryFixed: string;
        primaryFixedDim: string;
        onPrimaryFixedVariant: string;
        secondaryFixed: string;
        onSecondaryFixed: string;
        secondaryFixedDim: string;
        onSecondaryFixedVariant: string;
        tertiaryFixed: string;
        onTertiaryFixed: string;
        tertiaryFixedDim: string;
        onTertiaryFixedVariant: string;
        surfaceDim: string;
        surfaceBright: string;
        surfaceContainerLowest: string;
        surfaceContainerLow: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
      };
    };
    palettes: {
      primary: {
        "0": string;
        "5": string;
        "10": string;
        "15": string;
        "20": string;
        "25": string;
        "30": string;
        "35": string;
        "40": string;
        "50": string;
        "60": string;
        "70": string;
        "80": string;
        "90": string;
        "95": string;
        "98": string;
        "99": string;
        "100": string;
      };
      secondary: {
        "0": string;
        "5": string;
        "10": string;
        "15": string;
        "20": string;
        "25": string;
        "30": string;
        "35": string;
        "40": string;
        "50": string;
        "60": string;
        "70": string;
        "80": string;
        "90": string;
        "95": string;
        "98": string;
        "99": string;
        "100": string;
      };
      tertiary: {
        "0": string;
        "5": string;
        "10": string;
        "15": string;
        "20": string;
        "25": string;
        "30": string;
        "35": string;
        "40": string;
        "50": string;
        "60": string;
        "70": string;
        "80": string;
        "90": string;
        "95": string;
        "98": string;
        "99": string;
        "100": string;
      };
      neutral: {
        "0": string;
        "5": string;
        "10": string;
        "15": string;
        "20": string;
        "25": string;
        "30": string;
        "35": string;
        "40": string;
        "50": string;
        "60": string;
        "70": string;
        "80": string;
        "90": string;
        "95": string;
        "98": string;
        "99": string;
        "100": string;
      };
      neutralVariant: {
        "0": string;
        "5": string;
        "10": string;
        "15": string;
        "20": string;
        "25": string;
        "30": string;
        "35": string;
        "40": string;
        "50": string;
        "60": string;
        "70": string;
        "80": string;
        "90": string;
        "95": string;
        "98": string;
        "99": string;
        "100": string;
      };
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    coreColors?: {
      primary?: string;
    };
    schemes?: {
      light?: {
        // Propiedades de light
      };
      lightMediumContrast?: {
        // Propiedades de light-medium-contrast
      };
      lightHighContrast?: {
        // Propiedades de light-high-contrast
      };
      dark?: {
        // Propiedades de dark
      };
      darkMediumContrast?: {
        // Propiedades de dark-medium-contrast
      };
      darkHighContrast?: {
        // Propiedades de dark-high-contrast
      };
    };
    palettes?: {
      primary?: {
        "0": string;
        "5": string;
        "10": string;
        "15": string;
        "20": string;
        "25": string;
        "30": string;
        "35": string;
        "40": string;
        "50": string;
        "60": string;
        "70": string;
        "80": string;
        "90": string;
        "95": string;
        "98": string;
        "99": string;
        "100": string;
      };
      secondary?: {
        // Propiedades de secondary
      };
      tertiary?: {
        // Propiedades de tertiary
      };
      neutral?: {
        // Propiedades de neutral
      };
      neutralVariant?: {
        // Propiedades de neutral-variant
      };
    };
  }
}

let theme = createTheme({
  coreColors: {
    primary: "#884B6B",
  },
  schemes: {
    light: {
      primary: "#884B6B",
      surfaceTint: "#884B6B",
      onPrimary: "#FFFFFF",
      primaryContainer: "#FFD8E8",
      onPrimaryContainer: "#380726",
      secondary: "#725763",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#FDD9E8",
      onSecondaryContainer: "#291520",
      tertiary: "#7F553A",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#FFDBC8",
      onTertiaryContainer: "#311302",
      error: "#BA1A1A",
      onError: "#FFFFFF",
      errorContainer: "#FFDAD6",
      onErrorContainer: "#410002",
      background: "#FFF8F8",
      onBackground: "#21191D",
      surface: "#FFF8F8",
      onSurface: "#21191D",
      surfaceVariant: "#F1DEE4",
      onSurfaceVariant: "#504348",
      outline: "#827379",
      outlineVariant: "#D4C2C8",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#372E31",
      inverseOnSurface: "#FCEDF1",
      inversePrimary: "#FDB0D5",
      primaryFixed: "#FFD8E8",
      onPrimaryFixed: "#380726",
      primaryFixedDim: "#FDB0D5",
      onPrimaryFixedVariant: "#6C3352",
      secondaryFixed: "#FDD9E8",
      onSecondaryFixed: "#291520",
      secondaryFixedDim: "#E0BDCB",
      onSecondaryFixedVariant: "#59404B",
      tertiaryFixed: "#FFDBC8",
      onTertiaryFixed: "#311302",
      tertiaryFixedDim: "#F3BB9A",
      onTertiaryFixedVariant: "#643D25",
      surfaceDim: "#E5D6DB",
      surfaceBright: "#FFF8F8",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#FFF0F4",
      surfaceContainer: "#F9EAEE",
      surfaceContainerHigh: "#F3E4E9",
      surfaceContainerHighest: "#EEDFE3",
    },
    lightMediumContrast: {
      primary: "#68304E",
      surfaceTint: "#884B6B",
      onPrimary: "#FFFFFF",
      primaryContainer: "#A16081",
      onPrimaryContainer: "#FFFFFF",
      secondary: "#543C47",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#896D79",
      onSecondaryContainer: "#FFFFFF",
      tertiary: "#603A21",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#986A4E",
      onTertiaryContainer: "#FFFFFF",
      error: "#8C0009",
      onError: "#FFFFFF",
      errorContainer: "#DA342E",
      onErrorContainer: "#FFFFFF",
      background: "#FFF8F8",
      onBackground: "#21191D",
      surface: "#FFF8F8",
      onSurface: "#21191D",
      surfaceVariant: "#F1DEE4",
      onSurfaceVariant: "#4C3F45",
      outline: "#695B61",
      outlineVariant: "#86777C",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#372E31",
      inverseOnSurface: "#FCEDF1",
      inversePrimary: "#FDB0D5",
      primaryFixed: "#A16081",
      onPrimaryFixed: "#FFFFFF",
      primaryFixedDim: "#854868",
      onPrimaryFixedVariant: "#FFFFFF",
      secondaryFixed: "#896D79",
      onSecondaryFixed: "#FFFFFF",
      secondaryFixedDim: "#6F5461",
      onSecondaryFixedVariant: "#FFFFFF",
      tertiaryFixed: "#986A4E",
      onTertiaryFixed: "#FFFFFF",
      tertiaryFixedDim: "#7C5238",
      onTertiaryFixedVariant: "#FFFFFF",
      surfaceDim: "#E5D6DB",
      surfaceBright: "#FFF8F8",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#FFF0F4",
      surfaceContainer: "#F9EAEE",
      surfaceContainerHigh: "#F3E4E9",
      surfaceContainerHighest: "#EEDFE3",
    },
    lightHighContrast: {
      primary: "#400E2D",
      surfaceTint: "#884B6B",
      onPrimary: "#FFFFFF",
      primaryContainer: "#68304E",
      onPrimaryContainer: "#FFFFFF",
      secondary: "#311C26",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#543C47",
      onSecondaryContainer: "#FFFFFF",
      tertiary: "#391A05",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#603A21",
      onTertiaryContainer: "#FFFFFF",
      error: "#4E0002",
      onError: "#FFFFFF",
      errorContainer: "#8C0009",
      onErrorContainer: "#FFFFFF",
      background: "#FFF8F8",
      onBackground: "#21191D",
      surface: "#FFF8F8",
      onSurface: "#000000",
      surfaceVariant: "#F1DEE4",
      onSurfaceVariant: "#2C2126",
      outline: "#4C3F45",
      outlineVariant: "#4C3F45",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#372E31",
      inverseOnSurface: "#FFFFFF",
      inversePrimary: "#FFE6EF",
      primaryFixed: "#68304E",
      onPrimaryFixed: "#FFFFFF",
      primaryFixedDim: "#4D1938",
      onPrimaryFixedVariant: "#FFFFFF",
      secondaryFixed: "#543C47",
      onSecondaryFixed: "#FFFFFF",
      secondaryFixedDim: "#3C2631",
      onSecondaryFixedVariant: "#FFFFFF",
      tertiaryFixed: "#603A21",
      onTertiaryFixed: "#FFFFFF",
      tertiaryFixedDim: "#45240E",
      onTertiaryFixedVariant: "#FFFFFF",
      surfaceDim: "#E5D6DB",
      surfaceBright: "#FFF8F8",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#FFF0F4",
      surfaceContainer: "#F9EAEE",
      surfaceContainerHigh: "#F3E4E9",
      surfaceContainerHighest: "#EEDFE3",
    },
    dark: {
      primary: "#FDB0D5",
      surfaceTint: "#FDB0D5",
      onPrimary: "#521D3B",
      primaryContainer: "#6C3352",
      onPrimaryContainer: "#FFD8E8",
      secondary: "#E0BDCB",
      onSecondary: "#402A35",
      secondaryContainer: "#59404B",
      onSecondaryContainer: "#FDD9E8",
      tertiary: "#F3BB9A",
      onTertiary: "#4A2811",
      tertiaryContainer: "#643D25",
      onTertiaryContainer: "#FFDBC8",
      error: "#FFB4AB",
      onError: "#690005",
      errorContainer: "#93000A",
      onErrorContainer: "#FFDAD6",
      background: "#181114",
      onBackground: "#EEDFE3",
      surface: "#181114",
      onSurface: "#EEDFE3",
      surfaceVariant: "#504348",
      onSurfaceVariant: "#D4C2C8",
      outline: "#9C8D92",
      outlineVariant: "#504348",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#EEDFE3",
      inverseOnSurface: "#372E31",
      inversePrimary: "#884B6B",
      primaryFixed: "#FFD8E8",
      onPrimaryFixed: "#380726",
      primaryFixedDim: "#FDB0D5",
      onPrimaryFixedVariant: "#6C3352",
      secondaryFixed: "#FDD9E8",
      onSecondaryFixed: "#291520",
      secondaryFixedDim: "#E0BDCB",
      onSecondaryFixedVariant: "#59404B",
      tertiaryFixed: "#FFDBC8",
      onTertiaryFixed: "#311302",
      tertiaryFixedDim: "#F3BB9A",
      onTertiaryFixedVariant: "#643D25",
      surfaceDim: "#181114",
      surfaceBright: "#40373A",
      surfaceContainerLowest: "#130C0F",
      surfaceContainerLow: "#21191D",
      surfaceContainer: "#251D21",
      surfaceContainerHigh: "#30282B",
      surfaceContainerHighest: "#3B3236",
    },
    darkMediumContrast: {
      primary: "#FFB5D8",
      surfaceTint: "#FDB0D5",
      onPrimary: "#310220",
      primaryContainer: "#C17C9E",
      onPrimaryContainer: "#000000",
      secondary: "#E4C2D0",
      onSecondary: "#23101A",
      secondaryContainer: "#A78896",
      onSecondaryContainer: "#000000",
      tertiary: "#F7BF9E",
      onTertiary: "#2A0E00",
      tertiaryContainer: "#B78668",
      onTertiaryContainer: "#000000",
      error: "#FFBAB1",
      onError: "#370001",
      errorContainer: "#FF5449",
      onErrorContainer: "#000000",
      background: "#181114",
      onBackground: "#EEDFE3",
      surface: "#181114",
      onSurface: "#FFF9F9",
      surfaceVariant: "#504348",
      onSurfaceVariant: "#D8C6CC",
      outline: "#AF9FA4",
      outlineVariant: "#8E7F85",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#EEDFE3",
      inverseOnSurface: "#30282B",
      inversePrimary: "#6E3554",
      primaryFixed: "#FFD8E8",
      onPrimaryFixed: "#2A001A",
      primaryFixedDim: "#FDB0D5",
      onPrimaryFixedVariant: "#592341",
      secondaryFixed: "#FDD9E8",
      onSecondaryFixed: "#1E0B15",
      secondaryFixedDim: "#E0BDCB",
      onSecondaryFixedVariant: "#472F3A",
      tertiaryFixed: "#FFDBC8",
      onTertiaryFixed: "#220A00",
      tertiaryFixedDim: "#F3BB9A",
      onTertiaryFixedVariant: "#512D16",
      surfaceDim: "#181114",
      surfaceBright: "#40373A",
      surfaceContainerLowest: "#130C0F",
      surfaceContainerLow: "#21191D",
      surfaceContainer: "#251D21",
      surfaceContainerHigh: "#30282B",
      surfaceContainerHighest: "#3B3236",
    },
    darkHighContrast: {
      primary: "#FFF9F9",
      surfaceTint: "#FDB0D5",
      onPrimary: "#000000",
      primaryContainer: "#FFB5D8",
      onPrimaryContainer: "#000000",
      secondary: "#FFF9F9",
      onSecondary: "#000000",
      secondaryContainer: "#E4C2D0",
      onSecondaryContainer: "#000000",
      tertiary: "#FFFAF8",
      onTertiary: "#000000",
      tertiaryContainer: "#F7BF9E",
      onTertiaryContainer: "#000000",
      error: "#FFF9F9",
      onError: "#000000",
      errorContainer: "#FFBAB1",
      onErrorContainer: "#000000",
      background: "#181114",
      onBackground: "#EEDFE3",
      surface: "#181114",
      onSurface: "#FFFFFF",
      surfaceVariant: "#504348",
      onSurfaceVariant: "#FFF9F9",
      outline: "#D8C6CC",
      outlineVariant: "#D8C6CC",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#EEDFE3",
      inverseOnSurface: "#000000",
      inversePrimary: "#4A1735",
      primaryFixed: "#FFDEEB",
      onPrimaryFixed: "#000000",
      primaryFixedDim: "#FFB5D8",
      onPrimaryFixedVariant: "#310220",
      secondaryFixed: "#FFDEEB",
      onSecondaryFixed: "#000000",
      secondaryFixedDim: "#E4C2D0",
      onSecondaryFixedVariant: "#23101A",
      tertiaryFixed: "#FFE1D1",
      onTertiaryFixed: "#000000",
      tertiaryFixedDim: "#F7BF9E",
      onTertiaryFixedVariant: "#2A0E00",
      surfaceDim: "#181114",
      surfaceBright: "#40373A",
      surfaceContainerLowest: "#130C0F",
      surfaceContainerLow: "#21191D",
      surfaceContainer: "#251D21",
      surfaceContainerHigh: "#30282B",
      surfaceContainerHighest: "#3B3236",
    },
  },
  palettes: {
    primary: {
      "0": "#000000",
      "5": "#29001A",
      "10": "#380726",
      "15": "#451230",
      "20": "#530E3A",
      "25": "#600A44",
      "30": "#6E054F",
      "35": "#7B0059",
      "40": "#890064",
      "50": "#980063",
      "60": "#A800062",
      "70": "#B700061",
      "80": "#C700060",
      "90": "#D60005F",
      "95": "#E20005E",
      "98": "#ED0005D",
      "99": "#F40005C",
      "100": "#FB0005B",
    },
    secondary: {
      "0": "#000000",
      "5": "#1A0D14",
      "10": "#26171E",
      "15": "#312129",
      "20": "#3C2C33",
      "25": "#48363E",
      "30": "#54424A",
      "35": "#614D55",
      "40": "#6D5961",
      "50": "#87717A",
      "60": "#A28B94",
      "70": "#BDA5AE",
      "80": "#DAC0CA",
      "90": "#F7DBE6",
      "95": "#FFECF2",
      "98": "#FFF8F8",
      "99": "#FFFBFF",
      "100": "#FFFFFF",
    },
    tertiary: {
      "0": "#000000",
      "5": "#200B01",
      "10": "#2C1607",
      "15": "#382010",
      "20": "#452A1A",
      "25": "#513524",
      "30": "#5E402E",
      "35": "#6B4B39",
      "40": "#785744",
      "50": "#936F5B",
      "60": "#AF8973",
      "70": "#CBA38C",
      "80": "#E8BEA6",
      "90": "#FFDBC8",
      "95": "#FFEDE5",
      "98": "#FFF8F5",
      "99": "#FFFBFF",
      "100": "#FFFFFF",
    },

    neutral: {
      "0": "#000000",
      "5": "#141011",
      "10": "#1E1B1C",
      "15": "#292526",
      "20": "#342F31",
      "25": "#3F3A3C",
      "30": "#4B4547",
      "35": "#565152",
      "40": "#635D5E",
      "50": "#7C7577",
      "60": "#968F90",
      "70": "#B1A9AB",
      "80": "#CDC4C6",
      "90": "#E9E0E2",
      "95": "#F8EEF0",
      "98": "#FFF8F8",
      "99": "#FFFBFF",
      "100": "#FFFFFF",
    },

    neutralVariant: {
      "0": "#000000",
      "5": "#160F12",
      "10": "#21191D",
      "15": "#2C2427",
      "20": "#372E31",
      "25": "#42393C",
      "30": "#4E4448",
      "35": "#5A5053",
      "40": "#665C5F",
      "50": "#7F7478",
      "60": "#9A8E92",
      "70": "#B5A8AC",
      "80": "#D1C3C7",
      "90": "#EEDFE3",
      "95": "#FCEDF1",
      "98": "#FFF8F8",
      "99": "#FFFBFF",
      "100": "#FFFFFF",
    },
  },
});

theme = createTheme(theme, {
  palette: {
    mode: "light",
    primary: {
      main: `${theme.schemes[theme.palette.mode].primary}`,
      light: `${theme.schemes.light.primaryContainer}`,
      dark: `${theme.schemes.dark.primaryContainer}`,
    },
    secondary: {
      main: `${theme.schemes[theme.palette.mode].secondary}`,
    },
    error: {
      main: `${theme.schemes[theme.palette.mode].error}`,
      light: `${theme.schemes[theme.palette.mode].errorContainer}`,
    },
    background: {
      default: `${theme.schemes[theme.palette.mode].background}`,
      paper: `${theme.schemes[theme.palette.mode].surface}`,
    },
    text: {
      primary: "#21191D",
      secondary: "#21191D",
      disabled: "#21191D",
      error: `${theme.schemes[theme.palette.mode].error}`,
    },
    divider: `${theme.schemes[theme.palette.mode].outline}`,
  },
  action: {
    active: `${theme.schemes[theme.palette.mode].primary}`,
    hover: `${theme.schemes[theme.palette.mode].primary}`,
    selected: `${theme.schemes[theme.palette.mode].primary}`,
    disabled: `${theme.schemes[theme.palette.mode].outline}`,
    disabledBackground: `${theme.schemes[theme.palette.mode].outline}`,
    focus: `${theme.schemes[theme.palette.mode].primary}`,
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  // ------------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.color === "primary" && {
            backgroundColor: theme.schemes[theme.palette.mode].primary,
            color: theme.schemes[theme.palette.mode].onPrimary,
          }),
          ...(ownerState.color === "secondary" && {
            backgroundColor: theme.schemes[theme.palette.mode].secondary,
            color: theme.schemes[theme.palette.mode].onSecondary,
          }),
          ...(ownerState.color === "error" && {
            backgroundColor: theme.schemes[theme.palette.mode].error,
            color: theme.schemes[theme.palette.mode].onError,
          }),
          ...(ownerState.color === "default" && {
            backgroundColor: theme.schemes[theme.palette.mode].surfaceContainer,
            color: theme.schemes[theme.palette.mode].onSurface,
          }),
          borderRadius: "20rem",
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.color === "primary" && {
            backgroundColor: theme.schemes[theme.palette.mode].primary,
            color: theme.schemes[theme.palette.mode].onPrimary,
          }),
          ...(ownerState.color === "secondary" && {
            backgroundColor: theme.schemes[theme.palette.mode].secondary,
            color: theme.schemes[theme.palette.mode].onSecondary,
          }),
          ...(ownerState.color === "error" && {
            backgroundColor: theme.schemes[theme.palette.mode].errorContainer,
            color: theme.schemes[theme.palette.mode].error,
          }),
          ...(ownerState.color === "default" && {
            backgroundColor: theme.schemes[theme.palette.mode].surfaceContainer,
            color: theme.schemes[theme.palette.mode].onSurface,
          }),
          borderRadius: "8rem",
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.color === "primary" && {
            color: theme.schemes[theme.palette.mode].outline,
          }),
          ...(ownerState.color === "secondary" && {
            color: theme.schemes[theme.palette.mode].secondary,
          }),
          ...(ownerState.color === "error" && {
            color: theme.schemes[theme.palette.mode].error,
          }),
          ...(ownerState.color === "default" && {
            color: theme.schemes[theme.palette.mode].surfaceContainer,
          }),
        }),
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.color === "primary" && {
            color: theme.schemes[theme.palette.mode].outline,
          }),
          ...(ownerState.color === "secondary" && {
            color: theme.schemes[theme.palette.mode].secondary,
          }),
          ...(ownerState.color === "error" && {
            color: theme.schemes[theme.palette.mode].error,
          }),
          ...(ownerState.color === "default" && {
            color: theme.schemes[theme.palette.mode].surfaceContainer,
          }),
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.color === "primary" && {
            color: theme.schemes[theme.palette.mode].outline,
          }),
          ...(ownerState.color === "secondary" && {
            color: theme.schemes[theme.palette.mode].secondary,
          }),
          ...(ownerState.color === "error" && {
            color: theme.schemes[theme.palette.mode].error,
          }),
          ...(ownerState.color === "default" && {
            color: theme.schemes[theme.palette.mode].surfaceContainer,
          }),
        }),
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.color === "primary" && {
            color: theme.schemes[theme.palette.mode].outline,
          }),
          ...(ownerState.color === "secondary" && {
            color: theme.schemes[theme.palette.mode].secondary,
          }),
          ...(ownerState.color === "error" && {
            color: theme.schemes[theme.palette.mode].error,
          }),
          ...(ownerState.color === "default" && {
            color: theme.schemes[theme.palette.mode].surfaceContainer,
          }),
        }),
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.color === "primary" && {
            backgroundColor: theme.schemes[theme.palette.mode].outline,
          }),
          ...(ownerState.color === "secondary" && {
            backgroundColor: theme.schemes[theme.palette.mode].secondary,
          }),
          ...(ownerState.color === "error" && {
            backgroundColor: theme.schemes[theme.palette.mode].error,
          }),
          ...(ownerState.color === "default" && {
            backgroundColor: theme.schemes[theme.palette.mode].surfaceContainer,
          }),
        }),
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.color === "primary" && {
            color: theme.schemes[theme.palette.mode].outline,
          }),
          ...(ownerState.color === "secondary" && {
            color: theme.schemes[theme.palette.mode].secondary,
          }),
          ...(ownerState.color === "error" && {
            color: theme.schemes[theme.palette.mode].error,
          }),
          ...(ownerState.color === "default" && {
            color: theme.schemes[theme.palette.mode].surfaceContainer,
          }),
        }),
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          "& .MuiPaginationItem-root": {
            "&.Mui-selected": {
              backgroundColor:
                theme.schemes[theme.palette.mode].surfaceContainer,
              color: theme.schemes[theme.palette.mode].onSurface,
            },
          },
        }),
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          "&.Mui-selected": {
            backgroundColor: theme.schemes[theme.palette.mode].surfaceContainer,
            color: theme.schemes[theme.palette.mode].onSurface,
          },
        }),
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          "& .MuiTablePagination-select": {
            "&:focus": {
              backgroundColor:
                theme.schemes[theme.palette.mode].surfaceContainer,
            },
          },
          "& .MuiTablePagination-actions": {
            "& .MuiIconButton-root": {
              "&:hover": {
                backgroundColor:
                  theme.schemes[theme.palette.mode].surfaceContainer,
              },
            },
          },
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          "& .MuiTabs-indicator": {
            backgroundColor: theme.schemes[theme.palette.mode].primary,
          },
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          "&.Mui-selected": {
            backgroundColor: theme.schemes[theme.palette.mode].surfaceContainer,
            color: theme.schemes[theme.palette.mode].onSurface,
          },
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          "&.Mui-expanded": {
            backgroundColor: theme.schemes[theme.palette.mode].surfaceContainer,
          },
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          "&.Mui-expanded": {
            backgroundColor: theme.schemes[theme.palette.mode].surfaceContainer,
          },
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          backgroundColor: theme.schemes[theme.palette.mode].surfaceContainer,
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          "&.MuiAlert-standardSuccess": {
            backgroundColor: theme.schemes[theme.palette.mode].primary,
            color: theme.schemes[theme.palette.mode].onPrimary,
          },
          "&.MuiAlert-standardError": {
            backgroundColor: theme.schemes[theme.palette.mode].error,
            color: theme.schemes[theme.palette.mode].onError,
          },
          "&.MuiAlert-standardWarning": {
            backgroundColor: theme.schemes[theme.palette.mode].secondary,
            color: theme.schemes[theme.palette.mode].onSecondary,
          },
          "&.MuiAlert-standardInfo": {
            backgroundColor: theme.schemes[theme.palette.mode].tertiary,
            color: theme.schemes[theme.palette.mode].onTertiary,
          },
        }),
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          "&.MuiAlertTitle-standardSuccess": {
            color: theme.schemes[theme.palette.mode].onPrimary,
          },
          "&.MuiAlertTitle-standardError": {
            color: theme.schemes[theme.palette.mode].onError,
          },
          "&.MuiAlertTitle-standardWarning": {
            color: theme.schemes[theme.palette.mode].onSecondary,
          },
          "&.MuiAlertTitle-standardInfo": {
            color: theme.schemes[theme.palette.mode].onTertiary,
          },
        }),
      },
    },
  },
});

export default theme;
