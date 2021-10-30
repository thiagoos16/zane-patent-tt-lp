import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
           "900": "#181B23",
           "800": "#1F2029",
           "700": "#353646",
           "600": "#4B4D63",
           "500": "#616480",
           "400": "#79709A",
           "300": "#9699B0",
           "200": "#B3B5C6",
           "100": "#D1D2DC",
           "50": "#EEEEF2"
        },
        green: {
            100: "#C8E4FF",
            200: "#9FD1FF",
            300: "#70B4F2",
            400: "#4B8DCA",
            500: "#2E6AA1",
            600: "#184A78",
            700: "#092E4F",
            800: "#184A78",
            900: "#092E4F"
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.900',
            }
        }
    }
});