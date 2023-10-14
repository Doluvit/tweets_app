import styled, { css } from 'styled-components';

export const CardBox = styled.li`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  padding: 28px 36px;
  background: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
  /* display: flex; */
  justify-content: center;
  border-radius: 20px;

  &::after {
    position: absolute;
    right: 0;
    top: 50%;

    content: '';
    height: 8px;
    width: 100%;
    flex-shrink: 0;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 2.5777px 0px #fbf8ff inset,
      0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
      0px -1.71846px 3.43693px 0px #ae7be3 inset;

    transform: translate(0, -50%);
  }
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const Hero = styled.img`
  width: 308px;
  height: 168px;

  margin-bottom: 88px;
`;

export const UserAvatarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const UserAvatarBorder = styled.div`
  height: 80px;
  width: 80px;
  border: 8px;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`;

export const UserAvatarContainer = styled.div`
  width: 62px;
  /* height: 62px; */

  position: absolute;
  background: #5736a3;
  border-radius: 50%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const UserAvatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const UserInfoWrapper = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
margin-bottom: 20px;

`;
export const UserInfoItem = styled.li`
  color: #ebd8ff;

  font-size: 20px;
  font-weight: 500;
  font-style: normal;

  text-transform: uppercase;

`;

export const FollowButton = styled.button`
  display: block;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  width: 196px;
  padding: 14px 28px;
  border-radius: 10.3px;

  border: none;

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;

  margin: 0 auto;
  margin-bottom: 8px;
  cursor: pointer;

  ${({ isFollowing }) =>
    isFollowing
      ? css`
          background: #5CD3A8;
        `
      : css`
          background: #ebd8ff;
        `}
`;
