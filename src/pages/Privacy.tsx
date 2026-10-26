import { useEffect } from 'react';
import { CLINIC } from '../constants';
import { openCookieSettings } from '../components/CookieConsent';

// Texto-base da política de privacidade. Revisar com a clínica antes de publicar
// (razão social, CNPJ e e-mail de contato do encarregado).
export default function Privacy() {
  useEffect(() => {
    document.title = 'Política de Privacidade | Beauty Glow';
    return () => {
      document.title = 'Beauty Glow | Clínica de Estética nos Jardins, São Paulo';
    };
  }, []);

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold-deep mb-4 block font-medium">LGPD</span>
        <h1 className="font-serif text-3xl md:text-5xl mb-10">Política de Privacidade</h1>

        <div className="space-y-8 text-brand-black/80 leading-relaxed font-light [&_h2]:font-serif [&_h2]:text-xl [&_h2]:text-brand-black [&_h2]:mb-3 [&_h2]:font-normal">
          <div>
            <h2>Quem somos</h2>
            <p>
              Este site pertence à Beauty Glow, clínica de estética localizada em {CLINIC.address}. Esta política explica
              como tratamos os dados de quem visita o site, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </p>
          </div>

          <div>
            <h2>Quais dados coletamos</h2>
            <p>
              O site não possui formulários e não pede seus dados pessoais. Quando você clica em um botão de WhatsApp,
              a conversa acontece diretamente no WhatsApp, e as informações que você enviar ali são usadas apenas para o
              seu atendimento e agendamento.
            </p>
          </div>

          <div>
            <h2>Cookies e ferramentas de medição</h2>
            <p>
              Com a sua autorização, usamos cookies do Google (Google Tag Manager e Google Analytics) e da Meta (Pixel do
              Facebook e Instagram) para entender como o site é usado e medir o resultado das nossas campanhas, como
              visitas e cliques nos botões de contato. Sem a sua autorização, essas ferramentas não armazenam cookies de
              análise ou publicidade.
            </p>
            <button type="button" onClick={openCookieSettings} className="mt-3 underline underline-offset-2 text-brand-black hover:text-brand-gold-deep">
              Alterar minhas preferências de cookies
            </button>
          </div>

          <div>
            <h2>Seus direitos</h2>
            <p>
              Você pode solicitar a confirmação, o acesso, a correção ou a exclusão dos seus dados, além de revogar o seu
              consentimento a qualquer momento. Para isso, fale com a gente pelo WhatsApp ou pelo Instagram da clínica.
            </p>
          </div>

          <div>
            <h2>Atualizações</h2>
            <p>Esta política pode ser atualizada. A versão vigente estará sempre disponível nesta página.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
