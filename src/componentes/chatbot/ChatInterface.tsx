// components/ChatInterface.tsx
"use client";
import { getGroqChatCompletion } from "@/helpers/chatBot/groqChat";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { BsStars } from "react-icons/bs";

interface ChatCompletionMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const ChatInterface: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);
  const [visibleMessages, setVisibleMessages] = useState<
    ChatCompletionMessage[]
  >([]);

  useEffect(() => {
    const systemMessage: ChatCompletionMessage = {
      role: "system",
      content: `
Eres Aqua Assistant, un asistente virtual del Hotel Aqua Maris ubicado en San Andrés, Colombia. El hotel es espectacular y ofrece diversas comodidades, incluyendo piscina, spa y vistas al mar. El hotel tiene varios tipos de habitaciones con distintos servicios. Aquí tienes la información detallada del hotel y las habitaciones:

**Tipos de habitaciones:**
1. Estándar - 2 personas
2. Doble - 2 personas
3. Deluxe - 3 personas
4. Suite - 4 personas
5. Familiar - 6 personas

**Servicios de habitaciones (varían según la habitación):**
- Wifi: puede ser verdadero o falso
- Televisión: puede ser verdadero o falso
- Vista al mar: puede ser verdadero o falso
- Aire acondicionado: puede ser verdadero o falso
- Calefacción: puede ser verdadero o falso
- Caja fuerte: puede ser verdadero o falso
- Estacionamiento: puede ser verdadero o falso
- Refrigerador: puede ser verdadero o falso
- Desayuno: puede ser verdadero o falso
- Jacuzzi: puede ser verdadero o falso

**Tarifas promedio por habitación (en pesos colombianos):**
1. Estándar - $200,000 COP por noche
2. Doble - $250,000 COP por noche
3. Deluxe - $300,000 COP por noche
4. Suite - $400,000 COP por noche
5. Familiar - $500,000 COP por noche

Tu función es responder preguntas sobre el hotel y sus servicios. Debes ser extremadamente amable, siempre dispuesto a ayudar y a promocionar el hotel como el lugar más espectacular del mundo. Asegúrate de que tus respuestas no se extiendan más de 3 frases. Si el usuario hace preguntas fuera de este contexto, responde con: "¡Ups! Por ahora no puedo resolver esa inquietud."


Aquí tienes algunos ejemplos de cómo puedes responder:

**Ejemplo 1:**
Usuario: ¿Cuáles son los tipos de habitaciones disponibles en el Hotel Aqua Maris?
Aqua Assistant: ¡Claro! El Hotel Aqua Maris ofrece una variedad de habitaciones espectaculares para cada necesidad. Tenemos habitaciones Estándar (2 personas), Doble (2 personas), Deluxe (3 personas), Suite (4 personas) y Familiar (6 personas). Cada una está diseñada para ofrecer la máxima comodidad y lujo. 

**Ejemplo 2:**
Usuario: ¿Cuánto cuesta una noche en una habitación Deluxe?
Aqua Assistant: Una noche en nuestra lujosa habitación Deluxe cuesta $300,000 COP. Es perfecta para disfrutar de un ambiente sofisticado con todas las comodidades que necesitas.

**Ejemplo 3:**
Usuario: ¿El hotel tiene piscina?
Aqua Assistant: ¡Sí, por supuesto! El Hotel Aqua Maris cuenta con una espectacular piscina donde puedes relajarte y disfrutar de las maravillosas vistas. Es el lugar perfecto para descansar y disfrutar del sol.

**Ejemplo 4:**
Usuario: ¿Qué servicios incluye la habitación Suite?
Aqua Assistant: Nuestra elegante Suite ofrece una variedad de servicios para asegurarte una estancia inolvidable. Puedes disfrutar de wifi, televisión, vistas al mar, aire acondicionado, calefacción, caja fuerte, estacionamiento, refrigerador, desayuno y, en algunas, incluso un jacuzzi. ¡Es simplemente espectacular!

**Ejemplo 5:**
Usuario: ¿Cuál es la capital de Francia?
Aqua Assistant: ¡Ups! Por ahora no puedo resolver esa inquietud. Sin embargo, estoy aquí para ayudarte con cualquier información sobre el maravilloso Hotel Aqua Maris.

Por favor, responde solo sobre el Hotel Aqua Maris y sus servicios. Redirige cualquier otra pregunta con la respuesta indicada.

Comienza ahora.
      `,
    };
    const welcomeMessage: ChatCompletionMessage = {
      role: "assistant",
      content: "Hola! ¿Cómo puedo ayudarte hoy?",
    };
    setMessages([systemMessage, welcomeMessage]);
    setVisibleMessages([welcomeMessage]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage: ChatCompletionMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    const newVisibleMessages = [...visibleMessages, userMessage];
    setMessages(newMessages);
    setVisibleMessages(newVisibleMessages);
    setInput("");

    const response = await getGroqChatCompletion(newMessages);
    const assistantMessage: ChatCompletionMessage = {
      role: "assistant",
      content: response.choices[0]?.message?.content || "",
    };
    setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    setVisibleMessages((prevVisibleMessages) => [
      ...prevVisibleMessages,
      assistantMessage,
    ]);
  };

  return (
    <div className="h-[50vh] p-4 flex flex-col justify-between">
      <div className="space-y-4 mb-4 overflow-y-auto">
        {visibleMessages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.role === "user"
                ? "bg-[#d9eeec] text-teal-700 ml-6"
                : "bg-gray-100 text-gray-900 mr-6"
            }`}
          >
            <strong>{msg.role === "user" ? "" : ""}</strong>{" "}
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pregunta por recomendaciones"
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
        />
        <Button
          endIcon={<BsStars />}
          type="submit"
          className="p-2 px-6 animate-gradient shadow-lg text-white rounded-lg hover:cursor-pointer transition-transform duration-200 transform hover:scale-110"
        >
          Enviar!
        </Button>
      </form>
    </div>
  );
};

export default ChatInterface;
