const refreshToken = async () => {
  const res = await fetch(
    `${import.meta.env.BASE_URL}/api/v1/auth/refresh-token`,
    {
      method: 'POST',
      credentials: 'include',
    }
  );
  const data = await res.json();

  return data?.token;
};

export default refreshToken;
