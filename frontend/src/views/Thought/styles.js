import styled from '@emotion/styled';
import { Button as button, Text } from '@people/styles';

export const Container = styled.div`
    position: relative;
    width: 90%;
    max-width: 800px;
    min-height: 100vh;
    margin: auto;
    text-align: center;
`

export const Thoughts = styled.div`
    width: 100%;
    padding-top: 20px;
    text-align: left;
    padding-bottom: 100px;
`

export const CommentCard = styled.div`
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
    border-radius: 10px;
    padding: 8px 16px;
    margin: 20px 0;
    box-sizing: border-box;
`

export const Button = styled(button)`
    width: 90%;
    position: fixed !Important;
    max-width: 800px;
    transform: translateX(-50%);
    bottom: 20px;
`

export const FormText = styled(Text)`
    padding-bottom: 8px;
`

export const PreviewImage = styled.img`
    width: 90%;
    max-width: 300px;
    margin: auto;
    display: block;
`