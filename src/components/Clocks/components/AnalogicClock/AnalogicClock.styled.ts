import { styled } from 'styled-components';

export const AnalogicClockStyled = styled.div`
  .clock {
    border: 1px solid ${({ theme }) => theme.palette.default.background1};
    color: ${({ theme }) => theme.palette.primary.main};
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }

  .clock::after {
    background: #aaa;
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #fff;
  }

  .hour_hand {
    position: absolute;
    width: 6px;
    height: 35px;
    background: #222;
    top: 32%;
    left: 48%;
    transform-origin: bottom;
  }

  .min_hand {
    position: absolute;
    width: 4px;
    height: 48px;
    background: #444;
    top: 27%;
    left: 49%;
    transform-origin: bottom;
  }

  .sec_hand {
    position: absolute;
    width: 2px;
    height: 72px;
    background: ${({ theme }) => theme.palette.primary.main};
    top: 14.5%;
    left: 49%;
    transform-origin: bottom;
  }

  .clock span {
    position: absolute;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
  }

  .twelve {
    top: 10px;
    left: 46%;
  }

  .one {
    top: 10%;
    right: 26%;
  }

  .eleven {
    top: 10%;
    left: 26%;
  }

  .two {
    top: 25%;
    right: 10%;
  }

  .three {
    right: 10px;
    top: 46%;
  }

  .four {
    right: 10%;
    top: 67%;
  }

  .five {
    right: 26%;
    top: 82%;
  }

  .six {
    bottom: 10px;
    left: 48%;
  }

  .seven {
    left: 26%;
    top: 82%;
  }

  .eight {
    left: 10%;
    top: 67%;
  }

  .nine {
    left: 10px;
    top: 46%;
  }

  .ten {
    top: 25%;
    left: 10%;
  }

  .label {
    color: ${({ theme }) => theme.palette.default.main};
    font-weight: ${({ theme }) => theme.fontWeight.low};
    position: absolute;
    top: 65%;
    width: 100%;
  }
`;
