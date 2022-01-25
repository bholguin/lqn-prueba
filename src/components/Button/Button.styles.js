import styled from 'styled-components';
import tw from 'twin.macro'
import Button from '@mui/material/Button';

//export const newButton = styled(Button) `${tw`color-[#FFFFFF]`}`
//export const newButton = tw(Button)`text-white`
export const NewButton = styled(Button)`
    background-color: black !important;
    ${tw`w-1/12 xl:w-3/12`};
    color: white !important;
`