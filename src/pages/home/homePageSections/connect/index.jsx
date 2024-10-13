import { ArrowForward28Filled } from "@fluentui/react-icons";
import styled from "styled-components";
import TextInput from "../../../../components/textInput";
import { colors, mobileBreakPoint } from "../../../../constants";
import TextArea from "../../../../components/textArea";

const AccentText = styled.span`
  color: ${colors.accent};
`;
const ConnectIntro = styled.div`
  width: 26.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 4rem 0 7rem 0;
  @media (max-width: ${mobileBreakPoint}) {
    width: calc(100vw - 2rem);
    font-size: 1.5rem;
    line-height: 1;
    padding-bottom: 3rem;
    text-align: center;
  }
`;
const IntroHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  @media (max-width: ${mobileBreakPoint}) {
    width: calc(100vw - 2rem);
    font-size: 1.5rem;
    line-height: 1;
  }
`;
const IntroContent = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 300;
  @media (max-width: ${mobileBreakPoint}) {
    width: calc(100vw - 2rem);
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;
const EmailLink = styled.a`
  font-weight: 700;
  color: ${colors.accent};
`;

const Connect = () => {
  return (
    <ConnectIntro>
      <IntroHeading>
        Wanna send a <AccentText>Heyoo?</AccentText>
      </IntroHeading>
      <IntroContent>
        Please feel free to get in touch, and I will respond as soon as
        possible.
        <br />
        <br />
        Email to:{" "}
        <EmailLink href="mailto:surajsatya007@gmail.com">
          surajsatya007@gmail.com
        </EmailLink>
      </IntroContent>
    </ConnectIntro>
  );
};

export default Connect;
