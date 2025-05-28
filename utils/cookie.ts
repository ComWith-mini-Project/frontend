import { cookies } from 'next/headers';

type CookieOptions = {
  expires?: Date;
  maxAge?: number;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: 'lax' | 'strict' | 'none';
};

export const getCookie = async (key: string): Promise<string> => {
  const cookieStore = await cookies();
  const value = cookieStore.get(key)?.value;

  if (!value) {
    throw new Error(`Cookie with key "${key}" not found or has no value`);
  }

  return value;
};

export const setCookie = async (key: string, value: string, options: CookieOptions = {}) => {
  const cookieStore = await cookies();
  cookieStore.set(key, value, options);
};

export const deleteCookie = async (key: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(key);
};
