export const environment = {
  API_SERVER_URL: 'http://localhost:8000',
  auth0: {
    domain: 'qabot.uk.auth0.com',
    clientId: 'ntCEz6jqRoVbequa3a2Qgk57xF2w8LMt',
    authorizationParams: {
      scope: 'openid profile email',
      redirect_uri: 'http://localhost:4200',
      audience: 'https://qabot.uk.auth0.com/api/v2/',
    },
  },
};
