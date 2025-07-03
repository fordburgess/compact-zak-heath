import { NextResponse } from 'next/server';

export async function GET() {
  const siteId = process.env.UMAMI_SITE_ID;
  const key = process.env.UMAMI_API_KEY!;
  const endAt = Date.now();
  const startAt = endAt - 30 * 24 * 60 * 60 * 1000;;

  const types = ["url", "country", "browser", "os", "device", "referrer"]

  const metrics = await Promise.all(
    types.map(async (type: string) => {
    const res = await fetch(`http://api.umami.is/v1/websites/${siteId}/metrics?type=${type}&startAt=${startAt}&endAt=${endAt}`, {
      headers: {
        Accept: 'application/json',
        'x-umami-api-key': key,
      },
    })

    const data = await res.json();

    return { [type] : { ...data } }
  }));

  const summaryResults = Object.assign({}, ...metrics);

  const statsRes = await fetch(`http://api.umami.is/v1/websites/${siteId}/stats?startAt=${startAt}&endAt=${endAt}&unit=day&timezone=UTC`, {
    headers: {
      Accept: 'application/json',
      'x-umami-api-key': key,
    },
  })

  const statsData = await statsRes.json();

  summaryResults['stats'] = statsData;

  return NextResponse.json(summaryResults);
}
