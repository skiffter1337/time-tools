import React, {createContext, useState} from 'react';




// type ThemeProviderType = {
//     theme: 'light' | 'dark'
//     toggleTheme: () => void
// }

// export const ThemeContext = createContext('light');
//
// export const ThemeProvider: React.FC<ThemeProviderType> = () => {
//
//
//     const [theme, setTheme] = useState<'light' | 'dark'>('light')
//     const toggleTheme = () => setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };
//
