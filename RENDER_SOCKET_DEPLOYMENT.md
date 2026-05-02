# Deploy Socket Server to Render - Complete Guide

**Updated for 2026 | Socket.io 4.8.3**

---

## Prerequisites

- GitHub account with your code pushed
- Render account (render.com - free tier works)
- Vercel account (for frontend, already deployed)
- 5 minutes to deploy

---

## Step 1: Prepare Your Repository

Your code is already ready! Just verify:

```bash
# Check these files exist in your repo:
- socket-server.js         ✅ Main socket server
- lib/socket/server.js     ✅ Socket utilities
- lib/socket/validators.js ✅ Validation
- lib/socket/rate-limiter.js ✅ Rate limiting
- lib/socket/logger.js     ✅ Logging
- lib/socket/auth.js       ✅ Authentication
- .env.socket.example      ✅ Environment template
- package.json             ✅ Dependencies (socket.io 4.8.3)
```

Push to GitHub:
```bash
git add .
git commit -m "Add production socket server with security hardening"
git push origin main
```

---

## Step 2: Create Render Account & Web Service

### 2.1 Go to render.com
1. Click **Sign Up** (if not already)
2. Choose GitHub authentication
3. Authorize Cyberspace Works repository

### 2.2 Create New Web Service

1. Dashboard → **New** → **Web Service**
2. Connect your repository:
   - Select: `cyberspace works/v7` (or your repo)
   - Branch: `main`
   - Click **Connect**

---

## Step 3: Configure Render Service

### 3.1 Basic Settings

Fill in the form:

```
Name:                    cyberspace-socket-server
Environment:             Node
Build Command:           npm install
Start Command:           node socket-server.js
Plan:                    Free (or Starter for production)
```

### 3.2 Advanced Settings (Optional but recommended)

