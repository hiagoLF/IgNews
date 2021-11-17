import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import Stripe from "stripe";
import { stripe } from "../../services/stripe";

async function buffer(readalble: Readable) {
  const chunks = [];

  for await (const chunk of readalble) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

// Set cria uma array porém nada pode estar duplicado nele
const relevantEvents = new Set(["checkout.session.completed"]);

async function webhooks(req: NextApiRequest, res: NextApiResponse) {
  console.log("evento recebido");

  if (req.method === "POST") {
    const buf = await buffer(req);

    // Verificando autenticidade da requisição do stripe
    const secret = req.headers["stripe-signature"];
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        buf,
        secret,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    const { type } = event;

    if (relevantEvents.has(type)) {
      console.log("Evento recebido: ", event);

      try {
        switch (type) {
          case "checkout.session.completed":
            break;
          default:
            throw new Error("Unhandled event");
        }
      } catch {
        // Não enviar com código de erro pois o stripe vai ficar reenviando se isso acontecer
        return res.json("Webhook handler failed");
      }
    }

    return res.status(200).json({ ok: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}

export default webhooks;
