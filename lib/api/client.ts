import type { ApiResponse } from "./types";

const DEFAULT_API_URL = "https://api.wilsonkumalo.dev/api/v1";

export const getApiBaseUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  return envUrl && envUrl.length > 0 ? envUrl : DEFAULT_API_URL;
};

const buildUrl = (path: string) => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const base = getApiBaseUrl().replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
};

export const apiFetch = async <T>(
  path: string,
  init: RequestInit & { next?: { revalidate?: number } } = {}
): Promise<T> => {
  const { next, headers, ...rest } = init;
  const fetchInit: RequestInit & { next?: { revalidate?: number } } = {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
  };

  if (next && typeof window === "undefined") {
    fetchInit.next = next;
  }

  const response = await fetch(buildUrl(path), fetchInit);

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !payload?.success) {
    const message = payload?.message || "Request failed";
    throw new Error(message);
  }

  if (payload.data === undefined) {
    throw new Error("Unexpected response shape");
  }

  return payload.data;
};
