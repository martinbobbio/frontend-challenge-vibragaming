import { Link } from 'react-router-dom';
import { adapterTimezoneEntity } from '@/adapters';
import { logoMBDark, logoMBLight } from '@/assets';
import { FAIcon, Search } from '@/components';
import { HeaderStyled, Logo, ThemeButton } from './Header.styled';
import { Toolbar, Container } from '@mui/material';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from 'usehooks-ts';

interface HeaderProps {
  options: adapterTimezoneEntity[];
  onRefreshOptions: () => void;
}

/**
 * Functional component that render component header.
 *
 * @return React.ReactElement <Header/>
 */
const Header = ({ options, onRefreshOptions }: HeaderProps) => {
  const { toggle, isDarkMode } = useDarkMode();
  const logo = isDarkMode ? logoMBDark : logoMBLight;

  return (
    <HeaderStyled>
      <Container>
        <Toolbar>
          <Link to={'/'}>
            <Logo src={logo} />
          </Link>
          <Search options={options} onRefreshOptions={onRefreshOptions} />
          <ThemeButton onClick={() => toggle()}>
            <FAIcon icon={faLightbulb} />
          </ThemeButton>
        </Toolbar>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
