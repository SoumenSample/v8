# Render Deployment - Visual Copy-Paste Guide

**Use this to copy exact values without making mistakes**

---

## 📝 Before You Start

Get these values ready:

### Your Vercel URL
```
Visit: https://vercel.com/dashboard
Find your CyberSpace Works project
Copy: Production Domain (looks like: https://cyberspace-works-xyz.vercel.app)
```

### Your MongoDB Connection String
```
Visit: https://mongodb.com/cloud/atlas
Cluster → Connect → Driver
Copy: Connection String (looks like: mongodb+srv://user:pass@cluster.mongodb.net/db)
```

### Generate Two Secrets
```
Open Terminal and run TWICE:
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

Secret 1: (copy first output)
Secret 2: (copy second output)
```

---

## 🔗 RENDER DEPLOYMENT FORM

### On Render Website:

**Step 1: Basic Configuration**

```
Name:                 cyberspace-socket-server
Environment:          Node
Build Command:        npm install
Start Command:        node socket-server.js
Plan:                 Free (then upgrade to Starter)
```

Click "Create Web Service" → Wait 2-3 minutes

---

### Step 2: Environment Variables (Copy-Paste Each One)

Go to: Service → **Environment** tab

#### Variable 1️⃣
```
Key:        NODE_ENV
Value:      production
```
Add it

#### Variable 2️⃣
```
Key:        SOCKET_CORS_ORIGIN
Value:      https://cyberspace-works-xyz.vercel.app
```
⚠️ **Replace `xyz` with your actual Vercel subdomain**
Add it

#### Variable 3️⃣
```
Key:        NEXTAUTH_SECRET
Value:      <PASTE_YOUR_SECRET_1_HERE>
```
Add it

#### Variable 4️⃣
```
Key:        SOCKET_EMIT_SECRET
Value:      <PASTE_YOUR_SECRET_2_HERE>
```
Add it

#### Variable 5️⃣ (Optional but recommended)
```
Key:        MONGODB_URI
Value:      mongodb+srv://user:pass@cluster.mongodb.net/dbname
```
⚠️ **Replace with your actual MongoDB connection string**
Add it

**After adding all, click "Save"**

---

## 📱 VERCEL UPDATE

### Go to: Vercel Dashboard

Your Project → Settings → Environment Variables

Add new:
```
Key:        NEXT_PUBLIC_SOCKET_URL
Value:      https://cyberspace-socket-server.onrender.com
```

**Note**: Replace `cyberspace-socket-server` with your actual Render service name if different.

Click Save → Redeploy (or it auto-redeploys)

---

## 🧪 TESTING

### Test 1: Check Render Logs

Go to: Render Dashboard → Service → Logs

You should see:
```
✅ "⚡ Socket server running on port 5000"
✅ "CORS Origins: https://your-vercel-app.vercel.app"
```

### Test 2: Check WebSocket Connection

1. Open your Vercel app
2. Press F12 (DevTools)
3. Network tab → Filter by "WS"
4. Send a test message in chat
5. Should see WebSocket message

### Test 3: Browser Console Check

DevTools → Console tab

Should see:
```
✅ "[socket] connected"
✅ "[socket] Joined successfully"
```

Should NOT see:
```
❌ connect_error
❌ CORS
❌ 403 Forbidden
```

---

## 🆘 TROUBLESHOOTING COPY-PASTE

### If WebSocket Connection Fails

**Error**: `Unable to connect`

**Fix**: In Render → Environment Variables

Make sure `SOCKET_CORS_ORIGIN` is:
```
✅ CORRECT:    https://cyberspace-works-abc123.vercel.app
❌ WRONG:      http://cyberspace-works-abc123.vercel.app (no HTTPS)
❌ WRONG:      cyberspace-works-abc123.vercel.app (missing https://)
❌ WRONG:      * (wildcard in production)
```

Then click Redeploy (blue button at top of service)

---

### If CORS Error

**Error**: `CORS policy: Access denied`

**Check**:
1. `SOCKET_CORS_ORIGIN` in Render is set correctly
2. `NEXT_PUBLIC_SOCKET_URL` in Vercel is set correctly
3. Both URLs use HTTPS
4. Click Redeploy on both services

---

### If Messages Not Sending

**Check**:
1. Render Logs for errors
2. Browser Console (F12) for errors
3. Try sending 11 messages → 11th should fail (rate limit)
4. Wait 1 minute and try again

---

### If Service Keeps Crashing

**Check**:
1. Render → Logs for error messages
2. If it says "restarted" frequently → Upgrade to Starter plan
3. If it says database error → Check `MONGODB_URI` is correct

---

## 📋 FINAL CHECKLIST

After deployment, verify:

- [ ] Render service is deployed (showing green status)
- [ ] All 5 environment variables are set on Render
- [ ] Vercel `NEXT_PUBLIC_SOCKET_URL` is set
- [ ] Vercel is redeployed
- [ ] Can open app without errors
- [ ] DevTools shows WebSocket connection
- [ ] Can send test message and see it instantly
- [ ] Render Logs show no errors

---

## 🎯 Your URLs

After successful deployment, save these:

```
Socket Server (Render):
https://cyberspace-socket-server.onrender.com

Frontend (Vercel):
https://cyberspace-works-abc123.vercel.app

Render Dashboard:
https://dashboard.render.com (manage service)

Vercel Dashboard:
https://vercel.com/dashboard (manage frontend)
```

---

## ⏭️ Next Steps

### Daily
- Test sending a message
- Check app loads without errors

### Weekly
- Check Render Logs for errors
- Monitor Render billing

### Monthly
- Generate new secrets (rotate them)
- Update dependencies

### To Update Code
```bash
git add .
git commit -m "Update socket"
git push origin main
# Render auto-deploys!
```

---

## 🚨 Emergency Redeploy

If something is broken:

**Option 1**: Render Dashboard
- Go to Service
- Click "Redeploy" button (top right)
- Wait 2-3 minutes

**Option 2**: Force Git Redeploy
```bash
git commit --allow-empty -m "Force redeploy"
git push origin main
# Render auto-redeploys
```

---

## ✅ Success Indicators

When everything works, you'll see:

✅ App loads without errors  
✅ DevTools shows WebSocket connection  
✅ Messages appear instantly  
✅ Notifications work in real-time  
✅ Render Logs show no errors  

---

**That's it! You're deployed to Render!** 🎉
