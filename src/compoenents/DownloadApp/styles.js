import styled from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
    margin-top: 100px;
    padding: 0 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const Illustration = styled.div`
    flex: 1;
    img {
        width: 100%;
    }
    @media (max-width: 700px) {
        img {
            width: 100%;
        }
    }
`;

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    h2 {
        padding: 20px 0;
        font-size: 36px;
        color: ${Colors.textDark};
        font-weight: bold;
    }
    p {
        color: ${Colors.textDark};
        text-align: center;
        font-size: 24px;
    }
    .footer {
        justify-content: space-around;
        align-items: center;
        display: flex;
        margin: 10px 0;
        width: 100%;
    }
    flex: 1;
    @media (max-width: 700px) {
        flex-direction: column;
        h2 {
            padding: 20px;
            text-align: center;
        }
        .footer {
            flex-direction: column;
        }
    }
`;
