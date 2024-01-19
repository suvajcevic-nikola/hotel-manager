const API_URL = "https://hotelmanager.local/api/v1.0";

export const query = {
  get: async ({
    route,
    headers,
    cache,
  }: {
    route: string;
    headers?: HeadersInit | undefined;
    cache?: RequestCache | undefined;
  }) => {
    return fetch(`${API_URL}/${route}`, {
      method: "GET",
      headers: headers && headers,
      cache: cache && cache,
    })
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  },
  post: async ({
    route,
    body,
    headers,
    cache,
  }: {
    route: string;
    body: object | number[] | undefined;
    headers?: HeadersInit | undefined;
    cache?: RequestCache | undefined;
  }) => {
    return fetch(`${API_URL}/${route}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
      cache: cache && cache,
      body: body && JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  },
  put: async ({
    route,
    body,
    headers,
    cache,
  }: {
    route: string;
    body: object | number[] | undefined;
    headers?: HeadersInit | undefined;
    cache?: RequestCache | undefined;
  }) => {
    return fetch(`${API_URL}/${route}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
      cache: cache && cache,
      body: body && JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  },
  delete: async ({
    route,
    headers,
    cache,
  }: {
    route: string;
    headers?: HeadersInit | undefined;
    cache?: RequestCache | undefined;
  }) => {
    return fetch(`${API_URL}/${route}`, {
      method: "DELETE",
      headers: headers && headers,
      cache: cache && cache,
    })
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  },
};