- **Auto-Deploy**: ON (redeploy on push)
- **Health Check Path**: Leave blank (socket server doesn't have HTTP health check)
- **Disk**: 1 GB

Click **Create Web Service** and wait 2-3 minutes for deployment.

---

## Step 4: Add Environment Variables

After service is created:

1. Go to service dashboard
2. Click **Environment**
3. Add these variables:

```
NODE_ENV                production
PORT                    5000
HOST                    0.0.0.0
SOCKET_CORS_ORIGIN      https://your-vercel-app.vercel.app
NEXTAUTH_SECRET         <generate-32-char-secret>
SOCKET_EMIT_SECRET      <generate-32-char-secret>
MONGODB_URI             <your-mongodb-connection-string>
```

### 4.1 Generate Secrets

Open a terminal and run:

```bash
# Generate 32-character secrets (run twice, once for each)
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Or use online generator: https://www.random.org/strings/

### 4.2 Get Your Vercel URL

Visit your Vercel project:
1. Go to vercel.com/dashboard
2. Find your CyberSpace Works project
3. Copy the **Production URL** (e.g., `https://cyberspace-works.vercel.app`)

Add to `SOCKET_CORS_ORIGIN`:
```
SOCKET_CORS_ORIGIN      https://cyberspace-works.vercel.app
```

### 4.3 MongoDB Connection

If using MongoDB Atlas:
1. Go to mongodb.com → Atlas
2. Cluster → Connect → Copy connection string
3. Replace `<password>` with your password
4. Paste as `MONGODB_URI`

---

## Step 5: Deploy & Monitor

### 5.1 Auto-Deploy

Once you click **Save**, Render will automatically:
1. Install dependencies (`npm install`)
2. Start the service (`node socket-server.js`)
3. Assign a public URL

### 5.2 Check Deployment Status

1. Go to **Logs** tab
2. Wait for message: `⚡ Socket server running on port 5000`
3. Look for: `CORS Origins: https://your-vercel-app.vercel.app`

### 5.3 Your Socket Server URL

Click on your service → Copy the **URL** from the top:

```
https://cyberspace-socket-server.onrender.com
```

---

## Step 6: Update Your Frontend

### 6.1 Update Vercel Environment Variable

1. Go to vercel.com/dashboard
2. Click your project
3. Settings → Environment Variables
4. Update/Add:

```
NEXT_PUBLIC_SOCKET_URL     https://cyberspace-socket-server.onrender.com
```

5. Redeploy Vercel (it auto-redeploys on env change, or manually trigger)

### 6.2 Verify in Code

Check these files have the right socket URL:

**`app/dashboard/messages/chat/component/chat.tsx`:**
```typescript
const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || (typeof window !== "undefined" ? window.location.origin : "")
```

**`components/NotificationCenter.jsx`:**
```javascript
const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || (typeof window !== "undefined" ? window.location.origin : "")
```

---

## Step 7: Test Production Setup

### 7.1 Test WebSocket Connection

1. Open your production app: `https://your-vercel-app.vercel.app`
2. Open DevTools (F12)
3. Go to **Network** tab
4. Filter by **WS** (WebSocket)
5. Send a test message in chat
6. Should see WebSocket connection to:
   ```
   https://cyberspace-socket-server.onrender.com/socket.io/?...
   ```

### 7.2 Test Message Delivery

1. Open app in two browsers / two accounts
2. Send message from Account A → Account B
3. Should arrive instantly in real-time
4. Check Notification Center

### 7.3 Test Rate Limiting

1. Send 11 messages rapidly
2. 11th message should fail with rate limit error
3. Wait 1 minute and try again

### 7.4 Check Server Logs

1. Go to Render dashboard
2. Click service → **Logs**
3. Look for:
   ```
   [AUTH] info: auth_check_passed
   [MESSAGE] info: message_sent
   [CONNECTION] info: connected
   ```

---

## Step 8: Configure for Production

### 8.1 Upgrade Plan (Optional but Recommended)

**Free tier** (`$0/month`):
- Shuts down after 15 min of inactivity
- Not suitable for production

**Starter tier** (`$7/month`):
- Always running
- 3 shared CPU cores
- 512 MB RAM
- Good for ~100 concurrent users

To upgrade:
1. Render dashboard → Service
2. Settings → Plan
3. Click **Change Plan** → Starter

### 8.2 Enable Auto-Deploy

1. Service Settings → Auto-Deploy
2. Make sure it's **ON**
3. Now every `git push` auto-deploys

---

## Troubleshooting

### Issue: WebSocket Connection Fails

**Error**: `Failed to establish a new connection`

**Solutions**:
1. Check `SOCKET_CORS_ORIGIN` matches your Vercel URL exactly
2. Verify HTTPS/WSS (not HTTP/WS in production)
3. Check Render service is running (view Logs)
4. Clear browser cache (Ctrl+Shift+Delete)

### Issue: CORS Error

**Error**: `Access to XMLHttpRequest blocked by CORS policy`

**Solutions**:
1. Go to Render → Environment Variables
2. Verify `SOCKET_CORS_ORIGIN` is set correctly
3. Redeploy service (click **Redeploy** button)
4. Wait 1-2 minutes for redeploy to complete

### Issue: Slow Connection/High Latency

**Solutions**:
1. Upgrade to Starter plan (free tier is slow)
2. Check your internet connection
3. Use browser DevTools → Network to see latency
4. Consider multi-region deployment (advanced)

### Issue: Service Crashes or Restarts

**Check Logs for**:
1. Out of memory → Upgrade plan
2. Connection errors → Check `MONGODB_URI`
3. Authentication errors → Check `NEXTAUTH_SECRET`
4. Port already in use → Should not happen on Render

---

## Monitoring & Maintenance

### Daily Checks

```bash
# Visit your app daily
1. Open https://your-vercel-app.vercel.app
2. Test sending messages
3. Check Render Logs for errors
```

### Weekly Checks

```bash
1. Load test: Simulate 10+ concurrent users
2. Monitor error rate in logs
3. Check rate limiter stats
4. Verify CORS origins still correct
```

### Monthly Tasks

```bash
1. Rotate SOCKET_EMIT_SECRET (generate new one)
2. Review and update rate limiting if needed
3. Update dependencies: npm audit fix
4. Check for socket.io updates
5. Monitor Render usage/costs
```

---

## Important Security Notes

### 🔒 Secrets Management

1. **NEVER** commit secrets to GitHub
2. **ALWAYS** set via Render Environment Variables
3. **ROTATE** secrets monthly
4. **BACKUP** your NEXTAUTH_SECRET (you'll need it for Vercel too)

### 🔐 CORS Configuration

- ✅ DO: Set specific domain `https://yourdomain.com`
- ❌ DON'T: Use wildcard `*` in production
- ✅ DO: Include both `yourdomain.com` and `www.yourdomain.com` if needed

```
SOCKET_CORS_ORIGIN      https://cyberspace-works.vercel.app,https://www.cyberspace-works.vercel.app
```

### 📡 HTTPS/WSS Only

- ✅ Production: Use `https://` and `wss://`
- ❌ Never: Use `http://` or `ws://` in production
- Render automatically uses HTTPS
- Socket.io auto-upgrades to WSS

---

## Performance Expectations

### With Free Tier
- **Concurrent Users**: 5-10
- **Messages/Second**: Limited
- **Availability**: Restarts after 15 min inactivity
- **Latency**: 200-500ms

### With Starter Tier
- **Concurrent Users**: 50-100
- **Messages/Second**: ~100
- **Availability**: 99.9% uptime
- **Latency**: 50-100ms
- **Cost**: $7/month

---

## Scale to Production (100+ Users)

For larger scale, consider:

1. **Multiple Render Services**
   - Deploy multiple socket instances
   - Use load balancer
   - Share state with Redis

2. **Redis Adapter**
   ```bash
   npm install @socket.io/redis-adapter
   ```
   - Share user state across instances
   - Better message delivery reliability

3. **Database for History**
   - Store messages in MongoDB (already doing this ✅)
   - Retrieve history on user reconnect

---

## Checklist: Before Going Live

- [ ] Repository pushed to GitHub
- [ ] `socket-server.js` exists in root
- [ ] Render service created
- [ ] All environment variables set
- [ ] `SOCKET_CORS_ORIGIN` = your Vercel URL
- [ ] Vercel `NEXT_PUBLIC_SOCKET_URL` = your Render URL
- [ ] Tested WebSocket connection locally
- [ ] Tested message delivery in production
- [ ] Checked Render logs for errors
- [ ] Plan upgraded to Starter (if production)
- [ ] Auto-deploy enabled
- [ ] Backups of secrets made

---

## Support & Resources

### Render Documentation
- Render Guides: https://render.com/docs
- Deploy Guide: https://render.com/docs/deploy-node

### Socket.io Documentation
- Socket.io Docs: https://socket.io/docs/
- Production Best Practices: https://socket.io/docs/v4/production/

### Your Documentation
- Production Setup: `SOCKET_PRODUCTION_SETUP.md`
- Quick Start: `SOCKET_QUICK_START.md`
- Checklist: `SOCKET_PRODUCTION_CHECKLIST.md`

---

## Quick Reference

### Your URLs (After Deployment)

```
Socket Server (Render):  https://cyberspace-socket-server.onrender.com
Frontend (Vercel):       https://cyberspace-works.vercel.app
MongoDB URI:             mongodb+srv://...
```

### Environment Variables (Set on Render)

```
NODE_ENV                 production
SOCKET_CORS_ORIGIN       https://cyberspace-works.vercel.app
NEXTAUTH_SECRET          <your-secret>
SOCKET_EMIT_SECRET       <your-secret>
MONGODB_URI              <your-mongodb-url>
```

### Test Commands

```bash
# Check socket server is running
curl https://cyberspace-socket-server.onrender.com/

# Check WebSocket endpoint
curl -i -N -H "Connection: Upgrade" https://cyberspace-socket-server.onrender.com/socket.io/
```

---

## Need Help?

If you encounter issues:

1. Check Render Logs (Service → Logs tab)
2. Check browser Console (F12)
3. Check DevTools Network (Filter by WS)
4. Verify all environment variables are set
5. Verify CORS origin matches exactly
6. Clear cache and refresh
7. Try incognito mode

---

**Generated**: May 1, 2026  
**Status**: ✅ Ready for Production  
**Socket Version**: 4.8.3  
**Estimated Setup Time**: 10 minutes
