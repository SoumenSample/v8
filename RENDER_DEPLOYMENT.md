# Socket Server Deployment Guide (Render)

## Architecture
- **Frontend**: Hosted on Vercel
- **Socket Server**: Hosted on Render
- **Backend API**: (If separate) Hosted on Render/Railway

## Step 1: Deploy Socket Server to Render

1. Go to [render.com](https://render.com) and sign up/login
2. Click **New** → **Web Service**
3. Connect your GitHub repo (or push socket-server.js to a repo)
4. Configure the service:
   - **Name**: `cyberspace-socket-server` (or your preference)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node socket-server.js`
   - **Plan**: Free or Starter

5. **Add Environment Variables** (in Render dashboard):
   ```
   NODE_ENV = production
   SOCKET_CORS_ORIGIN = https://your-vercel-app.vercel.app
   ```

6. Click **Create Web Service** and wait for deployment
7. Copy the generated URL (e.g., `https://cyberspace-socket-server.onrender.com`)

## Step 2: Update Vercel Frontend

1. Go to [vercel.com](https://vercel.com) → Your Project Settings
2. Navigate to **Environment Variables**
3. Add:
   ```
   NEXT_PUBLIC_SOCKET_URL = https://your-socket-server-name.onrender.com
   ```
4. **Redeploy** your Vercel app

## Step 3: Test Connection

1. Visit your Vercel app
2. Open browser DevTools → **Network** tab → **WS** (WebSocket filter)
3. Should see connection to your Render socket server URL
4. Check console for any connection errors

## Environment Variables Reference

### Socket Server (Render) - socket-server.js
- `NODE_ENV`: `production`
- `PORT`: Auto-assigned by Render (default 5000)
- `SOCKET_CORS_ORIGIN`: Your Vercel frontend URL (comma-separated for multiple)

### Socket Server emit endpoint

- The socket server exposes a simple HTTP endpoint to allow serverless API routes
   to trigger emits when the socket server is deployed separately.
- Endpoint: `POST /emit`
- Payload: `{ userIds: string[], eventName: string, payload: any, secret?: string }`
- To secure this endpoint, set `SOCKET_EMIT_SECRET` on both the socket server and
   your backend. When `SOCKET_EMIT_SECRET` is set, requests must include the same
   `secret` value in the POST body.

### Frontend (Vercel) - Next.js
- `NEXT_PUBLIC_SOCKET_URL`: Your Render socket server URL

## Troubleshooting

**Connection refused errors?**
- Check `SOCKET_CORS_ORIGIN` in Render matches your Vercel URL
- Verify Render service is running (check deployment logs)

**CORS errors?**
- Add your Vercel URL to `SOCKET_CORS_ORIGIN` in Render environment variables
- Redeploy Render service

**WebSocket fails, polling works?**
- Render free tier may have WebSocket issues
- Use `transports: ["websocket", "polling"]` in client (already configured)

## Keeping Socket Server Awake

Render spins down free tier services after 15 min of inactivity. To prevent:
1. Upgrade to **Starter** plan (₹7/mo)
2. Or keep a simple health check endpoint

---

Ready? Let me know once you've deployed!
