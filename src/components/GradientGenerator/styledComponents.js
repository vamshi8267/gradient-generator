// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const DirectionsDescription = styled.p`
  color: #ededed;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.5;
`

export const GradientDirectionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorsPickersDescription = styled.p`
  color: #ededed;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.5;
`

export const ColorsPickersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const CustomInput = styled.input`
  background-color: transparent;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border; none;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  min-width: 25px;
  border-radius: 6px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 25px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-right: 0px;
  border: none;
  outline: none;
  cursor: pointer;
`
