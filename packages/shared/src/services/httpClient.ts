import superagent, {Response, SuperAgentRequest} from 'superagent';

export interface HttpClientConfig {
  baseUrl?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface HttpResponse<T = unknown> {
  data: T;
  status: number;
  headers: Record<string, string>;
  ok: boolean;
}

/**
 * HTTP client wrapper using superagent
 * @see https://github.com/forwardemail/superagent
 */
export class HttpClient {
  private baseUrl: string;
  private timeout: number;
  private defaultHeaders: Record<string, string>;

  constructor(config: HttpClientConfig = {}) {
    this.baseUrl = config.baseUrl || '';
    this.timeout = config.timeout || 30000;
    this.defaultHeaders = config.headers || {};
  }

  private buildUrl(path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    return `${this.baseUrl}${path}`;
  }

  private applyDefaults(request: SuperAgentRequest): SuperAgentRequest {
    return request.timeout(this.timeout).set(this.defaultHeaders);
  }

  private formatResponse<T>(response: Response): HttpResponse<T> {
    return {
      data: response.body as T,
      status: response.status,
      headers: response.headers as Record<string, string>,
      ok: response.ok,
    };
  }

  async get<T = unknown>(
    path: string,
    query?: Record<string, unknown>,
  ): Promise<HttpResponse<T>> {
    const request = this.applyDefaults(superagent.get(this.buildUrl(path)));
    if (query) {
      request.query(query);
    }
    const response = await request;
    return this.formatResponse<T>(response);
  }

  async post<T = unknown>(
    path: string,
    body?: unknown,
  ): Promise<HttpResponse<T>> {
    const request = this.applyDefaults(superagent.post(this.buildUrl(path)));
    if (body) {
      request.send(body);
    }
    const response = await request;
    return this.formatResponse<T>(response);
  }

  async put<T = unknown>(
    path: string,
    body?: unknown,
  ): Promise<HttpResponse<T>> {
    const request = this.applyDefaults(superagent.put(this.buildUrl(path)));
    if (body) {
      request.send(body);
    }
    const response = await request;
    return this.formatResponse<T>(response);
  }

  async patch<T = unknown>(
    path: string,
    body?: unknown,
  ): Promise<HttpResponse<T>> {
    const request = this.applyDefaults(superagent.patch(this.buildUrl(path)));
    if (body) {
      request.send(body);
    }
    const response = await request;
    return this.formatResponse<T>(response);
  }

  async delete<T = unknown>(path: string): Promise<HttpResponse<T>> {
    const request = this.applyDefaults(superagent.delete(this.buildUrl(path)));
    const response = await request;
    return this.formatResponse<T>(response);
  }
}

/**
 * Create a pre-configured HTTP client instance
 */
export function createHttpClient(config?: HttpClientConfig): HttpClient {
  return new HttpClient(config);
}

// Re-export superagent for advanced usage
export {superagent};
export type {SuperAgentRequest, Response as SuperAgentResponse};
