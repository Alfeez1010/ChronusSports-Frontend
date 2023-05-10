import styled from "styled-components";


export const Container = styled.div`
    background: linear-gradient(80.65deg, #548CFB 5.25%, rgba(117, 151, 219, 0.6) 100.74%);
    @media(min-width: 1000px) {
        text-align: center;
        box-shadow: 2px 4px 18px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        width: 74%;
        position: relative;
        left: 386px;

        h2 {
            font-weight: 600;
            font-size: 31px;
            color: #fff;
        }
        p {
            font-weight: 600;
            font-size: 12px;
            color: #00E4FF;
        }
    }   
`;

export const Perfil = styled.div`
    @media(min-width: 1000px) {
        background: #164092;
        border: 1px solid #164092;
        border-radius: 60px;
        position: relative;
        bottom: 35px;
        left: 555px;
        width: 123px;
        height: 121px;
        padding: 32px;

        svg {
            width: 46px;
            color: #fff;
            height: 58px;
            display: initial;
        }
    }
`
export const SessionCount = styled.div`
@media(min-width: 1000px) {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 20px;
    top: 35px;
}
`
export const SessionMyTeam = styled.div`
@media(min-width: 1000px) {
    position: relative;
    display: grid;
    justify-content: end;
    bottom: 70px;
    right: 70px;
}
`
export const Title = styled.p`
@media(min-width: 1000px) {
    font-weight: 400;
    font-size: 16px;
    color: #EEEEEE;
}
`
export const MoneyGreen = styled.p`
@media(min-width: 1000px) {
    font-weight: 600;
    font-size: 31px;
    color: #4ADF3A;
}
`

export const MoneyRed = styled.p`
@media(min-width: 1000px) {
    font-weight: 600;
    font-size: 31px;
    color: #CF2D2D;
}
`
