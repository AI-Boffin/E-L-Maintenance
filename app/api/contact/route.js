export async function POST(request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Honeypot check
    if (body.honeypot) {
      return Response.json(
        { error: 'Spam detected' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(body.email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // UK Postcode validation (basic)
    if (body.postcode) {
      const postcodeRegex = /^[A-Z]{1,2}[0-9R][0-9A-Z]? [0-9][A-Z]{2}$/i;
      if (!postcodeRegex.test(body.postcode)) {
        return Response.json(
          { error: 'Invalid UK postcode' },
          { status: 400 }
        );
      }
    }

    // In a real implementation, you would:
    // 1. Send email via SMTP/Resend/SendGrid etc.
    // 2. Store in database
    // 3. Add to CRM system
    
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      postcode: body.postcode,
      service: body.service,
      message: body.message,
      type: body.type,
      timestamp: body.timestamp
    });

    // Simulate email sending
    const emailContent = `
      New ${body.type === 'quote' ? 'Quote Request' : 'Contact Form'} Submission
      
      Name: ${body.name}
      Email: ${body.email}
      Phone: ${body.phone || 'Not provided'}
      Postcode: ${body.postcode || 'Not provided'}
      Service: ${body.service || 'Not specified'}
      
      Message:
      ${body.message}
      
      Timestamp: ${body.timestamp}
    `;

    // Here you would send the actual email using your preferred service
    // For now, we'll just log it and return success
    
    // Add rate limiting in production
    // Add CSRF protection
    // Store in database
    // Send confirmation email to customer
    // Send notification email to company
    
    return Response.json(
      { 
        success: true, 
        message: 'Thank you for your enquiry. We will get back to you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}