export default async (req, context) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const data = await req.json();
    const { email } = data;
    
    // Validate email
    if (!email) {
      return new Response(JSON.stringify({ 
        error: 'Email is required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        error: 'Invalid email format' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Here you would normally:
    // 1. Add the email to your newsletter service (Mailchimp, ConvertKit, etc.)
    // 2. Send a welcome email
    // 3. Store in a database
    
    console.log('Newsletter subscription:', {
      email,
      timestamp: new Date().toISOString(),
      source: req.headers.get('referer') || 'direct'
    });
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Successfully subscribed to newsletter!' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Failed to subscribe. Please try again.' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};