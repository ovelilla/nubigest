const BASE_PATH = "../../app/[locale]/";

const MESSAGE_PATHS = [
  `${BASE_PATH}(auth)/(pages)/signin/messages/`,
  `${BASE_PATH}(auth)/(pages)/signup/messages/`,
  `${BASE_PATH}(auth)/(pages)/forgot-password/messages/`,
  `${BASE_PATH}(auth)/(pages)/reset-password/messages/`,
  `${BASE_PATH}(auth)/(pages)/verify-email/messages/`,
  `${BASE_PATH}(auth)/(pages)/signout/messages/`,
  `${BASE_PATH}(auth)/(pages)/auth-error/messages/`,
];

const getMessages = async (locale: string): Promise<Record<string, string>> => {
  const messages = await Promise.all(
    MESSAGE_PATHS.map((path) =>
      import(`${path}${locale}.json`).then((module) => module.default),
    ),
  );
  return Object.assign({}, ...messages);
};

export { getMessages };
