import React from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {appActions} from "../../App/app.slice";
// import {AppRootStateType} from "../../App/store/store";
//
// export type ThemeType = 'light' | 'dark'
//
// type ThemeContextType = {
//     theme: ThemeType
// }
//
// type ThemeProviderType = {
//     children: React.ReactNode
// }
//
// export const ThemeContext = createContext<ThemeContextType>({theme: 'light'});
// export const ThemeProvider: React.FC<ThemeProviderType> = ({ children }) => {
//
//     const dispatch = useDispatch()
//     const theme = useSelector<AppRootStateType, string>(state => state.app.theme)
//
//     // const [theme, setTheme] = useState<ThemeType>('light');
//
//     const toggleTheme = () => {
//         dispatch(appActions.setTheme({theme: 'dark'}))
//
//         // setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//     };
//
//     // const contextValue: ThemeContextType = {
//     //     theme,
//     //     toggleTheme,
//     // };
//     return (
//         <ThemeContext.Provider value={theme}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };
//

