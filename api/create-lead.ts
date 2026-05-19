import type { VercelRequest, VercelResponse } from '@vercel/node';

type LeadPayload = {
  name?: string;
  telephone?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed',
    });
  }

  try {
    const body = req.body as LeadPayload;

    const name = body.name?.trim();
    const telephone = (body.telephone || body.phone || '').trim();
    const email = body.email?.trim();
    const service = body.service?.trim();

    if (!name || !telephone || !email) {
      return res.status(400).json({
        ok: false,
        error: 'Nome, telefone e email são obrigatórios.',
      });
    }

    const endpoint = process.env.EPROCORPO_GRAPHQL_URL;
    const token = process.env.EPROCORPO_API_TOKEN;
    const regionIdentifier = process.env.EPROCORPO_REGION_IDENTIFIER;
    const sourceIdentifier = process.env.EPROCORPO_SOURCE_IDENTIFIER;
    const storeIdentifier = process.env.EPROCORPO_STORE_IDENTIFIER;

    if (!endpoint || !token || !regionIdentifier || !sourceIdentifier || !storeIdentifier) {
      return res.status(500).json({
        ok: false,
        error: 'CRM não configurado.',
      });
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

      return res.status(502).json({
        ok: false,
        error: 'Erro ao enviar lead para o CRM.',
        details: crmData,
      });
    }

    return res.status(200).json({
      ok: true,
      leadIdentifier: crmData.data?.createLead?.identifier,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      ok: false,
      error: 'Erro interno ao processar lead.',
    });
  }
}
