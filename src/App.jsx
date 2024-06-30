import React from 'react';
import ThemeContext from './ThemeContext';
import theme from './theme';
import { useTheme } from './ThemeContext';

function ThemedComponent() {
  const theme = useTheme();

  return (
    <div style={{ 
      backgroundColor: theme.colors.background,
      color: theme.colors.text,
      fontFamily: theme.fonts.body,
      padding: theme.spacing.medium,
    }}>
      This component uses the theme colors and styles.
    </div>
  );
}

export default function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <main style={{ 
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.body,
        padding: theme.spacing.medium,
      }}>
        <h1>Software Engineer</h1>
        <p>
          LinkedIn: 
          <a 
            href="https://www.linkedin.com/in/abdullah-alshawa-691b23132"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.colors.primary, textDecoration: 'none' }}
          >
            Abdullah Alshawa
          </a>
        </p>
        <p>
          Skills: C++, C#, Python, JavaScript, React, SQL, Git, GitHub
        </p>
        <p>
          Email: abdullahalshawa20@gmail.com.
        </p>
        <p>
          Summary: A software engineer with a passion for building innovative solutions. I have experience in website development, cyber security, etc. Seeking opportunities in engineering, IT, etc. My passion is helping others and I feel that technology is a platform to give back to society! Please reach out to me. Thank you!
        </p>
      </main>
    </ThemeContext.Provider>
  );
}
