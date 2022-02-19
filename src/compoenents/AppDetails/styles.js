import styled from 'styled-components';

export const Container = styled.div`
    margin-top:100px;
    padding: 0 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media (max-width:700px) {
        flex-direction: column;
    }
`;

export const Illustration = styled.div`
flex: 1;

`;

export const Description = styled.div`
display: flex;
align-items: center;
justify-content:space-around;
flex-direction: column;
h2{
    padding: 20px 0;

}
flex: 1;
@media (max-width:700px) {
        flex-direction: column;
        margin-left: 40px;
        h2{
            padding: 20px;
            text-align: center

        }
    }
`;