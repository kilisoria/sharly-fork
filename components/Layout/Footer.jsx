import { Text, TextLink } from '../Text';
import { ThemeSwitcher } from '../ThemeSwitcher';
import styles from './Footer.module.css';
import Spacer from './Spacer';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        {/* <Text color="accents-7">
          Made with ❤️, 🔥, and a keyboard by{' '}
          <TextLink href="https://hoangvvo.com/" color="link">
            Hoang Vo
          </TextLink>
          .
        </Text> */}
        <Spacer size={1} axis="vertical" />
        <ThemeSwitcher />
      </Wrapper>
    </footer>
  );
};

export default Footer;
