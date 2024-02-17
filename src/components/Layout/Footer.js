import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 1rem 0;
  text-align: center;
`;

function Footer() {
  return (
    <Wrapper>
      <p>2024 &copy; Desh Deepak Kant. All right reserved.</p>
    </Wrapper>
  );
}

export default Footer;
