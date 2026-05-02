# Render Deployment - Step by Step (5-Minute Version)

## ⏱️ Expected Time: 5-10 minutes

---

## STEP 1: Go to Render.com (1 min)

```
1. Open: https://render.com
2. Click "Sign Up" (or login if you have account)
3. Click "Continue with GitHub"
4. Authorize your repository
```

---

## STEP 2: Create Web Service (2 min)

```
1. Dashboard → Click "New" → "Web Service"
2. Select your repo (cyberspace works / v7)
3. Click "Connect"
```

Fill in form:
```
Name:                cyberspace-socket-server
Environment:         Node
Build Command:       npm install
Start Command:       node socket-server.js
Plan:                Free (or Starter for production)
```

Click **"Create Web Service"** → Wait for deployment (~2-3 min)

---

## STEP 3: Get Your Socket Server URL (30 sec)

After deployment completes:

```
✅ You'll see: https://cyberspace-socket-server.onrender.com

COPY THIS URL (you'll need it next)
```

Check Logs to verify it started:
```
Should see: "⚡ Socket server running on port 5000"
```

---

## STEP 4: Add Environment Variables (2 min)

In Render dashboard → Service → **Environment**

Add these one by one:

### Variable 1: NODE Environment
```
Key:    NODE_ENV
Value:  production
```
Click Add

### Variable 2: CORS Origin (IMPORTANT!)
```
Key:    SOCKET_CORS_ORIGIN
Value:  https://your-vercel-app.vercel.app
```
⚠️ **Replace `your-vercel-app` with your actual Vercel URL**

Click Add

### Variable 3: NextAuth Secret
```
Key:    NEXTAUTH_SECRET
Value:  <paste-32-char-secret>
```

**Generate secret:**
- Open terminal and run:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```
- Copy output (long base64 string)
- Paste into Render

Click Add

### Variable 4: Socket Emit Secret
```
Key:    SOCKET_EMIT_SECRET
Value:  <paste-another-32-char-secret>
```

**Generate another secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Click Add

### Variable 5: MongoDB (if using)
```
Key:    MONGODB_URI
Value:  mongodb+srv://user:password@cluster.mongodb.net/db
```

Click Add

**Then click "Save"** → Service will redeploy with new env vars

---

## STEP 5: Update Vercel (2 min)

1. Go to **vercel.com** → Your Project
2. Settings → **Environment Variables**
3. Add/Update:
```
NEXT_PUBLIC_SOCKET_URL = https://cyberspace-socket-server.onrender.com
```
4. Click Save
5. Redeploy (it auto-redeploys or click "Redeploy" button)

---

## STEP 6: Test It Works (2 min)

### Test 1: Browser DevTools

1. Open your app: `https://your-vercel-app.vercel.app`
2. Press **F12** (open DevTools)
3. Go to **Network** tab
4. Filter by **WS** (WebSocket)
5. Send a test message in chat
6. **Should see WebSocket connection appear** ✅

### Test 2: Send Message

1. Open app in 2 browsers / 2 accounts
2. Send message from Account A → Account B
3. **Should appear instantly** ✅

### Test 3: Check Render Logs

1. Go back to Render → Service → **Logs**
2. **Should see**:
   ```
   [MESSAGE] info: message_sent
   [CONNECTION] info: connected
   ```

---

## ✅ Done! You're Deployed

Your socket server is now live on Render:
- **URL**: `https://cyberspace-socket-server.onrender.com`
- **Status**: Running
- **Auto-Deploy**: Enabled (future `git push` auto-deploys)

---

## Common Issues & Quick Fixes

### ❌ WebSocket shows ERROR

**Fix 1**: Check CORS
- Go to Render → Environment Variables
- Verify `SOCKET_CORS_ORIGIN` = your Vercel URL exactly
- Redeploy

**Fix 2**: Clear cache
- Press Ctrl+Shift+Delete (clear cache)
- Refresh page
- Try again

### ❌ Messages not delivering

**Fix**: Check logs
- Render → Logs
- Look for errors
- If it shows `rate_limit`, wait 1 minute and try again

### ❌ Service keeps restarting

**Fix**: Upgrade plan
- Free tier restarts after 15 min inactivity
- Click "Change Plan" → Starter ($7/month)
- Much more stable for production

---

## That's It! 🎉

Your socket server is now hosted on Render and connected to your frontend.

**Next time you need to update**:
```bash
git add .
git commit -m "Update socket"
git push origin main
# Render auto-deploys!
```

---

## Emergency Help

If something breaks:

1. Check Render Logs (Render → Service → Logs)
2. Check Vercel Logs (Vercel → Project → Deployments)
3. Check browser DevTools (F12 → Console tab)
4. Verify all env vars are set
5. Try redeploying (Render → Redeploy button)

---

**You're done! Socket is now production-ready on Render.** ✅
