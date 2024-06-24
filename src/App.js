import React from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import * as icons from './icons';
import Header from './components/Header';
import IconWrapper from './components/IconWrapper';
import iconsJson from '../cache.json';
import 'react-toastify/dist/ReactToastify.css';
import { getComponentType } from './utils';
import { ConfigProvider } from './context';

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0 0 50px 0;
  list-style: none;
`;

const Title = styled.h2`
  padding: 0 24px;
`;

const Item = styled.li`
  padding-bottom: 8px;
  &:hover {
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    background: #05b976;
    transform: scale(1.1);
    transition: transform linear 0.3s;
    .light svg {
      background: transparent;
    }
  }
  .light svg {
    background: #000;
  }
`;

const iconCollection = {
  outlined: [],
  filled: [],
  colored: [],
};

const iconTypes = Object.keys(iconCollection);

Object.values(iconsJson).forEach((item) => {
  const type = getComponentType(item.componentName);
  if (iconTypes.includes(type)) {
    iconCollection[type].push(item.componentName);
  }
});

class List extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {Object.keys(iconCollection).map((key) => {
          return (
            <div key={key}>
              <Title>
                Icon-{key[0].toUpperCase()}
                {key.slice(1)}
              </Title>

              <Container>
                {iconCollection[key].map((iconKey, index) => {
                  const Icon = icons[iconKey];

                  return (
                    <Item key={index} onClick={() => handleCopyIcon(iconKey)}>
                      <IconWrapper>
                        <Icon
                          size={24}
                          className={
                            iconKey.endsWith('LightColored') ? 'light' : ''
                          }
                        />
                        <span>{iconKey}</span>
                      </IconWrapper>
                    </Item>
                  );
                })}
              </Container>
            </div>
          );
        })}
        <ToastContainer />
      </div>
    );
  }
}

// copy icon
function handleCopyIcon(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  toast.success(`${str} copied`, {
    position: 'top-center',
  });
}

export default List;
