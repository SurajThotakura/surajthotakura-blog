import { ArrowForward28Filled } from "@fluentui/react-icons";
import styled from "styled-components";
import TextInput from "../../components/textInput/textInput";
import { colors } from "../../constants";

const AccentText = styled.span`
  color: ${colors.accent};
`;

const ConnectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;
const ConnectIntro = styled.div`
  width: 26.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;
const IntroHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;
const IntroContent = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 300;
`;
const EmailLink = styled.a`
  font-weight: 700;
  color: ${colors.accent};
`;
const ConnectForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SendMessage = styled.div`
  color: ${colors.fontBlack};
  margin-bottom: 2.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  border-radius: 0.5rem;
  border: 2px solid ${colors.fontBlack};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 150ms;

  &:hover {
    cursor: pointer;
    background-color: ${colors.fontBlack};
    color: ${colors.background};
  }
`;

const Connect = () => {
  return (
    <ConnectWrapper>
      <ConnectIntro>
        <IntroHeading>
          Wanna send a <AccentText>Heyoo?</AccentText>
        </IntroHeading>
        <IntroContent>
          Please feel free to get in touch, and I will respond as soon as
          possible.
          <br /> <br />
          If you prefer to contact me directly, Email to:{" "}
          <EmailLink>connect@surajthotakura.com</EmailLink>
        </IntroContent>
      </ConnectIntro>
      <ConnectForm>
        <TextInput lable={"Name"} />
        <TextInput lable={"Email"} />
        <TextInput lable={"Message"} height={"10rem"} />
        <SendMessage>
          Send Message
          <ArrowForward28Filled />
        </SendMessage>
      </ConnectForm>
    </ConnectWrapper>
  );
};

export default Connect;
