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
          Email: abdullahalshawa20@gmail.com
        </p>
        <p>
          Summary: A software engineer with a passion for building innovative solutions. I have experience in website development, cyber security, etc. Seeking opportunities in engineering, IT, etc. My passion is helping others and I feel that technology is a platform to give back to society! Please reach out to me. Thank you!
        </p>
        <p>
          Job: As Computer Science teacher I teach enjoy teaching object web safety, cybersecurity, oriented programming, etc. Languages I use for students may include Scratch, Python, Java, HTML, CSS, JavaScript, etc. I also may assist with teaching realted courses for Math and Science. 
        </p>
        <p>
          Industry Experience: As a Chrome OS Compatibility Testing Engineer at Samson Software Corporation, I have been afforded the unique opportunity to spearhead a project focused on bug triage. This project has allowed me to drastically expand my predictive analytics and behavior analysis capabilities. Through my experience, the project has produced substantial profitable results for Google. Chrome OS testing for end client Google LLC through HCL. Bug triage for PlayStore applications. IT imaging machines and running Python scripts for testing. Setting up and configuring desktop, mobile, ethernet devices, and server platforms. 
        </p>
        <p>
          Education: BSSE in computer software engineering technology with a minor in electrical engineering and renewable energy engineering from the Oregon Institute of Technology. 
        </p>
      </main>
    </ThemeContext.Provider>
  );
}
