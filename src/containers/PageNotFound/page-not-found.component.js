/* eslint-disable constructor-super */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PageNotFoundWrapper, PageNotFoundContent } from './page-not-found.style';

/**
 * A React component page that is displayed when there's no valid route. Users can click the button
 * to get back to the home/welcome page.
 */
const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <PageNotFoundWrapper>
      <PageNotFoundContent>
        <img src="/img/404.svg" alt="404" />
        <h3>{t('notFound.title')}</h3>
        <p>{t('notFound.content')}</p>
        <div>
          <a href="/" id="linkToHomepage" className="ids-link">
            Hola
          </a>
        </div>
      </PageNotFoundContent>
    </PageNotFoundWrapper>
  );
};

export default PageNotFound;
