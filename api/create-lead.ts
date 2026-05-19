type LeadPayload = {
  name?: string;
  telephone?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req: Request) {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return Response.json(
      { ok: false, error: 'Method not allowed' },
      { status: 405, headers: corsHeaders }
    );
  }

  try {
    const body = (await req.json()) as LeadPayload;

    const name = body.name?.trim();
    const telephone = (body.telephone || body.phone || '').trim();
    const email = body.email?.trim();
    const service = body.service?.trim();

    if (!name || !telephone || !email) {
      return Response.json(
        { ok: false, error: 'Nome, telefone e email são obrigatórios.' },
        { status: 400, headers: corsHeaders }
      );
    }

    const endpoint = process.env.EPROCORPO_GRAPHQL_URL;
    const token = process.env.EPROCORPO_API_TOKEN;
    const regionIdentifier = process.env.EPROCORPO_REGION_IDENTIFIER;
    const sourceIdentifier = process.env.EPROCORPO_SOURCE_IDENTIFIER;
    const storeIdentifier = process.env.EPROCORPO_STORE_IDENTIFIER;

    if (!endpoint || !token || !regionIdentifier || !sourceIdentifier || !storeIdentifier) {
      return Response.json(
        { ok: false, error: 'CRM não configurado.' },
        { status: 500, headers: corsHeaders }
      );
    }

    const query = `
      mutation CreateLead($data: CreateLeadInput!) {
        createLead(data: $data) {
          identifier
        }
      }
    `;

    const variables = {
      data: {
        name,
        telephone,
        email,
        message:
          body.message ||
          `Lead interessado em ${service || 'serviço da Beauty Glow'} pela Landing Page Beauty Glow`,
        regionIdentifier,
        sourceIdentifier,
        storeIdentifier,
      },
    };

    const crmResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables }),
    });

    const crmData = await crmResponse.json();

    if (!crmResponse.ok || crmData.errors) {
      console.error('Erro CRM:', crmData);

      return Response.json(
        { ok: false, error: 'Erro ao enviar lead para o CRM.', details: crmData },
        { status: 502, headers: corsHeaders }
      );
    }

    return Response.json(
      { ok: true, leadIdentifier: crmData.data?.createLead?.identifier },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      { ok: false, error: 'Erro interno ao processar lead.' },
      { status: 500, headers: corsHeaders }
    );
  }
}
