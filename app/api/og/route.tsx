import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Travel Destinations';
    const subtitle = searchParams.get('subtitle') || 'Explore the world with GoFlyzo';
    const imageUrl = searchParams.get('image') || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            position: 'relative',
          }}
        >
          {/* Background Image with Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.4,
            }}
          />

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '20px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontWeight: 700,
                color: '#000',
                marginBottom: 20,
                textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 30,
                color: '#666',
                textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)',
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* Logo */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              fontSize: 24,
              fontWeight: 600,
              color: '#000',
              textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)',
            }}
          >
            GoFlyzo
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
