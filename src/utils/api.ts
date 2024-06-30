type Options = {
  cache: RequestCache;
};

export class Api {
  private static apiUrl = process.env.NEXT_PUBLIC_API_URL;
  static async get(endpoints: string, options?: Options) {
    const res = await fetch(`${this.apiUrl}/${endpoints}`, options);
    const data = await res.json();
    return data;
  }
}
