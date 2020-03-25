/* eslint-disable constructor-super */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoggedOut, LoggedIn, LoginButton } from '@solid/react';
import { LoginWrapper, LoginPanel, PanelBody } from './login.style';
import { CenterContainer } from '../../components/Utils';
import { Redirect } from 'react-router-dom';

const LoginComponent = () => {
  const { t } = useTranslation();
  return (
    <LoginWrapper data-testid="login-wrapper">
      <LoggedOut>
        <CenterContainer>
          <h1 data-testid="title">{t('login.title')}</h1>
          <LoginPanel className="login-panel">
            <PanelBody className="panel-body">
              <LoginButton popup="https://solid.github.io/solid-auth-client/dist/popup.html">
                {t("login.formButtonText")}
              </LoginButton>
              <a
                href="https://solid.inrupt.com/get-a-solid-pod"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
                {t('login.solidHelp')}
              </a>
            </PanelBody>
          </LoginPanel>
        </CenterContainer>
      </LoggedOut>
      <LoggedIn>
        <Redirect to="/welcome"></Redirect>
      </LoggedIn>
    </LoginWrapper>
  );
};

export default LoginComponent;
