export const defaultTheme = {
    color: {
        mainLight: "#00ACC3",
        mainDefault: "#0096B7",
        mainDark: "#006C85",
        mainDarker: "#002E38",
        lighterGray: "#F1F1F1",
        lightGray: "#D7D7D7",
        gray: "#838383",
        background: "#ffffff"
    }    
}

export type ThemeColor = keyof typeof defaultTheme.color;