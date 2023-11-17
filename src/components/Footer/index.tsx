import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";

import i18n from "i18next";
import { FooterSection, NavLink, Extra } from "./styles";

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <FooterSection></FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/" style={{ margin: "auto" }}>
              <img src="./img/icons/logo.png" alt="DSC" />
            </NavLink>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
