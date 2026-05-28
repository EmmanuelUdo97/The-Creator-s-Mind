export default async function handler(req, res) {

    if (req.method !== 'POST') {
      return res.status(405).json({
        error: 'Method not allowed'
      });
    }
  
    try {
  
      const { message } = req.body;
  
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
  
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
          },
  
          body: JSON.stringify({
  
            model: 'gpt-4o-mini',
  
            messages: [
  
              {
                role: 'system',
  
                content: `
  You are the official AI assistant for The Creator's Mind.
  
  Your responsibilities:
  
  - Guide users around the website
  - Explain The Creator's Mind philosophy
  - Help visitors understand the movement
  - Direct users to courses and Telegram community
  - Answer intelligently and professionally
  - Maintain a visionary, transformational tone
  
  Founder:
  Chrysolite Immanuel (The WHYBoss)
  
  Brand Philosophy:
  The Creator's Mind transforms consumers into creators of scalable value systems.
  
  Telegram Community:
  https://t.me/+vdNqk3Ozvf1hODI0
                `
              },
  
              {
                role: 'user',
                content: message
              }
  
            ],
  
            temperature: 0.7
  
          })
  
        }
      );
  
      const data = await response.json();
  
      console.log(data);

      const reply =
        data.choices?.[0]?.message?.content ||
        JSON.stringify(data);
  
      res.status(200).json({
        reply
      });
  
    } catch (error) {
  
      console.error(error);
  
      res.status(500).json({
        error: 'Something went wrong'
      });
  
    }
  
  }