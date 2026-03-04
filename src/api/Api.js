const baseURL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) || '';

async function http(options) {
  const { method = 'GET', url, headers = {}, body, ...rest } = options;
  const res = await fetch(`${baseURL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: body != null ? JSON.stringify(body) : undefined,
    ...rest
  });

  if (!res.ok) {
    const err = new Error(res.statusText || `HTTP ${res.status}`);
    err.status = res.status;
    err.response = res;
    throw err;
  }

  const text = await res.text();
  if (!text) return {};
  return JSON.parse(text);
}

const Api = { http };
export default Api;
