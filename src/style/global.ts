import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`

    /* Reset CSS */
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

   

    :root {
        font-size: 16px;
        --roboto: 'Roboto', sans-serif;

        //colors

        --black-400: #1A202C;
        --black-999: #000000;
        --white-999: #FFFFFF;

        --grey-100: #E8E8E8;
        --grey-200: #D9D9D9;
        --grey-250: #e7e5df;
        --grey-300: #DADADA;
        --grey-600: #565B65;

        --error: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;

       
        button {
        cursor: pointer;
        }

        li {
        list-style: none;
        }

        a, abbr {
        text-decoration: none;
        }

    }


`;
