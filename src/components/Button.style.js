import tw from "tailwind-styled-components"

import styled from "styled-components"

//with tailwind
export const Button = tw.button `
    bg-red-500
    rounded-md
    w-20
    px-4
    py-1

`

//with normal css
export const Buttoner = styled.button `
    width: 4rem;
    background-color: ${(props) =>props.backgroundColor};
    border-radius: 10px;
    

`