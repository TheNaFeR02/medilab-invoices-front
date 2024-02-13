"use client";
import { createTheme } from "@mui/material/styles";
import m3theme from "@/app/theme/m3theme";

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
      success: {
        main: string,
      },
      onSuccess: {
        main: string,
      },
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

let theme = m3theme;

theme = createTheme(theme, {
  palette: {
    mode: "light",
  },
});

theme = createTheme(theme, {
  palette: {
    primary: {
      main: theme.schemes[theme.palette.mode].primary,
      light: theme.schemes.light.primaryContainer,
      lightMediumContrast: theme.schemes.lightMediumContrast.primary,
      lightHighContrast: theme.schemes.lightHighContrast.primary,
      dark: theme.schemes.dark.primary,
      darkMediumContrast: theme.schemes.darkMediumContrast.primary,
      darkHighContrast: theme.schemes.darkHighContrast.primary,
      primary0: theme.palettes.primary["0"],
      primary5: theme.palettes.primary["5"],
      primary10: theme.palettes.primary["10"],
      primary15: theme.palettes.primary["15"],
      primary20: theme.palettes.primary["20"],
      primary25: theme.palettes.primary["25"],
      primary30: theme.palettes.primary["30"],
      primary35: theme.palettes.primary["35"],
      primary40: theme.palettes.primary["40"],
      primary50: theme.palettes.primary["50"],
      primary60: theme.palettes.primary["60"],
      primary70: theme.palettes.primary["70"],
      primary80: theme.palettes.primary["80"],
      primary90: theme.palettes.primary["90"],
      primary95: theme.palettes.primary["95"],
      primary98: theme.palettes.primary["98"],
      primary99: theme.palettes.primary["99"],
      primary100: theme.palettes.primary["100"],
      contrastText: theme.schemes[theme.palette.mode].onPrimary,
    },
    surfaceTint: {
      main: theme.schemes[theme.palette.mode].surfaceTint,
      light: theme.schemes.light.surfaceTint,
      lightMediumContrast: theme.schemes.lightMediumContrast.surfaceTint,
      lightHighContrast: theme.schemes.lightHighContrast.surfaceTint,
      dark: theme.schemes.dark.surfaceTint,
      darkMediumContrast: theme.schemes.darkMediumContrast.surfaceTint,
      darkHighContrast: theme.schemes.darkHighContrast.surfaceTint,
    },
    onPrimary: {
      main: theme.schemes[theme.palette.mode].onPrimary,
      light: theme.schemes.light.onPrimary,
      lightMediumContrast: theme.schemes.lightMediumContrast.onPrimary,
      lightHighContrast: theme.schemes.lightHighContrast.onPrimary,
      dark: theme.schemes.dark.onPrimary,
      darkMediumContrast: theme.schemes.darkMediumContrast.onPrimary,
      darkHighContrast: theme.schemes.darkHighContrast.onPrimary,
    },
    primaryContainer: {
      main: theme.schemes[theme.palette.mode].primaryContainer,
      light: theme.schemes.light.primaryContainer,
      lightMediumContrast: theme.schemes.lightMediumContrast.primaryContainer,
      lightHighContrast: theme.schemes.lightHighContrast.primaryContainer,
      dark: theme.schemes.dark.primaryContainer,
      darkMediumContrast: theme.schemes.darkMediumContrast.primaryContainer,
      darkHighContrast: theme.schemes.darkHighContrast.primaryContainer,
    },
    onPrimaryContainer: {
      main: theme.schemes[theme.palette.mode].onPrimaryContainer,
      light: theme.schemes.light.onPrimaryContainer,
      lightMediumContrast: theme.schemes.lightMediumContrast.onPrimaryContainer,
      lightHighContrast: theme.schemes.lightHighContrast.onPrimaryContainer,
      dark: theme.schemes.dark.onPrimaryContainer,
      darkMediumContrast: theme.schemes.darkMediumContrast.onPrimaryContainer,
      darkHighContrast: theme.schemes.darkHighContrast.onPrimaryContainer,
    },
    secondary: {
      main: theme.schemes[theme.palette.mode].secondary,
      light: theme.schemes.light.secondary,
      lightMediumContrast: theme.schemes.lightMediumContrast.secondary,
      lightHighContrast: theme.schemes.lightHighContrast.secondary,
      dark: theme.schemes.dark.secondary,
      darkMediumContrast: theme.schemes.darkMediumContrast.secondary,
      darkHighContrast: theme.schemes.darkHighContrast.secondary,
      secondary0: theme.palettes.secondary["0"],
      secondary5: theme.palettes.secondary["5"],
      secondary10: theme.palettes.secondary["10"],
      secondary15: theme.palettes.secondary["15"],
      secondary20: theme.palettes.secondary["20"],
      secondary25: theme.palettes.secondary["25"],
      secondary30: theme.palettes.secondary["30"],
      secondary35: theme.palettes.secondary["35"],
      secondary40: theme.palettes.secondary["40"],
      secondary50: theme.palettes.secondary["50"],
      secondary60: theme.palettes.secondary["60"],
      secondary70: theme.palettes.secondary["70"],
      secondary80: theme.palettes.secondary["80"],
      secondary90: theme.palettes.secondary["90"],
      secondary95: theme.palettes.secondary["95"],
      secondary98: theme.palettes.secondary["98"],
      secondary99: theme.palettes.secondary["99"],
      secondary100: theme.palettes.secondary["100"],
      contrastText: theme.schemes[theme.palette.mode].onSecondary,
    },
    onSecondary: {
      main: theme.schemes[theme.palette.mode].onSecondary,
      light: theme.schemes.light.onSecondary,
      lightMediumContrast: theme.schemes.lightMediumContrast.onSecondary,
      lightHighContrast: theme.schemes.lightHighContrast.onSecondary,
      dark: theme.schemes.dark.onSecondary,
      darkMediumContrast: theme.schemes.darkMediumContrast.onSecondary,
      darkHighContrast: theme.schemes.darkHighContrast.onSecondary,
    },
    secondaryContainer: {
      main: theme.schemes[theme.palette.mode].secondaryContainer,
      light: theme.schemes.light.secondaryContainer,
      lightMediumContrast: theme.schemes.lightMediumContrast.secondaryContainer,
      lightHighContrast: theme.schemes.lightHighContrast.secondaryContainer,
      dark: theme.schemes.dark.secondaryContainer,
      darkMediumContrast: theme.schemes.darkMediumContrast.secondaryContainer,
      darkHighContrast: theme.schemes.darkHighContrast.secondaryContainer,
    },
    onSecondaryContainer: {
      main: theme.schemes[theme.palette.mode].onSecondaryContainer,
      light: theme.schemes.light.onSecondaryContainer,
      lightMediumContrast:
        theme.schemes.lightMediumContrast.onSecondaryContainer,
      lightHighContrast: theme.schemes.lightHighContrast.onSecondaryContainer,
      dark: theme.schemes.dark.onSecondaryContainer,
      darkMediumContrast: theme.schemes.darkMediumContrast.onSecondaryContainer,
      darkHighContrast: theme.schemes.darkHighContrast.onSecondaryContainer,
    },
    tertiary: {
      main: theme.schemes[theme.palette.mode].tertiary,
      light: theme.schemes.light.tertiary,
      lightMediumContrast: theme.schemes.lightMediumContrast.tertiary,
      lightHighContrast: theme.schemes.lightHighContrast.tertiary,
      dark: theme.schemes.dark.tertiary,
      darkMediumContrast: theme.schemes.darkMediumContrast.tertiary,
      darkHighContrast: theme.schemes.darkHighContrast.tertiary,
      tertiary0: theme.palettes.tertiary["0"],
      tertiary5: theme.palettes.tertiary["5"],
      tertiary10: theme.palettes.tertiary["10"],
      tertiary15: theme.palettes.tertiary["15"],
      tertiary20: theme.palettes.tertiary["20"],
      tertiary25: theme.palettes.tertiary["25"],
      tertiary30: theme.palettes.tertiary["30"],
      tertiary35: theme.palettes.tertiary["35"],
      tertiary40: theme.palettes.tertiary["40"],
      tertiary50: theme.palettes.tertiary["50"],
      tertiary60: theme.palettes.tertiary["60"],
      tertiary70: theme.palettes.tertiary["70"],
      tertiary80: theme.palettes.tertiary["80"],
      tertiary90: theme.palettes.tertiary["90"],
      tertiary95: theme.palettes.tertiary["95"],
      tertiary98: theme.palettes.tertiary["98"],
      tertiary99: theme.palettes.tertiary["99"],
      tertiary100: theme.palettes.tertiary["100"],
    },
    onTertiary: {
      main: theme.schemes[theme.palette.mode].onTertiary,
      light: theme.schemes.light.onTertiary,
      lightMediumContrast: theme.schemes.lightMediumContrast.onTertiary,
      lightHighContrast: theme.schemes.lightHighContrast.onTertiary,
      dark: theme.schemes.dark.onTertiary,
      darkMediumContrast: theme.schemes.darkMediumContrast.onTertiary,
      darkHighContrast: theme.schemes.darkHighContrast.onTertiary,
    },
    tertiaryContainer: {
      main: theme.schemes[theme.palette.mode].tertiaryContainer,
      light: theme.schemes.light.tertiaryContainer,
      lightMediumContrast: theme.schemes.lightMediumContrast.tertiaryContainer,
      lightHighContrast: theme.schemes.lightHighContrast.tertiaryContainer,
      dark: theme.schemes.dark.tertiaryContainer,
      darkMediumContrast: theme.schemes.darkMediumContrast.tertiaryContainer,
      darkHighContrast: theme.schemes.darkHighContrast.tertiaryContainer,
    },
    onTertiaryContainer: {
      main: theme.schemes[theme.palette.mode].onTertiaryContainer,
      light: theme.schemes.light.onTertiaryContainer,
      lightMediumContrast:
        theme.schemes.lightMediumContrast.onTertiaryContainer,
      lightHighContrast: theme.schemes.lightHighContrast.onTertiaryContainer,
      dark: theme.schemes.dark.onTertiaryContainer,
      darkMediumContrast: theme.schemes.darkMediumContrast.onTertiaryContainer,
      darkHighContrast: theme.schemes.darkHighContrast.onTertiaryContainer,
    },
    error: {
      main: theme.schemes[theme.palette.mode].error,
      light: theme.schemes.light.error,
      lightMediumContrast: theme.schemes.lightMediumContrast.error,
      lightHighContrast: theme.schemes.lightHighContrast.error,
      dark: theme.schemes.dark.error,
      darkMediumContrast: theme.schemes.darkMediumContrast.error,
      darkHighContrast: theme.schemes.darkHighContrast.error,
      contrastText: theme.schemes[theme.palette.mode].onError,
    },
    onError: {
      main: theme.schemes[theme.palette.mode].onError,
      light: theme.schemes.light.onError,
      lightMediumContrast: theme.schemes.lightMediumContrast.onError,
      lightHighContrast: theme.schemes.lightHighContrast.onError,
      dark: theme.schemes.dark.onError,
      darkMediumContrast: theme.schemes.darkMediumContrast.onError,
      darkHighContrast: theme.schemes.darkHighContrast.onError,
    },
    errorContainer: {
      main: theme.schemes[theme.palette.mode].errorContainer,
      light: theme.schemes.light.errorContainer,
      lightMediumContrast: theme.schemes.lightMediumContrast.errorContainer,
      lightHighContrast: theme.schemes.lightHighContrast.errorContainer,
      dark: theme.schemes.dark.errorContainer,
      darkMediumContrast: theme.schemes.darkMediumContrast.errorContainer,
      darkHighContrast: theme.schemes.darkHighContrast.errorContainer,
    },
    onErrorContainer: {
      main: theme.schemes[theme.palette.mode].onErrorContainer,
      light: theme.schemes.light.onErrorContainer,
      lightMediumContrast: theme.schemes.lightMediumContrast.onErrorContainer,
      lightHighContrast: theme.schemes.lightHighContrast.onErrorContainer,
      dark: theme.schemes.dark.onErrorContainer,
      darkMediumContrast: theme.schemes.darkMediumContrast.onErrorContainer,
      darkHighContrast: theme.schemes.darkHighContrast.onErrorContainer,
    },
    background: {
      main: theme.schemes[theme.palette.mode].background,
      light: theme.schemes.light.background,
      lightMediumContrast: theme.schemes.lightMediumContrast.background,
      lightHighContrast: theme.schemes.lightHighContrast.background,
      dark: theme.schemes.dark.background,
      darkMediumContrast: theme.schemes.darkMediumContrast.background,
      darkHighContrast: theme.schemes.darkHighContrast.background,
      paper: theme.schemes[theme.palette.mode].background,
      default: theme.schemes[theme.palette.mode].background,
    },
    onBackground: {
      main: theme.schemes[theme.palette.mode].onBackground,
      light: theme.schemes.light.onBackground,
      lightMediumContrast: theme.schemes.lightMediumContrast.onBackground,
      lightHighContrast: theme.schemes.lightHighContrast.onBackground,
      dark: theme.schemes.dark.onBackground,
      darkMediumContrast: theme.schemes.darkMediumContrast.onBackground,
      darkHighContrast: theme.schemes.darkHighContrast.onBackground,
    },
    surface: {
      main: theme.schemes[theme.palette.mode].surface,
      light: theme.schemes.light.surface,
      lightMediumContrast: theme.schemes.lightMediumContrast.surface,
      lightHighContrast: theme.schemes.lightHighContrast.surface,
      dark: theme.schemes.dark.surface,
      darkMediumContrast: theme.schemes.darkMediumContrast.surface,
      darkHighContrast: theme.schemes.darkHighContrast.surface,
    },
    onSurface: {
      main: theme.schemes[theme.palette.mode].onSurface,
      light: theme.schemes.light.onSurface,
      lightMediumContrast: theme.schemes.lightMediumContrast.onSurface,
      lightHighContrast: theme.schemes.lightHighContrast.onSurface,
      dark: theme.schemes.dark.onSurface,
      darkMediumContrast: theme.schemes.darkMediumContrast.onSurface,
      darkHighContrast: theme.schemes.darkHighContrast.onSurface,
    },
    surfaceVariant: {
      main: theme.schemes[theme.palette.mode].surfaceVariant,
      light: theme.schemes.light.surfaceVariant,
      lightMediumContrast: theme.schemes.lightMediumContrast.surfaceVariant,
      lightHighContrast: theme.schemes.lightHighContrast.surfaceVariant,
      dark: theme.schemes.dark.surfaceVariant,
      darkMediumContrast: theme.schemes.darkMediumContrast.surfaceVariant,
      darkHighContrast: theme.schemes.darkHighContrast.surfaceVariant,
    },
    onSurfaceVariant: {
      main: theme.schemes[theme.palette.mode].onSurfaceVariant,
      light: theme.schemes.light.onSurfaceVariant,
      lightMediumContrast: theme.schemes.lightMediumContrast.onSurfaceVariant,
      lightHighContrast: theme.schemes.lightHighContrast.onSurfaceVariant,
      dark: theme.schemes.dark.onSurfaceVariant,
      darkMediumContrast: theme.schemes.darkMediumContrast.onSurfaceVariant,
      darkHighContrast: theme.schemes.darkHighContrast.onSurfaceVariant,
    },
    outline: {
      main: theme.schemes[theme.palette.mode].outline,
      light: theme.schemes.light.outline,
      lightMediumContrast: theme.schemes.lightMediumContrast.outline,
      lightHighContrast: theme.schemes.lightHighContrast.outline,
      dark: theme.schemes.dark.outline,
      darkMediumContrast: theme.schemes.darkMediumContrast.outline,
      darkHighContrast: theme.schemes.darkHighContrast.outline,
    },
    outlineVariant: {
      main: theme.schemes[theme.palette.mode].outlineVariant,
      light: theme.schemes.light.outlineVariant,
      lightMediumContrast: theme.schemes.lightMediumContrast.outlineVariant,
      lightHighContrast: theme.schemes.lightHighContrast.outlineVariant,
      dark: theme.schemes.dark.outlineVariant,
      darkMediumContrast: theme.schemes.darkMediumContrast.outlineVariant,
      darkHighContrast: theme.schemes.darkHighContrast.outlineVariant,
    },
    shadow: {
      main: theme.schemes[theme.palette.mode].shadow,
      light: theme.schemes.light.shadow,
      lightMediumContrast: theme.schemes.lightMediumContrast.shadow,
      lightHighContrast: theme.schemes.lightHighContrast.shadow,
      dark: theme.schemes.dark.shadow,
      darkMediumContrast: theme.schemes.darkMediumContrast.shadow,
      darkHighContrast: theme.schemes.darkHighContrast.shadow,
    },
    scrim: {
      main: theme.schemes[theme.palette.mode].scrim,
      light: theme.schemes.light.scrim,
      lightMediumContrast: theme.schemes.lightMediumContrast.scrim,
      lightHighContrast: theme.schemes.lightHighContrast.scrim,
      dark: theme.schemes.dark.scrim,
      darkMediumContrast: theme.schemes.darkMediumContrast.scrim,
      darkHighContrast: theme.schemes.darkHighContrast.scrim,
    },
    inverseSurface: {
      main: theme.schemes[theme.palette.mode].inverseSurface,
      light: theme.schemes.light.inverseSurface,
      lightMediumContrast: theme.schemes.lightMediumContrast.inverseSurface,
      lightHighContrast: theme.schemes.lightHighContrast.inverseSurface,
      dark: theme.schemes.dark.inverseSurface,
      darkMediumContrast: theme.schemes.darkMediumContrast.inverseSurface,
      darkHighContrast: theme.schemes.darkHighContrast.inverseSurface,
    },
    inverseOnSurface: {
      main: theme.schemes[theme.palette.mode].inverseOnSurface,
      light: theme.schemes.light.inverseOnSurface,
      lightMediumContrast: theme.schemes.lightMediumContrast.inverseOnSurface,
      lightHighContrast: theme.schemes.lightHighContrast.inverseOnSurface,
      dark: theme.schemes.dark.inverseOnSurface,
      darkMediumContrast: theme.schemes.darkMediumContrast.inverseOnSurface,
      darkHighContrast: theme.schemes.darkHighContrast.inverseOnSurface,
    },
    inversePrimary: {
      main: theme.schemes[theme.palette.mode].inversePrimary,
      light: theme.schemes.light.inversePrimary,
      lightMediumContrast: theme.schemes.lightMediumContrast.inversePrimary,
      lightHighContrast: theme.schemes.lightHighContrast.inversePrimary,
      dark: theme.schemes.dark.inversePrimary,
      darkMediumContrast: theme.schemes.darkMediumContrast.inversePrimary,
      darkHighContrast: theme.schemes.darkHighContrast.inversePrimary,
    },
    primaryFixed: {
      main: theme.schemes[theme.palette.mode].primaryFixed,
      light: theme.schemes.light.primaryFixed,
      lightMediumContrast: theme.schemes.lightMediumContrast.primaryFixed,
      lightHighContrast: theme.schemes.lightHighContrast.primaryFixed,
      dark: theme.schemes.dark.primaryFixed,
      darkMediumContrast: theme.schemes.darkMediumContrast.primaryFixed,
      darkHighContrast: theme.schemes.darkHighContrast.primaryFixed,
    },
    onPrimaryFixed: {
      main: theme.schemes[theme.palette.mode].onPrimaryFixed,
      light: theme.schemes.light.onPrimaryFixed,
      lightMediumContrast: theme.schemes.lightMediumContrast.onPrimaryFixed,
      lightHighContrast: theme.schemes.lightHighContrast.onPrimaryFixed,
      dark: theme.schemes.dark.onPrimaryFixed,
      darkMediumContrast: theme.schemes.darkMediumContrast.onPrimaryFixed,
      darkHighContrast: theme.schemes.darkHighContrast.onPrimaryFixed,
    },
    primaryFixedDim: {
      main: theme.schemes[theme.palette.mode].primaryFixedDim,
      light: theme.schemes.light.primaryFixedDim,
      lightMediumContrast: theme.schemes.lightMediumContrast.primaryFixedDim,
      lightHighContrast: theme.schemes.lightHighContrast.primaryFixedDim,
      dark: theme.schemes.dark.primaryFixedDim,
      darkMediumContrast: theme.schemes.darkMediumContrast.primaryFixedDim,
      darkHighContrast: theme.schemes.darkHighContrast.primaryFixedDim,
    },
    onPrimaryFixedVariant: {
      main: theme.schemes[theme.palette.mode].onPrimaryFixedVariant,
      light: theme.schemes.light.onPrimaryFixedVariant,
      lightMediumContrast:
        theme.schemes.lightMediumContrast.onPrimaryFixedVariant,
      lightHighContrast: theme.schemes.lightHighContrast.onPrimaryFixedVariant,
      dark: theme.schemes.dark.onPrimaryFixedVariant,
      darkMediumContrast:
        theme.schemes.darkMediumContrast.onPrimaryFixedVariant,
      darkHighContrast: theme.schemes.darkHighContrast.onPrimaryFixedVariant,
    },
    secondaryFixed: {
      main: theme.schemes[theme.palette.mode].secondaryFixed,
      light: theme.schemes.light.secondaryFixed,
      lightMediumContrast: theme.schemes.lightMediumContrast.secondaryFixed,
      lightHighContrast: theme.schemes.lightHighContrast.secondaryFixed,
      dark: theme.schemes.dark.secondaryFixed,
      darkMediumContrast: theme.schemes.darkMediumContrast.secondaryFixed,
      darkHighContrast: theme.schemes.darkHighContrast.secondaryFixed,
    },
    onSecondaryFixed: {
      main: theme.schemes[theme.palette.mode].onSecondaryFixed,
      light: theme.schemes.light.onSecondaryFixed,
      lightMediumContrast: theme.schemes.lightMediumContrast.onSecondaryFixed,
      lightHighContrast: theme.schemes.lightHighContrast.onSecondaryFixed,
      dark: theme.schemes.dark.onSecondaryFixed,
      darkMediumContrast: theme.schemes.darkMediumContrast.onSecondaryFixed,
      darkHighContrast: theme.schemes.darkHighContrast.onSecondaryFixed,
    },
    secondaryFixedDim: {
      main: theme.schemes[theme.palette.mode].secondaryFixedDim,
      light: theme.schemes.light.secondaryFixedDim,
      lightMediumContrast: theme.schemes.lightMediumContrast.secondaryFixedDim,
      lightHighContrast: theme.schemes.lightHighContrast.secondaryFixedDim,
      dark: theme.schemes.dark.secondaryFixedDim,
      darkMediumContrast: theme.schemes.darkMediumContrast.secondaryFixedDim,
      darkHighContrast: theme.schemes.darkHighContrast.secondaryFixedDim,
    },
    onSecondaryFixedVariant: {
      main: theme.schemes[theme.palette.mode].onSecondaryFixedVariant,
      light: theme.schemes.light.onSecondaryFixedVariant,
      lightMediumContrast:
        theme.schemes.lightMediumContrast.onSecondaryFixedVariant,
      lightHighContrast:
        theme.schemes.lightHighContrast.onSecondaryFixedVariant,
      dark: theme.schemes.dark.onSecondaryFixedVariant,
      darkMediumContrast:
        theme.schemes.darkMediumContrast.onSecondaryFixedVariant,
      darkHighContrast: theme.schemes.darkHighContrast.onSecondaryFixedVariant,
    },
    tertiaryFixed: {
      main: theme.schemes[theme.palette.mode].tertiaryFixed,
      light: theme.schemes.light.tertiaryFixed,
      lightMediumContrast: theme.schemes.lightMediumContrast.tertiaryFixed,
      lightHighContrast: theme.schemes.lightHighContrast.tertiaryFixed,
      dark: theme.schemes.dark.tertiaryFixed,
      darkMediumContrast: theme.schemes.darkMediumContrast.tertiaryFixed,
      darkHighContrast: theme.schemes.darkHighContrast.tertiaryFixed,
    },
    onTertiaryFixed: {
      main: theme.schemes[theme.palette.mode].onTertiaryFixed,
      light: theme.schemes.light.onTertiaryFixed,
      lightMediumContrast: theme.schemes.lightMediumContrast.onTertiaryFixed,
      lightHighContrast: theme.schemes.lightHighContrast.onTertiaryFixed,
      dark: theme.schemes.dark.onTertiaryFixed,
      darkMediumContrast: theme.schemes.darkMediumContrast.onTertiaryFixed,
      darkHighContrast: theme.schemes.darkHighContrast.onTertiaryFixed,
    },
    tertiaryFixedDim: {
      main: theme.schemes[theme.palette.mode].tertiaryFixedDim,
      light: theme.schemes.light.tertiaryFixedDim,
      lightMediumContrast: theme.schemes.lightMediumContrast.tertiaryFixedDim,
      lightHighContrast: theme.schemes.lightHighContrast.tertiaryFixedDim,
      dark: theme.schemes.dark.tertiaryFixedDim,
      darkMediumContrast: theme.schemes.darkMediumContrast.tertiaryFixedDim,
      darkHighContrast: theme.schemes.darkHighContrast.tertiaryFixedDim,
    },
    onTertiaryFixedVariant: {
      main: theme.schemes[theme.palette.mode].onTertiaryFixedVariant,
      light: theme.schemes.light.onTertiaryFixedVariant,
      lightMediumContrast:
        theme.schemes.lightMediumContrast.onTertiaryFixedVariant,
      lightHighContrast: theme.schemes.lightHighContrast.onTertiaryFixedVariant,
      dark: theme.schemes.dark.onTertiaryFixedVariant,
      darkMediumContrast:
        theme.schemes.darkMediumContrast.onTertiaryFixedVariant,
      darkHighContrast: theme.schemes.darkHighContrast.onTertiaryFixedVariant,
    },
    surfaceDim: {
      main: theme.schemes[theme.palette.mode].surfaceDim,
      light: theme.schemes.light.surfaceDim,
      lightMediumContrast: theme.schemes.lightMediumContrast.surfaceDim,
      lightHighContrast: theme.schemes.lightHighContrast.surfaceDim,
      dark: theme.schemes.dark.surfaceDim,
      darkMediumContrast: theme.schemes.darkMediumContrast.surfaceDim,
      darkHighContrast: theme.schemes.darkHighContrast.surfaceDim,
    },
    surfaceBright: {
      main: theme.schemes[theme.palette.mode].surfaceBright,
      light: theme.schemes.light.surfaceBright,
      lightMediumContrast: theme.schemes.lightMediumContrast.surfaceBright,
      lightHighContrast: theme.schemes.lightHighContrast.surfaceBright,
      dark: theme.schemes.dark.surfaceBright,
      darkMediumContrast: theme.schemes.darkMediumContrast.surfaceBright,
      darkHighContrast: theme.schemes.darkHighContrast.surfaceBright,
    },
    surfaceContainerLowest: {
      main: theme.schemes[theme.palette.mode].surfaceContainerLowest,
      light: theme.schemes.light.surfaceContainerLowest,
      lightMediumContrast:
        theme.schemes.lightMediumContrast.surfaceContainerLowest,
      lightHighContrast: theme.schemes.lightHighContrast.surfaceContainerLowest,
      dark: theme.schemes.dark.surfaceContainerLowest,
      darkMediumContrast:
        theme.schemes.darkMediumContrast.surfaceContainerLowest,
      darkHighContrast: theme.schemes.darkHighContrast.surfaceContainerLowest,
    },
    surfaceContainerLow: {
      main: theme.schemes[theme.palette.mode].surfaceContainerLow,
      light: theme.schemes.light.surfaceContainerLow,
      lightMediumContrast:
        theme.schemes.lightMediumContrast.surfaceContainerLow,
      lightHighContrast: theme.schemes.lightHighContrast.surfaceContainerLow,
      dark: theme.schemes.dark.surfaceContainerLow,
      darkMediumContrast: theme.schemes.darkMediumContrast.surfaceContainerLow,
      darkHighContrast: theme.schemes.darkHighContrast.surfaceContainerLow,
    },
    surfaceContainer: {
      main: theme.schemes[theme.palette.mode].surfaceContainer,
      light: theme.schemes.light.surfaceContainer,
      lightMediumContrast: theme.schemes.lightMediumContrast.surfaceContainer,
      lightHighContrast: theme.schemes.lightHighContrast.surfaceContainer,
      dark: theme.schemes.dark.surfaceContainer,
      darkMediumContrast: theme.schemes.darkMediumContrast.surfaceContainer,
      darkHighContrast: theme.schemes.darkHighContrast.surfaceContainer,
    },
    surfaceContainerHigh: {
      main: theme.schemes[theme.palette.mode].surfaceContainerHigh,
      light: theme.schemes.light.surfaceContainerHigh,
      lightMediumContrast:
        theme.schemes.lightMediumContrast.surfaceContainerHigh,
      lightHighContrast: theme.schemes.lightHighContrast.surfaceContainerHigh,
      dark: theme.schemes.dark.surfaceContainerHigh,
      darkMediumContrast: theme.schemes.darkMediumContrast.surfaceContainerHigh,
      darkHighContrast: theme.schemes.darkHighContrast.surfaceContainerHigh,
    },
    surfaceContainerHighest: {
      main: theme.schemes[theme.palette.mode].surfaceContainerHighest,
      light: theme.schemes.light.surfaceContainerHighest,
      lightMediumContrast:
        theme.schemes.lightMediumContrast.surfaceContainerHighest,
      lightHighContrast:
        theme.schemes.lightHighContrast.surfaceContainerHighest,
      dark: theme.schemes.dark.surfaceContainerHighest,
      darkMediumContrast:
        theme.schemes.darkMediumContrast.surfaceContainerHighest,
      darkHighContrast: theme.schemes.darkHighContrast.surfaceContainerHighest,
    },
    success: {
      main: "#59FF5E26",
    },
    onSuccess: {
      main: "#007A04",
    },
    neutral: {
      neutral0: theme.palettes.neutral["0"],
      neutral5: theme.palettes.neutral["5"],
      neutral10: theme.palettes.neutral["10"],
      neutral15: theme.palettes.neutral["15"],
      neutral20: theme.palettes.neutral["20"],
      neutral25: theme.palettes.neutral["25"],
      neutral30: theme.palettes.neutral["30"],
      neutral35: theme.palettes.neutral["35"],
      neutral40: theme.palettes.neutral["40"],
      neutral50: theme.palettes.neutral["50"],
      neutral60: theme.palettes.neutral["60"],
      neutral70: theme.palettes.neutral["70"],
      neutral80: theme.palettes.neutral["80"],
      neutral90: theme.palettes.neutral["90"],
      neutral95: theme.palettes.neutral["95"],
      neutral98: theme.palettes.neutral["98"],
      neutral99: theme.palettes.neutral["99"],
      neutral100: theme.palettes.neutral["100"],
    },
    neutralVariant: {
      neutralVariant0: theme.palettes.neutralVariant["0"],
      neutralVariant5: theme.palettes.neutralVariant["5"],
      neutralVariant10: theme.palettes.neutralVariant["10"],
      neutralVariant15: theme.palettes.neutralVariant["15"],
      neutralVariant20: theme.palettes.neutralVariant["20"],
      neutralVariant25: theme.palettes.neutralVariant["25"],
      neutralVariant30: theme.palettes.neutralVariant["30"],
      neutralVariant35: theme.palettes.neutralVariant["35"],
      neutralVariant40: theme.palettes.neutralVariant["40"],
      neutralVariant50: theme.palettes.neutralVariant["50"],
      neutralVariant60: theme.palettes.neutralVariant["60"],
      neutralVariant70: theme.palettes.neutralVariant["70"],
      neutralVariant80: theme.palettes.neutralVariant["80"],
      neutralVariant90: theme.palettes.neutralVariant["90"],
      neutralVariant95: theme.palettes.neutralVariant["95"],
      neutralVariant98: theme.palettes.neutralVariant["98"],
      neutralVariant99: theme.palettes.neutralVariant["99"],
      neutralVariant100: theme.palettes.neutralVariant["100"],
    },
  },
});

theme = createTheme(theme, {
  text: {
    primary: theme.schemes[theme.palette.mode].onSurface,
    secondary: theme.schemes[theme.palette.mode].onSurface,
    disabled: theme.schemes[theme.palette.mode].onSurface,
    icon: theme.schemes[theme.palette.mode].onSurface,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          borderRadius: "2.5rem",
          height: "2.5rem",
          textTransform: "none", // Use sentence case-> But is no option in CSS
        }),
      },
    },
    MuiChip: {
      styleOverrides: { 
        root: ({ ownerState }: { ownerState: any }) => ({
          borderRadius: "0.5rem",
          height: "2rem",
          textTransform: "none", // Use sentence case-> But is no option in CSS
          opacity: 1,
          ...(ownerState.color === "error" && {
            backgroundColor: theme.schemes[theme.palette.mode].errorContainer,
            color: theme.schemes[theme.palette.mode].error,
          }),
          ...(ownerState.color === "success" && {
            backgroundColor: "#59FF5E26",
            color: "#007A04",
          }),
          ...(ownerState.color === "warning" && {
            backgroundColor: "#FFE50026",
            color: "#0000007A",
          }),
        }),
      },
    },
  },
});
export default theme;