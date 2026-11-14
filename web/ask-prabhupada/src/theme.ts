import { createTheme, type MantineColorsTuple } from '@mantine/core';

// Saffron — the primary sacred color in Vaishnavism
const saffron: MantineColorsTuple = [
  '#fff8ed',
  '#ffedd0',
  '#ffd89e',
  '#ffc268',
  '#ffad3a',
  '#ff9f1c', // ← base saffron [5]
  '#f08c00',
  '#c97200',
  '#a05800',
  '#7a4000',
];

// Deep violet — mystical, transcendental
const violet: MantineColorsTuple = [
  '#f5f0ff',
  '#e8deff',
  '#d0bfff',
  '#b39dfa',
  '#9775f5',
  '#7c56f0',
  '#6741e8', // ← base [6]
  '#5533cc',
  '#4428aa',
  '#321e88',
];

// Tulsi green — sacred to Vaishnavas
const tulsi: MantineColorsTuple = [
  '#edfaf2',
  '#d0f2df',
  '#a0e3bf',
  '#6dd49e',
  '#44c780',
  '#2db96d', // ← base [5]
  '#1f9e57',
  '#157d43',
  '#0d5c31',
  '#063b1e',
];

export const theme = createTheme({
  primaryColor: 'saffron',

  colors: {
    saffron,
    violet,
    tulsi,
  },

  // Typography — classical serif for headings, clean sans-serif for chat body
  fontFamily: 'Lato, sans-serif',
  fontFamilyMonospace: 'monospace',
  headings: {
    fontFamily: 'Cormorant Garamond, Georgia, serif',
    fontWeight: '600',
  },

  // Sizing
  defaultRadius: 'md',
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },

  // Component-level overrides
  components: {
    // AppShell header + navbar background colors
    AppShell: {
      styles: {
        header: {
          // Deep saffron in light mode, dark maroon-saffron in dark mode
          backgroundColor: 'light-dark(var(--mantine-color-saffron-7), var(--mantine-color-saffron-9))',
          color: '#ffffff',
          borderBottom: 'none',
        },
        navbar: {
          // Warm saffron cream in light mode, deep dark in dark mode
          backgroundColor: 'light-dark(var(--mantine-color-saffron-0), #1a1008)',
          borderRight: '1px solid light-dark(var(--mantine-color-saffron-2), var(--mantine-color-saffron-9))',
          // Ensure text is readable against the custom dark background
          color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-gray-0))',
        },
      },
    },

    // Buttons use saffron; filled variant is bold and warm
    Button: {
      defaultProps: {
        variant: 'filled',
      },
    },

    // Cards get a subtle warm shadow
    Card: {
      defaultProps: {
        shadow: 'sm',
        radius: 'md',
        withBorder: true,
      },
    },

    // Inputs — slightly rounded, matches spiritual softness
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    Textarea: {
      defaultProps: {
        radius: 'md',
      },
    },

    // Badges for topics/tags
    Badge: {
      defaultProps: {
        variant: 'light',
        radius: 'sm',
      },
    },

    // Avatars for user/AI chat bubbles
    Avatar: {
      defaultProps: {
        radius: 'xl',
        color: 'saffron',
      },
    },
  },
});
