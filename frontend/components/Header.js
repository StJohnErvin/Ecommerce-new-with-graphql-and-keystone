import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";


const Logo = styled.h1`
background: red;
  color: white;
  display: inline-block;
  padding: 4px 5px;
  transform: skew(-7deg);
  margin: 0;
  margin-left: 5rem;
  margin-bottom:1rem;
  position : relative;
  z-inex:2;
  font-size: 4rem;
  border-radius: 5px;

`;

const HeaderStyles = styled.header`
.bar{
    border-bottom: 10px solid var(--black, black );
    display: grid;
    grid-template-columns : auto 1fr;
    justify-content: space-between;
    align-items: center;
}

.sub-bar{

    display: grid;
    grid-template-columns : auto 1fr;
    border-bottom: 1px solid var(--black, black );





}
`;



export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Link href="/">
          <a><Logo >Super-me</Logo></a>
        </Link>
      </div>
      <div className="sub-bar">
        <p>Search Box</p>
      </div>

      <Nav />
    </HeaderStyles>
  );
}
